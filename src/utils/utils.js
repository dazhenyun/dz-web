import { message } from "antd";

// 弹窗未完全关闭禁止再次提交
export function messageError (payload) {
	return new Promise((resolve) => {
		message.error(payload, () => {
			resolve(false);
		});
	});
}

/**
 * @description: 报告对象数组去重
 */
export function unique (array) {
	let result = {};
	let finalResult = [];

	for (let i = 0; i < array.length; i++) {
		result[array[i].id] = array[i];
	}

	for (let item in result) {
		finalResult.push(result[item]);
	}

	return finalResult;
}

export function searchToObject (search) {
	let pairs = search.substring(1).split("&");
	let obj = {};
	let pair;
	let i;
	for (i in pairs) {
		if (pairs[i] === "") { continue; }

		pair = pairs[i].split("=");
		obj[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
	}
	return obj;
}

export function getPlainNode (nodeList, parentPath = "") {
	const arr = [];
	nodeList.forEach((node) => {
		const item = node;
		item.path = `${parentPath}/${item.path || ""}`.replace(/\/+/g, "/");
		item.exact = true;
		if (item.children && !item.component) {
			arr.push(...getPlainNode(item.children, item.path));
		} else {
			if (item.children && item.component) {
				item.exact = false;
			}
			arr.push(item);
		}
	});
	return arr;
}

export function getUrlKey (name) {
	return (
		decodeURIComponent(
			(new RegExp(`[?|&]${name}=([^&;]+?)(&|#|;|$)`).exec(
				location.href
			) || ["", ""])[1].replace(/\+/g, "%20")
		) || null
	);
}

export function bytesToSize (bytes) {
	if (bytes === 0) return "0 B";
	var k = 1024;
	var sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
	var i = Math.floor(Math.log(bytes) / Math.log(k));

	return (bytes / Math.pow(k, i)).toPrecision(3) + " " + sizes[i];
}

export function deleteEmptyObjItem (obj) {
	for (let i in obj) {
		let value = obj[i];
		if (value === null || value === undefined || value === "" || !value && value !== 0) {
			delete obj[i];
		}
	}
	return obj;
};

/**
 * @description: 获取字符串真实长度
 */
export function getStrLength (str) {
	// 先把中文替换成两个字节的英文，再计算长度
	return str.replace(/[\u0391-\uFFE5]/g, "aa").length;
};

/**
 * 静态资源地址
 */
export const staticFile = process.env.SYS_ENV !== "development" ? "/dz-web/" : "http://10.10.195.233/dz-web/";

export function downloadFile (url, fileName) {
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
