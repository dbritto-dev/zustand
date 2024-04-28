---
title: createContext
description:
nav: 201
---

# createContext

`createContext` lets you create a context that components can provider or read. Lorem ipsum dolor,
sit amet consectetur adipisicing elit. Voluptate a ipsum in accusamus adipisci consectetur
aspernatur pariatur excepturi nam quod architecto id doloremque repellat nisi minus deserunt, quae
aperiam quasi.

::: code-group

```ts [TypeScript]
createContext<StoreApi<T>>(): { Provider: (props: any)=> JSX.Element, useStore: () => T, useStoreApi: () => StoreApi<T> }
```

```js [JavaScript]
createContext()
```

:::