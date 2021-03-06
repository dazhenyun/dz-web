```jsx
ReactDOM.render(
    <div className="rippleRoot">
		<div className="shadowRipple pink"></div>
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

@keyframes rippleGray {
    0% {
        box-shadow: 0 4px 10px rgba(102, 102, 102, 0.1),
            0 0 0 0 rgba(102, 102, 102, 0.1),
            0 0 0 5px rgba(102, 102, 102, 0.1),
            0 0 0 10px rgba(102, 102, 102, 0.1);
    }

    100% {
        box-shadow: 0 4px 10px rgba(102, 102, 102, 0.1),
            0 0 0 5px rgba(102, 102, 102, 0.1),
            0 0 0 10px rgba(102, 102, 102, 0.1),
            0 0 0 20px rgba(102, 102, 102, 0);
    }
}

@keyframes ripplePink {
    0% {
        box-shadow: 0 4px 10px rgba(255, 65, 130, 0.1),
            0 0 0 0 rgba(255, 65, 130, 0.1),
            0 0 0 5px rgba(255, 65, 130, 0.1),
            0 0 0 10px rgba(255, 65, 130, 0.1);
    }

    100% {
        box-shadow: 0 4px 10px rgba(255, 65, 130, 0.1),
            0 0 0 5px rgba(255, 65, 130, 0.1),
            0 0 0 10px rgba(255, 65, 130, 0.1),
            0 0 0 20px rgba(255, 65, 130, 0);
    }
}

.shadowRipple {
    display: block;
    background: #FFF;
    width: 48px;
    height: 48px;
    line-height: 48px;
    text-align: center;
    border-radius: 100%;
    box-sizing: border-box;
    color: #666;
    animation: rippleGray 0.6s linear infinite;
    overflow: hidden;
}

.shadowRipple.pink {
	margin-left: 80px;
    background: #ff4081;
    color: white;
    animation: ripplePink 0.2s linear infinite;
}

```
