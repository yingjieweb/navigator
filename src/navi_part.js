import {DateFormat} from "./utils/DateFormat"

// 获取 localStorage - siteList
let oldSitesCache = localStorage.getItem('sitesCache')
let sitesCache = JSON.parse(oldSitesCache)
let hashMap = sitesCache ||  [
  {logoPath: require(`./assets/img/icon/icon1.png`), url: 'http://www.graduate.nuaa.edu.cn'},
  {logoPath: require(`./assets/img/icon/icon2.png`), url: 'https://juejin.im'},
  {logoPath: require(`./assets/img/icon/icon3.png`), url: 'https://xueshu.baidu.com'},
  {logoPath: require(`./assets/img/icon/icon4.png`), url: 'https://www.cnki.net'}
]

// 获取 localStorage - wishList
let oldWishListCache = localStorage.getItem('wishListCache')
let wishListCache = JSON.parse(oldWishListCache)
let wishList = wishListCache || []

// 获取 localStorage - todList
let oldTodoListCache = localStorage.getItem('todoListCache')
let todoListCache = JSON.parse(oldTodoListCache)
let todoList = todoListCache || []

// 简化 url
const simplifyUrl = (url) => {
  return url.replace('https://', '')
    .replace('http://', '')
    .replace('www.', '')
    .replace('graduate.', '')
    .replace('.com', '')
    .replace('.cn', '')
    .replace(/\/.*/, '') // 删除 / 开头的内容
}

let $naviPage = $('.navi-page')  // 导航页
let $indicatorUl = $('.indicator ul')  // 切换标识 ul
let $indicatorLis = $indicatorUl.find('li')  // 切换标识 ul > lis
let $todoButton = $('.todo') // 获取代办 button
let $todoInput = $('.todo-input') // 获取代办 input
let $todoListUl = $('.todo-list-ul') // 获取 todoListUl
let $mapButton = $('.map') // 获取地图 button
let $wishInput = $('.wish-input') // 获取愿望 input
let $wishList = $('.wish-list') // 获取愿望 list
let $wishListUl = $('.wish-list-ul') // 获取愿望 listUl
let $wishButton = $('.wish-button') // 获取愿望按钮
let $tabBar = $('.tab-bar')  // 获取 tabBar 的按钮
let $search = $('.search')  // 获取 search 表单
let $input = $('.search input')  // 获取 search 表单的 input
let $addSiteLi = $('.add-site-li') // 获取新增快捷方式按钮
let $audioWind = $("#audio-wind")[0]  // 获取 wind 音频元素
let $audioLove = $("#audio-love")[0]  // 获取 love 音频元素
let $windmill = $('.windmill') // 获取底部的箭头

// 隐藏 todoInput、wishInput、wishList
$('body').on('click',() => {
  $todoInput.css('display', 'none')
  $wishInput.css('display', 'none')
  $wishList.css('display', 'none')
})

// 添加代办事件
$todoButton.on('click', (event) => {
  event.stopPropagation()
  $todoInput.on('click', (event) => {event.stopPropagation()})

  $todoInput.css('display', 'inline-block')
  $todoInput.focus()
  $todoInput.keydown((event) => {
    if(event.code === 'Enter'){
      if ($todoInput.val() === '') return
      todoList.push({todoText: $todoInput.val(), createTime: DateFormat(new Date())})
      $todoInput.val('')
      $todoInput.css('display', 'none')

      renderTodoList()
    }
  });
})

// 删除代办事件 todoListItem
$todoListUl.on('click', 'svg', (event) => {
  let clickedTodoItemIndex = $(event.currentTarget.parentNode.parentNode).index()
  todoList.splice(clickedTodoItemIndex, 1)
  renderTodoList()
})

// 渲染 todoList
function renderTodoList() {
  $todoListUl.find('li').remove() // 渲染前移除之前的 todoItem
  todoList.forEach((item) => {
    let $li = $(`<li class="gauss">
                  <div class="text-time">
                    <div class="text" title="${item.todoText}">${item.todoText}</div>
                    <div class="time">${item.createTime}</div>
                  </div>
                  <div class="cheers" title="大功告成，干杯 ~">
                    <svg class="icon"><use xlink:href="#icon-jiubei"></use></svg>
                  </div>
                 </li>`)
    $todoListUl.append($li)
  })
}

$mapButton.on('click',() => {
  alert('点亮城市功能正在开发当中呢 ~')
})

