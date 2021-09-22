/* eslint-disable space-before-function-paren */
/* eslint-disable indent */

export default function Parser() {
    this.pos = 0;
    this.token = "";
    this.currentMode = "CONTENT";
    this.tags = {
        parent: "parent1",
        parentcount: 1,
        parent1: ""
    };
    this.tagType = "";
    this.tokenText = this.lastToken = this.lastText = this.tokenType = "";

    this.Utils = {
        whitespace: "\n\r\t ".split(""),
        singleToken: "br,input,link,meta,!doctype,basefont,base,area,hr,wbr,param,img,isindex,?xml,embed".split(","),
        extraLiners: "head,body,/html".split(","),
        inArray: function (what, arr) {
            for (let i = 0; i < arr.length; i++) {
                if (what === arr[i]) {
                    return true;
                }
            }
            return false;
        }
    };

    this.getContent = function () {
        let char = "";
        let content = [];
        let space = false;
        while (this.input.charAt(this.pos) !== "<") {
            if (this.pos >= this.input.length) {
                return content.length ? content.join("") : ["", "TK_EOF"];
            }

            char = this.input.charAt(this.pos);
            this.pos++;
            this.lineCharCount++;

            if (this.Utils.inArray(char, this.Utils.whitespace)) {
                if (content.length) {
                    space = true;
                }
                this.lineCharCount--;
                continue;
            } else if (space) {
                if (this.lineCharCount >= this.maxChar) {
                    content.push("\n");
                    for (let i = 0; i < this.indentLevel; i++) {
                        content.push(this.indentString);
                    }
                    this.lineCharCount = 0;
                } else {
                    content.push(" ");
                    this.lineCharCount++;
                }
                space = false;
            }
            content.push(char);
        }
        return content.length ? content.join("") : "";
    };

    this.getScript = function () {
        let char = "";
        let content = [];
        let regMatch = new RegExp("\<\/script" + "\>", "igm");
        regMatch.lastIndex = this.pos;
        let regArray = regMatch.exec(this.input);
        let endScript = regArray ? regArray.index : this.input.length;
        while (this.pos < endScript) {
            if (this.pos >= this.input.length) {
                return content.length ? content.join("") : ["", "TK_EOF"];
            }

            char = this.input.charAt(this.pos);
            this.pos++;

            content.push(char);
        }
        return content.length ? content.join("") : "";
    };

    this.recordTag = function (tag) {
        if (this.tags[tag + "count"]) {
            this.tags[tag + "count"]++;
            this.tags[tag + this.tags[tag + "count"]] = this.indentLevel;
        } else {
            this.tags[tag + "count"] = 1;
            this.tags[tag + this.tags[tag + "count"]] = this.indentLevel;
        }
        this.tags[tag + this.tags[tag + "count"] + "parent"] = this.tags.parent;
        this.tags.parent = tag + this.tags[tag + "count"];
    };

    this.retrieveTag = function (tag) {
        if (this.tags[tag + "count"]) {
            let tempParent = this.tags.parent;
            while (tempParent) {
                if (tag + this.tags[tag + "count"] === tempParent) {
                    break;
                }
                tempParent = this.tags[tempParent + "parent"];
            }
            if (tempParent) {
                this.indentLevel = this.tags[tag + this.tags[tag + "count"]];
                this.tags.parent = this.tags[tempParent + "parent"];
            }
            delete this.tags[tag + this.tags[tag + "count"] + "parent"];
            delete this.tags[tag + this.tags[tag + "count"]];
            if (this.tags[tag + "count"] === 1) {
                delete this.tags[tag + "count"];
            } else {
                this.tags[tag + "count"]--;
            }
        }
    };

    this.getTag = function () {
        let char = "";
        let content = [];
        let space = false;

        do {
            if (this.pos >= this.input.length) {
                return content.length ? content.join("") : ["", "TK_EOF"];
            }

            char = this.input.charAt(this.pos);
            this.pos++;
            this.lineCharCount++;

            if (this.Utils.inArray(char, this.Utils.whitespace)) {
                space = true;
                this.lineCharCount--;
                continue;
            }

            if (char === "'" || char === '"') {
                if (!content[1] || content[1] !== "!") {
                    char += this.getUnformatted(char);
                    space = true;
                }
            }

            if (char === "=") {
                space = false;
            }

            if (content.length && content[content.length - 1] !== "=" && char !== ">" && space) {
                if (this.lineCharCount >= this.maxChar) {
                    this.printNewline(false, content);
                    this.lineCharCount = 0;
                } else {
                    content.push(" ");
                    this.lineCharCount++;
                }
                space = false;
            }
            content.push(char);
        } while (char !== ">");

        let tagComplete = content.join("");
        let tagIndex;
        if (tagComplete.indexOf(" ") !== -1) {
            tagIndex = tagComplete.indexOf(" ");
        } else {
            tagIndex = tagComplete.indexOf(">");
        }
        let tagCheck = tagComplete.substring(1, tagIndex).toLowerCase();
        if (tagComplete.charAt(tagComplete.length - 2) === "/" || this.Utils.inArray(tagCheck, this.Utils.singleToken)) {
            this.tagType = "SINGLE";
        } else if (tagCheck === "script") {
            this.recordTag(tagCheck);
            this.tagType = "SCRIPT";
        } else if (tagCheck === "style") {
            this.recordTag(tagCheck);
            this.tagType = "STYLE";
        } else if (tagCheck.charAt(0) === "!") {
            if (tagCheck.indexOf("[if") !== -1) {
                if (tagComplete.indexOf("!IE") !== -1) {
                    let comment = this.getUnformatted("-->", tagComplete);
                    content.push(comment);
                }
                this.tagType = "START";
            } else if (tagCheck.indexOf("[endif") !== -1) {
                this.tagType = "END";
                this.unindent();
            } else if (tagCheck.indexOf("[cdata[") !== -1) {
                let comment = this.getUnformatted("]]>", tagComplete);
                content.push(comment);
                this.tagType = "SINGLE";
            } else {
                let comment = this.getUnformatted("-->", tagComplete);
                content.push(comment);
                this.tagType = "SINGLE";
            }
        } else {
            if (tagCheck.charAt(0) === "/") {
                this.retrieveTag(tagCheck.substring(1));
                this.tagType = "END";
            } else {
                this.recordTag(tagCheck);
                this.tagType = "START";
            }
            if (this.Utils.inArray(tagCheck, this.Utils.extraLiners)) {
                this.printNewline(true, this.output);
            }
        }
        return content.join("");
    };

    this.getUnformatted = function (delimiter, origTag) {
        if (origTag && origTag.indexOf(delimiter) !== -1) {
            return "";
        }
        let char = "";
        let content = "";
        let space = true;
        do {

            char = this.input.charAt(this.pos);
            this.pos++;

            if (this.Utils.inArray(char, this.Utils.whitespace)) {
                if (!space) {
                    this.lineCharCount--;
                    continue;
                }
                if (char === "\n" || char === "\r") {
                    content += "\n";
                    for (let i = 0; i < this.indentLevel; i++) {
                        content += this.indentString;
                    }
                    space = false;
                    this.lineCharCount = 0;
                    continue;
                }
            }
            content += char;
            this.lineCharCount++;
            space = true;

        } while (content.indexOf(delimiter) === -1);
        return content;
    };

    this.getToken = function () {
        let token;

        if (this.lastToken === "TK_TAG_SCRIPT") {
            let tempToken = this.getScript();
            if (typeof tempToken !== "string") {
                return tempToken;
            }
            // token = js_beautify(tempToken, this.indentSize, this.indentCharacter, this.indentLevel);
            // return [token, "TK_CONTENT"];
            return [tempToken, "TK_CONTENT"];
        }
        if (this.currentMode === "CONTENT") {
            token = this.getContent();
            if (typeof token !== "string") {
                return token;
            } else {
                return [token, "TK_CONTENT"];
            }
        }

        if (this.currentMode === "TAG") {
            token = this.getTag();
            if (typeof token !== "string") {
                return token;
            } else {
                let tagNameType = "TK_TAG_" + this.tagType;
                return [token, tagNameType];
            }
        }
    };

    this.printer = function (jsSource, indentCharacter, indentSize, maxChar) {
        this.input = jsSource || "";
        this.output = [];
        this.indentCharacter = indentCharacter || " ";
        this.indentString = "";
        this.indentSize = indentSize || 2;
        this.indentLevel = 0;
        this.maxChar = maxChar || 70;
        this.lineCharCount = 0;
        for (let i = 0; i < this.indentSize; i++) {
            this.indentString += this.indentCharacter;
        }

        this.printNewline = function (ignore, arr) {
            this.lineCharCount = 0;
            if (!arr || !arr.length) {
                return;
            }
            if (!ignore) {
                while (this.Utils.inArray(arr[arr.length - 1], this.Utils.whitespace)) {
                    arr.pop();
                }
            }
            arr.push("\n");
            for (let i = 0; i < this.indentLevel; i++) {
                arr.push(this.indentString);
            }
        };

        this.printToken = function (text) {
            this.output.push(text);
        };

        this.indent = function () {
            this.indentLevel++;
        };

        this.unindent = function () {
            if (this.indentLevel > 0) {
                this.indentLevel--;
            }
        };
    };

    return this;
}
