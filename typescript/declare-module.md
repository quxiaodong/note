```json
// tsconfig.json
{
  "include": [
    "typings/**/*.d.ts"
  ]
}
```

```typescript
// typings/fp.d.ts
declare module 'find-free-port' {
  function fp (
    port: number,
    callback: (error: Error, port: number) => void
  ): void

  export = fp
}
```

```typescript
import fp from 'find-free-port'

fp(3000, (error, port) => {
  console.log(port)
})
```