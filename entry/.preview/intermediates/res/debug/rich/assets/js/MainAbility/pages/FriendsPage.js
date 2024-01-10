var _ea65ef4ec7ea008b316d651e7ceca251;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/FriendsPage.ets?entry":
/*!**************************************************************************************************************************!*\
  !*** ../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/FriendsPage.ets?entry ***!
  \**************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EMContactItemView = exports.FriendsPage = void 0;
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
const BasicDataSource_1 = __webpack_require__(/*! ../common/BasicDataSource */ "../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/common/BasicDataSource.ets");
const MsgBase_1 = __webpack_require__(/*! ./MsgBase */ "../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/MsgBase.ets");
class FriendsPage extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.__friendsListLength = new ObservedPropertySimple(0, this, "friendsListLength");
        this.__butto = new ObservedPropertySimple('', this, "butto");
        this.friendListData = new FriendListData();
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.friendsListLength !== undefined) {
            this.friendsListLength = params.friendsListLength;
        }
        if (params.butto !== undefined) {
            this.butto = params.butto;
        }
        if (params.friendListData !== undefined) {
            this.friendListData = params.friendListData;
        }
    }
    aboutToBeDeleted() {
        this.__friendsListLength.aboutToBeDeleted();
        this.__butto.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id());
    }
    get friendsListLength() {
        return this.__friendsListLength.get();
    }
    set friendsListLength(newValue) {
        this.__friendsListLength.set(newValue);
    }
    get butto() {
        return this.__butto.get();
    }
    set butto(newValue) {
        this.__butto.set(newValue);
    }
    render() {
        Column.create();
        Column.debugLine("pages/FriendsPage.ets(28:5)");
        Column.backgroundColor('#e3e3e3');
        Column.width('100%');
        Column.height('100%');
        Stack.create({ alignContent: Alignment.Top });
        Stack.debugLine("pages/FriendsPage.ets(29:7)");
        Stack.width('100%');
        Column.create();
        Column.debugLine("pages/FriendsPage.ets(30:9)");
        List.create();
        List.debugLine("pages/FriendsPage.ets(31:11)");
        List.listDirection(Axis.Vertical);
        List.height('100%');
        List.width('100%');
        ListItem.create();
        ListItem.debugLine("pages/FriendsPage.ets(32:13)");
        Column.create();
        Column.debugLine("pages/FriendsPage.ets(33:15)");
        Stack.create({ alignContent: Alignment.Center });
        Stack.debugLine("pages/FriendsPage.ets(35:17)");
        Stack.backgroundColor(Color.White);
        Stack.height('50');
        Stack.width('100%');
        Stack.margin({ left: 10, right: 10, top: 5, bottom: 5 });
        Stack.onClick(() => {
            _ohos_router_1.push({ url: 'pages/SearchPage' });
        });
        Text.create("搜索");
        Text.debugLine("pages/FriendsPage.ets(36:19)");
        Text.fontSize(20);
        Text.pop();
        Stack.pop();
        Column.create();
        Column.debugLine("pages/FriendsPage.ets(48:17)");
        let earlierCreatedChild_2 = this.findChildById("2");
        if (earlierCreatedChild_2 == undefined) {
            View.create(new EMContactItemView("2", this, { image: { "id": 16777239, "type": 20000, params: [] }, text: "新的朋友" }));
        }
        else {
            earlierCreatedChild_2.updateWithValueParams({
                image: { "id": 16777239, "type": 20000, params: [] },
                text: "新的朋友"
            });
            if (!earlierCreatedChild_2.needsUpdate()) {
                earlierCreatedChild_2.markStatic();
            }
            View.create(earlierCreatedChild_2);
        }
        Column.pop();
        Column.create();
        Column.debugLine("pages/FriendsPage.ets(52:17)");
        let earlierCreatedChild_3 = this.findChildById("3");
        if (earlierCreatedChild_3 == undefined) {
            View.create(new EMContactItemView("3", this, { image: { "id": 16777227, "type": 20000, params: [] }, text: "仅聊天的朋友" }));
        }
        else {
            earlierCreatedChild_3.updateWithValueParams({
                image: { "id": 16777227, "type": 20000, params: [] },
                text: "仅聊天的朋友"
            });
            if (!earlierCreatedChild_3.needsUpdate()) {
                earlierCreatedChild_3.markStatic();
            }
            View.create(earlierCreatedChild_3);
        }
        Column.pop();
        Column.create();
        Column.debugLine("pages/FriendsPage.ets(56:17)");
        let earlierCreatedChild_4 = this.findChildById("4");
        if (earlierCreatedChild_4 == undefined) {
            View.create(new EMContactItemView("4", this, { image: { "id": 16777250, "type": 20000, params: [] }, text: "群聊" }));
        }
        else {
            earlierCreatedChild_4.updateWithValueParams({
                image: { "id": 16777250, "type": 20000, params: [] },
                text: "群聊"
            });
            if (!earlierCreatedChild_4.needsUpdate()) {
                earlierCreatedChild_4.markStatic();
            }
            View.create(earlierCreatedChild_4);
        }
        Column.pop();
        Column.create();
        Column.debugLine("pages/FriendsPage.ets(60:17)");
        let earlierCreatedChild_5 = this.findChildById("5");
        if (earlierCreatedChild_5 == undefined) {
            View.create(new EMContactItemView("5", this, { image: { "id": 16777260, "type": 20000, params: [] }, text: "标签" }));
        }
        else {
            earlierCreatedChild_5.updateWithValueParams({
                image: { "id": 16777260, "type": 20000, params: [] },
                text: "标签"
            });
            if (!earlierCreatedChild_5.needsUpdate()) {
                earlierCreatedChild_5.markStatic();
            }
            View.create(earlierCreatedChild_5);
        }
        Column.pop();
        Column.create();
        Column.debugLine("pages/FriendsPage.ets(64:17)");
        let earlierCreatedChild_6 = this.findChildById("6");
        if (earlierCreatedChild_6 == undefined) {
            View.create(new EMContactItemView("6", this, { image: { "id": 16777284, "type": 20000, params: [] }, text: "公众号" }));
        }
        else {
            earlierCreatedChild_6.updateWithValueParams({
                image: { "id": 16777284, "type": 20000, params: [] },
                text: "公众号"
            });
            if (!earlierCreatedChild_6.needsUpdate()) {
                earlierCreatedChild_6.markStatic();
            }
            View.create(earlierCreatedChild_6);
        }
        Column.pop();
        Divider.create();
        Divider.debugLine("pages/FriendsPage.ets(67:17)");
        Divider.vertical(false);
        Divider.strokeWidth(20);
        Divider.color("#cccccc");
        Column.create();
        Column.debugLine("pages/FriendsPage.ets(70:17)");
        let earlierCreatedChild_7 = this.findChildById("7");
        if (earlierCreatedChild_7 == undefined) {
            View.create(new EMContactItemView("7", this, { image: { "id": 16777231, "type": 20000, params: [] }, text: "企业聊天联系人" }));
        }
        else {
            earlierCreatedChild_7.updateWithValueParams({
                image: { "id": 16777231, "type": 20000, params: [] },
                text: "企业聊天联系人"
            });
            if (!earlierCreatedChild_7.needsUpdate()) {
                earlierCreatedChild_7.markStatic();
            }
            View.create(earlierCreatedChild_7);
        }
        Column.pop();
        Column.create();
        Column.debugLine("pages/FriendsPage.ets(74:17)");
        let earlierCreatedChild_8 = this.findChildById("8");
        if (earlierCreatedChild_8 == undefined) {
            View.create(new EMContactItemView("8", this, { image: { "id": 16777258, "type": 20000, params: [] }, text: "北京理工大学" }));
        }
        else {
            earlierCreatedChild_8.updateWithValueParams({
                image: { "id": 16777258, "type": 20000, params: [] },
                text: "北京理工大学"
            });
            if (!earlierCreatedChild_8.needsUpdate()) {
                earlierCreatedChild_8.markStatic();
            }
            View.create(earlierCreatedChild_8);
        }
        Column.pop();
        Divider.create();
        Divider.debugLine("pages/FriendsPage.ets(77:17)");
        Divider.vertical(false);
        Divider.strokeWidth(20);
        Divider.color("#cccccc");
        Column.pop();
        ListItem.pop();
        LazyForEach.create("10", this, ObservedObject.GetRawObject(this.friendListData), (msg) => {
            this.isRenderingInProgress = true;
            ListItem.create();
            ListItem.debugLine("pages/FriendsPage.ets(82:15)");
            ListItem.onClick(() => {
                _ohos_router_1.push({
                    url: "pages/ChatDetailPage",
                    params: { chatImage: msg.userImage, chatName: msg.userName, chatId: msg.userId }
                });
            });
            let earlierCreatedChild_9 = this.findChildById("9");
            if (earlierCreatedChild_9 == undefined) {
                View.create(new EMContactItemView("9", this, { image: msg.userImage, text: msg.userName }));
            }
            else {
                earlierCreatedChild_9.updateWithValueParams({
                    image: msg.userImage, text: msg.userName
                });
                if (!earlierCreatedChild_9.needsUpdate()) {
                    earlierCreatedChild_9.markStatic();
                }
                View.create(earlierCreatedChild_9);
            }
            ListItem.pop();
            this.isRenderingInProgress = false;
        }, (msg) => msg.userId);
        LazyForEach.pop();
        List.pop();
        Column.pop();
        Stack.pop();
        Column.pop();
    }
    aboutToAppear() {
        this.makeDataLocal();
    }
    pageTransition() {
        PageTransition.create();
        PageTransitionEnter.create({ duration: 0 });
        PageTransitionExit.create({ duration: 0 });
        PageTransition.pop();
    }
    makeDataLocal() {
        for (let i = 1; i <= 50; i++) {
            let imageStr = `/resources/images/photo${(i % 50).toString()}.jpg`;
            let temp1 = new MsgBase_1.EMContact(i.toString(), `朋友${i.toString()}`, imageStr);
            this.friendListData.pushData(temp1);
        }
    }
}
exports.FriendsPage = FriendsPage;
class EMContactItemView extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.image = undefined;
        this.text = undefined;
        this.callBack = undefined;
        this.height = 60;
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.image !== undefined) {
            this.image = params.image;
        }
        if (params.text !== undefined) {
            this.text = params.text;
        }
        if (params.callBack !== undefined) {
            this.callBack = params.callBack;
        }
        if (params.height !== undefined) {
            this.height = params.height;
        }
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id());
    }
    render() {
        Row.create();
        Row.debugLine("pages/FriendsPage.ets(130:5)");
        Row.width('100%');
        Row.height(this.height);
        Row.padding({ left: 10, right: 10 });
        Row.backgroundColor(Color.White);
        Image.create(this.image);
        Image.debugLine("pages/FriendsPage.ets(131:7)");
        Image.width(40);
        Image.height(40);
        Image.borderRadius(5);
        Text.create(this.text);
        Text.debugLine("pages/FriendsPage.ets(135:7)");
        Text.fontSize(15);
        Text.fontColor("#000000");
        Text.margin({ left: 10 });
        Text.pop();
        Row.pop();
    }
}
exports.EMContactItemView = EMContactItemView;
class FriendListData extends BasicDataSource_1.BasicDataSource {
    constructor() {
        super(...arguments);
        this.friendList = [];
    }
    totalCount() {
        return this.friendList.length;
    }
    getData(index) {
        return this.friendList[index];
    }
    addData(index, data) {
        this.friendList.splice(index, 0, data);
        this.notifyDataAdd(index);
    }
    pushData(data) {
        this.friendList.push(data);
        this.notifyDataAdd(this.friendList.length - 1);
    }
}
loadDocument(new FriendsPage("1", undefined, {}));


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
/******/ 			"./pages/FriendsPage": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["commons"], () => (__webpack_require__("../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/FriendsPage.ets?entry")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	_ea65ef4ec7ea008b316d651e7ceca251 = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=FriendsPage.js.map