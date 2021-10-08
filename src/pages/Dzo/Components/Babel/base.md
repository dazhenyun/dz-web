## 特性
- 减小打包体积
- JavaScript 代码按需引入
- 样式按需引入

## 使用
```bash
npm i @dzo/babel-plugin-dz -D
```

配置示例：
```json
// In your .babelrc
{
	"plugins": [
		[
			"@dzo/babel-plugin-dz",
			{
				"library": [
					"@dzv/charts"	// 示例
				]
			}
		]
	]
}
```

## 组件开发规范
```jsx
// index.js
import { helloworld } from 'yournpm';

      ↓ ↓ ↓ ↓ ↓ ↓

var _helloworld = require('yournpm/lib/helloworld');
```
