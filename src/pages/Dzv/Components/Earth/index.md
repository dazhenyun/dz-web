- 内置世界各国离线地图数据
- 渲染地图基类，支持多组件接入

# 安装
```bash
npm install @tntv/three-sphere --save
```

# 如何使用
```jsx
import ThreeSphere from "@tntv/three-sphere";

// 初始化
const dom = document.getElementById('earth');
// 配置
const config = {
	dom,
	...
}; 
const threeSphereInstance = new ThreeSphere(config);
threeSphereInstance.init();
```

# 实例
