var _ea65ef4ec7ea008b316d651e7ceca251;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/ChatNewsPage.ets?entry":
/*!***************************************************************************************************************************!*\
  !*** ../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/ChatNewsPage.ets?entry ***!
  \***************************************************************************************************************************/
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
// @ts-nocheck
var _ohos_router_1  = globalThis.requireNapi('router') || (isSystemplugin('router', 'ohos') ? globalThis.ohosplugin.router : isSystemplugin('router', 'system') ? globalThis.systemplugin.router : undefined);
const Header_1 = __webpack_require__(/*! ../components/Header */ "../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/components/Header.ets");
class ChatNewsPage extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.__message = new ObservedPropertySimple('Hello World', this, "message");
        this.scroller = new Scroller();
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.message !== undefined) {
            this.message = params.message;
        }
        if (params.scroller !== undefined) {
            this.scroller = params.scroller;
        }
    }
    aboutToBeDeleted() {
        this.__message.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id());
    }
    get message() {
        return this.__message.get();
    }
    set message(newValue) {
        this.__message.set(newValue);
    }
    render() {
        Scroll.create(this.scroller);
        Scroll.debugLine("pages/ChatNewsPage.ets(26:5)");
        Scroll.width('100%');
        Column.create();
        Column.debugLine("pages/ChatNewsPage.ets(27:7)");
        Column.backgroundColor("#f5f5f5");
        Column.width("100%");
        Row.create();
        Row.debugLine("pages/ChatNewsPage.ets(28:9)");
        Row.justifyContent(FlexAlign.SpaceBetween);
        Row.width("100%");
        Row.padding({ top: 20, bottom: 20, left: 10, right: 10 });
        Image.create({ "id": 16777261, "type": 20000, params: [] });
        Image.debugLine("pages/ChatNewsPage.ets(29:11)");
        Image.key('leftBtn');
        Image.height(30);
        Image.width(30);
        Image.onClick(() => {
            _ohos_router_1.back();
        });
        Text.create("聊天信息");
        Text.debugLine("pages/ChatNewsPage.ets(37:11)");
        Text.fontWeight(FontWeight.Bold);
        Text.fontSize(18);
        Text.pop();
        Text.create("  ");
        Text.debugLine("pages/ChatNewsPage.ets(40:11)");
        Text.fontWeight(FontWeight.Bold);
        Text.fontSize(18);
        Text.pop();
        Row.pop();
        Row.create();
        Row.debugLine("pages/ChatNewsPage.ets(48:9)");
        Row.width('100%');
        Row.justifyContent(FlexAlign.Start);
        Row.backgroundColor("#ffffff");
        Row.padding({ top: 10, bottom: 10 });
        Column.create();
        Column.debugLine("pages/ChatNewsPage.ets(49:11)");
        Column.margin({ left: 20 });
        Image.create(`/resources/images/photo${((_ohos_router_1.getParams().IMAGEID) % 50)}.jpg`);
        Image.debugLine("pages/ChatNewsPage.ets(50:13)");
        Image.height(60);
        Image.width(60);
        Image.borderRadius(5);
        Text.create((_ohos_router_1.getParams().NAME));
        Text.debugLine("pages/ChatNewsPage.ets(54:13)");
        Text.fontSize(12);
        Text.pop();
        Column.pop();
        Image.create({ "id": 16777223, "type": 20000, params: [] });
        Image.debugLine("pages/ChatNewsPage.ets(59:11)");
        Image.height(40);
        Image.width(40);
        Image.margin({ top: -6, left: 10 });
        Image.opacity(0.8);
        Row.pop();
        Column.create();
        Column.debugLine("pages/ChatNewsPage.ets(70:9)");
        Column.margin({ top: 5 });
        let earlierCreatedChild_2 = this.findChildById("2");
        if (earlierCreatedChild_2 == undefined) {
            View.create(new Header_1.InLine("2", this, { name: "查找聊天记录" }));
        }
        else {
            earlierCreatedChild_2.updateWithValueParams({
                name: "查找聊天记录"
            });
            View.create(earlierCreatedChild_2);
        }
        Column.pop();
        Column.create();
        Column.debugLine("pages/ChatNewsPage.ets(75:9)");
        Column.margin({ top: 5 });
        let earlierCreatedChild_3 = this.findChildById("3");
        if (earlierCreatedChild_3 == undefined) {
            View.create(new Header_1.Swit("3", this, { name: "消息免打扰" }));
        }
        else {
            earlierCreatedChild_3.updateWithValueParams({
                name: "消息免打扰"
            });
            View.create(earlierCreatedChild_3);
        }
        Divider.create();
        Divider.debugLine("pages/ChatNewsPage.ets(77:11)");
        Divider.vertical(false);
        Divider.color("#f5f5f5");
        Divider.strokeWidth(1);
        let earlierCreatedChild_4 = this.findChildById("4");
        if (earlierCreatedChild_4 == undefined) {
            View.create(new Header_1.Swit("4", this, { name: "置顶聊天" }));
        }
        else {
            earlierCreatedChild_4.updateWithValueParams({
                name: "置顶聊天"
            });
            View.create(earlierCreatedChild_4);
        }
        Divider.create();
        Divider.debugLine("pages/ChatNewsPage.ets(80:11)");
        Divider.vertical(false);
        Divider.color("#f5f5f5");
        Divider.strokeWidth(1);
        let earlierCreatedChild_5 = this.findChildById("5");
        if (earlierCreatedChild_5 == undefined) {
            View.create(new Header_1.Swit("5", this, { name: "提醒" }));
        }
        else {
            earlierCreatedChild_5.updateWithValueParams({
                name: "提醒"
            });
            View.create(earlierCreatedChild_5);
        }
        Column.pop();
        Column.create();
        Column.debugLine("pages/ChatNewsPage.ets(86:9)");
        Column.margin({ top: 5 });
        let earlierCreatedChild_6 = this.findChildById("6");
        if (earlierCreatedChild_6 == undefined) {
            View.create(new Header_1.InLine("6", this, { name: "设置当前聊天背景" }));
        }
        else {
            earlierCreatedChild_6.updateWithValueParams({
                name: "设置当前聊天背景"
            });
            View.create(earlierCreatedChild_6);
        }
        Column.pop();
        Column.create();
        Column.debugLine("pages/ChatNewsPage.ets(91:9)");
        Column.margin({ top: 5 });
        let earlierCreatedChild_7 = this.findChildById("7");
        if (earlierCreatedChild_7 == undefined) {
            View.create(new Header_1.InLine("7", this, { name: "清空聊天记录" }));
        }
        else {
            earlierCreatedChild_7.updateWithValueParams({
                name: "清空聊天记录"
            });
            View.create(earlierCreatedChild_7);
        }
        Column.pop();
        Column.create();
        Column.debugLine("pages/ChatNewsPage.ets(96:9)");
        Column.margin({ top: 5, bottom: 210 });
        let earlierCreatedChild_8 = this.findChildById("8");
        if (earlierCreatedChild_8 == undefined) {
            View.create(new Header_1.InLine("8", this, { name: "投诉" }));
        }
        else {
            earlierCreatedChild_8.updateWithValueParams({
                name: "投诉"
            });
            View.create(earlierCreatedChild_8);
        }
        Column.pop();
        Column.pop();
        Scroll.pop();
    }
    pageTransition() {
        PageTransition.create();
        PageTransitionEnter.create({ duration: 0 });
        PageTransitionExit.create({ duration: 0 });
        PageTransition.pop();
    }
}
loadDocument(new ChatNewsPage("1", undefined, {}));


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
/******/ 			"./pages/ChatNewsPage": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["commons"], () => (__webpack_require__("../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/ChatNewsPage.ets?entry")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	_ea65ef4ec7ea008b316d651e7ceca251 = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=ChatNewsPage.js.map