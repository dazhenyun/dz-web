import { Fragment } from "react";
import { Title } from "tntd";

export default () => {
	return (
		<Fragment>
			<Title
				title='通用说明'
				number='1'
			/>
			<p>各个模块的间距按照图中标注统一修改，表格内容统一一行显示，控制每个区域的内容。超出区域的内容以…显示，各个系统逐步统一。</p>
		</Fragment>
	);
};
