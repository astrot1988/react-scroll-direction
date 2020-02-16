# React Scroll Direction

A React hook to detect scroll direction.

## Get started

Install with npm:

```bash
npm install --save @hermanwikner/react-scroll-direction
```

Install with yarn:

```bash
yarn add @hermanwikner/react-scroll-direction
```

## Usage

Wrap your app in the `ScrollInfoProvider` component and then use the `useScrollDirection` hook
to access scroll direction data. The hook return "UP" or "DOWN". Example:

```js
// App.js

import React from 'react';
import { ScrollDirectionProvider } from '@hermanwikner/react-scroll-direction';

const App = () => {
  return <ScrollDirectionProvider>{/* Your app code here */}</ScrollDirectionProvider>;
}
```

```js
// Example.js

import React from 'react';
import { useScrollDirection } from '@hermanwikner/react-scroll-direction';

const Example = () => {
  
    const direction = useScrollDirection();

    const style = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        color: direction === 'UP' ? 'lightcoral' : 'lightblue'
    }

    return <h1 style={style}>{direction}</h1>
}

export default Example;
```
