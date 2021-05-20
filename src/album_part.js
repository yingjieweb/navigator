window.onload = function () {
  let $albumSwiper = $(".album-swiper")

  let albumSwiperHeight = $albumSwiper.height();
  let clientHeight = document.documentElement.clientHeight
  let rollHeight = albumSwiperHeight - clientHeight

  let style = document.styleSheets[4];
  style.deleteRule(1)
  style.insertRule(`@keyframes roll {0% {margin-top: 0;} 100% {margin-top: -${rollHeight}px;}`);
}
