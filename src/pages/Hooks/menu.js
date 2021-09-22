import Introduce from "./Components/Introduce";
// state
import UseToggle from "./Components/UseToggle";
import UseLocalStorage from "./Components/UseLocalStorage";
import UseSessionStorage from "./Components/UseSessionStorage";
import UseCookie from "./Components/UseCookie";
import UseHistoryTravel from "./Components/UseHistoryTravel";
import UseTitle from "./Components/UseTitle";
import UseCopyToClipboard from "./Components/UseCopyToClipboard";
import UseFavicon from "./Components/UseFavicon";
// sideEffect
import UseDebounce from "./Components/UseDebounce";
import UseDebounceFn from "./Components/UseDebounceFn";
import UseThrottle from "./Components/UseThrottle";
import UseThrottleFn from "./Components/UseThrottleFn";
import UseInterval from "./Components/UseInterval";
// UI
import UseDrop from "./Components/UseDrop";
import UseVirtualList from "./Components/UseVirtualList";
import UseDynamicList from "./Components/UseDynamicList";
import UseSelections from "./Components/UseSelections";
// dom
import UseSize from "./Components/UseSize";
import UseDocumentVisibility from "./Components/UseDocumentVisibility";
import UseEventListener from "./Components/UseEventListener";
import UseFullscreen from "./Components/UseFullscreen";
import UseHover from "./Components/UseHover";
import UseInViewport from "./Components/UseInViewport";
import UseKeyPress from "./Components/UseKeyPress";
import UseMouse from "./Components/UseMouse";
import UseScroll from "./Components/UseScroll";
// advanced
import UseEventEmitter from "./Components/UseEventEmitter";
import UseCreation from "./Components/UseCreation";

const Menu = [
	{
		title: "快速上手",
		code: "introduce",
		component: Introduce
	},
	{
		title: "State(状态)",
		code: "state",
		children: [
			{
				title: "useToggle",
				code: "useToggle",
				component: UseToggle
			},
			{
				title: "useLocalStorage",
				code: "useLocalStorage",
				component: UseLocalStorage
			},
			{
				title: "useSessionStorage",
				code: "useSessionStorage",
				component: UseSessionStorage
			},
			{
				title: "useCookie",
				code: "useCookie",
				component: UseCookie
			},
			{
				title: "useHistoryTravel",
				code: "useHistoryTravel",
				component: UseHistoryTravel
			},
			{
				title: "useTitle",
				code: "useTitle",
				component: UseTitle
			},
			{
				title: "useCopyToClipboard",
				code: "useCopyToClipboard",
				component: UseCopyToClipboard
			},
			{
				title: "useFavicon",
				code: "useFavicon",
				component: UseFavicon
			}
		]
	},
	{
		title: "SideEffect(副作用)",
		code: "sideEffect",
		children: [
			{
				title: "useDebounce",
				code: "useDebounce",
				component: UseDebounce
			},
			{
				title: "useDebounceFn",
				code: "useDebounceFn",
				component: UseDebounceFn
			},
			{
				title: "useThrottle",
				code: "useThrottle",
				component: UseThrottle
			},
			{
				title: "useThrottleFn",
				code: "useThrottleFn",
				component: UseThrottleFn
			},
			{
				title: "useInterval",
				code: "useInterval",
				component: UseInterval
			}
		]
	},
	{
		title: "UI(用户界面)",
		code: "ui",
		children: [
			{
				title: "useDrop & useDrag",
				code: "useDrop",
				component: UseDrop
			},
			{
				title: "useVirtualList",
				code: "useVirtualList",
				component: UseVirtualList
			},
			{
				title: "useDynamicList",
				code: "useDynamicList",
				component: UseDynamicList
			},
			{
				title: "useSelections",
				code: "useSelections",
				component: UseSelections
			}
		]
	},
	{
		title: "Dom(操作dom)",
		code: "dom",
		children: [
			{
				title: "useSize",
				code: "useSize",
				component: UseSize
			},
			{
				title: "useDocumentVisibility",
				code: "useDocumentVisibility",
				component: UseDocumentVisibility
			},
			{
				title: "useEventListener",
				code: "useEventListener",
				component: UseEventListener
			},
			{
				title: "useFullscreen",
				code: "useFullscreen",
				component: UseFullscreen
			},
			{
				title: "useHover",
				code: "useHover",
				component: UseHover
			},
			{
				title: "useInViewport",
				code: "useInViewport",
				component: UseInViewport
			},
			{
				title: "useKeyPress",
				code: "useKeyPress",
				component: UseKeyPress
			},
			{
				title: "useMouse",
				code: "useMouse",
				component: UseMouse
			},
			{
				title: "useScroll",
				code: "useScroll",
				component: UseScroll
			}
		]
	},
	{
		title: "Advanced(高阶)",
		code: "advanced",
		children: [
			{
				title: "useEventEmitter",
				code: "useEventEmitter",
				component: UseEventEmitter
			},
			{
				title: "useCreation",
				code: "useCreation",
				component: UseCreation
			}
		]
	}
];

export default Menu;
