```jsx

ReactDOM.render(
    <div className="slideRoot">
    <div className="slideUpDown"></div>
    <div className="eventPoint">
      <div className="slideUpDown"></div>
      <div className="eventCircle">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="eventInner"></div>
    </div>
  </div>,
    mountNode
);

@keyframes slideUpDown {
	from{
		transform: translateY(0);
	}
	to{
		transform: translateY(20px)
	}
}

.slideUpDown {
    animation-name: slideUpDown;
    /* 动画指定需要多少秒或毫秒完成 */
    animation-duration: calc(var(--animate-duration) * 1);
    /* 动画将如何完成一个周期 */
    animation-timing-function: ease-in;
    /* 定义动画应该播放多少次 */
    animation-iteration-count: infinite;
    /* 属性定义是否循环交替反向播放动画 */
    animation-direction: alternate;
}

```
