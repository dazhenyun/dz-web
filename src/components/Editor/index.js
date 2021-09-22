/*
 * @CreatDate: 2019-05-31 15:05:53
 * @Describe: 编辑器
 */

import React, { PureComponent } from "react";
import * as CodeMirror from "codemirror/lib/codemirror";
import "codemirror/mode/groovy/groovy";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/selection/active-line";
import "codemirror/addon/edit/matchbrackets";
import "codemirror/addon/fold/foldcode";
import "codemirror/addon/fold/foldgutter";
import "codemirror/addon/fold/brace-fold";
import "codemirror/addon/fold/indent-fold";
import "codemirror/addon/fold/comment-fold";
import "codemirror/lib/codemirror.css";
import "codemirror/addon/fold/foldgutter.css";
import "codemirror/theme/neo.css";
import "codemirror/theme/material.css";
import "./index.less";

class Editor extends PureComponent {

	constructor(props) {
		super(props);
		this.ref = React.createRef();
	}

	componentDidMount() {
		const { current } = this.ref;
		const { theme = "neo", activeLine = false, fold = true, readOnly = false,
			defaultCode = "", code = "" } = this.props;

		this.CodeMirrorEditor = CodeMirror.fromTextArea(current, {
			mode: "text/x-groovy",
			theme: theme,
			lineNumbers: true,
			matchBrackets: true,
			styleActiveLine: activeLine,
			foldGutter: fold,
			gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
			readOnly: readOnly ? "nocursor" : false,
			extraKeys: {
				"Tab": (cm) => {
					const spaces = Array(cm.getOption("indentUnit") + 1).join(" ");
					cm.replaceSelection(spaces);
				}
			}
		});
		this.CodeMirrorEditor.setValue(code ? code : defaultCode);
		this.CodeMirrorEditor.on("changes", (cm) => {
			if (this.props.onChange) {
				this.props.onChange(cm.getValue());
			}
		});
	}

	componentDidUpdate(prevProps) {
		const code = prevProps.code;
		const nextCode = this.props.code;
		if (code !== nextCode) {
			this.CodeMirrorEditor.setValue(nextCode);
		}
	}

	render() {
		const { id = "" } = this.props;

		return (
			<textarea ref={this.ref} id={id}></textarea>
		);
	}
}

export default Editor;

