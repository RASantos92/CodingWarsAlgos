/**
 * Constructor DependencyInjector
 * @param {Object} - object with dependencies
 */

//https://www.codewars.com/kata/5302d655be2a91068b0001fb/solutions
var DI = function (dependency) {
    this.dependency = dependency;
};


var modules = {
        'app' : function(){return 'module app';},
        'login' : function(){return 'module login';},
        'i18n' : function(){return 'module i18n';}
}


// Should return new function with resolved dependencies
DI.prototype.inject = function (func) {

    console.log(func.toString());
    var deps = /^[^(]+\(([^)]+)/.exec(func.toString());
    console.log(deps);
    console.log("this" , this)
    console.log("***************************\n", deps[1].split(/\s?,\s?/).map(function (dep) {
        console.log("this is this on line 25", this);
        return this.dependency[dep];
    }.bind(this)))


    deps = deps ? deps[1].split(/\s?,\s?/).map(function (dep) {return this.dependency[dep];}.bind(this)) : [];
    console.log(deps);
    return function () {
        return func.apply(this, deps);
    };
}

const newDi = new DI(modules);
console.log("this console logs first",newDi.dependency['i18n']);

var myFunc = newDi.inject(function (i18n, login, app){
    return [i18n(), login(), app()].join(', ')
})

console.log(myFunc());