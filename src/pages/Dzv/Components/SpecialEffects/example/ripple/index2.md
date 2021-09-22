```jsx
ReactDOM.render(
    <div className="rippleRoot">
		<div className="eventRipple">
      		点击
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


@keyframes ripple {
    from {
        transform:   scale(0.1);
        opacity: 1;
    }

    to {
        opacity: 0;
        transform:  scale(3);
    }
}

.eventRipple {
    background-color: #2A9AF2;
    position: relative;
    cursor: pointer;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    border-radius: 3px;
    overflow: hidden;
    user-select: none;
    padding: 25px 70px;
    color: #FFFFFF;
    font-size: 18px;
    text-align: center;
}

.rippleEffect {
    background-color: rgba(255, 255, 255, .6);
    width: 100%;
    height: 100%;
    border-radius: 100%;
    position: absolute;
    animation-name: ripple;
    animation-iteration-count: 1;
    animation-duration: 1.2s;
  }

```
