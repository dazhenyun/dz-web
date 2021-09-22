/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: 拖拽组件
 */

import { useEffect } from "react";
import { CodePreviewer, MdPreviewer } from "react-markdown-previewer";
import { Ellipsis } from "tntd";
import { Divider } from "antd";
import Title from "@/components/Title";
import BaseMd from "./base.md";
import CodeMd from "./code.md";
import ApiMd from "./api.md";

export default props => {
	return (
		<div>
			<Title
				title="Ellipsis省略号组件"
				description="根据限宽截断文本并显示省略号，添加Tooltip/Popover悬浮效果以显示完整文本。解决子符长度截断时不能很好的兼容中英文的问题。"
			/>
			<MdPreviewer md={BaseMd}></MdPreviewer>
			<CodePreviewer code={CodeMd} showCode={false}>
				<div style={{ padding: 20 }}>
					例1：
					<Ellipsis
						Popover
						copyable
						widthLimit={100}
						content="你看我有省略号吗？"
					/>
					<br />
					例2：
					<Ellipsis
						copyable
						widthLimit={100}
						title="你看我有省略号吗？"
					/>
					<br />
					例3：
					<div style={{ width: 100 }}>
						<Ellipsis>
							你看我有省略号吗？
						</Ellipsis>
					</div>
					<br />
					例4：
					<div style={{ width: 100 }}>
						<Ellipsis placement="topLeft">
							你看我有省略号吗？
						</Ellipsis>
					</div>
					<br />
					例5：
					<Ellipsis
						Popover
						copyable
						widthLimit={100}
						lines={2}
						content="你看我有省略号吗？你看我有省略号吗？你看我有省略号吗？"
					/>
				</div>
			</CodePreviewer>
			<MdPreviewer md={ApiMd}></MdPreviewer>
		</div>
	);
};
