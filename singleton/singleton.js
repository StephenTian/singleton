/*
 *created by StephenTian
 *2016.8.23
 *
*/
var Singleton = function(name) {
  //属性
  //instance实例
  this.name = name;
  this.instance = null;
}
Singleton.prototype.getName = function() {
  console.log(this.name);
};
Singleton.getInstance = function(name) {
  if (!this.instance) {
    this.instance = new Singleton(name);
  }
  return this.instance;
}
var a = Singleton.getInstance('sven1');
var b = Singleton.getInstance('sven2');
a.getName();
b.getName();
