const nav = [
	{ name: "首页", path: "/", activeCode: "/", active: false, new: false },
	{ name: "DZO", path: "/dzo/introduce", activeCode: "/dzo/", active: false, new: true },
	{ name: "DZC", path: "/dzc/introduce", activeCode: "/dzc/", active: false },
	{ name: "DZV", path: "/dzv/introduce", activeCode: "/dzv/", active: false, new: false },
	{ name: "Design", path: "/design/color", activeCode: "/design/", active: false, new: false },
	// { name: "Hooks", path: "/hooks/introduce", activeCode: "/hooks/", active: false, new: true },
	// { name: "解决方案", path: "/solution/introduce", activeCode: "/solution/", active: false, new: false },
	{ name: "工具导航", path: "/tools", activeCode: "/tools", active: false, new: false }
];

export default {
	namespace: "global",
	state: {
		navList: Object.assign([], nav)
	},
	effects: {},

	reducers: {
		setAttrValue(state, { payload }) {
			return {
				...state,
				...payload
			};
		}
	},

	subscriptions: {
		// 监听地址
		setup({ dispatch, history }) {
			history.listen(location => {
				let navList = Object.assign([], nav);
				const pathname = location.pathname;
				navList.forEach(item => {
					if (pathname.includes(item.activeCode) && item.activeCode !== "/") {
						item.active = true;
					} else {
						item.active = false;
					}
				});
				dispatch({
					type: "setAttrValue",
					payload: {
						navList
					}
				});
			});
		}
	}
};
