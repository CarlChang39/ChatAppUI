var _ea65ef4ec7ea008b316d651e7ceca251;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/AddFriendsPage.ets?entry":
/*!*****************************************************************************************************************************!*\
  !*** ../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/AddFriendsPage.ets?entry ***!
  \*****************************************************************************************************************************/
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
const Header_1 = __webpack_require__(/*! ../components/Header */ "../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/components/Header.ets");
class AddFriendsPage extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.__changeValue = new ObservedPropertySimple('', this, "changeValue");
        this.__submitValue = new ObservedPropertySimple('', this, "submitValue");
        this.__explain = new ObservedPropertySimple('', this, "explain");
        this.scroller = new Scroller();
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.changeValue !== undefined) {
            this.changeValue = params.changeValue;
        }
        if (params.submitValue !== undefined) {
            this.submitValue = params.submitValue;
        }
        if (params.explain !== undefined) {
            this.explain = params.explain;
        }
        if (params.scroller !== undefined) {
            this.scroller = params.scroller;
        }
    }
    aboutToBeDeleted() {
        this.__changeValue.aboutToBeDeleted();
        this.__submitValue.aboutToBeDeleted();
        this.__explain.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id());
    }
    get changeValue() {
        return this.__changeValue.get();
    }
    set changeValue(newValue) {
        this.__changeValue.set(newValue);
    }
    get submitValue() {
        return this.__submitValue.get();
    }
    set submitValue(newValue) {
        this.__submitValue.set(newValue);
    }
    get explain() {
        return this.__explain.get();
    }
    set explain(newValue) {
        this.__explain.set(newValue);
    }
    render() {
        Scroll.create(this.scroller);
        Scroll.debugLine("pages/AddFriendsPage.ets(27:5)");
        Column.create();
        Column.debugLine("pages/AddFriendsPage.ets(28:7)");
        Column.backgroundColor("#f5f5f5");
        Column.width('100%');
        Row.create({});
        Row.debugLine("pages/AddFriendsPage.ets(29:9)");
        Row.justifyContent(FlexAlign.SpaceBetween);
        Row.width("100%");
        Row.padding({ top: 20, bottom: 20, left: 10, right: 10 });
        Image.create({ "id": 16777261, "type": 20000, params: [] });
        Image.debugLine("pages/AddFriendsPage.ets(30:11)");
        Image.key('leftAddFriendPageBtn');
        Image.height(30);
        Image.width(30);
        Image.onClick(() => {
            _ohos_router_1.back();
        });
        Text.create("添加朋友");
        Text.debugLine("pages/AddFriendsPage.ets(37:11)");
        Text.fontWeight(FontWeight.Bold);
        Text.fontSize(18);
        Text.pop();
        Text.create("  ");
        Text.debugLine("pages/AddFriendsPage.ets(40:11)");
        Text.fontWeight(FontWeight.Bold);
        Text.fontSize(18);
        Text.pop();
        Row.pop();
        Column.create();
        Column.debugLine("pages/AddFriendsPage.ets(48:9)");
        Search.create({ value: '', placeholder: '' });
        Search.debugLine("pages/AddFriendsPage.ets(49:11)");
        Search.placeholderColor(Color.Black);
        Search.placeholderFont({ size: 16, weight: 10, family: 'serif', style: FontStyle.Normal });
        Search.onSubmit((value) => {
            this.submitValue = value;
        });
        Search.onChange((value) => {
            this.changeValue = value;
        });
        Search.pop();
        Column.pop();
        Row.create();
        Row.debugLine("pages/AddFriendsPage.ets(60:9)");
        Row.padding(10);
        Text.create("我的微信号：wxid_xxxxxxxx");
        Text.debugLine("pages/AddFriendsPage.ets(61:11)");
        Text.fontSize(14);
        Text.opacity(0.5);
        Text.pop();
        Image.create({ "id": 16777235, "type": 20000, params: [] });
        Image.debugLine("pages/AddFriendsPage.ets(64:11)");
        Image.height(16);
        Image.width(16);
        Row.pop();
        Column.create();
        Column.debugLine("pages/AddFriendsPage.ets(70:9)");
        let earlierCreatedChild_2 = this.findChildById("2");
        if (earlierCreatedChild_2 == undefined) {
            View.create(new Header_1.AddData("2", this, { text1: "雷达加朋友", img: { "id": 16777285, "type": 20000, params: [] }, text2: "添加身边的朋友" }));
        }
        else {
            earlierCreatedChild_2.updateWithValueParams({
                text1: "雷达加朋友",
                img: { "id": 16777285, "type": 20000, params: [] },
                text2: "添加身边的朋友"
            });
            View.create(earlierCreatedChild_2);
        }
        Column.pop();
        Column.create();
        Column.debugLine("pages/AddFriendsPage.ets(74:9)");
        let earlierCreatedChild_3 = this.findChildById("3");
        if (earlierCreatedChild_3 == undefined) {
            View.create(new Header_1.AddData("3", this, { text1: "面对面建群", img: { "id": 16777232, "type": 20000, params: [] }, text2: "与身边的朋友进入一个群聊" }));
        }
        else {
            earlierCreatedChild_3.updateWithValueParams({
                text1: "面对面建群",
                img: { "id": 16777232, "type": 20000, params: [] },
                text2: "与身边的朋友进入一个群聊"
            });
            View.create(earlierCreatedChild_3);
        }
        Column.pop();
        Column.create();
        Column.debugLine("pages/AddFriendsPage.ets(78:9)");
        let earlierCreatedChild_4 = this.findChildById("4");
        if (earlierCreatedChild_4 == undefined) {
            View.create(new Header_1.AddData("4", this, { text1: "扫一扫", img: { "id": 16777287, "type": 20000, params: [] }, text2: "扫描二维码名片" }));
        }
        else {
            earlierCreatedChild_4.updateWithValueParams({
                text1: "扫一扫",
                img: { "id": 16777287, "type": 20000, params: [] },
                text2: "扫描二维码名片"
            });
            View.create(earlierCreatedChild_4);
        }
        Column.pop();
        Column.create();
        Column.debugLine("pages/AddFriendsPage.ets(82:9)");
        let earlierCreatedChild_5 = this.findChildById("5");
        if (earlierCreatedChild_5 == undefined) {
            View.create(new Header_1.AddData("5", this, { text1: "手机联系人", img: { "id": 16777222, "type": 20000, params: [] }, text2: "添加或邀请通讯录中的朋友" }));
        }
        else {
            earlierCreatedChild_5.updateWithValueParams({
                text1: "手机联系人",
                img: { "id": 16777222, "type": 20000, params: [] },
                text2: "添加或邀请通讯录中的朋友"
            });
            View.create(earlierCreatedChild_5);
        }
        Column.pop();
        Column.create();
        Column.debugLine("pages/AddFriendsPage.ets(86:9)");
        let earlierCreatedChild_6 = this.findChildById("6");
        if (earlierCreatedChild_6 == undefined) {
            View.create(new Header_1.AddData("6", this, { text1: "公众号", img: { "id": 16777284, "type": 20000, params: [] }, text2: "获取更多资讯和服务" }));
        }
        else {
            earlierCreatedChild_6.updateWithValueParams({
                text1: "公众号",
                img: { "id": 16777284, "type": 20000, params: [] },
                text2: "获取更多资讯和服务"
            });
            View.create(earlierCreatedChild_6);
        }
        Column.pop();
        Column.create();
        Column.debugLine("pages/AddFriendsPage.ets(90:9)");
        let earlierCreatedChild_7 = this.findChildById("7");
        if (earlierCreatedChild_7 == undefined) {
            View.create(new Header_1.AddData("7", this, { text1: "企业微信联系人", img: { "id": 16777231, "type": 20000, params: [] }, text2: "通过手机号搜索企业聊天用户" }));
        }
        else {
            earlierCreatedChild_7.updateWithValueParams({
                text1: "企业微信联系人",
                img: { "id": 16777231, "type": 20000, params: [] },
                text2: "通过手机号搜索企业聊天用户"
            });
            View.create(earlierCreatedChild_7);
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
loadDocument(new AddFriendsPage("1", undefined, {}));


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
/******/ 			"./pages/AddFriendsPage": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["commons"], () => (__webpack_require__("../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/AddFriendsPage.ets?entry")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	_ea65ef4ec7ea008b316d651e7ceca251 = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=AddFriendsPage.js.map