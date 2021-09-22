import { useState } from "react";
import { Card, Row, Col, Icon, Divider, Progress, Radio } from "antd";
import { LineBar, Line } from "@dzv/charts";
import "./index.less";

export default () => {

	const option = {
		color: ["#07C790", "#EF6555", "#F7B035", "#2196F3"],
		// legend: {
		// 	data: ["通过", "拒绝", "人工审核率", "核查率"]
		// },
		xAxis: {
			show: false,
			data: ["12/11", "12/12", "12/13", "12/14", "12/15", "12/16", "12/17", "12/18", "12/19", "12/20", "12/21", "12/22", "12/23", "12/24"]
		},
		yAxis: [
			{
				show: false
			}
		],
		series: [
			{
				// name: "通过",
				data: [20, 32, 18, 34, 50, 60, 55, 40, 30, 40, 34, 18, 32, 20],
				type: "bar",
				barMaxWidth: 10
			}
		],
		grid: {
			left: -10,
			top: 15,
			bottom: -20,
			right: 0
		}
	};

	const lineOption = {
		legend: {
			right: 0
			// data: ["申请金额", "实际放款金额"]
		},
		xAxis: {
			show: false,
			data: ["12/11", "12/12", "12/13", "12/14", "12/15", "12/16", "12/17", "12/18", "12/19", "12/20"]
		},
		yAxis: {
			show: false,
			name: "单位：万"
		},
		series: [
			{
				// name: "申请金额",
				data: [10, 32, 18, 34, 50, 60, 55, 40, 10, 15],
				type: "line",
				areaStyle: {},
				smooth: true
			},
			{
				// name: "实际放款金额",
				data: [2, 12, 9, 17, 30, 40, 35, 10, 20, 10],
				type: "line",
				areaStyle: {},
				smooth: true
			}
		],
		grid: {
			left: -10,
			top: 15,
			bottom: -20,
			right: 0
		}
	};

	const [font, setFont] = useState("Futura-LT-Medium");
	const [fontSize, setFontSize] = useState(" font-size30 ");
	const ChangeFont = (record) => {
		setFont(record);
	};
	const ChangeFontSize = (record) => {
		setFontSize(record);
	};
	const fontList = ["Futura-LT-Medium", "DINPro-Medium", "Helvetica-Thin", "Oswald-Light", "DS-DIGIB"];
	const fontAbout = {
		"Futura-LT-Medium": {
			text: "着重加粗，适合大屏数据展示。",
			downLink: "../font/Futura LT Medium.ttf",
			fontName: "Futura LT Medium.ttf"
		},
		"DINPro-Medium": {
			text: "一般常规加粗字体，适合图表和特殊数据展示。",
			downLink: "../font/DINPro-Medium.otf",
			fontName: "DINPro-Medium.otf"
		},
		"Helvetica-Thin": {
			text: "字体削瘦，适合图表，金额等特殊数据展示。",
			downLink: "../font/Helvetica-Thin.otf",
			fontName: "Helvetica-Thin.otf"

		},
		"Oswald-Light": {
			text: "瘦高着重字体，适合一般数据展示。",
			downLink: "../font/Oswald Light.ttf",
			fontName: "Oswald Light.ttf"

		},
		"DS-DIGIB": {
			text: "时钟字体，适合大屏，时间范围数据展示。",
			downLink: "../font/DS-DIGIB.ttf",
			fontName: "DS-DIGIB.ttf"
		}
	};
	const fontSizeList = ["30", "40", "50"];

	const downloadFile = (url, fileName) => {
		var x = new XMLHttpRequest();
		x.open("GET", url, true);
		x.responseType = "blob";
		x.onload = function (e) {
			// 会创建一个 DOMString，其中包含一个表示参数中给出的对象的URL。这个 URL 的生命周期和创建它的窗口中的 document 绑定。这个新的URL 对象表示指定的 File 对象或 Blob 对象。
			var url = window.URL.createObjectURL(x.response);
			var a = document.createElement("a");
			a.href = url;
			a.download = fileName;
			a.click();
		};
		x.send();
	};

	return (
		<>
			<span className='fontList'>
				<Radio.Group defaultValue="Futura-LT-Medium" buttonStyle="solid">
					{
						fontList.map((record) => {
							return (
								<Radio.Button primary value={record} className={`font-button  ${record}`} onClick={() => ChangeFont(record)}>{record}</Radio.Button>
							);
						})
					}
				</Radio.Group>
				<Radio.Group defaultValue="30" buttonStyle="solid" style={{ marginLeft: 20 }}>
					{
						fontSizeList.map((record) => {
							return (
								<Radio.Button style={{ borderStyle: "dashed" }} value={record} className={"font-button"} onClick={() => ChangeFontSize(record)}>{record + "px"}</Radio.Button>
							);
						})
					}
				</Radio.Group>
				<div style={{ margin: "6px 0 8px" }}>
					<span style={{ color: "rgba(0,0,0,0.8)" }}>适用场景：</span>{fontAbout[font].text}
					<a
						onClick={() => downloadFile(fontAbout[font].downLink, fontAbout[font].fontName)}
					> 下载字体
					</a>
				</div>
			</span>

			<Row gutter={16} className='charts'>

				<Card className='Col-item1'>

					<Row className='row1'>
						<span className='desc'>总销售额</span>
					</Row>
					<Row className='row2'>
						<span className={font + " showNum" + (" font-size" + fontSize)}>¥ 123,567</span>
					</Row>
					<Row className='row3'>
						<div className='row3-item'> <span className='desc'>日环比</span> <span className='num'>12%</span><Icon type="caret-down" style={{ color: "red", fontSize: "10px", marginLeft: "5px" }} /></div>
						<div className='row3-item'> <span className='desc'>周环比</span>  <span className='num'>12%</span><Icon type="caret-up" style={{ color: "green", fontSize: "10px", marginLeft: "5px" }} /></div>
					</Row>
					<Row className='row4'>
						<Divider />
					</Row>
					<Row className='row5'>
						<span className='desc'>日销售额</span> <span className='num'>¥ 233,56</span>
					</Row>
				</Card>

				<Card className='Col-item2'>
					<Row>
						<Col span={12} style={{ textAlign: "center" }}>
							<Progress
								className={font + (" font-size" + fontSize)}
								type="circle"
								percent={75}
								format={percent => `${percent}%`}
								strokeColor={{
									"0%": "#108ee9",
									"100%": "#87d068"
								}}
							/>
						</Col>
						<Col span={12} style={{ textAlign: "center" }}>
							<Progress
								className={font + (" font-size" + fontSize)}
								type="circle"
								percent={55}
								format={percent => `${percent}%`}
								strokeColor={{
									"0%": "#f5be1e",
									"100%": "#fdf2d2"
								}}
							/>
						</Col>
					</Row>
					<Row>
						<Divider style={{ margin: "11px 0 7px" }} />
						<span className='desc'>各品类占比</span>
					</Row>
				</Card>

				<Card className='bar Col-item3'>
					<Row className='row1'>
						<span className='desc'>总申请金额</span>
					</Row>
					<Row className='row2'>
						<span className={font + " showNum" + (" font-size" + fontSize)}>233,223</span>
					</Row>
					<LineBar height={42} option={{ ...option }} />
					<Row className='row4'>
						<Divider style={{ marginBottom: "5px" }} />
					</Row>
					<Row className='row5'>
						<span className='desc'>日销售额</span> <span className='num'>¥ 233,56</span>
					</Row>
				</Card>

				<Card className='bar Col-item4'>
					<Row className='row1'>
						<span className='desc'>周访问量</span>
					</Row>
					<Row className='row2'>
						<span className={font + " showNum" + (" font-size" + fontSize)}>233,22</span> <span style={{ verticalAlign: "text-bottom", height: 25 }}><span className='num'>12%</span><Icon type="caret-down" style={{ color: "red", fontSize: "10px", marginLeft: "5px" }} /></span>
					</Row>
					<Line height={42} option={{ ...lineOption }} />
					<Row className='row4'>
						<Divider style={{ marginBottom: "5px" }} />
					</Row>
					<Row className='row5'>
						<Col> <span className='desc'>周人均 </span><span className='num'>20</span>次  <span className='num'>18%</span><Icon type="caret-up" style={{ color: "green", fontSize: "10px", marginLeft: "5px" }} /></Col>
					</Row>
				</Card>
			</Row>

		</>
	);
};
