## API

| 参数           | 说明                                                               | 类型        | 默认值   | 版本 |
| -------------- | ------------------------------------------------------------------ | ----------- | -------- | ---- |
| isArrayType    | 数值传输类型是否为数组                                             | bool        | false    | -    |
| modelKeys      | {idKey,nameKey,urlKey} 针对 isArrayType 为 true 有效               | obj         | -        | -    |
| acceptSuffix   | 上传的类型格式,多类型以逗号相隔传入                                | string      | -        | -    |
| maxLength      | 最大上传数量                                                       | num         | 1        | -    |
| templateUrl    | 下载模板链接,接收字符串和函数,不传不展示下载模板                   | string/func | function | -    | - |
| maxSize        | 单文件最大上传大小，以 M 为单位                                    | num         | 2        | -    |
| toalMaxSize    | 多文件上传时的总 M 数                                              | num         | 2        | -    |
| disabled       | 不可用,在详情等情况展示                                            | bool        | false    | -    |
| separator      | 分隔符，用于多文件 url 分隔                                        | string      | ;        | -    |
| action         | 上传请求路径                                                       | string      | -        | -    |
| nameRender     | 文件选项展示 (file)=>ReactNode                                     | func        | -        | -    |
| showUploadList | showPreviewIcon,showDownloadIcon,默认开启预览                      | obj         | -        | -    |
| onRemove       | 删除回调,删除文件需要调用接口, Promise 对象返回 success,(file)=>{} | func        | -        | -    |
| onPreview      | 预览回调,(file,onCancel)=>{}                                       | func        | -        | -    |
| onDownload     | 下载回调,(file)=>{}                                                | func        | -        | -    |
| beforeUpload   | (file,fileList)=>{} ,返回 false 阻止上传                           | func        | -        | -    |
| isOSS          | 是否 OSS 方式                                                      | bool        | false    | -    |
| queryOssSign   | 获取签名的方法，async 函数 或签名对象                              | func/obj    | -        | -    |
| isNRT          | 是否非实时上传                                                     | bool        | false    | -    |
| 其它           | 支持 antd Upload 组件的所有属性                                    | -           | -        | -    |

| 参数 | 说明                                  |
| ---- | ------------------------------------- |
| jpeg |                                       |
| jpg  |                                       |
| png  |                                       |
| xlsx |                                       |
| csv  |                                       |
| docx |                                       |
| pdf  |                                       |
| 其它 | 请参考 antd Upload 组件的 accept 方式 |

## 非实时上传组件

不支持预览、下载功能,输出值为 file 对象数组，有别于实时上传组件为字符串(多文件地址以分隔符分隔)
