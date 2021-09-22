import { message } from "antd";
import service from "./service";

export default {
	namespace: "home",
	state: {
		test: "123"
	},
	effects: {},

	reducers: {
		updateState(state, { payload }) {
			return {
				...state,
				...payload
			};
		}
	}
};
