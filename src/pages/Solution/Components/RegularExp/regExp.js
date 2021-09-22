const treeData = [
	{
		title: '常用字符',
		value: '',
		key: '',
		children: [
			{
				title: '中文字符',
				value: /[\u4e00-\u9fa5]/gm,
				key: 'CN',
			},
			{
				title: '全角字符',
				value: /[^\uFF00-\uFFFF]/g,
				key: 'fullAngle',
			},
			{
				title: '半角字符',
				value: /[\x00-\xff]/g,
				key: 'halfAngle',
			},
			{
				title: '空白行',
				value: /\n\s*\r/,
				key: 'blank',
			},
			{
				title: '首尾空白字符(包括空格、制表符、换页符等等)',
				value: /^\s*|\s*$/,
				key: 'blankSpace',
			},
			{
				title: 'URL',
				value: /^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i,
				key: 'url',
			},
		],
	},
	{
		title: '表单校验',
		value: '',
		key: '',
		children: [
			{
				title: '密码强度',
				value: /^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/,
				key: 'pwd',
			},
			{
				title: '用户名',
				value: /^[a-zA-Z0-9_-]{4,16}$/,
				key: 'userName',
			},
			{
				title: '手机号',
				value: /^1[3456789]\d{9}$/,
				key: 'tel',
			},
			{
				title: 'Email地址',
				value: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
				key: 'email',
			},
			{
				title: '日期',
				value: /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/,
				key: 'date',
			},
			{
				title: '身份证号码(15位)',
				value: /^[1-9]\\d{7}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}$/,
				key: 'idCard_15',
			},
			{
				title: '身份证号码(18位)',
				value: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
				key: 'idCard_18',
			},
			{
				title: '车牌号',
				value: /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/,
				key: 'carNum',
			},
			{
				title: '邮政编码',
				value: /^[1-9]\d{5}(?!\d)$/,
				key: 'PostCode',
			},


		],
	},
	{
		title: 'HTML相关',
		value: '',
		key: '',
		children: [
			{
				title: '匹配URL地址',
				value: /^(f|ht){1}(tp|tps):\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?/,
				key: 'URL'
			},
			{
				title: '匹配HTML标签',
				value: /<("[^"]*"|'[^']*'|[^'">])*>/,
				key: 'HTML'
			},
			{
				title: '匹配script标签',
				value: /<script[^>]*>[\s\S]*?<\/[^>]*script>/gi,
				key: 'script'
			},
			{
				title: 'HTML条件注释',
				value: /<!--[\s\S]*?--\>/g,
				key: 'annotation'
			},
			{
				title: 'HTML条件注释',
				value: /\[\s*if\s+[^\]][\s\w]*\]/i,
				key: 'conAnnotation'
			},
			{
				title: '非IE的HTML条件注释',
				value: /^\[if\s+(!IE|false)\]>.*<!\[endif\]$/i,
				key: 'noIEAnnotation'
			},
			{
				title: 'CSS表达式',
				value: /expression[\s\r\n ]?\(/gi,
				key: 'cssExpression'
			},
			{
				title: '不合法的HTML标签',
				value: /<\W+>/gi,
				key: 'wrongHTML'
			},
			{
				title: '匹配textarea标签',
				value: /<textarea[^>]*>[\s\S]*?<\/[^>]*textarea>/gi,
				key: 'textarea'
			},



		],
	},
];

export default treeData;
