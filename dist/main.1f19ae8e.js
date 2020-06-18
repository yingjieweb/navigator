// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"assets/img/icon/icon1.png":[function(require,module,exports) {
module.exports = "/icon1.025d74a3.png";
},{}],"assets/img/icon/icon2.png":[function(require,module,exports) {
module.exports = "/icon2.e97346f6.png";
},{}],"assets/img/icon/icon3.png":[function(require,module,exports) {
module.exports = "/icon3.631c2f62.png";
},{}],"assets/img/icon/icon4.png":[function(require,module,exports) {
module.exports = "/icon4.c2045f5a.png";
},{}],"assets/img/icon/icon5.png":[function(require,module,exports) {
module.exports = "/icon5.385abb0f.png";
},{}],"assets/img/wallpaper/yourname.jpg":[function(require,module,exports) {
module.exports = "/yourname.ee10e296.jpg";
},{}],"assets/img/wallpaper/lantern.jpg":[function(require,module,exports) {
module.exports = "/lantern.f2da7eb8.jpg";
},{}],"assets/img/wallpaper/xialuo.jpg":[function(require,module,exports) {
module.exports = "/xialuo.631c1ac3.jpg";
},{}],"assets/img/wallpaper/littleFish.jpg":[function(require,module,exports) {
module.exports = "/littleFish.720f78aa.jpg";
},{}],"assets/img/wallpaper/xiaopao.jpg":[function(require,module,exports) {
module.exports = "/xiaopao.21cad7d0.jpg";
},{}],"assets/img/wallpaper/bobi.jpg":[function(require,module,exports) {
module.exports = "/bobi.6604dcf5.jpg";
},{}],"main.js":[function(require,module,exports) {
//获取localStorage - 网址
var oldSitesCache = localStorage.getItem('sitesCache');
var sitesCache = JSON.parse(oldSitesCache);
var hashMap = sitesCache || [//网址快捷方式图标及url
{
  logoPath: require("./assets/img/icon/icon1.png"),
  url: 'https://www.csdn.net'
}, {
  logoPath: require("./assets/img/icon/icon2.png"),
  url: 'https://juejin.im'
}, {
  logoPath: require("./assets/img/icon/icon3.png"),
  url: 'https://modao.cc'
}, {
  logoPath: require("./assets/img/icon/icon4.png"),
  url: 'https://www.cnki.net'
}]; //获取localStorage - notes

var oldNotesCache = localStorage.getItem('notesCache');
var notesCache = JSON.parse(oldNotesCache);
var notesArray = notesCache || ['您目前还没有梦想呢，小蠢猪 ~']; //简化url

var simplifyUrl = function simplifyUrl(url) {
  return url.replace('https://', '').replace('http://', '').replace('www.', '').replace(/\/.*/, ''); // 删除 / 开头的内容
};

var $notesInput = $('.notesInput'); //获取便签input

var $notesList = $('.notesList'); //获取便签List

var $notesListUl = $('.notesListUl'); //获取便签List

var $notesButton = $('.notesButton'); //获取便签按钮

var $tabBar = $('.tab-bar'); //获取tabBar的按钮

var $search = $('.search'); //获取search表单

var $input = $('.search input'); //获取search表单的input

var $addSiteLi = $('.addSiteLi'); //获取新增快捷方式按钮

var $arrow = $('.arrow'); //获取底部的箭头

$notesInput.on('focus', function () {
  $notesList.addClass('showNotes');
});
$notesInput.on('blur', function () {
  $notesList.removeClass('showNotes');
});
$notesButton.on('click', function () {
  if ($notesInput.val() === '') {
    alert('你还没写愿望呢，小蠢猪！');
  } else {
    $notesListUl.append("\n      <li>\n          <span style=\"line-height: 40px; max-width: 280px;\">".concat($notesInput.val(), "</span>\n          <svg class=\"icon\"><use xlink:href=\"#icon-aixin\"></use></svg>\n        </li>\n    "));
    notesArray.push($notesInput.val());

    if (notesArray.length > 1 && notesArray[0] === '您目前还没有梦想呢，小蠢猪 ~') {
      notesArray = notesArray.splice(1);
    }

    var newNotesCache = JSON.stringify(notesArray);
    localStorage.setItem('notesCache', newNotesCache);
    alert('当当当当，许愿成功啦！');
    $notesInput.val('');
    render();
  }
});
$notesInput.bind('keypress', function (event) {
  if (event.code === 'Enter') {
    alert('点你右侧小本本，记录当前愿望哦 ~');
  }
});
$tabBar.on('click', "div", function (event) {
  //tabBar事件委托
  var $tabItem = $(event.currentTarget); //获取当前被点击的元素

  $tabItem.addClass("selected").siblings().removeClass("selected"); //toggleClass(value,stateVal); 看mdn吧

  var index = $tabItem.index(); //采取四个表单的措施也是可以的，或者采用判断 index 值修改表单的action和input的name属性
  //$tabContent.children().eq(index).addClass("active").siblings().removeClass("active");

  if (index === 0) {
    $search.attr("action", "http://www.baidu.com/s");
    $input.attr("name", "wd");
    $input.attr("placeholder", "众里寻他千百度 —— 百度");
  } else if (index === 1) {
    $search.attr("action", "https://www.zhihu.com/search");
    $input.attr("name", "");
    $input.attr("placeholder", "我们都是有问题的人 —— 知乎");
  } else if (index === 2) {
    $search.attr("action", "https://so.csdn.net/so/search/s.do");
    $input.attr("name", "q");
    $input.attr("placeholder", "成就一亿技术人 —— CSDN");
  } else if (index === 3) {
    $search.attr("action", "https://github.com/search");
    $input.attr("name", "q");
    $input.attr("placeholder", "创建自己的开源项目 — GitHub");
  } else if (index === 4) {
    $search.attr("action", "http://ss.chaoxing.com/search"); //超新星

    $input.attr("name", "sw");
    $input.attr("placeholder", "超星发现 —— 小傻瓜加油！");
  } else if (index === 5) {
    $search.attr("action", "http://xueshu.baidu.com/s"); //百度学术

    $input.attr("name", "wd");
    $input.attr("placeholder", "保持学习的态度 —— 百度学术");
  } else {
    $search.attr("action", "https://book.duxiu.com/search"); //读秀

    $input.attr("name", "sw");
    $input.attr("placeholder", "海量学术文献搜索 —— 读秀");
  }
}); //页面渲染render

var render = function render() {
  $('.siteList').find('li:not(.addSiteLi)').remove(); //渲染前移除添加按钮前的模块

  hashMap.forEach(function (item, index) {
    //根据hashMap创建相应的元素并添加到新增按钮前
    var $li = $("<li class=\"block\">\n      <a href=\"".concat(item.url, "\">\n        <div class=\"logo\"><img src=").concat(item.logoPath, " alt=\"\u70B9\u51FB\u6DFB\u52A0\"></div>\n        <div class=\"site\">").concat(simplifyUrl(item.url), "</div>\n      </a>\n      <div class=\"close\">\xD7</div>\n    </li>\n    ")).insertBefore($addSiteLi);
    $li.on('click', '.close', function (event) {
      event.stopPropagation(); //阻止事件冒泡

      hashMap.splice(index, 1);
      render();
    });
  });
  $notesListUl.find('li').remove(); //渲染前移除之前的notes

  notesArray.forEach(function (item) {
    var $li = $("<li title=\"\u70B9\u51FB\u5C0F\u7EA2\u5FC3\u5C31\u8868\u793A\u613F\u671B\u5DF2\u7ECF\u5B9E\u73B0\u4E86\u54E6 ~\">\n      <span style=\"line-height: 40px; max-width: 280px;\">".concat(item, "</span>\n      <svg class=\"icon\" onclick=\"window.alert('\u613F\u671B\u5B9E\u73B0\u529F\u80FD\u6B63\u5728\u5F00\u53D1\u5F53\u4E2D\u5462 ~')\"><use xlink:href=\"#icon-aixin\"></use></svg>\n    </li>\n    "));
    $notesListUl.append($li);
  });
}; //页面刷新时先渲染hashMap


render(); //点击添加快捷方式按钮，添加相应的li网址模块

$('.addSite').on('click', function () {
  var url = window.prompt('请输入你要访问的网址！');

  if (url.indexOf('http') !== 0) {
    url = 'https://' + url;
  }

  var path = require('./assets/img/icon/icon5.png'); //不能使用变量，待优化


  hashMap.push({
    logoPath: path,
    url: url
  });
  render(); //重新渲染
});
var wallpaperFlag = parseInt(localStorage.getItem("backgroundImageFlag")) || 0; //标记当前背景图片

var wallpaperArray = [//背景图片地址数组
{
  imagePath: require("./assets/img/wallpaper/yourname.jpg")
}, {
  imagePath: require("./assets/img/wallpaper/lantern.jpg")
}, {
  imagePath: require("./assets/img/wallpaper/xialuo.jpg")
}, {
  imagePath: require("./assets/img/wallpaper/littleFish.jpg")
}, {
  imagePath: require("./assets/img/wallpaper/xiaopao.jpg")
}, {
  imagePath: require("./assets/img/wallpaper/bobi.jpg")
}]; //渲染前先获取localstorage中标记的图片

$("body").css("backgroundImage", "url(".concat(wallpaperArray[wallpaperFlag].imagePath, ")")); //点击箭头切换背景图片

$arrow.on('click', function () {
  wallpaperFlag = wallpaperFlag === 5 ? 0 : wallpaperFlag += 1;
  localStorage.setItem("backgroundImageFlag", wallpaperFlag); //存储当前壁纸标记到 localStorage

  $("body").css("backgroundImage", "url(".concat(wallpaperArray[wallpaperFlag].imagePath, ")"));
}); //窗口关闭前保存到localStorage

window.onbeforeunload = function () {
  var newSitesCache = JSON.stringify(hashMap);
  localStorage.setItem('sitesCache', newSitesCache);
}; //监听键盘事件
// $(document).on('keypress', (event) => {
//   const key = event.key; //const {key} = event;
//   for (let i = 0; i < hashMap.length; i++) {
//     if (hashMap[i].logo.toLowerCase() === key) {
//       window.open(hashMap[i].url)
//     }
//   }
// })
},{"./assets/img/icon/icon1.png":"assets/img/icon/icon1.png","./assets/img/icon/icon2.png":"assets/img/icon/icon2.png","./assets/img/icon/icon3.png":"assets/img/icon/icon3.png","./assets/img/icon/icon4.png":"assets/img/icon/icon4.png","./assets/img/icon/icon5.png":"assets/img/icon/icon5.png","./assets/img/wallpaper/yourname.jpg":"assets/img/wallpaper/yourname.jpg","./assets/img/wallpaper/lantern.jpg":"assets/img/wallpaper/lantern.jpg","./assets/img/wallpaper/xialuo.jpg":"assets/img/wallpaper/xialuo.jpg","./assets/img/wallpaper/littleFish.jpg":"assets/img/wallpaper/littleFish.jpg","./assets/img/wallpaper/xiaopao.jpg":"assets/img/wallpaper/xiaopao.jpg","./assets/img/wallpaper/bobi.jpg":"assets/img/wallpaper/bobi.jpg"}],"C:/Users/Song/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57045" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/Song/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map