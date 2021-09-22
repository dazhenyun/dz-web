```jsx
import React, { useEffect, useRef } from "react";
import ReactDOM from 'react-dom';
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

const Demo = props => {
	
	const getCode = (code) => {
		console.log(code);
	};

    return (
       <CustomEditor
			defaultCode="" // 默认""
			readOnly={false} // 默认false
			height={400} // 默认300
			theme="night" // 默认day
			activeLine={true} // 默认true
			fold={true} // 默认true
			keywords={keywords} // 默认[]
			onChange={getCode}
		/>
    )
};

ReactDOM.render(
    <Demo />,
    document.getElementById('root')
);
```