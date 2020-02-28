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
})({"src/scripts/functions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sumar = sumar;
exports.default = restar;
exports.PI = void 0;
var PI = 3.14;
exports.PI = PI;

function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
} //solo puedes expotar uno por archivo
},{}],"src/scripts/main.js":[function(require,module,exports) {
"use strict";

var _functions = _interopRequireWildcard(require("./functions"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// function sumar(a, b) {
//   return a + b;
// }  //clasico
// console.log(sumar(5, 8));

/***Arrow function */
// let sumar2 = (a, b) => a + b; //una sola linea
// console.log(sumar2(45, 50));
// let sumar3 = (a, b) => {
//   console.log('Hola mundo'); //varial lineas
//   return a + b;
// }
// console.log(sumar3(45, 50));

/* this arrow*/
// let obj = {
//   name: 'sebastian',
//   lastname: 'yabiku',
//   fn: () => {
//     console.log(this); //arrow function no apunta a su propio this sino a su padre
//   }
// }
// obj.fn();

/*Parametro por defecto*/
// function suma(a = 5, b = 5, fn = () => { }) {
//   fn();
//   return a + b;
// }
// console.log(suma(2, 3, function () {
//   console.log('hola mundo!!');
// }));

/*Paramento REST*/
// function restParam(a, b, ...rest) {
//   console.log(a);
//   console.log(b);
//   console.log(rest);
// }
// console.log(restParam(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

/*Paramento SPREAD OPERATOR*/
// function restParam(a, b, ...rest) {
//   console.log(a);
//   console.log(b);
//   console.log(...rest);
// }
// console.log(restParam(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// let array = [0, 1, 2, 3, 4,];
// let array2 = [5, 6, 7, 8, 9, 10];
// let array_total = [...array, ...array2]
// console.log(array_total);
// let obj = {
//   name: 'sebastian'
// }
// let obj2 = {
//   age: 33
// }
// let obj3 = {
//   ...obj,
//   ...obj2
// }
// console.log(obj3);

/*DIFINICION CORTA DE OBJETOS*/
// let nombre = prompt('Escribe tu nombre')
// let apellido = prompt('Escribe tu apellido')
// let usuario = {
//   nombre, //nombre,
//   apellido //apellido
// }
// console.log(usuario);

/*METODO CONCISO*/
// let objc = {
//   name: 'sebastian',
//   metodo () { //: function 
//     return `Mi nombre es ${this.name}`
//   }
// }
// console.log(objc.metodo());

/**objet Object.assing()**/
// let obj = {
//   name: 'sebastian',
//   lastname: 'yabiku'
// }
// let obj2 = {
//   age: 33,
//   lastname: 'sifuentes' //sobrescribe el ultimo obj
// }
// let copyObject = Object.assign({},obj, obj2); //sin {} copia por referencia
// obj.name = 'luis'
// console.log(copyObject);

/**Destructuring obj**/
// let obj = {
//   name: 'sebastian',
//   lastname: 'yabiku'
// }
// let { name, lastname } = obj; //no hace referencia
// console.log(obj);
// let users = {
//   tipo: 'alumnos',
//   colegio: 'san miguel',
//   alumnos: {
//     uno: {
//       name: 'sebastian',
//       lastname: 'yabiku'
//     },
//     dos: {
//       name: 'erika',
//     lastname: 'rueda'
//     }
//   },
// }
//users.alumnos.uno.name;  clasico ref
// let { //defieniedo variables del objeto
//   alumnos: {
//     uno: {name, lastname}
//     // dos
//   }
// } = users;
// console.log(name, lastname);
// console.log(dos);

/**Destructuring ARRAY**/
// let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let [cero, uno, , tres] = numbers;
// console.log(cero, uno, tres);
// let array1 = [0, [6, 7, 8, 9, 10]];
// let [, [numbers, two]] = array1;
// console.log(numbers, two);
//  new 
// let colegio = {
//   nombre: 'san migual',
//   alumnos: [
//     {
//       name: 'sebastian',
//       age: 33,
//       sex: 'm'
//     },
//     {
//       name: 'luis',
//       age: 33,
//       sex: 'm'
//     },
//     {
//       name: 'melissa',
//       age: 33,
//       sex: 'f'
//     }
//   ]
// }
// let {alumnos} = colegio;
// console.log('alumnos', alumnos[0]);
// new 
// function alumno(nombre, apellido, edad, sexo) {
//   let nombre = nombre;
//   let apellido = apellido;
//   let edad = edad;
//   let sexo = sexo;
// }
// alumno('sebastiab', 'yabiku', '33', 'm');
// restructura
function alumno(_ref) {
  var name = _ref.name,
      edad = _ref.edad,
      sexo = _ref.sexo,
      apellido = _ref.apellido;
  var name1 = name;
  var sexo1 = sexo;
  var edad1 = edad;
  var apellido1 = apellido;
  console.log(name1);
  console.log(sexo1);
  console.log(edad1);
  console.log(apellido1);
}

alumno({
  name: 'sebastian',
  sexo: 'm',
  edad: '33',
  apellido: 'yabiku'
});
/**Classes**/

var Persona =
/*#__PURE__*/
function () {
  function Persona(_ref2) {
    var nombre = _ref2.nombre,
        edad = _ref2.edad;

    _classCallCheck(this, Persona);

    this.nombre = nombre;
    this.edad = edad;
  }

  _createClass(Persona, [{
    key: "hablar",
    value: function hablar() {
      return "Hola soy ".concat(this.nombre, " y mmi edad es ").concat(this.edad);
    }
  }]);

  return Persona;
}();

var sebastian = new Persona({
  nombre: 'sebastian',
  edad: 33
});
var jose = new Persona({
  nombre: 'jose',
  edad: 95
});
console.log(sebastian);
console.log(jose);
console.log(sebastian.hablar());
console.log(jose.hablar()); // import y export

//as se puede renombrar PI as PE
console.log((0, _functions.sumar)(2, 1200));
console.log((0, _functions.default)(10, 8));
},{"./functions":"src/scripts/functions.js"}],"C:/Users/OSX/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51171" + '/');

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
},{}]},{},["C:/Users/OSX/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/scripts/main.js"], null)
//# sourceMappingURL=/main.a5838760.js.map