## API

| 参数        | 说明                                                      | 类型    | 默认值               | 版本 |
| ----------- | --------------------------------------------------------- | ------- | -------------------- | ---- |
| hide        | 是否隐藏                                                  | bool    | false                |      |
| auth        | 权限                                                      | bool    | true                 |      |
| name        | 名称                                                      | string  | -                    |      |
| type        | 类型（link,confirm,download,status,more）,可不填          | string  | -                    |      |
| method      | 方法，点击回调                                            | funcion | -                    |      |
| pathname    | 路径，type 为 download、link 时有效，必填                 | string  | -                    |      |
| confirmText | 确认框询问文案，type 为 confirm 有效                      | string  | 是否确认操作？       |      |
| subText     | 确认框次文本， type 为 status 时有效                      | string  | -                    |      |
| fileName    | 下载时的文件名，type 为 download 时有效，必填             | string  | -                    |      |
| status      | 当前状态，1 为启用，0 为停用，type 为 status 时有效，必填 | string  | -                    |      |
| textEnum    | 0、1 对应的文案，type 为 status 时有效，必填              | obj     | {0:'停用'，1:'启用'} |      |
| children    | type 为 more 时有效，必填                                 | []      | -                    |      |