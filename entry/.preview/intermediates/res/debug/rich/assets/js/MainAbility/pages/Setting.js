var _ea65ef4ec7ea008b316d651e7ceca251;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/Setting.ets?entry":
/*!**********************************************************************************************************************!*\
  !*** ../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/Setting.ets?entry ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
// @ts-nocheck
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
const Header_1 = __webpack_require__(/*! ../components/Header */ "../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/components/Header.ets");
var _ohos_router_1  = globalThis.requireNapi('router') || (isSystemplugin('router', 'ohos') ? globalThis.ohosplugin.router : isSystemplugin('router', 'system') ? globalThis.systemplugin.router : undefined);
class Setting extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.scroller = new Scroller();
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.scroller !== undefined) {
            this.scroller = params.scroller;
        }
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id());
    }
    render() {
        Column.create();
        Column.debugLine("pages/Setting.ets(25:5)");
        Column.width("100%");
        Column.height("100%");
        Column.backgroundColor(0xEEEEEE);
        Scroll.create(this.scroller);
        Scroll.debugLine("pages/Setting.ets(26:7)");
        Column.create();
        Column.debugLine("pages/Setting.ets(27:9)");
        let earlierCreatedChild_2 = this.findChildById("2");
        if (earlierCreatedChild_2 == undefined) {
            View.create(new Header_1.Header("2", this, { title: "设置" }));
        }
        else {
            earlierCreatedChild_2.updateWithValueParams({
                title: "设置"
            });
            View.create(earlierCreatedChild_2);
        }
        Column.create();
        Column.debugLine("pages/Setting.ets(29:11)");
        Column.margin({ bottom: 10 });
        let earlierCreatedChild_3 = this.findChildById("3");
        if (earlierCreatedChild_3 == undefined) {
            View.create(new SettingValue("3", this, { name: "账号与安全" }));
        }
        else {
            earlierCreatedChild_3.updateWithValueParams({
                name: "账号与安全"
            });
            View.create(earlierCreatedChild_3);
        }
        Column.pop();
        Column.create();
        Column.debugLine("pages/Setting.ets(34:11)");
        Column.margin({ bottom: 10 });
        let earlierCreatedChild_4 = this.findChildById("4");
        if (earlierCreatedChild_4 == undefined) {
            View.create(new SettingValue("4", this, { name: "青少年模式" }));
        }
        else {
            earlierCreatedChild_4.updateWithValueParams({
                name: "青少年模式"
            });
            View.create(earlierCreatedChild_4);
        }
        let earlierCreatedChild_5 = this.findChildById("5");
        if (earlierCreatedChild_5 == undefined) {
            View.create(new SettingValue("5", this, { name: "关怀模式" }));
        }
        else {
            earlierCreatedChild_5.updateWithValueParams({
                name: "关怀模式"
            });
            View.create(earlierCreatedChild_5);
        }
        Column.pop();
        Column.create();
        Column.debugLine("pages/Setting.ets(40:11)");
        Column.margin({ bottom: 10 });
        let earlierCreatedChild_6 = this.findChildById("6");
        if (earlierCreatedChild_6 == undefined) {
            View.create(new SettingValue("6", this, { name: "新消息通知" }));
        }
        else {
            earlierCreatedChild_6.updateWithValueParams({
                name: "新消息通知"
            });
            View.create(earlierCreatedChild_6);
        }
        let earlierCreatedChild_7 = this.findChildById("7");
        if (earlierCreatedChild_7 == undefined) {
            View.create(new SettingValue("7", this, { name: "聊天" }));
        }
        else {
            earlierCreatedChild_7.updateWithValueParams({
                name: "聊天"
            });
            View.create(earlierCreatedChild_7);
        }
        let earlierCreatedChild_8 = this.findChildById("8");
        if (earlierCreatedChild_8 == undefined) {
            View.create(new SettingValue("8", this, { name: "隐私" }));
        }
        else {
            earlierCreatedChild_8.updateWithValueParams({
                name: "隐私"
            });
            View.create(earlierCreatedChild_8);
        }
        let earlierCreatedChild_9 = this.findChildById("9");
        if (earlierCreatedChild_9 == undefined) {
            View.create(new SettingValue("9", this, { name: "通用" }));
        }
        else {
            earlierCreatedChild_9.updateWithValueParams({
                name: "通用"
            });
            View.create(earlierCreatedChild_9);
        }
        Column.pop();
        Column.create();
        Column.debugLine("pages/Setting.ets(48:11)");
        Column.margin({ bottom: 10 });
        let earlierCreatedChild_10 = this.findChildById("10");
        if (earlierCreatedChild_10 == undefined) {
            View.create(new SettingValue("10", this, { name: "帮助与反馈" }));
        }
        else {
            earlierCreatedChild_10.updateWithValueParams({
                name: "帮助与反馈"
            });
            View.create(earlierCreatedChild_10);
        }
        let earlierCreatedChild_11 = this.findChildById("11");
        if (earlierCreatedChild_11 == undefined) {
            View.create(new SettingValue("11", this, { name: "关于聊天" }));
        }
        else {
            earlierCreatedChild_11.updateWithValueParams({
                name: "关于聊天"
            });
            View.create(earlierCreatedChild_11);
        }
        let earlierCreatedChild_12 = this.findChildById("12");
        if (earlierCreatedChild_12 == undefined) {
            View.create(new SettingValue("12", this, { name: "插件" }));
        }
        else {
            earlierCreatedChild_12.updateWithValueParams({
                name: "插件"
            });
            View.create(earlierCreatedChild_12);
        }
        Column.pop();
        Column.create();
        Column.debugLine("pages/Setting.ets(55:11)");
        Column.margin({ bottom: 10 });
        Column.onClick(() => {
            _ohos_router_1.push({
                url: "pages/SwitchPage"
            });
        });
        let earlierCreatedChild_13 = this.findChildById("13");
        if (earlierCreatedChild_13 == undefined) {
            View.create(new SettingValue("13", this, { name: "负载开关" }));
        }
        else {
            earlierCreatedChild_13.updateWithValueParams({
                name: "负载开关"
            });
            View.create(earlierCreatedChild_13);
        }
        Column.pop();
        Row.create();
        Row.debugLine("pages/Setting.ets(65:11)");
        Row.width('100%');
        Row.margin({ bottom: 10 });
        Row.height(55);
        Row.backgroundColor(0xFFFFFF);
        Text.create('切换账号');
        Text.debugLine("pages/Setting.ets(66:13)");
        Text.width('100%');
        Text.fontSize(16);
        Text.padding({ left: 20 });
        Text.textAlign(TextAlign.Center);
        Text.pop();
        Row.pop();
        Row.create();
        Row.debugLine("pages/Setting.ets(77:11)");
        Row.width('100%');
        Row.margin({ bottom: 10 });
        Row.height(55);
        Row.backgroundColor(0xFFFFFF);
        Text.create('退出登录');
        Text.debugLine("pages/Setting.ets(78:13)");
        Text.width('100%');
        Text.fontSize(16);
        Text.padding({ left: 20 });
        Text.textAlign(TextAlign.Center);
        Text.pop();
        Row.pop();
        Column.pop();
        Scroll.pop();
        Column.pop();
    }
    pageTransition() {
        PageTransition.create();
        PageTransitionEnter.create({ duration: 0 });
        PageTransitionExit.create({ duration: 0 });
        PageTransition.pop();
    }
}
class SettingValue extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.__name = new ObservedPropertySimple("", this, "name");
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.name !== undefined) {
            this.name = params.name;
        }
    }
    aboutToBeDeleted() {
        this.__name.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id());
    }
    get name() {
        return this.__name.get();
    }
    set name(newValue) {
        this.__name.set(newValue);
    }
    render() {
        Row.create();
        Row.debugLine("pages/Setting.ets(107:5)");
        Row.width('100%');
        Row.height(55);
        Row.backgroundColor(0xFFFFFF);
        Column.create();
        Column.debugLine("pages/Setting.ets(108:7)");
        Column.width("50%");
        Column.alignItems(HorizontalAlign.Start);
        Text.create(this.name);
        Text.debugLine("pages/Setting.ets(109:9)");
        Text.fontSize(16);
        Text.padding({ left: 20 });
        Text.textAlign(TextAlign.Start);
        Text.pop();
        Column.pop();
        Column.create();
        Column.debugLine("pages/Setting.ets(117:7)");
        Column.alignItems(HorizontalAlign.End);
        Column.width('50%');
        Column.padding({ right: 10 });
        Image.create({ "id": 16777286, "type": 20000, params: [] });
        Image.debugLine("pages/Setting.ets(118:9)");
        Image.height(15);
        Image.width(15);
        Image.opacity(0.5);
        Image.margin({ left: 10, top: 2 });
        Column.pop();
        Row.pop();
    }
}
loadDocument(new Setting("1", undefined, {}));


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
/******/ 			"./pages/Setting": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["commons"], () => (__webpack_require__("../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/Setting.ets?entry")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	_ea65ef4ec7ea008b316d651e7ceca251 = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=Setting.js.map