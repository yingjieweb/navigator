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
})({"evWq":[function(require,module,exports) {
module.exports = "2018-06-10.0bb4977a.jpg";
},{}],"EN9w":[function(require,module,exports) {
module.exports = "2018-06-24.d6061adb.jpg";
},{}],"l8nu":[function(require,module,exports) {
module.exports = "2018-06-24(1).3fa214a9.jpg";
},{}],"eEkN":[function(require,module,exports) {
module.exports = "2018-06-25.b72b70f5.jpg";
},{}],"I6Dp":[function(require,module,exports) {
module.exports = "2018-06-27.39c2f3e2.jpg";
},{}],"Id4m":[function(require,module,exports) {
module.exports = "2018-07-10.49371d3f.jpg";
},{}],"e7jI":[function(require,module,exports) {
module.exports = "2018-08-27.4773b7f6.jpg";
},{}],"Y76C":[function(require,module,exports) {
module.exports = "2018-09-23.cd402579.jpg";
},{}],"IGMq":[function(require,module,exports) {
module.exports = "2018-09-24.4935c5e6.jpg";
},{}],"JXfT":[function(require,module,exports) {
module.exports = "2018-10-18.ab26a8ea.jpg";
},{}],"n5Pg":[function(require,module,exports) {
module.exports = "2018-12-13.ec7d913f.jpg";
},{}],"W0a2":[function(require,module,exports) {
module.exports = "2019-01-04.a3718fdf.jpg";
},{}],"yHGw":[function(require,module,exports) {
module.exports = "2019-01-19.7755cfeb.jpg";
},{}],"ID0l":[function(require,module,exports) {
module.exports = "2019-01-26.39851a8a.jpg";
},{}],"pmBA":[function(require,module,exports) {
module.exports = "2019-01-27.dc6e8b7c.jpg";
},{}],"vZM2":[function(require,module,exports) {
module.exports = "2019-01-27(1).ab90ed62.jpg";
},{}],"L05C":[function(require,module,exports) {
module.exports = "2019-01-28.90144b14.jpg";
},{}],"kiYy":[function(require,module,exports) {
module.exports = "2019-03-01.49297f40.jpg";
},{}],"ynOM":[function(require,module,exports) {
module.exports = "2019-05-20.61fd159d.jpg";
},{}],"Dylw":[function(require,module,exports) {
module.exports = "2019-05-20(1).854bdfcd.jpg";
},{}],"AlB0":[function(require,module,exports) {
module.exports = "2019-05-21.9935c753.jpg";
},{}],"DSZJ":[function(require,module,exports) {
module.exports = "2019-05-21(1).f2e3ef18.jpg";
},{}],"UFi4":[function(require,module,exports) {
module.exports = "2019-06-16.ac6047d3.jpg";
},{}],"IEJp":[function(require,module,exports) {
module.exports = "2019-06-16(1).d1cf73b9.jpg";
},{}],"AimH":[function(require,module,exports) {
module.exports = "2019-06-16(2).63743610.jpg";
},{}],"vdTc":[function(require,module,exports) {
module.exports = "2019-06-16(3).dca0935c.jpg";
},{}],"IRKV":[function(require,module,exports) {
module.exports = "2019-06-17.e9308bbf.jpg";
},{}],"wQzU":[function(require,module,exports) {
module.exports = "2019-06-17(1).a00d57ce.jpg";
},{}],"bRtu":[function(require,module,exports) {
module.exports = "2019-06-17(2).def45697.jpg";
},{}],"IKhv":[function(require,module,exports) {
module.exports = "2019-06-17(3).390f337b.jpg";
},{}],"brCv":[function(require,module,exports) {
module.exports = "2019-06-17(4).337635ed.jpg";
},{}],"MuPC":[function(require,module,exports) {
module.exports = "2019-06-17(5).06d73703.jpg";
},{}],"YKM2":[function(require,module,exports) {
module.exports = "2019-06-17(6).82fd87b9.jpg";
},{}],"v7WJ":[function(require,module,exports) {
module.exports = "2019-06-17(7).fc74d8b9.jpg";
},{}],"BTES":[function(require,module,exports) {
module.exports = "2019-06-17(8).1bd4d4ea.jpg";
},{}],"lT7g":[function(require,module,exports) {
module.exports = "2019-06-17(9).b9ce8855.jpg";
},{}],"w9c1":[function(require,module,exports) {
module.exports = "2019-06-18.f2232716.jpg";
},{}],"XWtf":[function(require,module,exports) {
module.exports = "2019-06-18(1).a5630041.jpg";
},{}],"Cwrd":[function(require,module,exports) {
module.exports = "2019-06-18(2).1a6103b6.jpg";
},{}],"YTkg":[function(require,module,exports) {
module.exports = "2019-06-18(3).d73fbf3e.jpg";
},{}],"UwWw":[function(require,module,exports) {
module.exports = "2019-06-18(4).f9cebaa4.jpg";
},{}],"c1Qf":[function(require,module,exports) {
module.exports = "2019-06-18(5).f252c0ff.jpg";
},{}],"qbGh":[function(require,module,exports) {
module.exports = "2019-06-18(6).31f6247b.jpg";
},{}],"mlo0":[function(require,module,exports) {
module.exports = "2019-07-19.8113c288.jpg";
},{}],"lIPT":[function(require,module,exports) {
module.exports = "2019-08-08.d00c7530.jpg";
},{}],"Ajgc":[function(require,module,exports) {
module.exports = "2019-08-08(1).3fe3edd2.jpg";
},{}],"ZYJ4":[function(require,module,exports) {
module.exports = "2019-08-08(2).ea357962.jpg";
},{}],"yIca":[function(require,module,exports) {
module.exports = "2019-09-01.98d8e84f.jpg";
},{}],"zWA9":[function(require,module,exports) {
module.exports = "2019-09-29.ed2dcb9c.jpg";
},{}],"Ew81":[function(require,module,exports) {
module.exports = "2019-09-29(1).9bc51fb3.jpg";
},{}],"aM28":[function(require,module,exports) {
module.exports = "2019-09-29(2).37ea24d4.jpg";
},{}],"J8FK":[function(require,module,exports) {
module.exports = "2019-10-14.42dac9c7.jpg";
},{}],"VlFb":[function(require,module,exports) {
module.exports = "2019-10-16.8b12e661.jpg";
},{}],"BfL6":[function(require,module,exports) {
module.exports = "2019-11-16.d14c5093.jpg";
},{}],"KKpm":[function(require,module,exports) {
module.exports = "2019-12-13.db139926.jpg";
},{}],"WD5T":[function(require,module,exports) {
module.exports = "2019-12-25.43e7456a.jpg";
},{}],"k3S5":[function(require,module,exports) {
module.exports = "2019-12-30.264e59c6.jpg";
},{}],"P7hv":[function(require,module,exports) {
module.exports = "2020-01-01.75fb934b.jpg";
},{}],"A47U":[function(require,module,exports) {
module.exports = "2020-01-26.b00b79fe.jpg";
},{}],"BZwZ":[function(require,module,exports) {
module.exports = "2020-02-11.b78d7f79.jpg";
},{}],"PYhH":[function(require,module,exports) {
module.exports = "2020-03-22.60fe9794.jpg";
},{}],"Kc8t":[function(require,module,exports) {
module.exports = "2020-04-02.f9e64013.jpg";
},{}],"ol2R":[function(require,module,exports) {
module.exports = "2020-04-21.83ed9df2.jpg";
},{}],"W6B6":[function(require,module,exports) {
module.exports = "2020-04-29.a2a1aeb7.jpg";
},{}],"PUXt":[function(require,module,exports) {
module.exports = "2020-05-01.3f4321ad.jpg";
},{}],"dgXX":[function(require,module,exports) {
module.exports = "2020-05-01(1).557d20c5.jpg";
},{}],"j8Zg":[function(require,module,exports) {
module.exports = "2020-05-01(2).e7982cfd.jpg";
},{}],"LwRt":[function(require,module,exports) {
module.exports = "2020-05-01(3).96b0e80d.jpg";
},{}],"UgvF":[function(require,module,exports) {
module.exports = "2020-05-01(4).7ecc2fe4.jpg";
},{}],"x3wT":[function(require,module,exports) {
module.exports = "2020-05-02.2447de98.jpg";
},{}],"Aqmw":[function(require,module,exports) {
module.exports = "2020-05-02(1).e65aaa99.jpg";
},{}],"RUuY":[function(require,module,exports) {
module.exports = "2020-05-02(2).78e0963b.jpg";
},{}],"BfSc":[function(require,module,exports) {
module.exports = "2020-05-03.4a6ac729.jpg";
},{}],"iWqw":[function(require,module,exports) {
module.exports = "2020-05-03(1).8d7ee752.jpg";
},{}],"nLfy":[function(require,module,exports) {
module.exports = "2020-05-04.5682cbb9.jpg";
},{}],"J9oo":[function(require,module,exports) {
module.exports = "2020-05-20.6fb06af0.jpg";
},{}],"XEEu":[function(require,module,exports) {
module.exports = "2020-05-20(1).c8316bf7.jpg";
},{}],"iUTU":[function(require,module,exports) {
module.exports = "2020-05-23.579fbfc3.jpg";
},{}],"eVeK":[function(require,module,exports) {
module.exports = "2020-05-23(1).6406c8b9.jpg";
},{}],"Ycqy":[function(require,module,exports) {
module.exports = "2020-05-26.ca84aa44.jpg";
},{}],"Flm5":[function(require,module,exports) {
module.exports = "2020-05-27.b278c537.jpg";
},{}],"zaR9":[function(require,module,exports) {
module.exports = "2020-06-04.53c53c39.jpg";
},{}],"Flb7":[function(require,module,exports) {
module.exports = "2020-06-07.70fa4644.jpg";
},{}],"l3ta":[function(require,module,exports) {
module.exports = "2020-08-01.59b1d419.jpg";
},{}],"BAxY":[function(require,module,exports) {
module.exports = "2020-08-01(1).df249249.jpg";
},{}],"AIkL":[function(require,module,exports) {
module.exports = "2020-08-02.05324ef6.jpg";
},{}],"EJLx":[function(require,module,exports) {
module.exports = "2020-08-02(1).eb1a7ed7.jpg";
},{}],"s5zN":[function(require,module,exports) {
module.exports = "2020-08-02(2).eb9568d7.jpg";
},{}],"fwjs":[function(require,module,exports) {
module.exports = "2020-08-02(3).2d1966fb.jpg";
},{}],"lJMG":[function(require,module,exports) {
module.exports = "2020-08-02(4).cb129e90.jpg";
},{}],"aeIk":[function(require,module,exports) {
module.exports = "2020-08-04.5467c59e.jpg";
},{}],"JqJY":[function(require,module,exports) {
module.exports = "2020-08-04(1).6685c68e.jpg";
},{}],"DLvN":[function(require,module,exports) {
module.exports = "2020-08-04(2).c79eb9bc.jpg";
},{}],"MMQm":[function(require,module,exports) {
module.exports = "2020-08-04(3).e76f2475.jpg";
},{}],"a6Jo":[function(require,module,exports) {
module.exports = "2020-08-04(4).fd542266.jpg";
},{}],"UbUM":[function(require,module,exports) {
module.exports = "2020-09-06.96a33469.jpg";
},{}],"I4NU":[function(require,module,exports) {
module.exports = "2020-10-03.e8f6f52f.jpg";
},{}],"taNS":[function(require,module,exports) {
module.exports = "2020-10-18.64f8f0d7.jpg";
},{}],"eNeA":[function(require,module,exports) {
module.exports = "2020-10-20.8d927318.jpg";
},{}],"B4PH":[function(require,module,exports) {
module.exports = "2020-11-08.8c26ef11.jpg";
},{}],"k5QC":[function(require,module,exports) {
module.exports = "2020-11-14.402f19ef.jpg";
},{}],"nSoQ":[function(require,module,exports) {
module.exports = "2020-12-17.4e267ee0.jpg";
},{}],"Skt4":[function(require,module,exports) {
module.exports = "2020-12-19.600049ff.jpg";
},{}],"BvTw":[function(require,module,exports) {
module.exports = "2020-12-23.7bbe6953.jpg";
},{}],"n3Ve":[function(require,module,exports) {
module.exports = "2020-12-26.c020aae3.jpg";
},{}],"C2wC":[function(require,module,exports) {
module.exports = "2020-12-30.cb303aa3.jpg";
},{}],"VoCu":[function(require,module,exports) {
module.exports = "2020-12-31.f268fe1b.jpg";
},{}],"FF7q":[function(require,module,exports) {
module.exports = "2021-01-13.950c0194.jpg";
},{}],"Dimg":[function(require,module,exports) {
module.exports = "2021-01-13(1).8f2b8c44.jpg";
},{}],"VYsT":[function(require,module,exports) {
module.exports = "2021-01-13(2).5884329f.jpg";
},{}],"ZHj4":[function(require,module,exports) {
module.exports = "2021-01-13(3).8cff69c9.jpg";
},{}],"lhsU":[function(require,module,exports) {
module.exports = "2021-01-13(4).21a9d4f8.jpg";
},{}],"Dh5x":[function(require,module,exports) {
module.exports = "2021-01-13(5).39d1dd4b.jpg";
},{}],"A9mu":[function(require,module,exports) {
module.exports = "2021-01-13(6).b85f8a23.jpg";
},{}],"Gh0o":[function(require,module,exports) {
module.exports = "2021-01-23.65260e5d.jpg";
},{}],"mNuu":[function(require,module,exports) {
module.exports = "2021-02-08.c3e38c44.jpg";
},{}],"fmP3":[function(require,module,exports) {
module.exports = "2021-02-08(1).611c607f.jpg";
},{}],"Qndi":[function(require,module,exports) {
module.exports = "2021-02-10.851b5926.jpg";
},{}],"hUw7":[function(require,module,exports) {
module.exports = "2021-02-22.d19b1315.jpg";
},{}],"ZGBd":[function(require,module,exports) {
module.exports = "2021-02-22(1).9c4faad5.jpg";
},{}],"aQXB":[function(require,module,exports) {
module.exports = "2021-03-21.0cf41995.jpg";
},{}],"lQwl":[function(require,module,exports) {
module.exports = "2021-04-03.692bcf77.jpg";
},{}],"RcT2":[function(require,module,exports) {
module.exports = "2021-04-04.cb4ce71e.jpg";
},{}],"TDtP":[function(require,module,exports) {
module.exports = "2021-04-04(1).351f8d24.jpg";
},{}],"pgUP":[function(require,module,exports) {
module.exports = "2021-04-04(2).881e95de.jpg";
},{}],"OJZZ":[function(require,module,exports) {
module.exports = "2021-04-04(3).9daf36b6.jpg";
},{}],"u4Qb":[function(require,module,exports) {
module.exports = "2021-04-05.b84d4244.jpg";
},{}],"EKrT":[function(require,module,exports) {
module.exports = "2021-04-05(1).3f416740.jpg";
},{}],"u8MB":[function(require,module,exports) {
module.exports = "2021-04-05(2).b06687ad.jpg";
},{}],"qrmQ":[function(require,module,exports) {
module.exports = "2021-04-05(3).68fc08ca.jpg";
},{}],"Z8oG":[function(require,module,exports) {
module.exports = "2021-04-05(4).97be2c92.jpg";
},{}],"KoB3":[function(require,module,exports) {
module.exports = "2021-04-08.19a15833.jpg";
},{}],"rpJq":[function(require,module,exports) {
module.exports = "2021-04-14.4120f7a2.jpg";
},{}],"x4Kb":[function(require,module,exports) {
module.exports = "2021-04-14(1).babc967c.jpg";
},{}],"ArGJ":[function(require,module,exports) {
module.exports = "2021-04-14(2).8b98e63f.jpg";
},{}],"PpB1":[function(require,module,exports) {
module.exports = "2021-04-21.593542cc.jpg";
},{}],"Uo27":[function(require,module,exports) {
module.exports = "2021-04-21(1).f02bc556.jpg";
},{}],"NltG":[function(require,module,exports) {
module.exports = "2021-05-11.405005df.jpg";
},{}],"wDbH":[function(require,module,exports) {
module.exports = "2021-05-16.fa8bdbfa.jpg";
},{}],"JoEV":[function(require,module,exports) {
module.exports = "2021-05-16(1).61522526.jpg";
},{}],"OgUH":[function(require,module,exports) {
module.exports = "2021-05-18.fa610ec1.jpg";
},{}],"oT4D":[function(require,module,exports) {
module.exports = "2021-05-18(1).c7644130.jpg";
},{}],"lSz4":[function(require,module,exports) {
module.exports = "2021-05-18(2).2f46d48e.jpg";
},{}],"sVbA":[function(require,module,exports) {
module.exports = "2021-05-18(3).1504817f.jpg";
},{}],"aTsp":[function(require,module,exports) {
module.exports = "2021-05-18(4).1627a0b4.jpg";
},{}],"GUo0":[function(require,module,exports) {
module.exports = "2021-05-18(5).cd8ba24b.jpg";
},{}],"mddz":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var albumDB = [{
  id: 1,
  address: '济宁',
  image: require('../assets/img/album/2018-06-10.jpg'),
  date: '2018-06-10'
}, {
  id: 2,
  address: '济宁',
  image: require('../assets/img/album/2018-06-24.jpg'),
  date: '2018-06-24'
}, {
  id: 3,
  address: '济宁',
  image: require('../assets/img/album/2018-06-24(1).jpg'),
  date: '2018-06-24'
}, {
  id: 4,
  address: '济宁',
  image: require('../assets/img/album/2018-06-25.jpg'),
  date: '2018-06-25'
}, {
  id: 5,
  address: '济宁',
  image: require('../assets/img/album/2018-06-27.jpg'),
  date: '2018-06-27'
}, {
  id: 6,
  address: '枣庄',
  image: require('../assets/img/album/2018-07-10.jpg'),
  date: '2018-07-10'
}, {
  id: 7,
  address: '枣庄',
  image: require('../assets/img/album/2018-08-27.jpg'),
  date: '2018-08-27'
}, {
  id: 8,
  address: '南京',
  image: require('../assets/img/album/2018-09-23.jpg'),
  date: '2018-09-23'
}, {
  id: 9,
  address: '南京',
  image: require('../assets/img/album/2018-09-24.jpg'),
  date: '2018-09-24'
}, {
  id: 10,
  address: '南京',
  image: require('../assets/img/album/2018-10-18.jpg'),
  date: '2018-10-18'
}, {
  id: 11,
  address: '南京',
  image: require('../assets/img/album/2018-12-13.jpg'),
  date: '2018-12-13'
}, {
  id: 12,
  address: '南京',
  image: require('../assets/img/album/2019-01-04.jpg'),
  date: '2019-01-04'
}, {
  id: 13,
  address: '济南',
  image: require('../assets/img/album/2019-01-19.jpg'),
  date: '2019-01-19'
}, {
  id: 14,
  address: '青岛',
  image: require('../assets/img/album/2019-01-26.jpg'),
  date: '2019-01-26'
}, {
  id: 15,
  address: '青岛',
  image: require('../assets/img/album/2019-01-27.jpg'),
  date: '2019-01-27'
}, {
  id: 16,
  address: '青岛',
  image: require('../assets/img/album/2019-01-27(1).jpg'),
  date: '2019-01-27'
}, {
  id: 17,
  address: '青岛',
  image: require('../assets/img/album/2019-01-28.jpg'),
  date: '2019-01-28'
}, {
  id: 18,
  address: '南京',
  image: require('../assets/img/album/2019-03-01.jpg'),
  date: '2019-03-01'
}, {
  id: 19,
  address: '南京',
  image: require('../assets/img/album/2019-05-20.jpg'),
  date: '2019-05-20'
}, {
  id: 20,
  address: '南京',
  image: require('../assets/img/album/2019-05-20(1).jpg'),
  date: '2019-05-20'
}, {
  id: 21,
  address: '南京',
  image: require('../assets/img/album/2019-05-21.jpg'),
  date: '2019-05-21'
}, {
  id: 22,
  address: '南京',
  image: require('../assets/img/album/2019-05-21(1).jpg'),
  date: '2019-05-21'
}, {
  id: 23,
  address: '大连',
  image: require('../assets/img/album/2019-06-16.jpg'),
  date: '2019-06-16'
}, {
  id: 24,
  address: '大连',
  image: require('../assets/img/album/2019-06-16(1).jpg'),
  date: '2019-06-16'
}, {
  id: 25,
  address: '大连',
  image: require('../assets/img/album/2019-06-16(2).jpg'),
  date: '2019-06-16'
}, {
  id: 26,
  address: '大连',
  image: require('../assets/img/album/2019-06-16(3).jpg'),
  date: '2019-06-16'
}, {
  id: 27,
  address: '大连',
  image: require('../assets/img/album/2019-06-17.jpg'),
  date: '2019-06-17'
}, {
  id: 28,
  address: '大连',
  image: require('../assets/img/album/2019-06-17(1).jpg'),
  date: '2019-06-17'
}, {
  id: 29,
  address: '大连',
  image: require('../assets/img/album/2019-06-17(2).jpg'),
  date: '2019-06-17'
}, {
  id: 30,
  address: '大连',
  image: require('../assets/img/album/2019-06-17(3).jpg'),
  date: '2019-06-17'
}, {
  id: 31,
  address: '大连',
  image: require('../assets/img/album/2019-06-17(4).jpg'),
  date: '2019-06-17'
}, {
  id: 32,
  address: '大连',
  image: require('../assets/img/album/2019-06-17(5).jpg'),
  date: '2019-06-17'
}, {
  id: 33,
  address: '大连',
  image: require('../assets/img/album/2019-06-17(6).jpg'),
  date: '2019-06-17'
}, {
  id: 34,
  address: '大连',
  image: require('../assets/img/album/2019-06-17(7).jpg'),
  date: '2019-06-17'
}, {
  id: 35,
  address: '大连',
  image: require('../assets/img/album/2019-06-17(8).jpg'),
  date: '2019-06-17'
}, {
  id: 36,
  address: '大连',
  image: require('../assets/img/album/2019-06-17(9).jpg'),
  date: '2019-06-17'
}, {
  id: 37,
  address: '大连',
  image: require('../assets/img/album/2019-06-18.jpg'),
  date: '2019-06-18'
}, {
  id: 38,
  address: '大连',
  image: require('../assets/img/album/2019-06-18(1).jpg'),
  date: '2019-06-18'
}, {
  id: 39,
  address: '大连',
  image: require('../assets/img/album/2019-06-18(2).jpg'),
  date: '2019-06-18'
}, {
  id: 40,
  address: '大连',
  image: require('../assets/img/album/2019-06-18(3).jpg'),
  date: '2019-06-18'
}, {
  id: 41,
  address: '大连',
  image: require('../assets/img/album/2019-06-18(4).jpg'),
  date: '2019-06-18'
}, {
  id: 42,
  address: '大连',
  image: require('../assets/img/album/2019-06-18(5).jpg'),
  date: '2019-06-18'
}, {
  id: 43,
  address: '大连',
  image: require('../assets/img/album/2019-06-18(6).jpg'),
  date: '2019-06-18'
}, {
  id: 44,
  address: '枣庄',
  image: require('../assets/img/album/2019-07-19.jpg'),
  date: '2019-07-19'
}, {
  id: 45,
  address: '济南',
  image: require('../assets/img/album/2019-08-08.jpg'),
  date: '2019-08-08'
}, {
  id: 46,
  address: '济南',
  image: require('../assets/img/album/2019-08-08(1).jpg'),
  date: '2019-08-08'
}, {
  id: 47,
  address: '济南',
  image: require('../assets/img/album/2019-08-08(2).jpg'),
  date: '2019-08-08'
}, {
  id: 48,
  address: '南京',
  image: require('../assets/img/album/2019-09-01.jpg'),
  date: '2019-09-01'
}, {
  id: 49,
  address: '南京',
  image: require('../assets/img/album/2019-09-29.jpg'),
  date: '2019-09-29'
}, {
  id: 50,
  address: '南京',
  image: require('../assets/img/album/2019-09-29(1).jpg'),
  date: '2019-09-29'
}, {
  id: 51,
  address: '南京',
  image: require('../assets/img/album/2019-09-29(2).jpg'),
  date: '2019-09-29'
}, {
  id: 52,
  address: '南京',
  image: require('../assets/img/album/2019-10-14.jpg'),
  date: '2019-10-14'
}, {
  id: 53,
  address: '南京',
  image: require('../assets/img/album/2019-10-16.jpg'),
  date: '2019-10-16'
}, {
  id: 54,
  address: '南京',
  image: require('../assets/img/album/2019-11-16.jpg'),
  date: '2019-11-16'
}, {
  id: 55,
  address: '南京',
  image: require('../assets/img/album/2019-12-13.jpg'),
  date: '2019-12-13'
}, {
  id: 56,
  address: '南京',
  image: require('../assets/img/album/2019-12-25.jpg'),
  date: '2019-12-25'
}, {
  id: 57,
  address: '南京',
  image: require('../assets/img/album/2019-12-30.jpg'),
  date: '2019-12-25'
}, {
  id: 58,
  address: '南京',
  image: require('../assets/img/album/2020-01-01.jpg'),
  date: '2020-01-01'
}, {
  id: 59,
  address: '南京',
  image: require('../assets/img/album/2020-01-26.jpg'),
  date: '2020-01-26'
}, {
  id: 60,
  address: '枣庄',
  image: require('../assets/img/album/2020-02-11.jpg'),
  date: '2020-02-11'
}, {
  id: 61,
  address: '枣庄',
  image: require('../assets/img/album/2020-03-22.jpg'),
  date: '2020-03-22'
}, {
  id: 62,
  address: '枣庄',
  image: require('../assets/img/album/2020-04-02.jpg'),
  date: '2020-04-02'
}, {
  id: 63,
  address: '枣庄',
  image: require('../assets/img/album/2020-04-21.jpg'),
  date: '2020-04-21'
}, {
  id: 64,
  address: '枣庄',
  image: require('../assets/img/album/2020-04-29.jpg'),
  date: '2020-04-29'
}, {
  id: 65,
  address: '枣庄',
  image: require('../assets/img/album/2020-05-01.jpg'),
  date: '2020-05-01'
}, {
  id: 66,
  address: '潍坊',
  image: require('../assets/img/album/2020-05-01(1).jpg'),
  date: '2020-05-01'
}, {
  id: 67,
  address: '潍坊',
  image: require('../assets/img/album/2020-05-01(2).jpg'),
  date: '2020-05-01'
}, {
  id: 68,
  address: '潍坊',
  image: require('../assets/img/album/2020-05-01(3).jpg'),
  date: '2020-05-01'
}, {
  id: 69,
  address: '潍坊',
  image: require('../assets/img/album/2020-05-01(4).jpg'),
  date: '2020-05-01'
}, {
  id: 70,
  address: '潍坊',
  image: require('../assets/img/album/2020-05-02.jpg'),
  date: '2020-05-02'
}, {
  id: 71,
  address: '潍坊',
  image: require('../assets/img/album/2020-05-02(1).jpg'),
  date: '2020-05-02'
}, {
  id: 72,
  address: '潍坊',
  image: require('../assets/img/album/2020-05-02(2).jpg'),
  date: '2020-05-02'
}, {
  id: 73,
  address: '潍坊',
  image: require('../assets/img/album/2020-05-03.jpg'),
  date: '2020-05-03'
}, {
  id: 74,
  address: '潍坊',
  image: require('../assets/img/album/2020-05-03(1).jpg'),
  date: '2020-05-03'
}, {
  id: 75,
  address: '潍坊',
  image: require('../assets/img/album/2020-05-04.jpg'),
  date: '2020-05-04'
}, {
  id: 76,
  address: '南京',
  image: require('../assets/img/album/2020-05-20.jpg'),
  date: '2020-05-20'
}, {
  id: 77,
  address: '南京',
  image: require('../assets/img/album/2020-05-20(1).jpg'),
  date: '2020-05-20'
}, {
  id: 78,
  address: '南京',
  image: require('../assets/img/album/2020-05-23.jpg'),
  date: '2020-05-23'
}, {
  id: 79,
  address: '南京',
  image: require('../assets/img/album/2020-05-23(1).jpg'),
  date: '2020-05-23'
}, {
  id: 80,
  address: '南京',
  image: require('../assets/img/album/2020-05-26.jpg'),
  date: '2020-05-26'
}, {
  id: 81,
  address: '南京',
  image: require('../assets/img/album/2020-05-27.jpg'),
  date: '2020-05-27'
}, {
  id: 82,
  address: '南京',
  image: require('../assets/img/album/2020-06-04.jpg'),
  date: '2020-06-04'
}, {
  id: 83,
  address: '南京',
  image: require('../assets/img/album/2020-06-07.jpg'),
  date: '2020-06-07'
}, {
  id: 84,
  address: '杭州',
  image: require('../assets/img/album/2020-08-01.jpg'),
  date: '2020-08-01'
}, {
  id: 85,
  address: '杭州',
  image: require('../assets/img/album/2020-08-01(1).jpg'),
  date: '2020-08-01'
}, {
  id: 86,
  address: '杭州',
  image: require('../assets/img/album/2020-08-02.jpg'),
  date: '2020-08-02'
}, {
  id: 87,
  address: '杭州',
  image: require('../assets/img/album/2020-08-02(1).jpg'),
  date: '2020-08-02'
}, {
  id: 88,
  address: '杭州',
  image: require('../assets/img/album/2020-08-02(2).jpg'),
  date: '2020-08-02'
}, {
  id: 89,
  address: '杭州',
  image: require('../assets/img/album/2020-08-02(3).jpg'),
  date: '2020-08-02'
}, {
  id: 90,
  address: '杭州',
  image: require('../assets/img/album/2020-08-02(4).jpg'),
  date: '2020-08-02'
}, {
  id: 91,
  address: '杭州',
  image: require('../assets/img/album/2020-08-04.jpg'),
  date: '2020-08-04'
}, {
  id: 92,
  address: '杭州',
  image: require('../assets/img/album/2020-08-04(1).jpg'),
  date: '2020-08-04'
}, {
  id: 93,
  address: '杭州',
  image: require('../assets/img/album/2020-08-04(2).jpg'),
  date: '2020-08-04'
}, {
  id: 94,
  address: '杭州',
  image: require('../assets/img/album/2020-08-04(3).jpg'),
  date: '2020-08-04'
}, {
  id: 95,
  address: '杭州',
  image: require('../assets/img/album/2020-08-04(4).jpg'),
  date: '2020-08-04'
}, {
  id: 96,
  address: '南京',
  image: require('../assets/img/album/2020-09-06.jpg'),
  date: '2020-09-06'
}, {
  id: 97,
  address: '南京',
  image: require('../assets/img/album/2020-10-03.jpg'),
  date: '2020-10-03'
}, {
  id: 98,
  address: '南京',
  image: require('../assets/img/album/2020-10-18.jpg'),
  date: '2020-10-18'
}, {
  id: 99,
  address: '南京',
  image: require('../assets/img/album/2020-10-20.jpg'),
  date: '2020-10-20'
}, {
  id: 100,
  address: '南京',
  image: require('../assets/img/album/2020-11-08.jpg'),
  date: '2020-11-08'
}, {
  id: 101,
  address: '南京',
  image: require('../assets/img/album/2020-11-14.jpg'),
  date: '2020-11-14'
}, {
  id: 102,
  address: '南京',
  image: require('../assets/img/album/2020-12-17.jpg'),
  date: '2020-12-17'
}, {
  id: 103,
  address: '南京',
  image: require('../assets/img/album/2020-12-19.jpg'),
  date: '2020-12-19'
}, {
  id: 104,
  address: '南京',
  image: require('../assets/img/album/2020-12-23.jpg'),
  date: '2020-12-23'
}, {
  id: 105,
  address: '南京',
  image: require('../assets/img/album/2020-12-26.jpg'),
  date: '2020-12-26'
}, {
  id: 106,
  address: '南京',
  image: require('../assets/img/album/2020-12-30.jpg'),
  date: '2020-12-30'
}, {
  id: 107,
  address: '南京',
  image: require('../assets/img/album/2020-12-31.jpg'),
  date: '2020-12-31'
}, {
  id: 108,
  address: '南京',
  image: require('../assets/img/album/2021-01-13.jpg'),
  date: '2020-01-13'
}, {
  id: 109,
  address: '南京',
  image: require('../assets/img/album/2021-01-13(1).jpg'),
  date: '2020-01-13'
}, {
  id: 110,
  address: '南京',
  image: require('../assets/img/album/2021-01-13(2).jpg'),
  date: '2020-01-13'
}, {
  id: 111,
  address: '南京',
  image: require('../assets/img/album/2021-01-13(3).jpg'),
  date: '2020-01-13'
}, {
  id: 112,
  address: '南京',
  image: require('../assets/img/album/2021-01-13(4).jpg'),
  date: '2020-01-13'
}, {
  id: 113,
  address: '南京',
  image: require('../assets/img/album/2021-01-13(5).jpg'),
  date: '2020-01-13'
}, {
  id: 114,
  address: '南京',
  image: require('../assets/img/album/2021-01-13(6).jpg'),
  date: '2020-01-13'
}, {
  id: 115,
  address: '枣庄',
  image: require('../assets/img/album/2021-01-23.jpg'),
  date: '2020-01-23'
}, {
  id: 116,
  address: '枣庄',
  image: require('../assets/img/album/2021-02-08.jpg'),
  date: '2020-02-08'
}, {
  id: 117,
  address: '枣庄',
  image: require('../assets/img/album/2021-02-08(1).jpg'),
  date: '2020-02-08'
}, {
  id: 118,
  address: '枣庄',
  image: require('../assets/img/album/2021-02-10.jpg'),
  date: '2020-02-10'
}, {
  id: 119,
  address: '枣庄',
  image: require('../assets/img/album/2021-02-22.jpg'),
  date: '2020-02-22'
}, {
  id: 120,
  address: '枣庄',
  image: require('../assets/img/album/2021-02-22(1).jpg'),
  date: '2020-02-22'
}, {
  id: 121,
  address: '南京',
  image: require('../assets/img/album/2021-03-21.jpg'),
  date: '2020-02-21'
}, {
  id: 122,
  address: '南京',
  image: require('../assets/img/album/2021-04-03.jpg'),
  date: '2020-04-03'
}, {
  id: 123,
  address: '南京',
  image: require('../assets/img/album/2021-04-04.jpg'),
  date: '2020-04-04'
}, {
  id: 124,
  address: '南京',
  image: require('../assets/img/album/2021-04-04(1).jpg'),
  date: '2020-04-04'
}, {
  id: 125,
  address: '南京',
  image: require('../assets/img/album/2021-04-04(2).jpg'),
  date: '2020-04-04'
}, {
  id: 126,
  address: '南京',
  image: require('../assets/img/album/2021-04-04(3).jpg'),
  date: '2020-04-04'
}, {
  id: 127,
  address: '南京',
  image: require('../assets/img/album/2021-04-05.jpg'),
  date: '2020-04-05'
}, {
  id: 128,
  address: '南京',
  image: require('../assets/img/album/2021-04-05(1).jpg'),
  date: '2020-04-05'
}, {
  id: 129,
  address: '南京',
  image: require('../assets/img/album/2021-04-05(2).jpg'),
  date: '2020-04-05'
}, {
  id: 130,
  address: '南京',
  image: require('../assets/img/album/2021-04-05(3).jpg'),
  date: '2020-04-05'
}, {
  id: 131,
  address: '南京',
  image: require('../assets/img/album/2021-04-05(4).jpg'),
  date: '2020-04-05'
}, {
  id: 132,
  address: '南京',
  image: require('../assets/img/album/2021-04-08.jpg'),
  date: '2020-04-08'
}, {
  id: 133,
  address: '南京',
  image: require('../assets/img/album/2021-04-14.jpg'),
  date: '2020-04-14'
}, {
  id: 134,
  address: '南京',
  image: require('../assets/img/album/2021-04-14(1).jpg'),
  date: '2020-04-14'
}, {
  id: 135,
  address: '南京',
  image: require('../assets/img/album/2021-04-14(2).jpg'),
  date: '2020-04-14'
}, {
  id: 136,
  address: '南京',
  image: require('../assets/img/album/2021-04-21.jpg'),
  date: '2020-04-21'
}, {
  id: 137,
  address: '南京',
  image: require('../assets/img/album/2021-04-21(1).jpg'),
  date: '2020-04-21'
}, {
  id: 138,
  address: '南京',
  image: require('../assets/img/album/2021-05-11.jpg'),
  date: '2020-05-11'
}, {
  id: 139,
  address: '沈阳',
  image: require('../assets/img/album/2021-05-16.jpg'),
  date: '2020-05-16'
}, {
  id: 140,
  address: '沈阳',
  image: require('../assets/img/album/2021-05-16(1).jpg'),
  date: '2020-05-16'
}, {
  id: 141,
  address: '沈阳',
  image: require('../assets/img/album/2021-05-18.jpg'),
  date: '2020-05-18'
}, {
  id: 142,
  address: '沈阳',
  image: require('../assets/img/album/2021-05-18(1).jpg'),
  date: '2020-05-18'
}, {
  id: 143,
  address: '沈阳',
  image: require('../assets/img/album/2021-05-18(2).jpg'),
  date: '2020-05-18'
}, {
  id: 144,
  address: '沈阳',
  image: require('../assets/img/album/2021-05-18(3).jpg'),
  date: '2020-05-18'
}, {
  id: 145,
  address: '沈阳',
  image: require('../assets/img/album/2021-05-18(4).jpg'),
  date: '2020-05-18'
}, {
  id: 146,
  address: '沈阳',
  image: require('../assets/img/album/2021-05-18(5).jpg'),
  date: '2020-05-18'
}];
var _default = albumDB;
exports.default = _default;
},{"../assets/img/album/2018-06-10.jpg":"evWq","../assets/img/album/2018-06-24.jpg":"EN9w","../assets/img/album/2018-06-24(1).jpg":"l8nu","../assets/img/album/2018-06-25.jpg":"eEkN","../assets/img/album/2018-06-27.jpg":"I6Dp","../assets/img/album/2018-07-10.jpg":"Id4m","../assets/img/album/2018-08-27.jpg":"e7jI","../assets/img/album/2018-09-23.jpg":"Y76C","../assets/img/album/2018-09-24.jpg":"IGMq","../assets/img/album/2018-10-18.jpg":"JXfT","../assets/img/album/2018-12-13.jpg":"n5Pg","../assets/img/album/2019-01-04.jpg":"W0a2","../assets/img/album/2019-01-19.jpg":"yHGw","../assets/img/album/2019-01-26.jpg":"ID0l","../assets/img/album/2019-01-27.jpg":"pmBA","../assets/img/album/2019-01-27(1).jpg":"vZM2","../assets/img/album/2019-01-28.jpg":"L05C","../assets/img/album/2019-03-01.jpg":"kiYy","../assets/img/album/2019-05-20.jpg":"ynOM","../assets/img/album/2019-05-20(1).jpg":"Dylw","../assets/img/album/2019-05-21.jpg":"AlB0","../assets/img/album/2019-05-21(1).jpg":"DSZJ","../assets/img/album/2019-06-16.jpg":"UFi4","../assets/img/album/2019-06-16(1).jpg":"IEJp","../assets/img/album/2019-06-16(2).jpg":"AimH","../assets/img/album/2019-06-16(3).jpg":"vdTc","../assets/img/album/2019-06-17.jpg":"IRKV","../assets/img/album/2019-06-17(1).jpg":"wQzU","../assets/img/album/2019-06-17(2).jpg":"bRtu","../assets/img/album/2019-06-17(3).jpg":"IKhv","../assets/img/album/2019-06-17(4).jpg":"brCv","../assets/img/album/2019-06-17(5).jpg":"MuPC","../assets/img/album/2019-06-17(6).jpg":"YKM2","../assets/img/album/2019-06-17(7).jpg":"v7WJ","../assets/img/album/2019-06-17(8).jpg":"BTES","../assets/img/album/2019-06-17(9).jpg":"lT7g","../assets/img/album/2019-06-18.jpg":"w9c1","../assets/img/album/2019-06-18(1).jpg":"XWtf","../assets/img/album/2019-06-18(2).jpg":"Cwrd","../assets/img/album/2019-06-18(3).jpg":"YTkg","../assets/img/album/2019-06-18(4).jpg":"UwWw","../assets/img/album/2019-06-18(5).jpg":"c1Qf","../assets/img/album/2019-06-18(6).jpg":"qbGh","../assets/img/album/2019-07-19.jpg":"mlo0","../assets/img/album/2019-08-08.jpg":"lIPT","../assets/img/album/2019-08-08(1).jpg":"Ajgc","../assets/img/album/2019-08-08(2).jpg":"ZYJ4","../assets/img/album/2019-09-01.jpg":"yIca","../assets/img/album/2019-09-29.jpg":"zWA9","../assets/img/album/2019-09-29(1).jpg":"Ew81","../assets/img/album/2019-09-29(2).jpg":"aM28","../assets/img/album/2019-10-14.jpg":"J8FK","../assets/img/album/2019-10-16.jpg":"VlFb","../assets/img/album/2019-11-16.jpg":"BfL6","../assets/img/album/2019-12-13.jpg":"KKpm","../assets/img/album/2019-12-25.jpg":"WD5T","../assets/img/album/2019-12-30.jpg":"k3S5","../assets/img/album/2020-01-01.jpg":"P7hv","../assets/img/album/2020-01-26.jpg":"A47U","../assets/img/album/2020-02-11.jpg":"BZwZ","../assets/img/album/2020-03-22.jpg":"PYhH","../assets/img/album/2020-04-02.jpg":"Kc8t","../assets/img/album/2020-04-21.jpg":"ol2R","../assets/img/album/2020-04-29.jpg":"W6B6","../assets/img/album/2020-05-01.jpg":"PUXt","../assets/img/album/2020-05-01(1).jpg":"dgXX","../assets/img/album/2020-05-01(2).jpg":"j8Zg","../assets/img/album/2020-05-01(3).jpg":"LwRt","../assets/img/album/2020-05-01(4).jpg":"UgvF","../assets/img/album/2020-05-02.jpg":"x3wT","../assets/img/album/2020-05-02(1).jpg":"Aqmw","../assets/img/album/2020-05-02(2).jpg":"RUuY","../assets/img/album/2020-05-03.jpg":"BfSc","../assets/img/album/2020-05-03(1).jpg":"iWqw","../assets/img/album/2020-05-04.jpg":"nLfy","../assets/img/album/2020-05-20.jpg":"J9oo","../assets/img/album/2020-05-20(1).jpg":"XEEu","../assets/img/album/2020-05-23.jpg":"iUTU","../assets/img/album/2020-05-23(1).jpg":"eVeK","../assets/img/album/2020-05-26.jpg":"Ycqy","../assets/img/album/2020-05-27.jpg":"Flm5","../assets/img/album/2020-06-04.jpg":"zaR9","../assets/img/album/2020-06-07.jpg":"Flb7","../assets/img/album/2020-08-01.jpg":"l3ta","../assets/img/album/2020-08-01(1).jpg":"BAxY","../assets/img/album/2020-08-02.jpg":"AIkL","../assets/img/album/2020-08-02(1).jpg":"EJLx","../assets/img/album/2020-08-02(2).jpg":"s5zN","../assets/img/album/2020-08-02(3).jpg":"fwjs","../assets/img/album/2020-08-02(4).jpg":"lJMG","../assets/img/album/2020-08-04.jpg":"aeIk","../assets/img/album/2020-08-04(1).jpg":"JqJY","../assets/img/album/2020-08-04(2).jpg":"DLvN","../assets/img/album/2020-08-04(3).jpg":"MMQm","../assets/img/album/2020-08-04(4).jpg":"a6Jo","../assets/img/album/2020-09-06.jpg":"UbUM","../assets/img/album/2020-10-03.jpg":"I4NU","../assets/img/album/2020-10-18.jpg":"taNS","../assets/img/album/2020-10-20.jpg":"eNeA","../assets/img/album/2020-11-08.jpg":"B4PH","../assets/img/album/2020-11-14.jpg":"k5QC","../assets/img/album/2020-12-17.jpg":"nSoQ","../assets/img/album/2020-12-19.jpg":"Skt4","../assets/img/album/2020-12-23.jpg":"BvTw","../assets/img/album/2020-12-26.jpg":"n3Ve","../assets/img/album/2020-12-30.jpg":"C2wC","../assets/img/album/2020-12-31.jpg":"VoCu","../assets/img/album/2021-01-13.jpg":"FF7q","../assets/img/album/2021-01-13(1).jpg":"Dimg","../assets/img/album/2021-01-13(2).jpg":"VYsT","../assets/img/album/2021-01-13(3).jpg":"ZHj4","../assets/img/album/2021-01-13(4).jpg":"lhsU","../assets/img/album/2021-01-13(5).jpg":"Dh5x","../assets/img/album/2021-01-13(6).jpg":"A9mu","../assets/img/album/2021-01-23.jpg":"Gh0o","../assets/img/album/2021-02-08.jpg":"mNuu","../assets/img/album/2021-02-08(1).jpg":"fmP3","../assets/img/album/2021-02-10.jpg":"Qndi","../assets/img/album/2021-02-22.jpg":"hUw7","../assets/img/album/2021-02-22(1).jpg":"ZGBd","../assets/img/album/2021-03-21.jpg":"aQXB","../assets/img/album/2021-04-03.jpg":"lQwl","../assets/img/album/2021-04-04.jpg":"RcT2","../assets/img/album/2021-04-04(1).jpg":"TDtP","../assets/img/album/2021-04-04(2).jpg":"pgUP","../assets/img/album/2021-04-04(3).jpg":"OJZZ","../assets/img/album/2021-04-05.jpg":"u4Qb","../assets/img/album/2021-04-05(1).jpg":"EKrT","../assets/img/album/2021-04-05(2).jpg":"u8MB","../assets/img/album/2021-04-05(3).jpg":"qrmQ","../assets/img/album/2021-04-05(4).jpg":"Z8oG","../assets/img/album/2021-04-08.jpg":"KoB3","../assets/img/album/2021-04-14.jpg":"rpJq","../assets/img/album/2021-04-14(1).jpg":"x4Kb","../assets/img/album/2021-04-14(2).jpg":"ArGJ","../assets/img/album/2021-04-21.jpg":"PpB1","../assets/img/album/2021-04-21(1).jpg":"Uo27","../assets/img/album/2021-05-11.jpg":"NltG","../assets/img/album/2021-05-16.jpg":"wDbH","../assets/img/album/2021-05-16(1).jpg":"JoEV","../assets/img/album/2021-05-18.jpg":"OgUH","../assets/img/album/2021-05-18(1).jpg":"oT4D","../assets/img/album/2021-05-18(2).jpg":"lSz4","../assets/img/album/2021-05-18(3).jpg":"sVbA","../assets/img/album/2021-05-18(4).jpg":"aTsp","../assets/img/album/2021-05-18(5).jpg":"GUo0"}],"DWyg":[function(require,module,exports) {
"use strict";

var _album = _interopRequireDefault(require("./database/album"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $albumSwiper = $(".album-swiper"); // 创建文档碎片，减少 DOM 操作

var fragment = $(document.createDocumentFragment());

_album.default.map(function (item) {
  var $albumItemDiv = $("<div class='album-item'></div>");
  var $addressDiv = $("<div class='address gauss'>".concat(item.address, "</div>"));
  var $image = $("<img class='image gauss' src=".concat(item.image, ">"));
  var $dateDiv = $("<div class='date gauss'>".concat(item.date, "</div>"));
  $albumItemDiv.append($image).append($addressDiv).append($dateDiv);
  fragment.append($albumItemDiv);
});

$albumSwiper.append(fragment);

window.onload = function () {
  // 获取照片墙高度，动态设置动画滚动距离
  var albumSwiperHeight = $albumSwiper.height();
  var clientHeight = document.documentElement.clientHeight;
  var rollHeight = albumSwiperHeight - clientHeight;
  var style = document.styleSheets[5];
  style.deleteRule(1);
  style.insertRule("@keyframes roll {0% {margin-top: 0} 100% {margin-top: -".concat(rollHeight, "px}"));
};
},{"./database/album":"mddz"}]},{},["DWyg"], null)
//# sourceMappingURL=album_part.98da950a.js.map