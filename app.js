var Config = require('vpm-config');

class Vgo {
    constructor() {
        this.CONFIG = new Config;
        this.CONFIG.init();
    }

    task(id, url) {
        var task = this.CONFIG.get(id) || [];
        task.push(url);
        this.CONFIG.set(id, task);
        return this;
    }

    now(id, args) {
        var res = [];
        var task = this.CONFIG.get(id) || [];
        task.forEach(url => {
            try{
                if(typeof url === 'function'){
                    res.push(url(args))
                }
                if(typeof url === 'string'){
                    let ret = require(url)
                    typeof ret === 'function' ?
                        res.push(ret(args)) : res.push(ret)
                }
            }
            catch(e){
                res.push(e)
            }
        })
        return res
    }

    fire() {
        this.now.apply(this, arguments)
    }

    emit() {
        this.now.apply(this, arguments)
    }

    trigger() {
        this.now.apply(this, arguments)
    }
}

module.exports = Vgo['default'] = Vgo;
