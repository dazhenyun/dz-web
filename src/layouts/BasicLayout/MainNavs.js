import { useState, useEffect } from "react";
// import { NavLink } from "dva/router";
import { routerRedux } from "dva/router";
import classnames from "classnames";
import { stringify } from "query-string";

export default props => {
	const {
		dispatch,
		history,
		issearch,
		routerInfo: {
			project: {
				id: projectId,
				...projectParams
			},
			space: {
				type: spaceType
			}
		}
	} = props;
	const [activePath, setActivePath] = useState(location.pathname);
	const selectNav = path => {
		setActivePath(path);
		if (issearch) {
			window.location = path;
		} else {
			dispatch(routerRedux.push(path));
		}
	};
	const isActive = path => new RegExp(`^${path}`).test(activePath);
	const menus = [
		{
			path: "/dashboard",
			name: "工作台"
		},
		{
			path: `/space/${spaceType}`,
			pattern: "/(space|book)",
			name: "知识空间"
		},
		{
			path: `/project/${projectId}?${stringify(projectParams)}`,
			pattern: "/project",
			name: "项目管理"
		},
		{
			path: "/solution",
			name: "解决方案",
			disabled: process.env.SYS_ENV !== "development"
		}
	];

	useEffect(() => history.listen(
		({ pathname }) => {
			setActivePath(pathname);
		}
	), []);

	return (
		<div className="main-nav">
			<ul className="nav-list">
				{
					menus.map(({ pattern, path, name, disabled }) => {
						if (!disabled) {
							return (
								<li
									onClick={() => selectNav(path)}
									key={path}
									className={classnames({ active: isActive(pattern || path) })}
								>
									<a>
										{name}
									</a>
								</li>
							);
						}
					})
				}
			</ul>
		</div>
	);
};
