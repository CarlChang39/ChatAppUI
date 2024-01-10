var _ea65ef4ec7ea008b316d651e7ceca251;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/ChatListPage.ets?entry":
/*!***************************************************************************************************************************!*\
  !*** ../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/ChatListPage.ets?entry ***!
  \***************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChatListView = void 0;
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
const BasicDataSource_1 = __webpack_require__(/*! ../common/BasicDataSource */ "../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/common/BasicDataSource.ets");
const MsgBase_1 = __webpack_require__(/*! ./MsgBase */ "../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/MsgBase.ets");
var _ohos_router_1  = globalThis.requireNapi('router') || (isSystemplugin('router', 'ohos') ? globalThis.ohosplugin.router : isSystemplugin('router', 'system') ? globalThis.systemplugin.router : undefined);
__webpack_require__(/*! ./Index */ "../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/Index.ets");
const Index_1 = __webpack_require__(/*! ./Index */ "../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/Index.ets");
class ChatListPage extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.__message = new ObservedPropertySimple('Hello World', this, "message");
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.message !== undefined) {
            this.message = params.message;
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
        Row.create();
        Row.debugLine("pages/ChatListPage.ets(29:5)");
        Row.height('100%');
        Column.create();
        Column.debugLine("pages/ChatListPage.ets(30:7)");
        Column.width('100%');
        Text.create(this.message);
        Text.debugLine("pages/ChatListPage.ets(31:9)");
        Text.fontSize(50);
        Text.fontWeight(FontWeight.Bold);
        Text.pop();
        Column.pop();
        Row.pop();
    }
}
class ChatListView extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.__wantParams = new ObservedPropertyObject({ srcImg: "000", textCon: "000", kindId: 0 }, this, "wantParams");
        this.__wantFileParams = new ObservedPropertyObject(new Index_1.WantFileModel(0, 0), this, "wantFileParams");
        this.__chatListLength = new ObservedPropertySimple(0
        // 滑动开始纵坐标
        , this, "chatListLength");
        this.__blurStart = new ObservedPropertySimple(0
        // 滑动结束纵坐标
        , this, "blurStart");
        this.__blurEnd = new ObservedPropertySimple(0
        // 滑动距离
        , this, "blurEnd");
        this.__bl = new ObservedPropertySimple(0
        // 当前item的索引
        , this, "bl");
        this.__blurIndex = new ObservedPropertySimple(0
        // 模糊值
        , this, "blurIndex");
        this.__blurNum = new ObservedPropertySimple(0, this, "blurNum");
        this.chatListData = new ChatListData();
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.wantParams !== undefined) {
            this.wantParams = params.wantParams;
        }
        if (params.wantFileParams !== undefined) {
            this.wantFileParams = params.wantFileParams;
        }
        if (params.chatListLength !== undefined) {
            this.chatListLength = params.chatListLength;
        }
        if (params.blurStart !== undefined) {
            this.blurStart = params.blurStart;
        }
        if (params.blurEnd !== undefined) {
            this.blurEnd = params.blurEnd;
        }
        if (params.bl !== undefined) {
            this.bl = params.bl;
        }
        if (params.blurIndex !== undefined) {
            this.blurIndex = params.blurIndex;
        }
        if (params.blurNum !== undefined) {
            this.blurNum = params.blurNum;
        }
        if (params.chatListData !== undefined) {
            this.chatListData = params.chatListData;
        }
    }
    aboutToBeDeleted() {
        this.__wantParams.aboutToBeDeleted();
        this.__wantFileParams.aboutToBeDeleted();
        this.__chatListLength.aboutToBeDeleted();
        this.__blurStart.aboutToBeDeleted();
        this.__blurEnd.aboutToBeDeleted();
        this.__bl.aboutToBeDeleted();
        this.__blurIndex.aboutToBeDeleted();
        this.__blurNum.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id());
    }
    get wantParams() {
        return this.__wantParams.get();
    }
    set wantParams(newValue) {
        this.__wantParams.set(newValue);
    }
    get wantFileParams() {
        return this.__wantFileParams.get();
    }
    set wantFileParams(newValue) {
        this.__wantFileParams.set(newValue);
    }
    get chatListLength() {
        return this.__chatListLength.get();
    }
    set chatListLength(newValue) {
        this.__chatListLength.set(newValue);
    }
    get blurStart() {
        return this.__blurStart.get();
    }
    set blurStart(newValue) {
        this.__blurStart.set(newValue);
    }
    get blurEnd() {
        return this.__blurEnd.get();
    }
    set blurEnd(newValue) {
        this.__blurEnd.set(newValue);
    }
    get bl() {
        return this.__bl.get();
    }
    set bl(newValue) {
        this.__bl.set(newValue);
    }
    get blurIndex() {
        return this.__blurIndex.get();
    }
    set blurIndex(newValue) {
        this.__blurIndex.set(newValue);
    }
    get blurNum() {
        return this.__blurNum.get();
    }
    set blurNum(newValue) {
        this.__blurNum.set(newValue);
    }
    render() {
        Column.create();
        Column.debugLine("pages/ChatListPage.ets(59:5)");
        List.create();
        List.debugLine("pages/ChatListPage.ets(60:7)");
        List.listDirection(Axis.Vertical);
        List.blur(this.blurNum);
        List.divider({ strokeWidth: 1, color: "#f3f3f3", startMargin: 20, endMargin: 20 });
        List.height('92%');
        List.width('100%');
        List.onScrollIndex((firstIndex) => {
            this.blurIndex = firstIndex;
        });
        List.onTouch((event) => {
            if (event.type === TouchType.Down) {
                this.blurStart = event.touches[0].y;
            }
            else if (event.type === TouchType.Move) {
                this.blurEnd = event.touches[0].y;
                this.bl = this.blurEnd - this.blurStart;
                // 判断第一个item的索引是不是0
                if (this.blurIndex === 0) {
                    if (this.bl > 0) {
                        this.blurNum = this.bl / 30;
                        if (this.blurNum >= 96) {
                            this.blurNum = 96;
                        }
                    }
                }
                else {
                    this.blurNum = 0;
                }
            }
            else if (event.type === TouchType.Up) {
                this.blurNum = 0;
            }
        });
        // ListItem() {
        //   Row() {
        //     Stack({ alignContent: Alignment.Center }) {
        //       Text($r("app.string.search"))
        //         .fontSize(20)
        //     }
        //     .key('search')
        //     .backgroundColor(Color.White)
        //     .height("100%")
        //     .width("100%")
        //     .onClick(() => {
        //       router.push({ url: 'pages/SearchPage' })
        //     })
        //   }
        //   .height(50)
        //   .width("100%")
        //   .backgroundColor("#eeeeee")
        //   .padding({ top: 5, left: 10, right: 10, bottom: 5 })
        // }
        LazyForEach.create("3", this, ObservedObject.GetRawObject(this.chatListData), (msg) => {
            this.isRenderingInProgress = true;
            ListItem.create();
            ListItem.debugLine("pages/ChatListPage.ets(82:11)");
            let earlierCreatedChild_2 = this.findChildById("2");
            if (earlierCreatedChild_2 == undefined) {
                View.create(new ChatView("2", this, { chatItem: msg, wantParams: this.wantParams, wantFileParams: this.wantFileParams }));
            }
            else {
                earlierCreatedChild_2.updateWithValueParams({
                    chatItem: msg, wantParams: this.wantParams, wantFileParams: this.wantFileParams
                });
                if (!earlierCreatedChild_2.needsUpdate()) {
                    earlierCreatedChild_2.markStatic();
                }
                View.create(earlierCreatedChild_2);
            }
            ListItem.pop();
            this.isRenderingInProgress = false;
        }, (msg) => msg.user.userId);
        // ListItem() {
        //   Row() {
        //     Stack({ alignContent: Alignment.Center }) {
        //       Text($r("app.string.search"))
        //         .fontSize(20)
        //     }
        //     .key('search')
        //     .backgroundColor(Color.White)
        //     .height("100%")
        //     .width("100%")
        //     .onClick(() => {
        //       router.push({ url: 'pages/SearchPage' })
        //     })
        //   }
        //   .height(50)
        //   .width("100%")
        //   .backgroundColor("#eeeeee")
        //   .padding({ top: 5, left: 10, right: 10, bottom: 5 })
        // }
        LazyForEach.pop();
        List.pop();
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
        for (let i = 1; i <= 20; i++) {
            let imagestr = `/resources/images/photo${(i % 50).toString()}.jpg`;
            let temp1 = new MsgBase_1.ChatModel(new MsgBase_1.EMContact(i.toString(), `朋友${i.toString()}`, imagestr), `......`);
            this.chatListData.pushData(temp1);
        }
    }
}
exports.ChatListView = ChatListView;
class ChatView extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.chatItem = undefined;
        this.wantParams = undefined;
        this.wantFileParams = undefined;
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.chatItem !== undefined) {
            this.chatItem = params.chatItem;
        }
        if (params.wantParams !== undefined) {
            this.wantParams = params.wantParams;
        }
        if (params.wantFileParams !== undefined) {
            this.wantFileParams = params.wantFileParams;
        }
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id());
    }
    render() {
        Stack.create();
        Stack.debugLine("pages/ChatListPage.ets(144:5)");
        Stack.width("100%");
        Stack.height(80);
        Stack.padding({ left: 12, right: 10, top: 10, bottom: 10 });
        Column.create();
        Column.debugLine("pages/ChatListPage.ets(145:7)");
        Column.width("100%");
        Row.create();
        Row.debugLine("pages/ChatListPage.ets(146:9)");
        Row.width("100%");
        Row.onClick(() => {
            console.log(this.wantParams.textCon);
            _ohos_router_1.push({
                url: 'pages/ChatDetailPage',
                params: {
                    chatName: this.chatItem.user.userName,
                    chatId: this.chatItem.user.userId,
                    // Ability来的want的分享数据
                    wantParams: this.wantParams,
                    wantFileParams: this.wantFileParams
                }
            });
        });
        Row.create();
        Row.debugLine("pages/ChatListPage.ets(147:11)");
        Row.layoutWeight(1);
        Image.create(this.chatItem.user.userImage);
        Image.debugLine("pages/ChatListPage.ets(148:13)");
        Image.width(50);
        Image.height(50);
        Image.borderRadius(5);
        Image.autoResize(false);
        Row.pop();
        Stack.create({ alignContent: Alignment.Start });
        Stack.debugLine("pages/ChatListPage.ets(156:11)");
        Stack.padding({ left: 12 });
        Stack.layoutWeight(7);
        Column.create();
        Column.debugLine("pages/ChatListPage.ets(157:13)");
        Column.padding({ left: 12 });
        Column.alignItems(HorizontalAlign.Start);
        Text.create(this.chatItem.user.userName);
        Text.debugLine("pages/ChatListPage.ets(158:15)");
        Text.fontColor(Color.Black);
        Text.fontSize(15);
        Text.pop();
        Text.create(this.chatItem.lastMsg);
        Text.debugLine("pages/ChatListPage.ets(161:15)");
        Text.fontColor("#999999");
        Text.fontSize(13);
        Text.pop();
        Column.pop();
        Stack.pop();
        Row.pop();
        Column.pop();
        Stack.pop();
    }
}
class ChatListData extends BasicDataSource_1.BasicDataSource {
    constructor() {
        super(...arguments);
        this.chatList = [];
    }
    totalCount() {
        return this.chatList.length;
    }
    getData(index) {
        return this.chatList[index];
    }
    addData(index, data) {
        this.chatList.splice(index, 0, data);
        this.notifyDataAdd(index);
    }
    pushData(data) {
        this.chatList.push(data);
        this.notifyDataAdd(this.chatList.length - 1);
    }
}
loadDocument(new ChatListPage("1", undefined, {}));


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
/******/ 			"./pages/ChatListPage": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["commons"], () => (__webpack_require__("../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/ChatListPage.ets?entry")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	_ea65ef4ec7ea008b316d651e7ceca251 = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=ChatListPage.js.map