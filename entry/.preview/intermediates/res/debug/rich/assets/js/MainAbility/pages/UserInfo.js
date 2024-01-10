var _ea65ef4ec7ea008b316d651e7ceca251;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/UserInfo.ets?entry":
/*!***********************************************************************************************************************!*\
  !*** ../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/UserInfo.ets?entry ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


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
__webpack_require__(/*! @ohos.router */ "../../api/@ohos.router.d.ts");
const Header_1 = __webpack_require__(/*! ../components/Header */ "../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/components/Header.ets");
class UserInfo extends View {
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
        Scroll.create(this.scroller);
        Scroll.debugLine("pages/UserInfo.ets(25:5)");
        Column.create();
        Column.debugLine("pages/UserInfo.ets(26:7)");
        Column.alignItems(HorizontalAlign.Center);
        Column.width("100%");
        Column.backgroundColor(0xDCDCDC);
        Column.padding({ top: 5 });
        let earlierCreatedChild_2 = this.findChildById("2");
        if (earlierCreatedChild_2 == undefined) {
            View.create(new Header_1.Header("2", this, { title: "个人信息" }));
        }
        else {
            earlierCreatedChild_2.updateWithValueParams({
                title: "个人信息"
            });
            View.create(earlierCreatedChild_2);
        }
        Column.create();
        Column.debugLine("pages/UserInfo.ets(28:9)");
        Column.backgroundColor('#ffffff');
        Column.width("100%");
        let earlierCreatedChild_3 = this.findChildById("3");
        if (earlierCreatedChild_3 == undefined) {
            View.create(new Header_1.User("3", this, { img: { "id": 16777264, "type": 20000, params: [] }, text: "头像", text2: "" }));
        }
        else {
            earlierCreatedChild_3.updateWithValueParams({
                img: { "id": 16777264, "type": 20000, params: [] },
                text: "头像", text2: ""
            });
            View.create(earlierCreatedChild_3);
        }
        let earlierCreatedChild_4 = this.findChildById("4");
        if (earlierCreatedChild_4 == undefined) {
            View.create(new Header_1.User("4", this, { img: { "id": 16777264, "type": 20000, params: [] }, text: "名字", text2: "Carl" }));
        }
        else {
            earlierCreatedChild_4.updateWithValueParams({
                img: { "id": 16777264, "type": 20000, params: [] },
                text: "名字", text2: "Carl"
            });
            View.create(earlierCreatedChild_4);
        }
        let earlierCreatedChild_5 = this.findChildById("5");
        if (earlierCreatedChild_5 == undefined) {
            View.create(new Header_1.User("5", this, { img: { "id": 16777264, "type": 20000, params: [] }, text: "拍一拍", text2: "" }));
        }
        else {
            earlierCreatedChild_5.updateWithValueParams({
                img: { "id": 16777264, "type": 20000, params: [] },
                text: "拍一拍", text2: ""
            });
            View.create(earlierCreatedChild_5);
        }
        let earlierCreatedChild_6 = this.findChildById("6");
        if (earlierCreatedChild_6 == undefined) {
            View.create(new Header_1.User("6", this, { img: { "id": 16777264, "type": 20000, params: [] }, text: "微信号", text2: "wxid_xxxxxxxx" }));
        }
        else {
            earlierCreatedChild_6.updateWithValueParams({
                img: { "id": 16777264, "type": 20000, params: [] },
                text: "微信号", text2: "wxid_xxxxxxxx"
            });
            View.create(earlierCreatedChild_6);
        }
        let earlierCreatedChild_7 = this.findChildById("7");
        if (earlierCreatedChild_7 == undefined) {
            View.create(new Header_1.User("7", this, { img: { "id": 16777236, "type": 20000, params: [] }, text: "二维码名片", text2: "" }));
        }
        else {
            earlierCreatedChild_7.updateWithValueParams({
                img: { "id": 16777236, "type": 20000, params: [] },
                text: "二维码名片", text2: ""
            });
            View.create(earlierCreatedChild_7);
        }
        let earlierCreatedChild_8 = this.findChildById("8");
        if (earlierCreatedChild_8 == undefined) {
            View.create(new Header_1.User("8", this, { img: { "id": 16777264, "type": 20000, params: [] }, text: "更多信息", text2: "" }));
        }
        else {
            earlierCreatedChild_8.updateWithValueParams({
                img: { "id": 16777264, "type": 20000, params: [] },
                text: "更多信息", text2: ""
            });
            View.create(earlierCreatedChild_8);
        }
        let earlierCreatedChild_9 = this.findChildById("9");
        if (earlierCreatedChild_9 == undefined) {
            View.create(new Header_1.User("9", this, { img: { "id": 16777264, "type": 20000, params: [] }, text: "来电铃声", text2: "" }));
        }
        else {
            earlierCreatedChild_9.updateWithValueParams({
                img: { "id": 16777264, "type": 20000, params: [] },
                text: "来电铃声", text2: ""
            });
            View.create(earlierCreatedChild_9);
        }
        let earlierCreatedChild_10 = this.findChildById("10");
        if (earlierCreatedChild_10 == undefined) {
            View.create(new Header_1.User("10", this, { img: { "id": 16777264, "type": 20000, params: [] }, text: "微信豆", text2: "" }));
        }
        else {
            earlierCreatedChild_10.updateWithValueParams({
                img: { "id": 16777264, "type": 20000, params: [] },
                text: "微信豆", text2: ""
            });
            View.create(earlierCreatedChild_10);
        }
        let earlierCreatedChild_11 = this.findChildById("11");
        if (earlierCreatedChild_11 == undefined) {
            View.create(new Header_1.User("11", this, { img: { "id": 16777264, "type": 20000, params: [] }, text: "我的地址", text2: "" }));
        }
        else {
            earlierCreatedChild_11.updateWithValueParams({
                img: { "id": 16777264, "type": 20000, params: [] },
                text: "我的地址", text2: ""
            });
            View.create(earlierCreatedChild_11);
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
loadDocument(new UserInfo("1", undefined, {}));


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
/******/ 			"./pages/UserInfo": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["commons"], () => (__webpack_require__("../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/UserInfo.ets?entry")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	_ea65ef4ec7ea008b316d651e7ceca251 = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=UserInfo.js.map