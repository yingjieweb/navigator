import $ from 'jQuery'
import {DateFormat} from "../utils/DateFormat"
import {PopToast} from "../utils/PopToast"

// 获取 localStorage - siteList
let oldSitesCache = localStorage.getItem('sitesHashMapCache')
let sitesHashMapCache = JSON.parse(oldSitesCache)
let sitesHashMap = sitesHashMapCache ||  [
  {name: '南航', url: 'http://www.graduate.nuaa.edu.cn', logoPath: require(`../assets/img/icon/icon1.png`)},
  {name: '掘金', url: 'https://juejin.im', logoPath: require(`../assets/img/icon/icon2.png`)},
  {name: '百度学术', url: 'https://xueshu.baidu.com', logoPath: require(`../assets/img/icon/icon3.png`)},
  {name: '知网', url: 'https://www.cnki.net', logoPath: require(`../assets/img/icon/icon4.png`)}
]

// 获取 localStorage - wishList
let oldWishListCache = localStorage.getItem('wishListCache')
let wishListCache = JSON.parse(oldWishListCache)
let wishList = wishListCache || []

// 获取 localStorage - todList
let oldTodoListCache = localStorage.getItem('todoListCache')
let todoListCache = JSON.parse(oldTodoListCache)
let todoList = todoListCache || []

let $naviPage = $('.navi-page')  // 导航页
let $indicatorUl = $('.indicator ul')  // 切换标识 ul
let $indicatorLis = $indicatorUl.find('li')  // 切换标识 ul > lis
let $todoButton = $('.todo') // 获取代办 button
let $todoInput = $('.todo-input') // 获取代办 input
let $todoListUl = $('.todo-list-ul') // 获取 todoListUl
let $wishInput = $('.wish-input') // 获取愿望 input
let $wishList = $('.wish-list') // 获取愿望 list
let $wishListUl = $('.wish-list-ul') // 获取愿望 listUl
let $wishButton = $('.wish-button') // 获取愿望按钮
let $wishingTab = $('.wishing-tab')  // 获取
let $realizeTab = $('.realize-tab')  // 获取
let $tabBar = $('.tab-bar')  // 获取 tabBar 的按钮
let $search = $('.search')  // 获取 search 表单
let $input = $('.search input')  // 获取 search 表单的 input
let $addSiteLi = $('.add-site-li') // 获取新增快捷方式按钮
let $siteModal = $('.site-modal') // 获取 site 模态框
let $siteModalClose = $('.site-modal-close') // 获取 site 模态框 close
let $newSiteName = $('.site-modal .name') // 获取新增快捷方式的 name
let $newSiteLink = $('.site-modal .link') // 获取新增快捷方式的 link
let $siteModalCancel = $('.site-modal .cancel') // 获取新增快捷方式取消按钮
let $siteModalConfirm = $('.site-modal .confirm') // 获取新增快捷方式确认按钮
let $audioWind = $("#audio-wind")[0]  // 获取 wind 音频元素
let $audioLove = $("#audio-love")[0]  // 获取 love 音频元素
let $windmill = $('.windmill') // 获取底部的箭头

// 隐藏 todoInput、wishInput、wishList
$('body').on('click',() => {
  $todoInput.css('display', 'none')
  $wishInput.css('display', 'none')
  $wishList.css('display', 'none')
})

// 决定 document 是否有滚动权限
let documentScrollAuthority = true
$wishListUl.on('mouseover', () => {documentScrollAuthority = false})
$wishListUl.on('mouseleave', () => {documentScrollAuthority = true})

// 添加代办事件
$todoButton.on('click', (event) => {
  event.stopPropagation()
  $todoInput.on('click', (event) => {event.stopPropagation()})

  $todoInput.css('display', 'inline-block')
  $todoInput.focus()
})
$todoInput.keydown((event) => {
  if(event.code === 'Enter'){
    if ($todoInput.val() === '') return
    if (todoList.length >= 7) {
      PopToast('info', '事情总要一件一件的做嘛，小傻瓜 ~ 😉')
      return
    }
    todoList.push({todoText: $todoInput.val(), createTime: DateFormat(new Date())})
    $todoInput.val('')

    renderTodoList()
    PopToast('success', '事件添加成功，小傻瓜要加油啦 ~ 👻')
  }
});

