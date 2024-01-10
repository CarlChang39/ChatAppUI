var _ea65ef4ec7ea008b316d651e7ceca251;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/SwitchControl.ets":
/*!**********************************************************************************************************************!*\
  !*** ../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/SwitchControl.ets ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.writeFile = exports.readFile = void 0;
/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _ohos_data_storage_1  = globalThis.requireNapi('data.storage') || (isSystemplugin('data.storage', 'ohos') ? globalThis.ohosplugin.data.storage : isSystemplugin('data.storage', 'system') ? globalThis.systemplugin.data.storage : undefined);
var _ohos_ability_featureAbility_1  = globalThis.requireNapi('ability.featureAbility') || (isSystemplugin('ability.featureAbility', 'ohos') ? globalThis.ohosplugin.ability.featureAbility : isSystemplugin('ability.featureAbility', 'system') ? globalThis.systemplugin.ability.featureAbility : undefined);
const Logger_1 = __webpack_require__(/*! ../components/Logger */ "../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/components/Logger.ets");
class SwitchControl extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id());
    }
    render() {
    }
}
function readFile(key) {
    let context = _ohos_ability_featureAbility_1.getContext();
    return context.getFilesDir().then((path) => {
        let promise;
        try {
            promise = _ohos_data_storage_1.getStorage(`${path}/mystore`);
        }
        catch (err) {
            Logger_1.Logger.error(`getStorage failed, code is ${err.code}, message is ${err.message}`);
        }
        return promise.then((storage) => {
            let readText = storage.get(key, 'default');
            return readText.then((value) => {
                return new Promise((resolve) => {
                    return resolve(value);
                });
            });
        });
    });
}
exports.readFile = readFile;
function writeFile({ key = "", val = "" }) {
    // 读取文件
    let context = _ohos_ability_featureAbility_1.getContext();
    context.getFilesDir().then((path) => {
        // 获取实例
        let storage;
        try {
            storage = _ohos_data_storage_1.getStorageSync(`${path}/mystore`);
        }
        catch (err) {
            Logger_1.Logger.error(`getStorageSync failed, code is ${err.code}, message is ${err.message}`);
        }
        // 将数据写入
        storage.putSync(key, val);
        // 持久化储存
        storage.flushSync();
    });
}
exports.writeFile = writeFile;
loadDocument(new SwitchControl("1", undefined, {}));


/***/ }),

