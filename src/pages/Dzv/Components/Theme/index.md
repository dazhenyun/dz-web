## 主题按需引入

除了默认主题之外，系统还内置了6个主题，这些主题需要自己按需引入，方法如下：
```jsx
import "@dzv/charts/lib/Theme/dark";
import "@dzv/charts/lib/Theme/infographic";
import "@dzv/charts/lib/Theme/macarons";
import "@dzv/charts/lib/Theme/roma";
import "@dzv/charts/lib/Theme/shine";
import "@dzv/charts/lib/Theme/vintage";

// 如要哪个主题引入即可，无需全部引入
// 如何使用，以dark主题为例
import "@dzv/charts/lib/Theme/dark";

ReactDOM.render(
    <Line theme="dark" />,
    mountNode
);
```