// 添加小愿望 - wishList
$wishButton.on('click',(event) => {
  event.stopPropagation()
  $wishInput.on('click', (event) => {event.stopPropagation()})
  $wishList.on('click', (event) => {event.stopPropagation()})
  $wishInput.css('display', 'inline-block')
  $wishList.css('display', 'inline-block')

  $wishInput.focus()
  $wishInput.keydown((event) => {
    if(event.code === 'Enter'){
      if ($wishInput.val() === '') return
      wishList.push({wishText: $wishInput.val(), createTime: DateFormat(new Date())})
      $wishInput.val('')

      renderWishList()
    }
  });
})

// 删除小愿望 wishListItem
$wishListUl.on('click', 'svg', (event) => {
  let clickedWishItemIndex = $(event.currentTarget.parentNode.parentNode).index()
  wishList.splice(clickedWishItemIndex, 1)
  renderWishList()
})

// 渲染 wishList
function renderWishList() {
  $wishListUl.find('li').remove() // 渲染前移除之前的 wishItem
  wishList.forEach((item) => {
    let $li = $(`<li class="gauss">
              <span class="text" title="${item.wishText}">${item.wishText}</span>
              <div class="heart" title="点击小红心就表示愿望已经实现了哦 ~">
                <svg class="icon"><use xlink:href="#icon-aixin"></use></svg>
              </div>
            </li>`)
    $wishListUl.append($li)
  })
}

$tabBar.on('click', "div", (event) => { // tabBar事件委托
  const $tabItem = $(event.currentTarget)  //获取当前被点击的元素
  $tabItem.addClass("selected").siblings().removeClass("selected") // toggleClass(value, stateVal) link mdn

  let index = $tabItem.index()

  // 采取四个表单的措施也是可以的，或者采用判断 index 值修改表单的action和input的name属性
  // $tabContent.children().eq(index).addClass("active").siblings().removeClass("active")
  if (index === 0){
    $search.attr("action","http://www.baidu.com/s")
    $input.attr("name","wd")
    $input.attr("placeholder","众里寻你千百度的那个 —— 百度")
  }else if (index === 1){
    $search.attr("action","https://www.zhihu.com/search")
    $input.attr("name","q")
    $input.attr("placeholder","你也是个有问题的小傻瓜？ —— 知乎")
  }else if (index === 2){
    $search.attr("action","https://so.csdn.net/so/search/s.do")
    $input.attr("name","q")
    $input.attr("placeholder","据说这里能成就一亿技术人 —— CSDN")
  }else if(index === 3){
    $search.attr("action","https://github.com/search")
    $input.attr("name","q")
    $input.attr("placeholder","啥时候创建一个自己的开源项目？ — GitHub")
  }else if(index === 4){
    $search.attr("action","http://ss.chaoxing.com/search")
    $input.attr("name","sw")
    $input.attr("placeholder","超星发现 —— 小傻瓜加油！")
  }else if (index === 5){
    $search.attr("action","http://xueshu.baidu.com/s")
    $input.attr("name","wd")
    $input.attr("placeholder","告诉你要保持学习的态度 —— 百度学术")
  }else{
    $search.attr("action","https://book.duxiu.com/search")
    $input.attr("name","sw")
    $input.attr("placeholder","海量学术文献搜索 —— 读秀")
  }
})

// 页面渲染render
let render = function(){
  $('.site-list').find('li:not(.add-site-li)').remove() // 渲染前移除添加按钮前的模块
  hashMap.forEach((item,index)=>{ // 根据hashMap创建相应的元素并添加到新增按钮前
    let $li = $(`<li class="block">
      <a href="${item.url}">
        <div class="logo"><img src=${item.logoPath}></div>
        <div class="site">${simplifyUrl(item.url)}</div>
      </a>
      <div class="close">×</div>
    </li>
    `).insertBefore($addSiteLi)

    if (hashMap.length >= 10)
      $addSiteLi.css('visibility', 'hidden')

    $li.on('click','.close',(event) => {
      event.stopPropagation()  // 阻止事件冒泡
      hashMap.splice(index,1)
      $addSiteLi.css('visibility', 'visible')
      render()
    })

    renderTodoList()
    renderWishList()
  })
}

// 页面刷新时先渲染 hashMap
render()

// 点击添加快捷方式按钮，添加相应的 li 网址模块
$('.add-site').on('click', () => {
  let url = window.prompt('请输入你要访问的网址！')

  if (url === ''){
    alert('啥也不写让我给你添加啥？小傻瓜!')
    return
  }

  if (url.indexOf('http') !== 0){
    url = 'https://' + url
  }

  let iconArr = {
    icon5: require(`./assets/img/icon/icon5.png`),
    icon6: require(`./assets/img/icon/icon6.png`),
    icon7: require(`./assets/img/icon/icon7.png`),
    icon8: require(`./assets/img/icon/icon8.png`),
    icon9: require(`./assets/img/icon/icon9.png`),
    icon10: require(`./assets/img/icon/icon10.png`)
  }
  let path = iconArr[`icon${hashMap.length+1}`] // TODO 依然待优化
  hashMap.push({logoPath: path, url: url})

  if (hashMap.length >= 10) {
    $addSiteLi.css('visibility', 'hidden')
    alert('真是个贪心的小傻瓜呢~ 😏')
  }

  render() //重新渲染
})

