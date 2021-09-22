import createServices from "@/services/createServices";

export default createServices({
	initConfig: {
		url: "/initconfig"
	},
	upload: {
		pathname: "/bucket/upload",
		url: "/bucket/upload?path={path}",
		method: "POST",
		dataType: "formdata"
	}
});
