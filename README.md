## Introduce

&nbsp;&nbsp;做该项目的出发点来自于女朋友的一个日常行为，我发现她在每天看文献找资料的时候，都需要找到指定的网站并搜索关键字，可能打开的网页很多，
这不免有一些混乱，我想是不是为她可以做点什么？于是就做出了这个 “小傻瓜导航站点” 。

&nbsp;&nbsp;该导航站点最大的特点在于，你不需要打开指定的网站即可通过关键字搜索该网站的资料，这会省去不少找网站的时间，进而可以提高工作效率，
相比将网站存到浏览器书签方便多了。该站点主要关联的几个网站有：“百度”，“百度学术”，“中国知网”，“超星发现”，“CSDN”，“GitHub”，“知乎”，“读秀”，
同时也为用户提供了添加网站快捷方式的接口，以及在开发的过程中对样式做了一些考量，支持切换背景图片，看板娘动画和代办事件清单的功能。

&nbsp;&nbsp;最近新增加了照片墙和纪念日页面，准备给女朋友一个惊喜，嘻嘻 ✌

### Project setup/init

|功能                       |命令                                                   |备注                                              |
|:---                      |:---                                                   |:---                                             |
|setup -g                  |npm install -g parcel-bundler                          |//Global installation parcel                     |
|setup -D                  |npm install -D parcel-bundler                          |//devDependencies parcel                         |
|run                       |parcel src/index.html                                  |//If command line shows parcel was not founded ↓ |
|npx run                   |npx parcel src/index.html --no-cache                   |//npx: Automatic search parcel. --no-cache!      |
|build                     |parcel build src/index.html --no-minify                |//in package.json script                         |
|set the project path      |parcel build src/index.html --no-minify --public-url ./|//Sometime you need set public-url               |
|other command             |parcel build --help                                    |-                                                |
