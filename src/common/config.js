const {
	protocol,
	host
} = window.location;
const isDev = process.env.SYS_ENV === "development";
const wsHost = process.env.BABEL_ENV !== "production" ? "http://127.0.0.1:7001" : window.location.host;

export default {
	api: "http://localhost:8888",
	apiPrefix: "/api",
	wsHost,
	X_USER_TOKEN: "X-User-Token",
	X_USER_ID: "X-User-ID",
	SN_USER_TOKEN: "sn-user-token",
	ssoLoginUrl: isDev ? "http://login-inner-dev.tongdun.cn:8088/userLogin.htm" : "https://login-inner.tongdun.cn/userLogin.htm",
	apiLogin: `${protocol}//${host}/api/login`,
	apiLogout: `${protocol}//${host}/api/logout`
};
