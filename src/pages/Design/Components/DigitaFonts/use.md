## 如何使用
### 一、使用@font-face声明字体

```less
@font-face {
    font-family:'DINPro-Medium';
    font-display: swap;
    src:url('../font/DINPro-Medium.otf');
}
```

### 二、使用已经声明好的字体

```less
.test-font {
    font-family:"DINPro-Medium" !important;
    font-size: 16px;
    font-style: normal;
}
```
