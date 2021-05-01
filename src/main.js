// 获取localStorage - 网址
let oldSitesCache = localStorage.getItem('sitesCache');
let sitesCache = JSON.parse(oldSitesCache);
let hashMap = sitesCache ||  [
  {logoPath:require(`./assets/img/icon/icon1.png`),url:'http://www.graduate.nuaa.edu.cn'},
  {logoPath:require(`./assets/img/icon/icon2.png`),url:'https://juejin.im'},
  {logoPath:require(`./assets/img/icon/icon3.png`),url:'https://modao.cc'},
  {logoPath:require(`./assets/img/icon/icon4.png`),url:'https://www.cnki.net'}
]

// 获取localStorage - notes
let oldNotesCache = localStorage.getItem('notesCache');
let notesCache = JSON.parse(oldNotesCache);
let notesArray = notesCache || ['你还是一个没有愿望的小傻瓜呢 ~'];

// 简化 url
const simplifyUrl = (url) => {
  return url.replace('https://', '')
    .replace('http://', '')
    .replace('www.', '')
    .replace('graduate.', '')
    .replace(/\/.*/, ''); // 删除 / 开头的内容
}

let $navigatorPage = $('.navigator-page');  // 导航页
let $picPage = $('.pic-page');  // 照片墙
let $indicatorUl = $('.indicator ul');  // 切换标识 ul
let $indicatorLis = $indicatorUl.find('li');  // 切换标识 ul > lis
let $notesInput = $('.notesInput'); // 获取便签input
let $notesList = $('.notesList'); // 获取便签List
let $notesListUl = $('.notesListUl'); // 获取便签List
let $notesButton = $('.notesButton'); // 获取便签按钮
let $tabBar = $('.tab-bar');  // 获取tabBar的按钮
let $search = $('.search');  // 获取search表单
let $input = $('.search input');  // 获取search表单的input
let $addSiteLi = $('.addSiteLi'); // 获取新增快捷方式按钮
let $arrow = $('.arrow'); // 获取底部的箭头

// focus 许愿 input 显示愿望清单
$notesInput.on('focus',() => {
  $notesList.addClass('showNotes');
})
$notesInput.on('blur',() => {
  $notesList.removeClass('showNotes');
})
$notesButton.on('click', () => {
  if ($notesInput.val() === '') {
    alert('你还没写愿望呢，小傻瓜！');
  } else {
    $notesListUl.append(`
      <li>
          <span style="line-height: 40px; max-width: 280px;">${$notesInput.val()}</span>
          <svg class="icon"><use xlink:href="#icon-aixin"></use></svg>
        </li>
    `);

    notesArray.push($notesInput.val());
    if (notesArray.length > 1 && notesArray[0] === '您目前还没有梦想呢，小傻瓜 ~') {
      notesArray = notesArray.splice(1);
    }
    let newNotesCache = JSON.stringify(notesArray);
    localStorage.setItem('notesCache',newNotesCache);
    alert('当当当当，许愿成功啦！');
    $notesInput.val('');
    render();
  }
})
$notesInput.bind('keypress', (event) => {
  if(event.code === 'Enter') {
    alert('点你右侧小本本，记录当前愿望哦 ~')
  }
})

$tabBar.on('click',"div",(event) => { // tabBar事件委托
  const $tabItem = $(event.currentTarget);  //获取当前被点击的元素
  $tabItem.addClass("selected").siblings().removeClass("selected");//toggleClass(value,stateVal); 看mdn吧

  let index = $tabItem.index();

  //采取四个表单的措施也是可以的，或者采用判断 index 值修改表单的action和input的name属性
  //$tabContent.children().eq(index).addClass("active").siblings().removeClass("active");
  if (index === 0){
    $search.attr("action","http://www.baidu.com/s");
    $input.attr("name","wd");
    $input.attr("placeholder","众里寻他千百度 —— 百度");
  }else if (index === 1){
    $search.attr("action","https://www.zhihu.com/search");
    $input.attr("name","");
    $input.attr("placeholder","我们都是有问题的人 —— 知乎");
  }else if (index === 2){
    $search.attr("action","https://so.csdn.net/so/search/s.do");
    $input.attr("name","q");
    $input.attr("placeholder","成就一亿技术人 —— CSDN");
  }else if(index === 3){
    $search.attr("action","https://github.com/search");
    $input.attr("name","q");
    $input.attr("placeholder","创建自己的开源项目 — GitHub");
  }else if(index === 4){
    $search.attr("action","http://ss.chaoxing.com/search");//超新星
    $input.attr("name","sw");
    $input.attr("placeholder","超星发现 —— 小傻瓜加油！");
  }else if (index === 5){
    $search.attr("action","http://xueshu.baidu.com/s");//百度学术
    $input.attr("name","wd");
    $input.attr("placeholder","保持学习的态度 —— 百度学术");
  }else{
    $search.attr("action","https://book.duxiu.com/search");//读秀
    $input.attr("name","sw");
    $input.attr("placeholder","海量学术文献搜索 —— 读秀");
  }
})

