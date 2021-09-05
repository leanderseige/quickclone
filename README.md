# quickclone
This is just a test.

quickclone helps deep-copying objects and arrays by en- and decoding them to/from JSON.

## Usage

```
import { quickclone } from 'quickclone'

let mydata = { fruits: ['apple','banana','kiwi'], animals: ['cat','dog','mouse'] }
let mycopy = quickclone(mydata)
console.log(mycopy)
```
