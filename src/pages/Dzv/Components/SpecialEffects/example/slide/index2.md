```jsx

ReactDOM.render(
    <div className="slideJumpContainer">
		<div className="slideJump"></div>
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


@keyframes slideJump {
	0%, 100% {
        width: 100%;
        height: 100%;
    }
    
    50% {
        width: 112%;
        height: 90%;
        transform: translateY(10%)
    }
    71% {
        width: 95%;
        height: 114%;
        transform: translateY(-14%)
    }
    85% {
        width: 105%;
        height: 96%;
    }
}

.slideJump {
    animation-name: slideJump;
    /* 动画指定需要多少秒或毫秒完成 */
    animation-duration: calc(var(--animate-duration) * 1.7);
    /* 动画将如何完成一个周期 */
    animation-timing-function: ease-in-out;
    /* 定义动画应该播放多少次 */
    animation-iteration-count: infinite;
}

```
