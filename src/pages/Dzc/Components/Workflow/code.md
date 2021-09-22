```jsx
import React, { useRef } from "react";
import ReactDOM from 'react-dom';
import Workflow from "@tntx/workflow";

const Demo = props => {
    const graphInstance = useRef();

    return (
        <div style={{ width: 1000, height: 800 }}>
            <Workflow
                saveLoading={false} // 与onSave配合使用
                onSave={(obj) => {
                    console.log(obj); // 返回的数据
                }}
                getGraphInstance={(ref) => { graphInstance.current = ref.current; }} // 获取画布实例
            />
        </div>
    )
};

ReactDOM.render(
    <Demo />,
    document.getElementById('root')
);
```