// 删除代办事件 todoListItem
$todoListUl.on('click', 'svg', (event) => {
  let clickedTodoItemIndex = $(event.currentTarget.parentNode.parentNode).index()
  todoList.splice(clickedTodoItemIndex, 1)
  renderTodoList()
  PopToast('success', '真是个勤劳的小傻瓜，要劳逸结合哦 ~ 😘')
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
// 初始化渲染 todoList
renderTodoList()

// 添加小愿望 - wishList
$wishButton.on('click',(event) => {
  event.stopPropagation()
  $wishInput.on('click', (event) => {event.stopPropagation()})
  $wishList.on('click', (event) => {event.stopPropagation()})
  $wishInput.css('display', 'inline-block')
  $wishList.css('display', 'inline-block')
  $wishInput.focus()
})
$wishInput.keydown((event) => {
  if(event.code === 'Enter'){
    if ($wishInput.val() === '') return
    let isRepeat = false
    wishList.map(item => {
      if (item.wishText === $wishInput.val()){
        isRepeat = true
      }
    })
    if (isRepeat) {
      PopToast('warning', '有啦有啦，这个小愿望已经有啦 ~ 😉')
    } else {
      wishList.push({wishText: $wishInput.val(), createTime: DateFormat(new Date()), realize: 0})
      $wishingTab.addClass('active').siblings().removeClass("active")
      $wishListUl.css('pointer-events', 'auto')
      $wishInput.val('')
      renderWishList()
      PopToast('success', '添加成功，让我看看我家小傻瓜许的什么愿？ 🧐')
    }
  }
});

// 实现小愿望 wishListItem
$wishListUl.on('click', 'svg', (event) => {
  let clickedWishItemText = $(event.currentTarget.parentNode.parentNode)[0].innerText
  let clickedWishItemIndex
  wishList.map((item, index) => {
    if (item.wishText === clickedWishItemText){
      clickedWishItemIndex = index
    }
  })
  wishList[clickedWishItemIndex].realize++
  wishList[clickedWishItemIndex].realize > 1 ? renderWishList('realize') : renderWishList()
  PopToast('success', '哦吼吼，实现啦，愿望实现啦 ~ 😍')
})

// 切换愿望 tab - wishing/realize
$wishingTab.on('click', () => {
  $wishingTab.addClass('active').siblings().removeClass("active")
  renderWishList()
})
$realizeTab.on('click', () => {
  $realizeTab.addClass('active').siblings().removeClass("active")
  renderWishList('realize')
})

// 渲染 wishList
function renderWishList(state = 'wishing') {
  $wishListUl.find('li').remove() // 渲染前移除之前的 wishItem
  let filterWishList = []
  filterWishList = state === 'wishing' ?
      wishList.filter(item => {return item.realize === 0}) :
      wishList.filter(item => {return item.realize >= 1})
  filterWishList.forEach((item) => {
    let $li = $(`<li class="gauss">
              <span class="text" title="${item.wishText}">${item.wishText}</span>
              <div class="heart" title="点击小红心就表示愿望已经实现了哦 ~">
                <svg class="icon"><use xlink:href="#icon-aixin"></use></svg>
              </div>
            </li>`)
    $wishListUl.append($li)
  })
}

// 初始化渲染 wishList
renderWishList()

// 切换搜索网站 → tabBar 事件委托
$tabBar.on('click', "div", (event) => {
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

// 渲染 SitesHashMap
function renderSitesHashMap(){
  $('.site-list').find('li:not(.add-site-li)').remove() // 渲染前移除添加按钮前的模块
  sitesHashMap.forEach((item,index)=>{ // 根据sitesHashMap创建相应的元素并添加到新增按钮前
    let $li = $(`<li class="block">
      <a href="${item.url}">
        <div class="logo"><img src=${item.logoPath}></div>
        <div class="site">${item.name}</div>
      </a>
      <div class="close">×</div>
    </li>
    `).insertBefore($addSiteLi)

    if (sitesHashMap.length >= 10)
      $addSiteLi.css('visibility', 'hidden')

    $li.on('click','.close',(event) => {
      event.stopPropagation()  // 阻止事件冒泡
      sitesHashMap.splice(index,1)
      $addSiteLi.css('visibility', 'visible')
      renderSitesHashMap()
      PopToast('success', '啊哦，快捷方式被删掉了哦 ~ 😮')
    })
  })
}

// 初始化渲染 sitesHashMap
renderSitesHashMap()

// 点击添加快捷方式按钮，显示模态框
$addSiteLi.on('click', () => {$siteModal.addClass('show-site-modal')})

// 添加相应的快捷方式 li 网址模块
$siteModalConfirm.on('click', () => {
  if ($newSiteName.val() && $newSiteLink.val()) {
    $siteModal.removeClass('show-site-modal')

    let iconArr = {
      icon5: require(`../assets/img/icon/icon5.png`),
      icon6: require(`../assets/img/icon/icon6.png`),
      icon7: require(`../assets/img/icon/icon7.png`),
      icon8: require(`../assets/img/icon/icon8.png`),
      icon9: require(`../assets/img/icon/icon9.png`),
      icon10: require(`../assets/img/icon/icon10.png`)
    }
    let path = iconArr[`icon${sitesHashMap.length + 1}`] // TODO 依然待优化

    sitesHashMap.push({
      name: $newSiteName.val(),
      url: $newSiteLink.val(),
      logoPath: path
    })
    $newSiteName.val('')
    $newSiteLink.val('')

    if (sitesHashMap.length >= 10) {
      $addSiteLi.css('visibility', 'hidden')
      PopToast('info', '真是个贪心的小傻瓜呢~ 😏')
    }

    renderSitesHashMap()
    PopToast('success', '快捷方式添加成功，这下方便多了 ~ 😁')
  } else {
    PopToast('error', '调皮哦，不好好输入打你呦 ~ 🤨')
  }
})

// 点击 关闭/取消 关闭 site 模态框
$siteModalClose.on('click', () => {$siteModal.removeClass('show-site-modal')})
$siteModalCancel.on('click', () => {$siteModal.removeClass('show-site-modal')})

// 背景图片部分
let wallpaperFlag = parseInt(localStorage.getItem("backgroundImageFlag")) || 0  // 标记当前背景图片
let wallpaperArray = [
  {imagePath: require(`../assets/img/wallpaper/yourname.jpg`)},
  {imagePath: require(`../assets/img/wallpaper/lantern.jpg`)},
  {imagePath: require(`../assets/img/wallpaper/pier.png`)},
  {imagePath: require(`../assets/img/wallpaper/Noon.png`)},
  {imagePath: require(`../assets/img/wallpaper/night.png`)},
  {imagePath: require(`../assets/img/wallpaper/schoolGirl.png`)},
]

// 渲染前先获取 localstorage 中标记的壁纸图片
$naviPage.css("backgroundImage",`url(${wallpaperArray[wallpaperFlag].imagePath})`)
// 点击风车 windmill 切换背景图片
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
  PopToast('success', '快告诉我这张壁纸好不好看呀 ~ 😎')
})

// 获取当前 active 的 indicator li
let currentIndicator = 0
Array.from($indicatorLis).forEach((item, index) => {
  if (item.className.indexOf('active') > 0)
    currentIndicator = index
})

// 点击 indicator 切换屏幕 0：导航 1：照片墙 2：纪念日
$indicatorUl.on('click', (event) => {
  let clickedIndex = Array.from($indicatorLis).indexOf(event.target)
  if (clickedIndex === -1) return
  $indicatorLis.eq(clickedIndex).addClass('active').siblings().removeClass("active")
  currentIndicator = clickedIndex
  $naviPage.css('margin-top', `${clickedIndex * -100}vh`)

  if (clickedIndex === 2) PopToast('warning', '前方高能预警，单身狗请迅速撤离！ 🤭')
})

// 监听鼠标滚轮 切换屏幕 0：导航 1：照片墙 2：纪念日
$(document).on("mousewheel DOMMouseScroll", function (event) {
  var delta = (event.originalEvent.wheelDelta && (event.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
      (event.originalEvent.detail && (event.originalEvent.detail > 0 ? -1 : 1))              // firefox

  if (delta > 0 && documentScrollAuthority) {  // 向上滚
    currentIndicator--
    if (currentIndicator >= 0) {
      $naviPage.css('margin-top', `${-currentIndicator * 100}vh`)
      $indicatorLis.eq(currentIndicator).addClass('active').siblings().removeClass("active")
    } else {
      currentIndicator = 0
    }

    // 滑动到非纪念日页 → 停止播放音乐
    if (currentIndicator !== 2) $audioLove.pause()
  } else if (delta < 0 && documentScrollAuthority) { // 向下滚
    if (currentIndicator === 1) PopToast('warning', '前方高能预警，单身狗请迅速撤离！ 🤭')

    currentIndicator++
    if (currentIndicator <= $indicatorLis.length - 1) {
      $naviPage.css('margin-top', `${-currentIndicator * 100}vh`)
      $indicatorLis.eq(currentIndicator).addClass('active').siblings().removeClass("active")
    } else {
      currentIndicator = $indicatorLis.length - 1
    }

    // 滑动到纪念日页 → 播放音乐 + 隐藏 todoList
    if (currentIndicator === 2) $audioLove.play()
  }
})


// 窗口关闭前缓存 localStorage
window.onbeforeunload = function () {
  let newTodoListCache = JSON.stringify(todoList)
  localStorage.setItem('todoListCache', newTodoListCache)

  let newWishListCache = JSON.stringify(wishList)
  localStorage.setItem('wishListCache', newWishListCache)

  let newSitesHashMapCache = JSON.stringify(sitesHashMap)
  localStorage.setItem('sitesHashMapCache', newSitesHashMapCache)
}

// kanban part
L2Dwidget.init({
  "display": {"superSample": 2, "width": 200, "height": 400, "position": "right", "hOffset": 0, "vOffset": 0}
});

// statistical script
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?8c000df8ca601a751a83c60449488c8e";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