let wallpaperFlag = parseInt(localStorage.getItem("backgroundImageFlag")) || 0  // 标记当前背景图片
let wallpaperArray = [
  {imagePath: require(`./assets/img/wallpaper/yourname.jpg`)},
  {imagePath: require(`./assets/img/wallpaper/lantern.jpg`)},
  {imagePath: require(`./assets/img/wallpaper/pier.png`)},
  {imagePath: require(`./assets/img/wallpaper/Noon.png`)},
  {imagePath: require(`./assets/img/wallpaper/night.png`)},
  {imagePath: require(`./assets/img/wallpaper/schoolGirl.png`)},
]

// 渲染前先获取 localstorage 中标记的壁纸图片
$naviPage.css("backgroundImage",`url(${wallpaperArray[wallpaperFlag].imagePath})`)
// 点击箭头切换背景图片
$windmill.on('click',() => {
  $windmill.addClass('rotate')
  $windmill.css('pointer-events', 'none')
  $audioWind.play();
  setTimeout(() => {
    $windmill.removeClass('rotate')
    $windmill.css('pointer-events', 'auto')
    $audioWind.ended
  }, 2000)

  wallpaperFlag = wallpaperFlag === 5 ? 0 : wallpaperFlag += 1
  localStorage.setItem("backgroundImageFlag",wallpaperFlag)  // 存储当前壁纸标记到 localStorage
  $naviPage.css("backgroundImage",`url(${wallpaperArray[wallpaperFlag].imagePath})`)
})

// 获取当前 active 的 indicator li
let currentIndicator = 0
Array.from($indicatorLis).forEach((item, index) => {
  if (item.className.indexOf('active') > 0)
    currentIndicator = index
})

// 点击 indicator 切换屏幕 0：导航 1：照片墙
$indicatorUl.on('click', (event) => {
  let clickedIndex = Array.from($indicatorLis).indexOf(event.target)
  if (clickedIndex === -1) return
  $indicatorLis.eq(clickedIndex).addClass('active').siblings().removeClass("active")
  currentIndicator = clickedIndex
  $naviPage.css('margin-top', `${clickedIndex * -100}vh`)
})

// 监听鼠标滚轮 切换屏幕 0：导航 1：照片墙 2：纪念日
$(document).on("mousewheel DOMMouseScroll", function (event) {
  var delta = (event.originalEvent.wheelDelta && (event.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
      (event.originalEvent.detail && (event.originalEvent.detail > 0 ? -1 : 1))              // firefox

  if (delta > 0) {  // 向上滚
    currentIndicator--
    if (currentIndicator >= 0) {
      $naviPage.css('margin-top', `${-currentIndicator * 100}vh`)
      $indicatorLis.eq(currentIndicator).addClass('active').siblings().removeClass("active")
    } else {
      currentIndicator = 0
    }

    // 滑动到非纪念日页 → 停止播放音乐
    if (currentIndicator !== 2) $audioLove.pause()
    if (currentIndicator === 0) $todoListUl.css('display', 'block')
  } else if (delta < 0) { // 向下滚
    currentIndicator++
    if (currentIndicator <= $indicatorLis.length - 1) {
      $naviPage.css('margin-top', `${-currentIndicator * 100}vh`)
      $indicatorLis.eq(currentIndicator).addClass('active').siblings().removeClass("active")
    } else {
      currentIndicator = $indicatorLis.length - 1
    }

    // 滑动到纪念日页 → 播放音乐 + 隐藏 todoList
    if (currentIndicator === 2) $audioLove.play()
    if (currentIndicator !== 0) $todoListUl.css('display', 'none')
  }
})


// 窗口关闭前缓存 localStorage
window.onbeforeunload = function () {
  let newSitesCache = JSON.stringify(hashMap)
  localStorage.setItem('sitesCache', newSitesCache)

  let newWishListCache = JSON.stringify(wishList)
  localStorage.setItem('wishListCache', newWishListCache)

  let newTodoListCache = JSON.stringify(todoList)
  localStorage.setItem('todoListCache', newTodoListCache)
}

// statistical script
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?8c000df8ca601a751a83c60449488c8e";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
