/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: 获取元素的滚动状态。
 */

import { useRef } from "react";
import { MdPreviewer, CodePreviewer } from "react-markdown-previewer";
import { useScroll } from "@tntd/hooks";
import BaseMd from "./base.md";
import ApiMd from "./api.md";
import CodeMd from "./code.md";

export default props => {
	const ref = useRef();
	const scroll = useScroll(ref);

	return (
		<div>
			<MdPreviewer md={BaseMd}></MdPreviewer>
			<h2>代码演示</h2>
			<h4 className="blueGray">尝试滚动一下文字内容</h4>
			<CodePreviewer code={CodeMd} showCode={false}>
				<div style={{ padding: "10px 20px" }}>
					<div>{JSON.stringify(scroll)}</div>
					<div
						style={{
							height: "160px",
							width: "160px",
							border: "solid 1px #000",
							overflow: "scroll",
							whiteSpace: "nowrap",
							fontSize: "32px"
						}}
						ref={ref}
					>
						<div>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur atque, debitis ex
							excepturi explicabo iste iure labore molestiae neque optio perspiciatis
                		</div>
						<div>
							Aspernatur cupiditate, deleniti id incidunt mollitia omnis! A aspernatur assumenda
							consequuntur culpa cumque dignissimos enim eos, et fugit natus nemo nesciunt
                 		</div>
						<div>
							Alias aut deserunt expedita, inventore maiores minima officia porro rem. Accusamus ducimus
							magni modi mollitia nihil nisi provident
                		</div>
						<div>
							Alias aut autem consequuntur doloremque esse facilis id molestiae neque officia placeat,
							quia quisquam repellendus reprehenderit.
                		</div>
						<div>
							Adipisci blanditiis facere nam perspiciatis sit soluta ullam! Architecto aut blanditiis,
							consectetur corporis cum deserunt distinctio dolore eius est exercitationem
                		</div>
						<div>Ab aliquid asperiores assumenda corporis cumque dolorum expedita</div>
						<div>
							Culpa cumque eveniet natus totam! Adipisci, animi at commodi delectus distinctio dolore
							earum, eum expedita facilis
                		</div>
						<div>
							Quod sit, temporibus! Amet animi fugit officiis perspiciatis, quis unde. Cumque
							dignissimos distinctio, dolor eaque est fugit nisi non pariatur porro possimus, quas quasi
                		</div>
					</div>
				</div>
			</CodePreviewer>
			<MdPreviewer md={ApiMd}></MdPreviewer>
		</div>
	);
};
