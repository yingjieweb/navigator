//获取localStorage
let oldCache = localStorage.getItem('cache');
let cache = JSON.parse(oldCache);
let hashMap = cache ||  [
  {logoPath:require(`./assets/img/icon/icon1.png`),url:'https://www.csdn.net'},
  {logoPath:require(`./assets/img/icon/icon2.png`),url:'https://juejin.im/'}
]

//简化url
const simplifyUrl = (url) => {
  return url.replace('https://', '')
    .replace('http://', '')
    .replace('www.', '')
    .replace(/\/.*/, ''); // 删除 / 开头的内容
}

//获取新增按钮
let $addSiteLi = $('.addSiteLi');

//页面渲染render
let render = function(){
  $('.siteList').find('li:not(.addSiteLi)').remove(); //渲染签移除添加按钮前的模块
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
      hashMap.splice(index,1);  //*****************
      render();
    })
  })
}

//页面刷新时先渲染hashMap
render();

//点击添加按钮，添加相应的li网址模块
$('.addSite').on('click',function () {
  let url = window.prompt('请输入你要访问的网址！');
  if (url.indexOf('http') !== 0){
    url = 'https://' + url;
  }
  let path = require('./assets/img/icon/icon3.png'); //不能使用变量，待优化
  hashMap.push({logoPath:path,url:url});
  render(); //重新渲染
})

//窗口关闭前保存到localStorage
window.onbeforeunload = function () {
  let newCache = JSON.stringify(hashMap);
  localStorage.setItem('cache',newCache);
}

//监听键盘事件
// $(document).on('keypress', (event) => {
//   const key = event.key; //const {key} = event;
//   for (let i = 0; i < hashMap.length; i++) {
//     if (hashMap[i].logo.toLowerCase() === key) {
//       window.open(hashMap[i].url)
//     }
//   }
// })