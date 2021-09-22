/* eslint-disable radix */

// 即将废弃

// 	转换器 	#fff => #ffffff
const toSix = (Three) =>{
	let Six = "#";
	for (let i = 1; i < 4; i += 1) {
		Six += Three
			.slice(i, i + 1)
			.concat(Three.slice(i, i + 1));
	}
	return Six;
};

// 转十六进制
export const toHex = (color) => {
	const values = color
		.replace(/rgba?\(/, "")
		.replace(/\)/, "")
		.replace(/[\s+]/g, "")
		.split(",");
	const a = parseFloat(values[3] || 1);
	const r = Math.floor(a * parseInt(values[0]) + (1 - a) * 255);
	const g = Math.floor(a * parseInt(values[1]) + (1 - a) * 255);
	const b = Math.floor(a * parseInt(values[2]) + (1 - a) * 255);
	return "#" +
		("0" + r.toString(16)).slice(-2) +
		("0" + g.toString(16)).slice(-2) +
		("0" + b.toString(16)).slice(-2);
};

// 转RGB
export const hexToRgb = (hex) => {
	return "rgb(" +
	parseInt("0x" + hex.slice(1, 3)) +
	"," +
	parseInt("0x" + hex.slice(3, 5)) +
	"," +
	parseInt("0x" + hex.slice(5, 7)) +
	")";
};

export const hexToRgba = (hex, opacity) => {
	return "rgba(" +
	parseInt("0x" + hex.slice(1, 3)) +
	"," +
	parseInt("0x" + hex.slice(3, 5)) +
	"," +
	parseInt("0x" + hex.slice(5, 7)) +
	"," +
	opacity +
	")";
};

export const toRgba = (color) => {
	// 16进制颜色值的正则
	let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
	let sColor = color.toLowerCase();
	if (reg.test(sColor)) {
		sColor.length === 4
			? sColor = toSix(sColor)
			: sColor;
		let colorChange = [];
		for (let i = 1; i < 7; i += 2) {
			colorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
		}
		return "RGB(" + colorChange.join(",") + ")";
	} else {
		return sColor;
	}
};

// 转RGBA

// 色彩梯度
export const colorGradient = (color, opacity) =>{

};
