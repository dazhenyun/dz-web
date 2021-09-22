```jsx
ReactDOM.render(
    <div class="rippleRoot">
		<div className="waterRipple">
			<div className="waterDrop"></div>
		</div>
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

@keyframes dripple {
    0% {
        transform: translate(50%) rotateX(75deg) scale(0.2);
    }

    25% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(50%) rotateX(75deg) scale(3);
    }
}

.waterRipple {
    position: relative;
    margin: 0 auto;
    height: 200px;
    width: 200px;
}

.waterRipple:before,
.waterRipple:after {
    content: '';
    position: absolute;
    z-index: 10;
    top: 55%;
    right: 50%;
    transform: translate(50%) rotateX(75deg);
    border-radius: 50%;
    opacity: 0;
    width: 75%;
    height: 75%;
    border: 2px solid skyblue;
    animation: dripple 2s ease-out 1s infinite;
}

.waterRipple:after {
    animation: dripple 2s ease-out 1.7s infinite;
}


@keyframes drip {
    45% {
        bottom: 0;
        border-radius: 100% 5% 100% 100%;
    }

    100% {
        bottom: 0;
        border-radius: 100%;
        opacity: 0;
    }
}


.waterDrop {
    position: absolute;
    border-radius: 100% 5% 100% 100%;
    margin: 0px;
    bottom: 30%;
    background: deepskyblue;
    left: 50%;
    transform: rotate(-45deg) translate(-50%, -50%);
    height: 20px;
    width: 20px;
    animation-name: drip;
    /* 动画指定需要多少秒或毫秒完成 */
    animation-duration: calc(var(--animate-duration) * 4);
    /* 动画将如何完成一个周期 */
    animation-timing-function: linear;
    /* 定义动画应该播放多少次 */
    animation-iteration-count: infinite;
}


```
