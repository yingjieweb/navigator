<p align="center">
    <a href="https://github.com/yingjieweb/navigator">
        <img src="https://raw.githubusercontent.com/yingjieweb/navigator/master/src/assets/screenshot/screenshot.png" alt="小傻瓜导航站点">
    </a>
</p>

### 😀 站点介绍

&nbsp;&nbsp;本站创立于 <strong>2020 年 03 月 23 日</strong>，做该项目的出发点来自于女朋友的一个日常行为，我发现每次她在看论文找资料的时候，
都需要找到指定的网站并搜索关键字，可能打开的标签页很多，这不免有一些混乱，我想是不是可以为她做点什么？ 于是就有了这个 <strong>“小傻瓜导航站点”</strong> 👻。

&nbsp;&nbsp;本站最大的特点在于，不需要打开指定的网站即可通过关键字搜索目标网站的资料，这会省去不少找网站的时间，相比将网站存到浏览器书签要方便的多。 
本站主要关联的几个网站有：“百度”，“知乎”，“CSDN”，“GitHub”，“超星发现”，“百度学术”，“读秀” 等。同时，本站也提供了添加网站快捷方式的接口。

&nbsp;&nbsp;经过断断续续的迭代，本站在原来的基础上对样式进行了一轮优化，并添加了代办事件、旅游城市、小愿望、切换背景图片、照片墙、纪念日等功能，
并于 <strong>2021 年 06 月 01 日 </strong>发布第一个正式版本 🎉。

### 😉 关于开源

&nbsp;&nbsp;由于最初只是想给女朋友做一个方便日常工作和学习的小导航站点，并不打算面向大众用户，而且开发本站时正值我学习 <strong>jQuery</strong> 之际， 
所以本站也算是我个人的一个学习和实践的小项目，没有什么高深的架构设计和奇技淫巧，如果你感兴趣的话，不妨使用该源码搭建一个非常有趣的导航网站送给你的女朋友 😉。

&nbsp;&nbsp;哦哦，我忘了，你怎么可能会有女朋友呢 🐶。既然没有，那还不赶快去找一个，等着国家给你发呢？😒

### 😘 联系方式
在使用本站的过程中若出现任何问题，非常欢迎各位通过下面的方式给我留言和反馈 ~

github: [https://github.com/yingjieweb](https://github.com/yingjieweb) </br>
csdn: [https://blog.csdn.net/Marker__](https://blog.csdn.net/Marker__) </br>
email: [1184061078@qq.com](https://mail.qq.com/)

### 🧐 Run and build
|功能                       |命令                                                   |备注                                              |
|:---                      |:---                                                   |:---                                             |
|setup -g                  |npm install -g parcel-bundler                          |//Global installation parcel                     |
|setup -D                  |npm install -D parcel-bundler                          |//devDependencies parcel                         |
|run                       |parcel src/index.html                                  |//If command line shows parcel was not founded ↓ |
|npx run                   |npx parcel src/index.html --no-cache                   |//npx: Automatic search parcel. --no-cache!      |
|build                     |parcel build src/index.html --no-minify                |//in package.json script                         |
|set the project path      |parcel build src/index.html --no-minify --public-url ./|//Sometime you need set public-url               |
|other command             |parcel build --help                                    |-                                                |