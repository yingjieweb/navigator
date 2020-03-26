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
})({"AB3p":[function(require,module,exports) {
module.exports = "icon1.c628f532.png";
},{}],"GXZF":[function(require,module,exports) {
module.exports = "icon2.37573020.png";
},{}],"Skyo":[function(require,module,exports) {
module.exports = "icon3.beb5a5ec.png";
},{}],"epB2":[function(require,module,exports) {
//获取localStorage
var oldCache = localStorage.getItem('cache');
var cache = JSON.parse(oldCache);
var hashMap = cache || [{
  logoPath: require("./assets/img/icon/icon1.png"),
  url: 'https://www.csdn.net'
}, {
  logoPath: require("./assets/img/icon/icon2.png"),
  url: 'https://juejin.im/'
}]; //简化url

var simplifyUrl = function simplifyUrl(url) {
  return url.replace('https://', '').replace('http://', '').replace('www.', '').replace(/\/.*/, ''); // 删除 / 开头的内容
}; //获取新增按钮


var $addSiteLi = $('.addSiteLi'); //页面渲染render

var render = function render() {
  $('.siteList').find('li:not(.addSiteLi)').remove(); //渲染签移除添加按钮前的模块

  hashMap.forEach(function (item, index) {
    //根据hashMap创建相应的元素并添加到新增按钮前
    var $li = $("<li class=\"block\">\n      <a href=\"".concat(item.url, "\">\n        <div class=\"logo\"><img src=").concat(item.logoPath, " alt=\"\u70B9\u51FB\u6DFB\u52A0\"></div>\n        <div class=\"site\">").concat(simplifyUrl(item.url), "</div>\n      </a>\n      <div class=\"close\">\xD7</div>\n    </li>\n    ")).insertBefore($addSiteLi);
    $li.on('click', '.close', function (event) {
      event.stopPropagation(); //阻止事件冒泡

      hashMap.splice(index, 1); //*****************

      render();
    });
  });
}; //页面刷新时先渲染hashMap


render(); //点击添加按钮，添加相应的li网址模块

$('.addSite').on('click', function () {
  var url = window.prompt('请输入你要访问的网址！');

  if (url.indexOf('http') !== 0) {
    url = 'https://' + url;
  }

  var path = require('./assets/img/icon/icon3.png'); //不能使用变量，待优化


  hashMap.push({
    logoPath: path,
    url: url
  });
  render(); //重新渲染
}); //窗口关闭前保存到localStorage

window.onbeforeunload = function () {
  var newCache = JSON.stringify(hashMap);
  localStorage.setItem('cache', newCache);
}; //监听键盘事件
// $(document).on('keypress', (event) => {
//   const key = event.key; //const {key} = event;
//   for (let i = 0; i < hashMap.length; i++) {
//     if (hashMap[i].logo.toLowerCase() === key) {
//       window.open(hashMap[i].url)
//     }
//   }
// })
},{"./assets/img/icon/icon1.png":"AB3p","./assets/img/icon/icon2.png":"GXZF","./assets/img/icon/icon3.png":"Skyo"}]},{},["epB2"], null)
//# sourceMappingURL=main.982e9d5c.js.map