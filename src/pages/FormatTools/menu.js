import JsonFormat from "./Components/JsonFormat";
import JavaScriptFormat from "./Components/JavaScriptFormat";
import HtmlFormat from "./Components/HtmlFormat";
import XmlFormat from "./Components/XmlFormat";
import SqlFormat from "./Components/SqlFormat";
import UnicodeFormat from "./Components/UnicodeFormat";
import JavaFormat from "./Components/JavaFormat";
import CFormat from "./Components/CFormat";

const Menu = [
	{
		title: "JSON格式化",
		code: "json",
		component: JsonFormat
	},
	{
		title: "JavaScript格式化",
		code: "javaScript",
		component: JavaScriptFormat
	},
	{
		title: "HTML格式化",
		code: "html",
		component: HtmlFormat
	},
	{
		title: "XML格式化",
		code: "xml",
		component: XmlFormat
	},
	{
		title: "SQL格式化",
		code: "sql",
		component: SqlFormat
	},
	{
		title: "Unicode格式化",
		code: "unicode",
		component: UnicodeFormat
	},
	{
		title: "JAVA格式化",
		code: "java",
		component: JavaFormat
	},
	{
		title: "C/C++格式化",
		code: "c",
		component: CFormat
	}
];

export default Menu;
