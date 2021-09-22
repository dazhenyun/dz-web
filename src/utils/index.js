import { stringify } from "query-string";
import config from "@/common/config";

export const safeParseJSON = (str, defaultObj) => {
	let result;

	try {
		result = JSON.parse(str);
	} catch (err) {
		console.warn("json parse error:", err);
		result = typeof defaultObj === "undefined" ? str : defaultObj;
	}

	return result || defaultObj;
};

export const isJSON = str => {
	if (typeof str === "string") {
		try {
			const obj = JSON.parse(str);
			return obj && typeof obj === "object";
		} catch (e) {
			console.log("error：" + str + "!!!" + e);
			return false;
		}
	}

	return false;
};

export const extname = (filename) => {
	if (!filename || typeof filename !== "string") {
		return false;
	};
	let a = filename.split("").reverse().join("");
	let b = a.substring(0, a.search(/\./)).split("").reverse().join("");
	return b;
};

export const walkThroughTreeNode = (treeData, callback, pnode, pnodes = []) => {
	(treeData || []).every(node => {
		let result;

		if (callback) {
			result = callback(node, pnode, pnode ? [pnode, ...pnodes] : pnodes);
		}

		// 回调函数返回false则终止遍历
		if (result !== false) {
			node && walkThroughTreeNode(node.children || [], callback, node, [node, ...pnodes]);
		}
		return result !== false;
	});

	return treeData;
};

export const walkThroughTreeNodeByDeep = (treeData, callback, pnode, pnodes = []) => {
	(treeData || []).every(node => {
		let result;

		if (node.children && node.children.length) {
			return walkThroughTreeNodeByDeep(node.children || [], callback, node, [node, ...pnodes]);
		}

		if (callback) {
			result = callback(node, pnode, pnode ? [pnode, ...pnodes] : pnodes);
		}

		return result;
	});

	return treeData;
};

export const imgOnError = (e, defualtSrc) => {
	e.target.onerror = null;
	e.target.src = defualtSrc;
};

export const goToLogin = (url, params = {}) => {
	params.callbackUrl = params.callbackUrl || location.href;
	window.location.href = `${url || config.ssoLoginUrl}?callbackUrl=${params.callbackUrl}`;
};

export const logout = (params = {}) => {
	params.backUrl = params.backUrl || location.href;
	window.location.href = `${config.apiLogout}?${stringify(params)}`;
};

export const dataURItoBlob = dataURI => {
	let byteString;

	if (dataURI.split(",")[0].indexOf("base64") >= 0) {
		byteString = atob(dataURI.split(",")[1]);
	} else {
		byteString = unescape(dataURI.split(",")[1]);
	}

	// separate out the mime component
	let mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

	// write the bytes of the string to a typed array
	let ia = new Uint8Array(byteString.length);
	for (var i = 0; i < byteString.length; i++) {
		ia[i] = byteString.charCodeAt(i);
	}

	return new Blob([ia], { type: mimeString });
};
