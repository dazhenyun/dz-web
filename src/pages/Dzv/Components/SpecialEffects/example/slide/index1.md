```jsx

ReactDOM.render(
    <div className="slideRoot">
		<div className="slideGuide"></div>
	</div>,
    mountNode
);

:root {
  --animate-duration: 1s;
  --animate-delay: 1s;
  --animate-repeat: 1;
  --transform-scale: 1;
  --transform-rotate: 1;
  --transform-rotate360: 360deg;
}


@keyframes slideGuide {
    0% {
        transform: translate(0);
    }

    14% {
        transform: translate(5px, 5px);
    }

    28% {
        transform: translate(-5px, -5px);
    }

    42% {
        transform: translate(5px, 5px);
    }

    56% {
        transform: translate(-5px, -5px);
    }

    50% {
        transform: translate(0);
    }
}

.slideGuide {
    animation-name: slideGuide;
    /* 动画指定需要多少秒或毫秒完成 */
    animation-duration: calc(var(--animate-duration) * 1.4);
    /* 动画将如何完成一个周期 */
    animation-timing-function: ease-in-out;
    /* 定义动画应该播放多少次 */
    animation-iteration-count: infinite;
}


```
