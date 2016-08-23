var path = require('path')
var Go = require('../app')
var go = new Go;

go.task('t1', path.join(__dirname, '../test/task'))
go.now('t1', {a:1})

go.task('t1', function(arg){
    console.log(arg)
})
go.now('t1', {b:1})
