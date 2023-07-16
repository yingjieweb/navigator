import $ from 'jQuery'
let $naviPage = $('.navi-page')  // 导航页
let $wishListUl = $('.wish-list-ul') // 获取愿望 listUl
let $indicatorUl = $('.indicator ul')  // 切换标识 ul
let $indicatorLis = $indicatorUl.find('li')  // 切换标识 ul > lis
let $audioLove = $("#audio-love")[0]  // 获取 love 音频元素
import {PopToast} from "../utils/PopToast"

// 决定 document 是否有滚动权限
let documentScrollAuthority = true
$wishListUl.on('mouseover', () => {documentScrollAuthority = false})
$wishListUl.on('mouseleave', () => {documentScrollAuthority = true})

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

  if (clickedIndex === 2) {
    PopToast('warning', '前方高能预警，单身狗请迅速撤离！ 🤭')
    $audioLove.play()
  } else {
    $audioLove.pause()
  }
})

// 监听鼠标滚轮 切换屏幕 0：导航 1：照片墙 2：纪念日
$(document).on("mousewheel DOMMouseScroll", function (event) {
  const delta = (event.originalEvent.wheelDelta && (event.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
      (event.originalEvent.detail && (event.originalEvent.detail > 0 ? -1 : 1))              // firefox

  if (delta > 0 && documentScrollAuthority) {  // 向上滚
    // 如果在照片墙页面 -> 判断是否切屏
    if (currentIndicator === 1) {
      if ($(".album-swiper")[0].scrollTop !==0) {
        return
      }
    }

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

    // 如果在照片墙页面 -> 判断是否切屏
    if (currentIndicator === 1) {
      const outerDiv = $(".album-swiper")[0];
      const clientHeight = outerDiv.clientHeight; // 容器可见高度
      const scrollHeight = outerDiv.scrollHeight; // 内容高度
      const scrollTop = outerDiv.scrollTop; // 滚动高度

      if (scrollTop + clientHeight >= scrollHeight) { //到底部了
        PopToast('warning', '前方高能预警，单身狗请迅速撤离！ 🤭')
      } else {
        return
      }
    }

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

// kanban part
L2Dwidget.init({
  "display": {"superSample": 2, "width": 200, "height": 400, "position": "right", "hOffset": 0, "vOffset": 0}
});

// statistical script
const _hmt = _hmt || [];
(function() {
  const hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?8c000df8ca601a751a83c60449488c8e";
  const s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
