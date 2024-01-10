var _ea65ef4ec7ea008b316d651e7ceca251;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/DiscoverPage.ets?entry":
/*!***************************************************************************************************************************!*\
  !*** ../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/DiscoverPage.ets?entry ***!
  \***************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DiscoverPage = void 0;
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
var _ohos_router_1  = globalThis.requireNapi('router') || (isSystemplugin('router', 'ohos') ? globalThis.ohosplugin.router : isSystemplugin('router', 'system') ? globalThis.systemplugin.router : undefined);
const SettingPage_1 = __webpack_require__(/*! ./SettingPage */ "../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/SettingPage.ets");
class DiscoverPage extends View {
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
        Column.debugLine("pages/DiscoverPage.ets(25:5)");
        Column.backgroundColor("#cccccc");
        Column.width("100%");
        Column.height("100%");
        Scroll.create(this.scroller);
        Scroll.debugLine("pages/DiscoverPage.ets(26:7)");
        Column.create();
        Column.debugLine("pages/DiscoverPage.ets(27:9)");
        Divider.create();
        Divider.debugLine("pages/DiscoverPage.ets(28:11)");
        Divider.vertical(false);
        Divider.strokeWidth(20);
        Divider.color("#cccccc");
        Row.create();
        Row.debugLine("pages/DiscoverPage.ets(29:11)");
        Row.onClick(() => {
            _ohos_router_1.push({
                url: 'pages/FriendsMomentsPage'
            });
        });
        let earlierCreatedChild_2 = this.findChildById("2");
        if (earlierCreatedChild_2 == undefined) {
            View.create(new SettingPage_1.SettingItemView("2", this, { image: { "id": 16777233, "type": 20000, params: [] }, text: "朋友圈" }));
        }
        else {
            earlierCreatedChild_2.updateWithValueParams({
                image: { "id": 16777233, "type": 20000, params: [] },
                text: "朋友圈"
            });
            if (!earlierCreatedChild_2.needsUpdate()) {
                earlierCreatedChild_2.markStatic();
            }
            View.create(earlierCreatedChild_2);
        }
        Row.pop();
        Divider.create();
        Divider.debugLine("pages/DiscoverPage.ets(38:11)");
        Divider.vertical(false);
        Divider.strokeWidth(20);
        Divider.color("#cccccc");
        let earlierCreatedChild_3 = this.findChildById("3");
        if (earlierCreatedChild_3 == undefined) {
            View.create(new SettingPage_1.SettingItemView("3", this, { image: { "id": 16777248, "type": 20000, params: [] }, text: "视频号" }));
        }
        else {
            earlierCreatedChild_3.updateWithValueParams({
                image: { "id": 16777248, "type": 20000, params: [] },
                text: "视频号"
            });
            if (!earlierCreatedChild_3.needsUpdate()) {
                earlierCreatedChild_3.markStatic();
            }
            View.create(earlierCreatedChild_3);
        }
        let earlierCreatedChild_4 = this.findChildById("4");
        if (earlierCreatedChild_4 == undefined) {
            View.create(new SettingPage_1.SettingItemView("4", this, { image: { "id": 16777242, "type": 20000, params: [] }, text: "直播" }));
        }
        else {
            earlierCreatedChild_4.updateWithValueParams({
                image: { "id": 16777242, "type": 20000, params: [] },
                text: "直播"
            });
            if (!earlierCreatedChild_4.needsUpdate()) {
                earlierCreatedChild_4.markStatic();
            }
            View.create(earlierCreatedChild_4);
        }
        Divider.create();
        Divider.debugLine("pages/DiscoverPage.ets(42:11)");
        Divider.vertical(false);
        Divider.strokeWidth(20);
        Divider.color("#cccccc");
        let earlierCreatedChild_5 = this.findChildById("5");
        if (earlierCreatedChild_5 == undefined) {
            View.create(new SettingPage_1.SettingItemView("5", this, { image: { "id": 16777244, "type": 20000, params: [] }, text: "扫一扫" }));
        }
        else {
            earlierCreatedChild_5.updateWithValueParams({
                image: { "id": 16777244, "type": 20000, params: [] },
                text: "扫一扫"
            });
            if (!earlierCreatedChild_5.needsUpdate()) {
                earlierCreatedChild_5.markStatic();
            }
            View.create(earlierCreatedChild_5);
        }
        let earlierCreatedChild_6 = this.findChildById("6");
        if (earlierCreatedChild_6 == undefined) {
            View.create(new SettingPage_1.SettingItemView("6", this, { image: { "id": 16777246, "type": 20000, params: [] }, text: "摇一摇" }));
        }
        else {
            earlierCreatedChild_6.updateWithValueParams({
                image: { "id": 16777246, "type": 20000, params: [] },
                text: "摇一摇"
            });
            if (!earlierCreatedChild_6.needsUpdate()) {
                earlierCreatedChild_6.markStatic();
            }
            View.create(earlierCreatedChild_6);
        }
        Divider.create();
        Divider.debugLine("pages/DiscoverPage.ets(46:11)");
        Divider.vertical(false);
        Divider.strokeWidth(20);
        Divider.color("#cccccc");
        let earlierCreatedChild_7 = this.findChildById("7");
        if (earlierCreatedChild_7 == undefined) {
            View.create(new SettingPage_1.SettingItemView("7", this, { image: { "id": 16777249, "type": 20000, params: [] }, text: "看一看" }));
        }
        else {
            earlierCreatedChild_7.updateWithValueParams({
                image: { "id": 16777249, "type": 20000, params: [] },
                text: "看一看"
            });
            if (!earlierCreatedChild_7.needsUpdate()) {
                earlierCreatedChild_7.markStatic();
            }
            View.create(earlierCreatedChild_7);
        }
        let earlierCreatedChild_8 = this.findChildById("8");
        if (earlierCreatedChild_8 == undefined) {
            View.create(new SettingPage_1.SettingItemView("8", this, { image: { "id": 16777245, "type": 20000, params: [] }, text: "搜一搜" }));
        }
        else {
            earlierCreatedChild_8.updateWithValueParams({
                image: { "id": 16777245, "type": 20000, params: [] },
                text: "搜一搜"
            });
            if (!earlierCreatedChild_8.needsUpdate()) {
                earlierCreatedChild_8.markStatic();
            }
            View.create(earlierCreatedChild_8);
        }
        // Divider().vertical(false).strokeWidth(20).color("#cccccc")
        // Column() {
        //   SettingItemView({ image: $r('app.media.searchOne'), text: "搜一搜" })
        // }
        Divider.create();
        Divider.debugLine("pages/DiscoverPage.ets(55:11)");
        // Divider().vertical(false).strokeWidth(20).color("#cccccc")
        // Column() {
        //   SettingItemView({ image: $r('app.media.searchOne'), text: "搜一搜" })
        // }
        Divider.vertical(false);
        // Divider().vertical(false).strokeWidth(20).color("#cccccc")
        // Column() {
        //   SettingItemView({ image: $r('app.media.searchOne'), text: "搜一搜" })
        // }
        Divider.strokeWidth(20);
        // Divider().vertical(false).strokeWidth(20).color("#cccccc")
        // Column() {
        //   SettingItemView({ image: $r('app.media.searchOne'), text: "搜一搜" })
        // }
        Divider.color("#cccccc");
        Column.create();
        Column.debugLine("pages/DiscoverPage.ets(56:11)");
        let earlierCreatedChild_9 = this.findChildById("9");
        if (earlierCreatedChild_9 == undefined) {
            View.create(new SettingPage_1.SettingItemView("9", this, { image: { "id": 16777243, "type": 20000, params: [] }, text: "附近" }));
        }
        else {
            earlierCreatedChild_9.updateWithValueParams({
                image: { "id": 16777243, "type": 20000, params: [] },
                text: "附近"
            });
            if (!earlierCreatedChild_9.needsUpdate()) {
                earlierCreatedChild_9.markStatic();
            }
            View.create(earlierCreatedChild_9);
        }
        Column.pop();
        Divider.create();
        Divider.debugLine("pages/DiscoverPage.ets(60:11)");
        Divider.vertical(false);
        Divider.strokeWidth(20);
        Divider.color("#cccccc");
        let earlierCreatedChild_10 = this.findChildById("10");
        if (earlierCreatedChild_10 == undefined) {
            View.create(new SettingPage_1.SettingItemView("10", this, { image: { "id": 16777247, "type": 20000, params: [] }, text: "购物" }));
        }
        else {
            earlierCreatedChild_10.updateWithValueParams({
                image: { "id": 16777247, "type": 20000, params: [] },
                text: "购物"
            });
            if (!earlierCreatedChild_10.needsUpdate()) {
                earlierCreatedChild_10.markStatic();
            }
            View.create(earlierCreatedChild_10);
        }
        let earlierCreatedChild_11 = this.findChildById("11");
        if (earlierCreatedChild_11 == undefined) {
            View.create(new SettingPage_1.SettingItemView("11", this, { image: { "id": 16777241, "type": 20000, params: [] }, text: "游戏" }));
        }
        else {
            earlierCreatedChild_11.updateWithValueParams({
                image: { "id": 16777241, "type": 20000, params: [] },
                text: "游戏"
            });
            if (!earlierCreatedChild_11.needsUpdate()) {
                earlierCreatedChild_11.markStatic();
            }
            View.create(earlierCreatedChild_11);
        }
        Divider.create();
        Divider.debugLine("pages/DiscoverPage.ets(64:11)");
        Divider.vertical(false);
        Divider.strokeWidth(20);
        Divider.color("#cccccc");
        Column.create();
        Column.debugLine("pages/DiscoverPage.ets(65:11)");
        let earlierCreatedChild_12 = this.findChildById("12");
        if (earlierCreatedChild_12 == undefined) {
            View.create(new SettingPage_1.SettingItemView("12", this, { image: { "id": 16777225, "type": 20000, params: [] }, text: "小程序" }));
        }
        else {
            earlierCreatedChild_12.updateWithValueParams({
                image: { "id": 16777225, "type": 20000, params: [] },
                text: "小程序"
            });
            if (!earlierCreatedChild_12.needsUpdate()) {
                earlierCreatedChild_12.markStatic();
            }
            View.create(earlierCreatedChild_12);
        }
        Column.pop();
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
exports.DiscoverPage = DiscoverPage;
loadDocument(new DiscoverPage("1", undefined, {}));


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
/******/ 			"./pages/DiscoverPage": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["commons"], () => (__webpack_require__("../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/DiscoverPage.ets?entry")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	_ea65ef4ec7ea008b316d651e7ceca251 = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=DiscoverPage.js.map