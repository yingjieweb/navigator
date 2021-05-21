import albumDB from "./database/album"

let $albumSwiper = $(".album-swiper")

// 创建文档碎片，减少 DOM 操作
let fragment = $(document.createDocumentFragment())
albumDB.map(item => {
  let $albumItemDiv = $("<div class='album-item'></div>")
  let $addressDiv = $(`<div class='address gauss'>${item.address}</div>`)
  let $image = $(`<img class='image gauss' src=${item.image}>`)
  let $dateDiv = $(`<div class='date gauss'>${item.date}</div>`)
  $albumItemDiv.append($image).append($addressDiv).append($dateDiv)
  fragment.append($albumItemDiv)
})
$albumSwiper.append(fragment)

window.onload = function () {
  // 获取照片墙高度，动态设置动画滚动距离
  let albumSwiperHeight = $albumSwiper.height()
  let clientHeight = document.documentElement.clientHeight
  let rollHeight = albumSwiperHeight - clientHeight
  let style = document.styleSheets[5]
  style.deleteRule(1)
  style.insertRule(`@keyframes roll {0% {margin-top: 0} 100% {margin-top: -${rollHeight}px}`)
}

