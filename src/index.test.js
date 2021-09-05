const quickclone = require('./index.js')

let i = { fruits: ['apple','banana','kiwi'], animals: ['cat','dog','mouse'] }
let o = { fruits: ['apple','banana','kiwi'], animals: ['cat','dog','mouse'] }

test('test cloning an object', () => {
    expect(quickclone.quickclone(i)).toStrictEqual(o)
})