/***/ "../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/SwitchPage.ets?entry":
/*!*************************************************************************************************************************!*\
  !*** ../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/SwitchPage.ets?entry ***!
  \*************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _ohos_router_1  = globalThis.requireNapi('router') || (isSystemplugin('router', 'ohos') ? globalThis.ohosplugin.router : isSystemplugin('router', 'system') ? globalThis.systemplugin.router : undefined);
const SwitchControl_1 = __webpack_require__(/*! ./SwitchControl */ "../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/SwitchControl.ets");
class SwitchPage extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.__fiveThousandBtn = new ObservedPropertySimple('true'
        //5000类左边距
        , this, "fiveThousandBtn");
        this.__fiveThousandNum = new ObservedPropertySimple(1
        //5000类背景色
        , this, "fiveThousandNum");
        this.__fiveThousandColor = new ObservedPropertySimple("#f0f0f0"
        //500类按钮
        , this, "fiveThousandColor");
        this.__fiveHundredBtn = new ObservedPropertySimple('true'
        //500类左边距
        , this, "fiveHundredBtn");
        this.__fiveHundredNum = new ObservedPropertySimple(1
        //500类背景色
        , this, "fiveHundredNum");
        this.__fiveHundredColor = new ObservedPropertySimple("#f0f0f0"
        //线程按钮
        , this, "fiveHundredColor");
        this.__workerBtn = new ObservedPropertySimple('true'
        //线程左边距
        , this, "workerBtn");
        this.__workerNum = new ObservedPropertySimple(1
        //线程背景色
        , this, "workerNum");
        this.__workerColor = new ObservedPropertySimple("#f0f0f0", this, "workerColor");
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.fiveThousandBtn !== undefined) {
            this.fiveThousandBtn = params.fiveThousandBtn;
        }
        if (params.fiveThousandNum !== undefined) {
            this.fiveThousandNum = params.fiveThousandNum;
        }
        if (params.fiveThousandColor !== undefined) {
            this.fiveThousandColor = params.fiveThousandColor;
        }
        if (params.fiveHundredBtn !== undefined) {
            this.fiveHundredBtn = params.fiveHundredBtn;
        }
        if (params.fiveHundredNum !== undefined) {
            this.fiveHundredNum = params.fiveHundredNum;
        }
        if (params.fiveHundredColor !== undefined) {
            this.fiveHundredColor = params.fiveHundredColor;
        }
        if (params.workerBtn !== undefined) {
            this.workerBtn = params.workerBtn;
        }
        if (params.workerNum !== undefined) {
            this.workerNum = params.workerNum;
        }
        if (params.workerColor !== undefined) {
            this.workerColor = params.workerColor;
        }
    }
    aboutToBeDeleted() {
        this.__fiveThousandBtn.aboutToBeDeleted();
        this.__fiveThousandNum.aboutToBeDeleted();
        this.__fiveThousandColor.aboutToBeDeleted();
        this.__fiveHundredBtn.aboutToBeDeleted();
        this.__fiveHundredNum.aboutToBeDeleted();
        this.__fiveHundredColor.aboutToBeDeleted();
        this.__workerBtn.aboutToBeDeleted();
        this.__workerNum.aboutToBeDeleted();
        this.__workerColor.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id());
    }
    get fiveThousandBtn() {
        return this.__fiveThousandBtn.get();
    }
    set fiveThousandBtn(newValue) {
        this.__fiveThousandBtn.set(newValue);
    }
    get fiveThousandNum() {
        return this.__fiveThousandNum.get();
    }
    set fiveThousandNum(newValue) {
        this.__fiveThousandNum.set(newValue);
    }
    get fiveThousandColor() {
        return this.__fiveThousandColor.get();
    }
    set fiveThousandColor(newValue) {
        this.__fiveThousandColor.set(newValue);
    }
    get fiveHundredBtn() {
        return this.__fiveHundredBtn.get();
    }
    set fiveHundredBtn(newValue) {
        this.__fiveHundredBtn.set(newValue);
    }
    get fiveHundredNum() {
        return this.__fiveHundredNum.get();
    }
    set fiveHundredNum(newValue) {
        this.__fiveHundredNum.set(newValue);
    }
    get fiveHundredColor() {
        return this.__fiveHundredColor.get();
    }
    set fiveHundredColor(newValue) {
        this.__fiveHundredColor.set(newValue);
    }
    get workerBtn() {
        return this.__workerBtn.get();
    }
    set workerBtn(newValue) {
        this.__workerBtn.set(newValue);
    }
    get workerNum() {
        return this.__workerNum.get();
    }
    set workerNum(newValue) {
        this.__workerNum.set(newValue);
    }
    get workerColor() {
        return this.__workerColor.get();
    }
    set workerColor(newValue) {
        this.__workerColor.set(newValue);
    }
    aboutToAppear() {
        this.pageStart();
    }
    render() {
        Column.create();
        Column.debugLine("pages/SwitchPage.ets(45:5)");
        Column.height('100%');
        Column.width('100%');
        Row.create();
        Row.debugLine("pages/SwitchPage.ets(46:7)");
        Row.justifyContent(FlexAlign.SpaceBetween);
        Row.width('100%');
        Row.padding({ top: 20, bottom: 20, left: 10, right: 10 });
        Row.backgroundColor("#f5f5f5");
        Image.create({ "id": 16777261, "type": 20000, params: [] });
        Image.debugLine("pages/SwitchPage.ets(47:9)");
        Image.height(30);
        Image.width(30);
        Image.onClick(() => {
            _ohos_router_1.back();
        });
        Text.create("负载开关");
        Text.debugLine("pages/SwitchPage.ets(53:9)");
        Text.fontWeight(FontWeight.Bold);
        Text.fontSize(18);
        Text.pop();
        Text.create('   ');
        Text.debugLine("pages/SwitchPage.ets(56:9)");
        Text.fontWeight(FontWeight.Bold);
        Text.fontSize(18);
        Text.pop();
        Row.pop();
        //5000类处理
        Column.create();
        Column.debugLine("pages/SwitchPage.ets(65:7)");
        //5000类处理
        Column.margin({ top: 5 });
        Row.create();
        Row.debugLine("pages/SwitchPage.ets(66:9)");
        Row.width('95%');
        Row.justifyContent(FlexAlign.SpaceBetween);
        Text.create('启动加载5000类');
        Text.debugLine("pages/SwitchPage.ets(67:11)");
        Text.fontSize(16);
        Text.pop();
        Row.create();
        Row.debugLine("pages/SwitchPage.ets(69:11)");
        Row.width(60);
        Row.height(30);
        Row.backgroundColor(this.fiveThousandColor);
        Row.borderRadius(15);
        Row.onClick(() => {
            this.fiveThousandBtn = this.fiveThousandBtn === 'true' ? 'false' : 'true';
            SwitchControl_1.writeFile({ key: "fiveThousand", val: this.fiveThousandBtn });
            if (this.fiveThousandBtn === "false" || this.fiveThousandBtn === 'default') { //第一次读值时会赋值给变量 “default”
                this.fiveThousandColor = "#f0f0f0";
                this.fiveThousandNum = 1;
            }
            else {
                this.fiveThousandColor = "#00cc33";
                this.fiveThousandNum = 31;
            }
        });
        Button.createWithLabel();
        Button.debugLine("pages/SwitchPage.ets(70:13)");
        Button.width(28);
        Button.height(28);
        Button.backgroundColor('#ffffff');
        Button.borderRadius(14);
        Button.margin({ left: this.fiveThousandNum });
        Button.pop();
        Row.pop();
        Row.pop();
        //5000类处理
        Column.pop();
        //500类处理
        Column.create();
        Column.debugLine("pages/SwitchPage.ets(98:7)");
        //500类处理
        Column.margin({ top: 5 });
        Row.create();
        Row.debugLine("pages/SwitchPage.ets(99:9)");
        Row.width('95%');
        Row.justifyContent(FlexAlign.SpaceBetween);
        Text.create('启动加载500类');
        Text.debugLine("pages/SwitchPage.ets(100:11)");
        Text.fontSize(16);
        Text.pop();
        Row.create();
        Row.debugLine("pages/SwitchPage.ets(102:11)");
        Row.width(60);
        Row.height(30);
        Row.backgroundColor(this.fiveHundredColor);
        Row.borderRadius(15);
        Row.onClick(() => {
            this.fiveHundredBtn = this.fiveHundredBtn === 'true' ? 'false' : 'true';
            SwitchControl_1.writeFile({ key: "fiveHundred", val: this.fiveHundredBtn });
            if (this.fiveHundredBtn === "false" || this.fiveHundredBtn === 'default') { //第一次读值时会赋值给变量 “default”
                this.fiveHundredColor = "#f0f0f0";
                this.fiveHundredNum = 1;
            }
            else {
                this.fiveHundredColor = "#00cc33";
                this.fiveHundredNum = 31;
            }
        });
        Button.createWithLabel();
        Button.debugLine("pages/SwitchPage.ets(103:13)");
        Button.width(28);
        Button.height(28);
        Button.backgroundColor('#ffffff');
        Button.borderRadius(14);
        Button.margin({ left: this.fiveHundredNum });
        Button.pop();
        Row.pop();
        Row.pop();
        //500类处理
        Column.pop();
        //线程处理
        Column.create();
        Column.debugLine("pages/SwitchPage.ets(131:7)");
        //线程处理
        Column.margin({ top: 5 });
        Row.create();
        Row.debugLine("pages/SwitchPage.ets(132:9)");
        Row.width('95%');
        Row.justifyContent(FlexAlign.SpaceBetween);
        Text.create('启动加载线程');
        Text.debugLine("pages/SwitchPage.ets(133:11)");
        Text.fontSize(16);
        Text.pop();
        Row.create();
        Row.debugLine("pages/SwitchPage.ets(135:11)");
        Row.width(60);
        Row.height(30);
        Row.backgroundColor(this.workerColor);
        Row.borderRadius(15);
        Row.onClick(() => {
            this.workerBtn = this.workerBtn === 'true' ? 'false' : 'true';
            SwitchControl_1.writeFile({ key: "worker", val: this.workerBtn });
            if (this.workerBtn === "false" || this.workerBtn === 'default') { //第一次读值时会赋值给变量 “default”
                this.workerColor = "#f0f0f0";
                this.workerNum = 1;
            }
            else {
                this.workerColor = "#00cc33";
                this.workerNum = 31;
            }
        });
        Button.createWithLabel();
        Button.debugLine("pages/SwitchPage.ets(136:13)");
        Button.width(28);
        Button.height(28);
        Button.backgroundColor('#ffffff');
        Button.borderRadius(14);
        Button.margin({ left: this.workerNum });
        Button.pop();
        Row.pop();
        Row.pop();
        //线程处理
        Column.pop();
        Column.pop();
    }
    pageTransition() {
        PageTransition.create();
        PageTransitionEnter.create({ duration: 0 });
        PageTransitionExit.create({ duration: 0 });
        PageTransition.pop();
    }
    // 获取按钮当前状态
    pageStart() {
        SwitchControl_1.readFile("fiveThousand").then((value) => {
            this.fiveThousandBtn = value.toString();
            if (this.fiveThousandBtn === "true") {
                this.fiveThousandNum = 31;
                this.fiveThousandColor = '#00cc33';
            }
            else {
                this.fiveThousandNum = 1;
                this.fiveThousandColor = '#f0f0f0';
            }
        });
        SwitchControl_1.readFile("fiveHundred").then((value) => {
            this.fiveHundredBtn = value.toString();
            if (this.fiveHundredBtn === "true") {
                this.fiveHundredNum = 31;
                this.fiveHundredColor = '#00cc33';
            }
            else {
                this.fiveHundredNum = 1;
                this.fiveHundredColor = '#f0f0f0';
            }
        });
        SwitchControl_1.readFile("worker").then((value) => {
            this.workerBtn = value.toString();
            if (this.workerBtn === "true") {
                this.workerNum = 31;
                this.workerColor = '#00cc33';
            }
            else {
                this.workerNum = 1;
                this.workerColor = '#f0f0f0';
            }
        });
    }
}
loadDocument(new SwitchPage("1", undefined, {}));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		var commonCachedModule = globalThis["__common_module_cache___ea65ef4ec7ea008b316d651e7ceca251"] ? globalThis["__common_module_cache___ea65ef4ec7ea008b316d651e7ceca251"][moduleId]: null;
/******/ 		if (commonCachedModule) { return commonCachedModule.exports; }
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		function isCommonModue(moduleId) {
/******/ 		                if (globalThis["webpackChunk_ea65ef4ec7ea008b316d651e7ceca251"]) {
/******/ 		                  const length = globalThis["webpackChunk_ea65ef4ec7ea008b316d651e7ceca251"].length;
/******/ 		                  switch (length) {
/******/ 		                    case 1:
/******/ 		                      return globalThis["webpackChunk_ea65ef4ec7ea008b316d651e7ceca251"][0][1][moduleId];
/******/ 		                    case 2:
/******/ 		                      return globalThis["webpackChunk_ea65ef4ec7ea008b316d651e7ceca251"][0][1][moduleId] ||
/******/ 		                      globalThis["webpackChunk_ea65ef4ec7ea008b316d651e7ceca251"][1][1][moduleId];
/******/ 		                  }
/******/ 		                }
/******/ 		                return undefined;
/******/ 		              }
/******/ 		if (globalThis["__common_module_cache___ea65ef4ec7ea008b316d651e7ceca251"] && String(moduleId).indexOf("?name=") < 0 && isCommonModue(moduleId)) {
/******/ 		  globalThis["__common_module_cache___ea65ef4ec7ea008b316d651e7ceca251"][moduleId] = module;
/******/ 		}
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"./pages/SwitchPage": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunk_ea65ef4ec7ea008b316d651e7ceca251"] = globalThis["webpackChunk_ea65ef4ec7ea008b316d651e7ceca251"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["commons"], () => (__webpack_require__("../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/SwitchPage.ets?entry")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	_ea65ef4ec7ea008b316d651e7ceca251 = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=SwitchPage.js.map