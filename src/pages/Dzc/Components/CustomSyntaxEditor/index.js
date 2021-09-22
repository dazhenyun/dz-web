/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: 信贷决策流
 */

import "./index.less";
import { useRef } from "react";
import { CodePreviewer, MdPreviewer } from "react-markdown-previewer";
import Title from "@/components/Title";
import BaseMd from "./base.md";
import CodeMd from "./code.md";
import ApiMd from "./api.md";
import CustomEditor from "@tntx/custom-syntax-editor";

const keywords = [
	// groovy 关键词
	"as", "catch", "def", "enum", "for", "import", "new", "super", "throws", "while",
	"assert", "class", "default", "extends", "goto", "in", "null", "switch", "trait", "break",
	"const", "do", "false", "if", "instanceof", "package", "this", "true", "case", "continue", "else",
	"finally", "implements", "interface", "return", "throw", "try",
	// java 关键词
	"abstract", "transient", "int", "strictfp", "synchronized", "boolean", "char", "do",
	"final", "private", "short", "void", "double", "long", "protected", "static", "volatile",
	"byte", "float", "native", "public",
	// JDK 常用类
	"System", "Runtime", "String", "StringBuffer", "StringBuilder", "Date", "DateFormat",
	"SimpleDateFormat", "Calendar", "GregorianGalendar", "Math", "Integer", "Double", "Float",
	"Boolean", "List", "HashMap", "Map", "ArrayList", "Arrays", "Random", "Iterator"
];

const defaultCode = `/**
* ETL转换器实现类，系统会执行此类的parse()方法，此类必须实现GroovyEtlHandlerCaller接口，
* 请在此类的parse方法中补您你需要实现的业务逻辑 
*
* @param response 三方原始输出报文
* @return map,  map的key对应服务出参标识
*/
import com.alibaba.fastjson.*;
import org.apache.commons.lang3.*;
import java.text.SimpleDateFormat;

public class GroovyEtlHandlerCallerImpl implements GroovyEtlHandlerCaller {

	public Map < String, Object > parse(String response) {
		Map < String, Object > map = new HashMap < > ();
		// TODO 请在此处补充需要实现的业务逻辑
		
		return map;
	}

}`;

const Demo = props => {

	const getCode = (code) => {
		console.log(code);
	};

	return (
		<div>
			<Title
				title='自定义语法编辑器'
				description="快速开发属于你自己的语法编辑器，支持智能提示、语法高亮、代码折叠等等功能！"
			/>
			<MdPreviewer md={BaseMd}></MdPreviewer>
			<CodePreviewer code={CodeMd} showCode={false}>
				<div style={{ padding: "20px" }}>
					<CustomEditor
						defaultCode={defaultCode} // 默认""
						readOnly={false} // 默认false
						height={500} // 默认300
						theme="night" // 默认day
						activeLine={true} // 默认true
						fold={true} // 默认true
						keywords={keywords} // 默认[]
						onChange={getCode}
					/>
				</div>
			</CodePreviewer>
			<MdPreviewer md={ApiMd}></MdPreviewer>
		</div>
	);
};

export default Demo;

