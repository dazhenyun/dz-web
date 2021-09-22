```jsx
import React from "react";
import ReactDOM from 'react-dom';
import { Ellipsis } from "tntd";

const Demo = props => {
    return (
        <>
            例1：
            <Ellipsis
                Popover
                copyable
                widthLimit={100}
                content="你看我有省略号吗？"
            />
            <br />
            例2：
            <Ellipsis
                copyable
                widthLimit={100}
                title="你看我有省略号吗？"
            />
            <br />
            例3：
            <div style={{ width: 100 }}>
                <Ellipsis>
                    你看我有省略号吗？
                </Ellipsis>
            </div>
            <br />
            例4：
            <div style={{ width: 100 }}>
                <Ellipsis placement="topLeft">
                    你看我有省略号吗？
                </Ellipsis>
            </div>
            <br />
            例5：
            <Ellipsis
                Popover
                copyable
                widthLimit={100}
                lines={2}
                content="你看我有省略号吗？你看我有省略号吗？你看我有省略号吗？"
            />
        </>
    )
};

ReactDOM.render(
    <Demo />,
    document.getElementById('root')
);

```