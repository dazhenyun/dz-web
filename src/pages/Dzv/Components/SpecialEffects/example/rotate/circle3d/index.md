```jsx
ReactDOM.render(
    <div className="root">
    <div className="rotateCircle3">
      <div className="circleLeft3d"></div>
    </div>
    <div className="rotateCircle3">
      <div className="circleRight3d"></div>
    </div>
    <div className="rotateCircle3 rotateCircleGroup">
      <div className="circleLeft3d"></div>
      <div className="circleRight3d"></div>
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


@keyframes circleLeft3d {
    0% {
        transform: rotateX(calc(var(--transform-rotate) * 75deg)) scale(calc(var(--transform-scale) * 0.8)) rotateZ(var(--transform-rotate360));
    }

    100% {
        transform: rotateX(calc(var(--transform-rotate) * 75deg)) scale(calc(var(--transform-scale) * 0.8)) rotateZ(0deg);
    }
}

.circleLeft3d {
    transform: rotateX(calc(var(--transform-rotate) * 75deg)) scale(calc(var(--transform-scale) * 0.8)) rotateZ(0deg);
    animation-name: circleLeft3d;
    /* 动画指定需要多少秒或毫秒完成 */
    animation-duration: calc(var(--animate-duration) * 6);
    /* 动画将如何完成一个周期 */
    animation-timing-function: linear;
    /* 定义动画应该播放多少次 */
    animation-iteration-count: infinite;
}

@keyframes circleRight3d {
    0% {
        transform: rotateX(calc(var(--transform-rotate) * 75deg)) scale(var(--transform-scale)) rotateZ(0deg);
    }
    
    100% {
        transform: rotateX(calc(var(--transform-rotate) * 75deg)) scale(var(--transform-scale)) rotateZ(var(--transform-rotate360));
    }
}

.circleRight3d {
    transform: rotateX(calc(var(--transform-rotate) * 75deg)) scale(var(--transform-scale)) rotateZ(0deg);
    animation-name: circleRight3d;
    /* 动画指定需要多少秒或毫秒完成 */
    animation-duration: calc(var(--animate-duration) * 6);
    /* 动画将如何完成一个周期 */
    animation-timing-function: linear;
    /* 定义动画应该播放多少次 */
    animation-iteration-count: infinite;
}

```
