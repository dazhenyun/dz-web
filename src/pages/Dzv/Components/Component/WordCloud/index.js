/*
 * @CreatDate: 2021-09-22 20:06:19
 * @Describe: 词云
 */

import { PureComponent } from "react";
import { CodePreviewer } from "react-markdown-previewer";
import { WordCloud } from "@dzv/charts";
import Title from "@/components/Title";

import md1 from "./md1.md";
import md2 from "./md2.md";

const option1 = {
	series: {
		data: [
			{ name: " 张三", value: 30 },
			{ name: " 李四", value: 24 },
			{ name: " 王五", value: 21 },
			{ name: " 娜拉", value: 10 },
			{ name: " 李白", value: 14 },
			{ name: " 成吉思汗", value: 11 },
			{ name: " 李世民", value: 21 },
			{ name: " 陈宫", value: 33 },
			{ name: " 成龙", value: 8 },
			{ name: " 李小龙", value: 9 },
			{ name: " 乌兰巴托", value: 12 },
			{ name: " 小燕子", value: 34 },
			{ name: " 古天乐", value: 12 },
			{ name: " 罗志祥", value: 16 },
			{ name: " 周扬青", value: 19 },
			{ name: " 杨蛋蛋", value: 28 },
			{ name: " 王宝强", value: 24 },
			{ name: " 马蓉", value: 11 }
		]
	}
};

const option2 = {
	series: {
		gridSize: 15, // 网格尺寸
		// 布局形状：'circle', 'cardioid', 'diamond', 'triangle-forward', 'triangle', 'pentagon', 'star'
		shape: "diamond",
		sizeRange: [12, 40], // 尺寸范围
		data: [
			{ name: " 张三", value: 30 },
			{ name: " 李四", value: 24 },
			{ name: " 王五", value: 21 },
			{ name: " 娜拉", value: 10 },
			{ name: " 李白", value: 14 },
			{ name: " 成吉思汗", value: 11 },
			{ name: " 李世民", value: 21 },
			{ name: " 陈宫", value: 33 },
			{ name: " 成龙", value: 8 },
			{ name: " 李小龙", value: 9 },
			{ name: " 乌兰巴托", value: 12 },
			{ name: " 小燕子", value: 34 },
			{ name: " 古天乐", value: 12 },
			{ name: " 罗志祥", value: 16 },
			{ name: " 周扬青", value: 19 },
			{ name: " 杨蛋蛋", value: 28 },
			{ name: " 王宝强", value: 24 },
			{ name: " 马蓉", value: 11 }
		]
	}
};

class WordCloudComponent extends PureComponent {

	render() {
		const { theme } = this.props;

		return (
			<>
				<Title title='option配置参考：https://github.com/ecomfe/echarts-wordcloud' />
				<h2>词云</h2>
				<CodePreviewer code={md1} showCode={false}>
					<div style={{ padding: "20px" }}>
						<WordCloud theme={theme} option={option1} height={400} />
					</div>
				</CodePreviewer>
				<h2>自定义布局形状</h2>
				<CodePreviewer code={md2} showCode={false}>
					<div style={{ padding: "20px" }}>
						<WordCloud theme={theme} option={option2} height={400} />
					</div>
				</CodePreviewer>
			</>
		);
	}
}

export default WordCloudComponent;
