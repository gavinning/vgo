vgo
---
用于注册在特定情况下才会执行的任务

### Install
```sh
npm i vgo --save
```

### Usage
```js
var Go = require('vgo');
var go = new Go;
```
```js
go.task('t1', path.join(__dirname, '../test/task'))
go.task('t1', function(arg){
    console.log(arg)
})

go.now('t1', {b:1})
```
