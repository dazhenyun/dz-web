/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: dz-cli 脚手架
 */

import { PureComponent, Fragment } from "react";
import { MdPreviewer } from "react-markdown-previewer";
import BaseMd from "./base.md";
import Title from "@/components/Title";

class TntCli extends PureComponent {

	render() {

		return (
			<Fragment>
				<Title
					title="@dzo/cli 简介"
					description="命令行工具，快速创建项目，开箱即用"
				/>
				<MdPreviewer md={BaseMd}></MdPreviewer>
				<img src={require("./img/cli1.png")} /><br /><br />
				<img src={require("./img/cli2.png")} /><br /><br />
				<img src={require("./img/cli3.png")} />
			</Fragment>
		);
	}
}

export default TntCli;
