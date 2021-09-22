import dva from "dva";
import "moment/locale/zh-cn";
import { createBrowserHistory } from "history";
import { message } from "antd";
import { stringify } from "query-string";
import router from "./router";
import { searchToObject } from "@/utils/utils";
import { goToLogin } from "@/utils";
import "./styles/style.less";

// 统一登录 token 判断
const { token, ...rest } = searchToObject(location.search);
const backUrl = `${location.protocol}//${location.host}${location.pathname}?${stringify(rest)}`;
if (token) {
	location.href = `/api/login?token=${encodeURIComponent(token)}&backUrl=${encodeURIComponent(backUrl)}`;
}

const app = dva({
	history: createBrowserHistory(),
	onError(err) {
		console.log("dva onError", err);
		if (err && err.status === 401) {
			goToLogin();
		}
		message.error(err && err.message || "位置错误", 3);
	}
});

// 配置 hooks 或者注册插件
// app.use(nprogressDva());
app.model(require("./models/global").default);

app.router(router);
app.start("#root");

export default app._store;
