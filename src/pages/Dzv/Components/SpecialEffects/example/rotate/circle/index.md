```jsx

ReactDOM.render(
    <div className="root">
      <div className="rotateCircle circleLeft"></div>
      <div className="rotateCircle circleRight"></div>
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


@keyframes circleLeft {
    from {
        transform: rotate(var(--transform-rotate360));
    }

    to {
        transform: rotate(0deg);
    }
}

.circleLeft {
    animation-name: circleLeft;
    /* 动画指定需要多少秒或毫秒完成 */
    animation-duration: calc(var(--animate-duration) * 5);
    /* 动画将如何完成一个周期 */
    animation-timing-function: linear;
    /* 定义动画应该播放多少次 */
    animation-iteration-count: infinite;
}

@keyframes circleRight {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(var(--transform-rotate360));
    }
}

.circleRight {
    animation-name: circleRight;
    /* 动画指定需要多少秒或毫秒完成 */
    animation-duration: calc(var(--animate-duration) * 5);
    /* 动画将如何完成一个周期 */
    animation-timing-function: linear;
    /* 定义动画应该播放多少次 */
    animation-iteration-count: infinite;
}

```
