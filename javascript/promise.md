##  记 promise 的 一些小知识


### promise的作用

  *  实现异步编程的一种解决方法；
  *  解决了回调地狱的问题；

###  promise的实现

  * 基于观察者的设计模式实现的， .then/.catch里面的要执行的函数会被塞入观察者数组，当promise的状态改变时，就会去触发执行观察数组中的函数；
  * 依赖于时间循环机制中的微任务；
  * Promises/A+ 规范；

### promise的基础知识点

  #### 执行函数

    * promise 接受的是一个函数（即执行函数）；
    * 执行函数 接受有两个参数：reslove 和reject；通过这两个参数（是函数）来改变promise的状态，并执行对应的回调函数；

  #### 3个状态

    * pending ：等待中
    * resolved：已成功
    * rejected：已失败

    *注意：一旦状态改变，状态不会再变了*
  
