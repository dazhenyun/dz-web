```jsx
import React from 'react';
import { useDocumentVisibility } from '@tntd/hooks';

export default () => {
    const documentVisibility = useDocumentVisibility();

	useEffect(() => {
		if (documentVisibility === "visible") {
			console.log(`Current document visibility state: ${documentVisibility}`);
		} else {
			console.log(`Current document visibility state: ${documentVisibility}`);
		}
	}, [documentVisibility]);

    return (
        <div>
            Current document visibility state: {documentVisibility}
        </div>
    );
};
```