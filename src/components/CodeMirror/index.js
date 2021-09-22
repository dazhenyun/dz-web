import React, { Component } from "react";
import codemirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/addon/display/placeholder";

require("codemirror/theme/material.css");
require("codemirror/theme/neat.css");
import "./index.less";

export default class CodeInput extends Component {
	constructor(props) {
		super(props);
		this.editBox = null;
		this.randomId = window.parseInt(Math.random() * 10000);
	}

	componentDidMount() {
		const {
			mode = "text",
			theme = "neat",
			readOnly = false,
			lineNumbers = true,
			autofocus = true,
			tabSize = 4,
			placeholder = "请输入...",
			lineSeparator,
			smartIndent = true,
			indentWithTabs = false,
			electricChars = true,
			firstLineNumber = 1
		} = this.props;

		const themeInitMap = {
			day: "default",
			night: "material"
		};
		this.editBox = codemirror.fromTextArea(document.getElementById(`fb_${this.randomId}`), {
			mode: mode,
			theme: themeInitMap[theme] ? themeInitMap[theme] : theme,
			lineNumbers: lineNumbers,
			matchBrackets: true,
			readOnly: readOnly,
			Autofocus: readOnly ? false : autofocus,
			tabSize: tabSize,
			placeholder: placeholder,
			lineSeparator,
			smartIndent: smartIndent,
			indentWithTabs: indentWithTabs,
			electricChars: electricChars,
			firstLineNumber: firstLineNumber
		});
		if (this.props.defaultValue && !this.props.value) {
			this.editBox.setValue(this.props.defaultValue);
		}
		if (this.props.value) {
			this.editBox.setValue(this.props.value);
		}
		this.bindEvent();
	}

	componentDidUpdate() {
		if (this.editBox.getValue() !== this.props.value) {
			this.editBox.setValue(this.props.value || "");
		}
	}

	bindEvent = () => {
		this.editBox.on("change", e => {
			this.props.onChange && this.props.onChange(e.getValue());
		});
		this.editBox.on("blur", e => {
			this.props.onBlur && this.props.onBlur(e.getValue());
		});
		this.editBox.on("scroll", e => {
			this.props.onScroll && this.props.onScroll();
		});
		this.editBox.on("refresh", e => {
			this.props.onRefresh && this.props.onRefresh();
		});
		this.editBox.on("keydown", e => {
			this.props.onKeydown && this.props.onKeydown();
		});
		this.editBox.on("keypress", e => {
			this.props.onKeypress && this.props.onKeypress();
		});
		this.editBox.on("keyup", e => {
			this.props.onKeyup && this.props.onKeyup();
		});
		this.editBox.on("cut", e => {
			this.props.onCut && this.props.onCut();
		});
		this.editBox.on("copy", e => {
			this.props.onCopy && this.props.onCopy();
		});
		this.editBox.on("paste", e => {
			this.props.onPaste && this.props.onPaste();
		});
		this.editBox.on("contextmenu", e => {
			this.props.contextmenu && this.props.contextmenu();
		});
		this.editBox.on("dblclick", e => {
			this.props.onDblClick && this.props.onDblClick();
		});
		this.editBox.on("mousedown", e => {
			this.props.onMousedown && this.props.onMousedown();
		});
	};

	render() {
		const { className = "", style = {}, config = {}, height = 300, placeholder } = this.props;

		style.height = height;

		return (
			<div className={`code-input ${className}`} style={style}>
				<textarea className="formula-box" id={`fb_${this.randomId}`} placeholder={placeholder} />
			</div>
		);
	}

	componentWillUnmount() {
		this.editBox.off("change");
	}

	shouldComponentUpdate(nextProps) {
		if (this.editBox.getValue() === nextProps.value) {
			return false;
		}
		return true;
	}
}