// 页面渲染render
let render = function(){
  $('.siteList').find('li:not(.addSiteLi)').remove(); //渲染前移除添加按钮前的模块
  hashMap.forEach((item,index)=>{ //根据hashMap创建相应的元素并添加到新增按钮前
    let $li = $(`<li class="block">
      <a href="${item.url}">
        <div class="logo"><img src=${item.logoPath} alt="点击添加"></div>
        <div class="site">${simplifyUrl(item.url)}</div>
      </a>
      <div class="close">×</div>
    </li>
    `).insertBefore($addSiteLi);

    $li.on('click','.close',(event)=>{
      event.stopPropagation();  //阻止事件冒泡
      hashMap.splice(index,1);
      render();
    })
  })

  $notesListUl.find('li').remove(); //渲染前移除之前的notes
  notesArray.forEach((item) => {
    let $li = $(`<li title="点击小红心就表示愿望已经实现了哦 ~">
      <span style="line-height: 40px; max-width: 280px;">${item}</span>
      <svg class="icon" onclick="window.alert('愿望实现功能正在开发当中呢 ~')"><use xlink:href="#icon-aixin"></use></svg>
    </li>
    `);

    $notesListUl.append($li);
  })
}

// 页面刷新时先渲染 hashMap
render();

// 点击添加快捷方式按钮，添加相应的 li 网址模块
$('.addSite').on('click',function () {
  let url = window.prompt('请输入你要访问的网址！');
  if (url.indexOf('http') !== 0){
    url = 'https://' + url;
  }
  let path = require('./assets/img/icon/icon5.png'); //不能使用变量，待优化
  hashMap.push({logoPath:path,url:url});
  render(); //重新渲染
})

let wallpaperFlag = parseInt(localStorage.getItem("backgroundImageFlag")) || 0;  // 标记当前背景图片
let wallpaperArray = [
  {imagePath: require(`./assets/img/wallpaper/yourname.jpg`)},
  {imagePath: require(`./assets/img/wallpaper/lantern.jpg`)},
  {imagePath: require(`./assets/img/wallpaper/bike.jpg`)},
  {imagePath: require(`./assets/img/wallpaper/alley.png`)},
  {imagePath: require(`./assets/img/wallpaper/pier.png`)},
  {imagePath: require(`./assets/img/wallpaper/plum.jpg`)},
]

// 渲染前先获取 localstorage 中标记的壁纸图片
$navigatorPage.css("backgroundImage",`url(${wallpaperArray[wallpaperFlag].imagePath})`);
//点击箭头切换背景图片
$arrow.on('click',() => {
  $arrow.addClass('rotate')
  setTimeout(() => {
    $arrow.removeClass('rotate')
  }, 2000)

  wallpaperFlag = wallpaperFlag === 5 ? 0 : wallpaperFlag += 1;
  localStorage.setItem("backgroundImageFlag",wallpaperFlag);  // 存储当前壁纸标记到 localStorage
  $navigatorPage.css("backgroundImage",`url(${wallpaperArray[wallpaperFlag].imagePath})`)
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
  $indicatorLis.eq(currentIndicator).removeClass('active')
  $indicatorLis.eq(clickedIndex).addClass('active')
  currentIndicator = clickedIndex
  $navigatorPage.css('margin-top', `${clickedIndex * -100}vh`)
})

// 监听鼠标滚轮 切换屏幕 0：导航 1：照片墙
$(document).on("mousewheel DOMMouseScroll", function (event) {
  var delta = (event.originalEvent.wheelDelta && (event.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
      (event.originalEvent.detail && (event.originalEvent.detail > 0 ? -1 : 1));              // firefox

  if (delta > 0) {  // 向上滚
    currentIndicator--
    if (currentIndicator >= 0) {
      $indicatorLis.eq(currentIndicator + 1).removeClass('active')
      $navigatorPage.css('margin-top', `${-currentIndicator * 100}vh`)
      $indicatorLis.eq(currentIndicator).addClass('active')
    } else {
      currentIndicator = 0
    }
  } else if (delta < 0) { // 向下滚
    currentIndicator++
    if (currentIndicator <= $indicatorLis.length - 1) {
      $indicatorLis.eq(currentIndicator - 1).removeClass('active')
      $navigatorPage.css('margin-top', `${-currentIndicator * 100}vh`)
      $indicatorLis.eq(currentIndicator).addClass('active')
    } else {
      currentIndicator = $indicatorLis.length - 1
    }
  }
});


// 窗口关闭前保存到localStorage
window.onbeforeunload = function () {
  let newSitesCache = JSON.stringify(hashMap);
  localStorage.setItem('sitesCache',newSitesCache);
}

// 监听键盘事件
// $(document).on('keypress', (event) => {
//   const key = event.key; //const {key} = event;
//   for (let i = 0; i < hashMap.length; i++) {
//     if (hashMap[i].logo.toLowerCase() === key) {
//       window.open(hashMap[i].url)
//     }
//   }
// })

// 百度统计脚本
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?8c000df8ca601a751a83c60449488c8e";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
