/*
 * @CreatDate: 2021-09-15 17:42:50
 * @Describe: 色彩大爆炸
 */

import BigBang from "./BigBang";
import Title from "@/components/Title";
import "./index.less";

export default () => {

	return (
		<div className="color-conver-page">
			<Title
				account="mufeng"
				title='色彩大爆炸'
				description="我们为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受。"
			/>
			<div className='color-box-list'>
				<BigBang />
			</div>
		</div>
	);
};

