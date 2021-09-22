export const getMenuNameList = (menus, urlName) => {
	let list = [];
	if (urlName) {
		(menus || []).map(item => {
			if (item.children) { // 如果有子节点，继续递归调用，直到没有子节点
				(item.children || []).map(subItem => {
					list.push(subItem.code);
				});
			} else {
				list.push(item.code);
			}
		});
	}
	return list;
};
