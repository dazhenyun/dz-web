import { message } from "antd";
import copy from "copy-to-clipboard";

export default ({ mapData, width, height }) => {

	return (
		<li
			className='color-box-item'
			style={{
				background: mapData.color,
				width: width || "360px",
				height: height || "120px",
				color: mapData.textColor || "#fff"
			}}
			onClick={() => {
				copy(mapData.color);
				message.success(`颜色 ${mapData.color} 已复制到剪贴板`);
			}}
		>
			{mapData.title}
			<div className='value'>{mapData.color}</div>
			{
				mapData.subList &&
				mapData.subList.length > 0 &&
				<ul className='color-sub-list'>
					{
						mapData.subList.map((color, index, arr) => {
							return (
								<li
									className='color-sub-item primary-color'
									key={color}
									style={{
										background: color,
										width: (1 / arr.length) * 100 + "%"
									}}
									onClick={(e) => {
										e.stopPropagation();
										copy(color);
										message.success(`颜色 ${color} 已复制到剪贴板`);
									}}
								></li>
							);
						})
					}
				</ul>
			}
		</li>
	);
};
