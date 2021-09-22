```jsx
import React from 'react';
import { useFavicon } from '@tntd/hooks';

export default () => {
    useFavicon("https://sinan.tongdun.me/cdn/bucket/disk/book/2805/955/20200715140114981_favicon-sinan.png");

    return (
        <div>
            观察浏览器tab图标
        </div>
    );
};
```