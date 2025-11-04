"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyService = void 0;
var MyService = /** @class */ (function () {
    function MyService(name) {
        this.name = name;
    }
    MyService.prototype.getName = function () {
        return this.name;
    };
    MyService.create = function (name) {
        if (MyService.instance === null) {
            console.log('Deberia entrar una vez');
            MyService.instance = new MyService(name);
        }
        return MyService.instance;
    };
    MyService.instance = null;
    return MyService;
}());
exports.MyService = MyService;
var myServiceInstance = MyService.create('My Service1');
console.log(myServiceInstance.getName());
var myServiceInstance2 = MyService.create('My Service2');
console.log(myServiceInstance2.getName());
var myServiceInstance3 = MyService.create('My Service3');
console.log(myServiceInstance3.getName());
