import { useEffect, useState, Fragment } from "react";
import { connect } from "dva";
import "./index.less";

export default (props) => {
	const { title, description, activeKey, code, onChange, children } = props;
	console.log("props", props);

	return (
		<div className={`toggle-box-wrap ${activeKey === code ? "is-open" : ""}`} id={code}>
			<div
				className='box-header'
				onClick={() => {
					// 跳转至锚点
					location.href = "#" + code;
					if (onChange) {
						onChange();
					}
				}}
			>
				<h2>{title}</h2>
				<p>{description ? description : title + "最佳实践"}</p>
			</div>
			<div className='box-body'>
				{children && children}
			</div>
		</div>
	);
};
