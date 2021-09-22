```jsx
import React, { PureComponent } from "react";
import FormulaEdit from "@dzc/formula-edit";

export default class Home extends PureComponent {

    state = {
        fieldList: [
            { name: "放款金额", value: "fkje" },
            { name: "实际放款金额", value: "sjfkje" },
            { name: "借款人姓名", value: "jkrxm" },
            { name: "借款人", value: "jkrsjh" },
            { name: "借款人身份证", value: "jkrsfz" }
        ],
        methodList: [
            { name: "求和", value: "求和(,)", realValue: "sum" },
            { name: "平均值", value: "平均值(,)", realValue: "avg" },
            { name: "最大值", value: "最大值(,)", realValue: "max" },
            { name: "最小值", value: "最小值(,)", realValue: "min" },
        ],
        normalList: [
            { name: "且", value: "and" },
            { name: "或", value: "or" }
        ],
        defaultCode: "@实际放款金额 = #最大值(@放款金额, 100) 或 #求和(@实际放款金额, 200); "
    }

    getCode = (code, data) => {
        console.log(code, data);
    }

    handleBtn = (item) => {
        this.refs.formulaRef.insertValue(`#${item.value}`);
    }

    render() {
        const { fieldList, methodList, normalList, defaultCode } = this.state;

        return (
            <FormulaEdit
                ref="formulaRef"
                theme="night" // 主题
                height={300} // 高度
                defaultValue={defaultCode} // 初始化值
                fieldList={fieldList} // @唤起
                methodList={methodList} // #唤起
                normalList={normalList} // 自定义无需校验关键词
                readOnly={false} // 是否只读
                lineNumber={true} // 是否显示列数
                onChange={this.getCode} // 回调
            >
                <div className="formula-tag">
                    {
                        methodList.map((item, index) => {
                            return (
                                <button
                                    key={index}
                                    onClick={() => this.handleBtn(item)}
                                >
                                    {item.name}
                                </button>
                            );
                        })
                    }
                </div>
            </FormulaEdit>
        );
    }
}
```