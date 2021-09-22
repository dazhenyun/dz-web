import { Component } from "react";
import JSONEditor from "json-custom";
import { debounce } from "lodash";
import "json-custom/dist/jsoneditor.css";
import "./index.less";

export default class extends Component {
	constructor(props) {
		super(props);
		let json = window.localStorage.getItem("tntd_json");
		if (json) {
			try {
				json = JSON.parse(json);
			} catch {
				json = "";
			}
		}
		this.state = {
			json: json || {
				"array": [1, 2, 3],
				"boolean": true,
				"null": null,
				"number": 123,
				"object": { "a": "b", "c": "d" },
				"string": "Hello World"
			}
		};
		this.debounceAutoSave = debounce(this.autoSave, 200);
	}

	componentDidMount() {
		const { json } = this.state;
		// code editor
		const codeOptions = {
			mode: "code",
			enableSort: false,
			enableTransform: false,
			onChangeText: (jsonString)=>{
				try {
					if (JSON.parse(jsonString)) {
						this.debounceAutoSave(jsonString, "codeToTree");
					}
				} catch {}
			}
		};
		this.codeEditor = new JSONEditor(this.codeContainer, codeOptions);
		this.codeEditor.set(json);

		// tree editor
		const treeOptions = {
			mode: "tree",
			enableSort: false,
			enableTransform: false,
			onChangeText: (jsonString)=>{
				try {
					if (JSON.parse(jsonString)) {
						this.debounceAutoSave(jsonString, "treeToCode");
					}
				} catch {}
			}
		};
		this.treeEditor = new JSONEditor(this.treeContainer, treeOptions);
	}

	autoSave(jsonString, type) {
		if (type === "codeToTree") {
			this.codeTransToTree();
		} else {
			this.treeTransCode();
		}
		window.localStorage.setItem("tntd_json", jsonString);
	}

	// code转树
	codeTransToTree() {
		try {
			this.treeEditor.update(this.codeEditor.get());
		} catch (e) {
			console.log(e);
		}
	};

	// 树转code
	treeTransCode() {
		try {
			this.codeEditor.update(this.treeEditor.get());
		} catch (e) {
			console.log(e);
		}
	};

	componentWillUnmount() {
		if (this.codeEditor) {
			this.codeEditor.destroy();
		}
		if (this.treeEditor) {
			this.treeEditor.destroy();
		}
		if (this.rotateInterval) {
			clearInterval(this.rotateInterval);
		}
	}
	render() {
		return (
			<div className="json-transfer flex mt20">
				<div className="flex-average">
					<div className="jsoneditor-container" ref={elem => (this.codeContainer = elem)} />
				</div>
				<div className="row-transfer-wrap">
					<div className="flex flex-col transfer-btn-wrap">
						<div className="caret-right" onClick={this.codeTransToTree.bind(this)} />
						<div className="caret-left" onClick={this.treeTransCode.bind(this)} />
					</div>
				</div>
				<div className="flex-average">
					<div className="jsoneditor-container" ref={elem => (this.treeContainer = elem)} />
				</div>
			</div>
		);
	}
}
