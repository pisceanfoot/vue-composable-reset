# vue-composable-reset
reset vue reactive object


## install
npm i vue-composable-reset


## function

### assignObject

copy all form src to dist object, clear all properties if src is null

```
import { assignObject } from 'vue-composable-reset'

export default {
  setup() {
    const reactiveObj = reactive({})
    const reactiveArray = reactive([])

    setTimeout(() => {
      // fetch data from remote
      const result = { id: 1, description: 'result from remote ajax' }

      assignObject(reactiveObj, result)
      console.log(reactiveObj) // { id: 1, result: 'result from remote ajax' }

      assignObject(reactiveArray, [result])
      console.log(reactiveArray) // [{ id: 1, result: 'result from remote ajax' }]
    }, 100)
  }
}
```

### resetObject

clear all properties in object, and set value to `null`

```
import { assignObject, resetObject } from 'vue-composable-reset'

export default {
  setup() {
    const reactiveObj = reactive({})

    setTimeout(() => {
      // fetch data from remote
      const result = { id: 1, description: 'result from remote ajax' }

      assignObject(reactiveObj, result)
      console.log(reactiveObj) // { id: 1, result: 'result from remote ajax' }

      resetObject(reactiveObj)
      console.log(reactiveObj) // { id: null, result: null }
    }, 100)
  }
}
```


### resetArray

clear all item in array

```
import { assignObject, resetArray } from 'vue-composable-reset'

export default {
  setup() {
    const reactiveArray = reactive([])

    setTimeout(() => {
      // fetch data from remote
      const result = [{ id: 1, description: 'result from remote ajax' }]

      assignObject(reactiveArray, result)
      console.log(reactiveArray) // [{ id: 1, result: 'result from remote ajax' }]

      resetObject(reactiveArray)
      console.log(reactiveArray) // []
    }, 100)
  }
}
```