/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: FileUpload 文件上传
 */

import { useState } from "react";
import { message, Switch } from "antd";
import { CodePreviewer, MdPreviewer } from "react-markdown-previewer";
import { FileUpload } from "@dzo/com";
import Title from "@/components/Title";
import BaseMd from "./base.md";
import CodeMd from "./code.md";
import CodeMd2 from "./code2.md";
import CodeMd3 from "./code3.md";
import CodeMd4 from "./code4.md";
import CodeMd5 from "./code5.md";
import ApiMd from "./api.md";

export default () => {
	const [value, setValue] = useState(
		"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png;https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png;http://www.baidu.com/xxx.csv;http:xxx1.png;http:xxx1.png",
	);
	const [disabled, setDisabled] = useState(false);
	const onChange = v => {
		setValue(v);
	};

	const [value2, setValue2] = useState(
		"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
	);
	const [disabled2, setDisabled2] = useState(false);
	const onChange2 = v => {
		setValue2(v);
	};

	const [value3, setValue3] = useState(
		"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png,https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
	);
	const [disabled3, setDisabled3] = useState(false);
	const onChange3 = v => {
		setValue3(v);
	};

	const [value4, setValue4] = useState([
		{
			fileId: 1,
			fileName: "text1.csv",
			fileUrl: "/*",
			recordCount: 100
		},
		{
			fileId: 2,
			fileName: "text2.csv",
			fileUrl: "/*",
			recordCount: 1000
		}
	]);
	const [disabled4, setDisabled4] = useState(false);
	const onChange4 = v => {
		setValue4(v);
	};

	const [value5, setValue5] = useState("XXXX.csv");
	const [disabled5, setDisabled5] = useState(false);
	const onChange5 = v => {
		setValue5(v);
	};

	return (
		<>
			<Title account="ued" title="SearchTree 搜索树" />
			<MdPreviewer md={BaseMd}></MdPreviewer>
			<CodePreviewer code={CodeMd} showCode={false}>
				<div style={{ padding: 20 }}>
					<div>
						disabled:
						<Switch value={disabled} onChange={checked => setDisabled(checked)} />
					</div>
					<br />
					<FileUpload
						value={value}
						maxLength={5}
						showUploadList={{ showDownloadIcon: true }}
						onChange={onChange}
						templateUrl={"111"}
						disabled={disabled}
					/>
				</div>
			</CodePreviewer>
			<MdPreviewer md="## 图片上传组件"></MdPreviewer>
			<CodePreviewer code={CodeMd2} showCode={false}>
				<div style={{ padding: 20 }}>
					<div>
						disabled:
						<Switch value={disabled2} onChange={checked => setDisabled2(checked)} />
					</div>
					<br />
					<FileUpload
						acceptSuffix="jpeg,jpg,png"
						listType="picture-card"
						value={value2}
						maxLength={5}
						showUploadList={{ showDownloadIcon: false }}
						onChange={onChange2}
						disabled={disabled2}
					/>
				</div>
			</CodePreviewer>
			<MdPreviewer md="## 拖拽面板文件上传"></MdPreviewer>
			<CodePreviewer code={CodeMd3} showCode={false}>
				<div style={{ padding: 20 }}>
					<div>
						disabled:
						<Switch value={disabled} onChange={checked => setDisabled3(checked)} />
					</div>
					<br />
					<FileUpload
						acceptSuffix="csv,xlsx"
						value={value3}
						maxLength={5}
						showUploadList={{ showDownloadIcon: false }}
						onChange={onChange3}
						templateUrl={"http://xxx"}
						disabled={disabled3}
						multiple
						isDragger
					/>
				</div>
			</CodePreviewer>
			<MdPreviewer md="## 传值为数组类型"></MdPreviewer>
			<CodePreviewer code={CodeMd4} showCode={false}>
				<div style={{ padding: 20 }}>
					<div>
						disabled:
						<Switch value={disabled} onChange={checked => setDisabled4(checked)} />
					</div>
					<br />
					<FileUpload
						isArrayType
						acceptSuffix="csv,xlsx"
						value={value4}
						maxLength={5}
						showUploadList={{ showDownloadIcon: true }}
						onChange={onChange4}
						templateUrl={"http://xxx"}
						disabled={disabled4}
						modelKeys={{
							urlKey: "fileUrl",
							idKey: "fileId",
							nameKey: "fileName"
						}}
						nameRender={file => (
							<span>
								{file.fileName}&nbsp;&nbsp;记录数：{file.recordCount}
							</span>
						)}
						onDownload={file => {
							console.log(file);
							message.success("下载成功");
						}}
						multiple
					/>
				</div>
			</CodePreviewer>
			<MdPreviewer md="## 非实时上传的"></MdPreviewer>
			<CodePreviewer code={CodeMd5} showCode={false}>
				<div style={{ padding: 20 }}>
					<div>
						disabled:
						<Switch value={disabled5} onChange={checked => setDisabled5(checked)} />
					</div>
					<br />
					<FileUpload
						acceptSuffix=".csv,.xlsx"
						value={value5}
						onChange={onChange5}
						templateUrl={"http://xxx"}
						disabled={disabled5}
						isNRT
					/>
				</div>
			</CodePreviewer>
			<MdPreviewer md={ApiMd}></MdPreviewer>
		</>
	);
};
