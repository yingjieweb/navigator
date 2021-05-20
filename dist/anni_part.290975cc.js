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
})({"p9tV":[function(require,module,exports) {
/**************************************** garden.js start ****************************************/
function Vector(x, y) {
  this.x = x;
  this.y = y;
}

Vector.prototype = {
  rotate: function rotate(theta) {
    var x = this.x;
    var y = this.y;
    this.x = Math.cos(theta) * x - Math.sin(theta) * y;
    this.y = Math.sin(theta) * x + Math.cos(theta) * y;
    return this;
  },
  mult: function mult(f) {
    this.x *= f;
    this.y *= f;
    return this;
  },
  clone: function clone() {
    return new Vector(this.x, this.y);
  },
  length: function length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  },
  subtract: function subtract(v) {
    this.x -= v.x;
    this.y -= v.y;
    return this;
  },
  set: function set(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }
};

function Petal(stretchA, stretchB, startAngle, angle, growFactor, bloom) {
  this.stretchA = stretchA;
  this.stretchB = stretchB;
  this.startAngle = startAngle;
  this.angle = angle;
  this.bloom = bloom;
  this.growFactor = growFactor;
  this.r = 1;
  this.isfinished = false; //this.tanAngleA = Garden.random(-Garden.degrad(Garden.options.tanAngle), Garden.degrad(Garden.options.tanAngle));
  //this.tanAngleB = Garden.random(-Garden.degrad(Garden.options.tanAngle), Garden.degrad(Garden.options.tanAngle));
}

Petal.prototype = {
  draw: function draw() {
    var ctx = this.bloom.garden.ctx;
    var v1, v2, v3, v4;
    v1 = new Vector(0, this.r).rotate(Garden.degrad(this.startAngle));
    v2 = v1.clone().rotate(Garden.degrad(this.angle));
    v3 = v1.clone().mult(this.stretchA); //.rotate(this.tanAngleA);

    v4 = v2.clone().mult(this.stretchB); //.rotate(this.tanAngleB);

    ctx.strokeStyle = this.bloom.c;
    ctx.beginPath();
    ctx.moveTo(v1.x, v1.y);
    ctx.bezierCurveTo(v3.x, v3.y, v4.x, v4.y, v2.x, v2.y);
    ctx.stroke();
  },
  render: function render() {
    if (this.r <= this.bloom.r) {
      this.r += this.growFactor; // / 10;

      this.draw();
    } else {
      this.isfinished = true;
    }
  }
};

function Bloom(p, r, c, pc, garden) {
  this.p = p;
  this.r = r;
  this.c = c;
  this.pc = pc;
  this.petals = [];
  this.garden = garden;
  this.init();
  this.garden.addBloom(this);
}

Bloom.prototype = {
  draw: function draw() {
    var p,
        isfinished = true;
    this.garden.ctx.save();
    this.garden.ctx.translate(this.p.x, this.p.y);

    for (var i = 0; i < this.petals.length; i++) {
      p = this.petals[i];
      p.render();
      isfinished *= p.isfinished;
    }

    this.garden.ctx.restore();

    if (isfinished == true) {
      this.garden.removeBloom(this);
    }
  },
  init: function init() {
    var angle = 360 / this.pc;
    var startAngle = Garden.randomInt(0, 90);

    for (var i = 0; i < this.pc; i++) {
      this.petals.push(new Petal(Garden.random(Garden.options.petalStretch.min, Garden.options.petalStretch.max), Garden.random(Garden.options.petalStretch.min, Garden.options.petalStretch.max), startAngle + i * angle, angle, Garden.random(Garden.options.growFactor.min, Garden.options.growFactor.max), this));
    }
  }
};

function Garden(ctx, element) {
  this.blooms = [];
  this.element = element;
  this.ctx = ctx;
}

Garden.prototype = {
  render: function render() {
    for (var i = 0; i < this.blooms.length; i++) {
      this.blooms[i].draw();
    }
  },
  addBloom: function addBloom(b) {
    this.blooms.push(b);
  },
  removeBloom: function removeBloom(b) {
    var bloom;

    for (var i = 0; i < this.blooms.length; i++) {
      bloom = this.blooms[i];

      if (bloom === b) {
        this.blooms.splice(i, 1);
        return this;
      }
    }
  },
  createRandomBloom: function createRandomBloom(x, y) {
    this.createBloom(x, y, Garden.randomInt(Garden.options.bloomRadius.min, Garden.options.bloomRadius.max), Garden.randomrgba(Garden.options.color.rmin, Garden.options.color.rmax, Garden.options.color.gmin, Garden.options.color.gmax, Garden.options.color.bmin, Garden.options.color.bmax, Garden.options.color.opacity), Garden.randomInt(Garden.options.petalCount.min, Garden.options.petalCount.max));
  },
  createBloom: function createBloom(x, y, r, c, pc) {
    new Bloom(new Vector(x, y), r, c, pc, this);
  },
  clear: function clear() {
    this.blooms = [];
    this.ctx.clearRect(0, 0, this.element.width, this.element.height);
  }
};
Garden.options = {
  petalCount: {
    min: 8,
    max: 15
  },
  petalStretch: {
    min: 0.1,
    max: 3
  },
  growFactor: {
    min: 0.1,
    max: 1
  },
  bloomRadius: {
    min: 8,
    max: 10
  },
  density: 10,
  growSpeed: 1000 / 60,
  color: {
    rmin: 128,
    rmax: 255,
    gmin: 0,
    gmax: 128,
    bmin: 0,
    bmax: 128,
    opacity: 0.1
  },
  tanAngle: 60
};

Garden.random = function (min, max) {
  return Math.random() * (max - min) + min;
};

Garden.randomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

Garden.circle = 2 * Math.PI;

Garden.degrad = function (angle) {
  return Garden.circle / 360 * angle;
};

Garden.raddeg = function (angle) {
  return angle / Garden.circle * 360;
};

Garden.rgba = function (r, g, b, a) {
  return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
};

Garden.randomrgba = function (rmin, rmax, gmin, gmax, bmin, bmax, a) {
  var r = Math.round(Garden.random(rmin, rmax));
  var g = Math.round(Garden.random(gmin, gmax));
  var b = Math.round(Garden.random(bmin, bmax));
  var limit = 5;

  if (Math.abs(r - g) <= limit && Math.abs(g - b) <= limit && Math.abs(b - r) <= limit) {
    return Garden.rgba(rmin, rmax, gmin, gmax, bmin, bmax, a);
  } else {
    return Garden.rgba(r, g, b, a);
  }
};
/**************************************** garden.js  end  ****************************************/

/**************************************** functions.js  end  ****************************************/


var $window = $(window),
    gardenCtx,
    gardenCanvas,
    $garden,
    garden;
var clientWidth = $(window).width();
var clientHeight = $(window).height();
$(function () {
  // setup garden
  $loveHeart = $(".love-heart");
  var offsetX = $loveHeart.width() / 2;
  var offsetY = $loveHeart.height() / 2 - 55;
  $garden = $(".garden");
  gardenCanvas = $garden[0];
  gardenCanvas.width = $(".love-heart").width();
  gardenCanvas.height = $(".love-heart").height();
  gardenCtx = gardenCanvas.getContext("2d");
  gardenCtx.globalCompositeOperation = "lighter";
  garden = new Garden(gardenCtx, gardenCanvas); // renderLoop

  setInterval(function () {
    garden.render();
  }, Garden.options.growSpeed);
});

function getHeartPoint(angle) {
  var t = angle / Math.PI;
  var x = 19.5 * (16 * Math.pow(Math.sin(t), 3));
  var y = -20 * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
  return new Array(offsetX + x, offsetY + y);
}

function startHeartAnimation() {
  var interval = 50;
  var angle = 10;
  var heart = [];
  var animationTimer = setInterval(function () {
    var bloom = getHeartPoint(angle);
    var draw = true;

    for (var i = 0; i < heart.length; i++) {
      var p = heart[i];
      var distance = Math.sqrt(Math.pow(p[0] - bloom[0], 2) + Math.pow(p[1] - bloom[1], 2));

      if (distance < Garden.options.bloomRadius.max * 1.3) {
        draw = false;
        break;
      }
    }

    if (draw) {
      heart.push(bloom);
      garden.createRandomBloom(bloom[0], bloom[1]);
    }

    if (angle >= 30) {
      clearInterval(animationTimer);
      showMessages();
    } else {
      angle += 0.2;
    }
  }, interval);
}

(function ($) {
  $.fn.typewriter = function () {
    this.each(function () {
      var $ele = $(this),
          str = $ele.html(),
          progress = 0;
      $ele.html('');
      var timer = setInterval(function () {
        var current = str.substr(progress, 1);

        if (current == '<') {
          progress = str.indexOf('>', progress) + 1;
        } else {
          progress++;
        }

        $ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));

        if (progress >= str.length) {
          clearInterval(timer);
        }
      }, 75);
    });
    return this;
  };
})(jQuery);

function timeElapse(date) {
  var current = Date();
  var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
  var days = Math.floor(seconds / (3600 * 24));
  seconds = seconds % (3600 * 24);
  var hours = Math.floor(seconds / 3600);

  if (hours < 10) {
    hours = "0" + hours;
  }

  seconds = seconds % 3600;
  var minutes = Math.floor(seconds / 60);

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  seconds = seconds % 60;

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  var result = "<span class=\"digit\">" + days + "</span> days <span class=\"digit\">" + hours + "</span> hours <span class=\"digit\">" + minutes + "</span> minutes <span class=\"digit\">" + seconds + "</span> seconds";
  $(".elapseClock").html(result);
}

function showMessages() {
  adjustWordsPosition();
  $('.messages').fadeIn(5000, function () {
    showLoveU();
  });
}

function adjustWordsPosition() {
  $('.words').css("position", "absolute");
  $('.words').css("top", $(".garden").position().top + 195);
  $('.words').css("left", $(".garden").position().left + 70);
} // function adjustCodePosition() {
//   $('.code').css("margin-top", ($(".garden").height() - $(".code").height()) / 2);
// }


function showLoveU() {
  $('.loveu').fadeIn(3000);
}
/**************************************** functions.js  end  ****************************************/


var offsetX = $(".love-heart").width() / 2;
var offsetY = $(".love-heart").height() / 2 - 55;
var together = new Date();
together.setFullYear(2018, 5, 29);
together.setHours(17);
together.setMinutes(21);
together.setSeconds(0);
together.setMilliseconds(0);

if (!document.createElement('canvas').getContext) {
  var msg = document.createElement("div");
  msg.id = "errorMsg";
  msg.innerHTML = "Your browser doesn't support HTML5!<br/>Recommend use Chrome 14+/IE 9+/Firefox 7+/Safari 4+";
  document.body.appendChild(msg);
  $(".code").css("display", "none");
  document.execCommand("stop");
} else {
  setTimeout(function () {
    startHeartAnimation();
  }, 5000);
  timeElapse(together);
  setInterval(function () {
    timeElapse(together);
  }, 500); // adjustCodePosition();

  $(".code").typewriter();
}
},{}]},{},["p9tV"], null)
//# sourceMappingURL=anni_part.290975cc.js.map