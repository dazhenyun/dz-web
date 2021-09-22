/*
 * @CreatDate: 2020-03-02 15:38:31
 * @Describe: 工具导航模块
 */

import "./index.less";
import React, { PureComponent } from "react";
import { data } from "./data";

export default class Tools extends PureComponent {

	linkToArticle = (path) => {
		window.open(path);
	}

	render() {
		return (
			<div className="g-tools">
				<div className="wrap-main">
					{
						data.map((item, index) => {
							return (
								<div className="wrap-group" key={index}>
									<h2>{item.group}</h2>
									<ul className="m-ul clearfix">
										{
											item.children &&
											item.children.length > 0 &&
											item.children.map((sItem, sIndex) => {
												return (
													<li key={sIndex} onClick={() => this.linkToArticle(sItem.url)}>
														<img src={sItem.scr} />
														<h3>{sItem.title}</h3>
														<p title={sItem.des}>{sItem.des}</p>
													</li>
												);
											})
										}
									</ul>
								</div>
							);
						})
					}
				</div>
			</div>
		);
	}
}
