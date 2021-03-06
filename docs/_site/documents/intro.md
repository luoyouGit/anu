# 介绍
自微信小程序出来后，互联网进入一个新的纪元。中国移动互联网再次三巨头切割，三大小程序加上以小米为首的快应用，割据这个大蛋糕。由于手机的容量有限，每个人不可能装太多APP ，总有一些APP大家都装，它们称之为超级APP，它们集成越来越多的功能，并且以小程序，直达号，公众号等方式收纳第三方开发的功能。它们巨大的流量红利不容小视，这就是小程序越来越火的原因。

>在中国移动互联网中PWA并不是前端技术的未来，因为国内最有价值的内容，例如微信订阅号、微博以及各种自媒体，还有各种短视频内容，无一例外都是私域内的东西

![miniapp](./zoology.jpg)

小程序开始体积限制得很死，并且语法表现力非常贫乏。但长得有点像vue，因此为了便利我们的开发，出现一些以vue编写小程序的转译框架，如wepy,mpvue。但随着体积的放开，及人们对小程序的研究深入，发现其虚拟DOM机制就是模仿自React，因此用React开发小程序其实效果更佳。React的JSX 动态模板表现更强，语法提示及着色更是被各大IDE广泛支持。于是娜娜奇转译器诞生了。
![nanachi](./nanachi.jpg)

娜娜奇，是一处编写多处运行的小程序快应用的转译框架，提供`按平台打包核心库`，`按平台打包缺省组件`，`按平台打包业务代码`，`按平台注入API包`（以后这个会演化为按需注入平台API补丁包）的能力。

快应用，国内手机商提供的内置迷你的hybird方案，小程序，BAT提供的依赖于大流量APP的寄生APP方案。

核心库是指ReactWx, ReactBu, ReactAli, ReactQuick,针对不同的平台使用不同的迷你React库，娜娜奇是希望使用React强大的组件机制来突破小程序的弱模板限制。

缺省组件是指其他平台都使用微信那套内置组件来构建页面，毕竟 其他平台都是抄微信的，但抄的速度没有这么快，也没有这么完整，需要我们提供一些组件来补全。

按需打包业务代码是指登录支付等核心流程可能出入太大，如果使用if else会导致小程序的size过大，因此提供ANU_ENV变量实现打编译打包对应平台的代码。

API包是指wx, swan, my这些对象，为小程序提供调用电池，摄像头，通信录，二维包等原生API的能力，但是它们也不统一，需要我们做兼容处理。直接访问React.api就能得到磨平后的API。

接需注入API补丁包则是刚才功能的更高级形式，目的是让体积更加小。



[快速开始](install.md)