var _ea65ef4ec7ea008b316d651e7ceca251;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/FriendsMomentsPage.ets?entry":
/*!*********************************************************************************************************************************!*\
  !*** ../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/FriendsMomentsPage.ets?entry ***!
  \*********************************************************************************************************************************/
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
const BasicDataSource_1 = __webpack_require__(/*! ../common/BasicDataSource */ "../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/common/BasicDataSource.ets");
var _ohos_router_1  = globalThis.requireNapi('router') || (isSystemplugin('router', 'ohos') ? globalThis.ohosplugin.router : isSystemplugin('router', 'system') ? globalThis.systemplugin.router : undefined);
const MsgBase_1 = __webpack_require__(/*! ./MsgBase */ "../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/MsgBase.ets");
class FriendsMomentsPage extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.__itemLength = new ObservedPropertySimple(0, this, "itemLength");
        this.momentData = new FriendMomentsData();
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.itemLength !== undefined) {
            this.itemLength = params.itemLength;
        }
        if (params.momentData !== undefined) {
            this.momentData = params.momentData;
        }
    }
    aboutToBeDeleted() {
        this.__itemLength.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id());
    }
    get itemLength() {
        return this.__itemLength.get();
    }
    set itemLength(newValue) {
        this.__itemLength.set(newValue);
    }
    render() {
        Column.create();
        Column.debugLine("pages/FriendsMomentsPage.ets(27:5)");
        Column.height('100%');
        Column.width('100%');
        Column.create();
        Column.debugLine("pages/FriendsMomentsPage.ets(28:7)");
        Column.height('100%');
        Column.padding({ bottom: 50 });
        Row.create();
        Row.debugLine("pages/FriendsMomentsPage.ets(29:9)");
        Row.backgroundColor(Color.Black);
        Row.justifyContent(FlexAlign.SpaceBetween);
        Row.height(50);
        Row.width('100%');
        Row.padding({ left: 10, right: 10 });
        Image.create({ "id": 16777240, "type": 20000, params: [] });
        Image.debugLine("pages/FriendsMomentsPage.ets(30:11)");
        Image.height(30);
        Image.width(30);
        Image.onClick(() => {
            _ohos_router_1.back();
        });
        Text.create("朋友圈");
        Text.debugLine("pages/FriendsMomentsPage.ets(37:11)");
        Text.fontSize(20);
        Text.fontColor(Color.White);
        Text.pop();
        Image.create({ "id": 16777259, "type": 20000, params: [] });
        Image.debugLine("pages/FriendsMomentsPage.ets(40:11)");
        Image.height(30);
        Image.width(30);
        Row.pop();
        Column.create();
        Column.debugLine("pages/FriendsMomentsPage.ets(50:9)");
        Column.height('100%');
        List.create();
        List.debugLine("pages/FriendsMomentsPage.ets(51:11)");
        List.width('100%');
        List.height('100%');
        List.listDirection(Axis.Vertical);
        ListItem.create();
        ListItem.debugLine("pages/FriendsMomentsPage.ets(52:13)");
        Column.create();
        Column.debugLine("pages/FriendsMomentsPage.ets(53:15)");
        Column.margin({ bottom: 20 });
        Column.alignItems(HorizontalAlign.End);
        Column.height('40%');
        Row.create();
        Row.debugLine("pages/FriendsMomentsPage.ets(54:17)");
        Row.height('100%');
        Row.width('100%');
        Image.create({ "id": 16777291, "type": 20000, params: [] });
        Image.debugLine("pages/FriendsMomentsPage.ets(55:19)");
        Row.pop();
        Row.create();
        Row.debugLine("pages/FriendsMomentsPage.ets(60:17)");
        Row.margin({ top: -25 });
        Text.create("Carl");
        Text.debugLine("pages/FriendsMomentsPage.ets(61:19)");
        Text.fontSize(20);
        Text.fontColor(Color.Black);
        Text.pop();
        Image.create({ "id": 16777264, "type": 20000, params: [] });
        Image.debugLine("pages/FriendsMomentsPage.ets(64:19)");
        Image.height(50);
        Image.width(50);
        Row.pop();
        Column.pop();
        ListItem.pop();
        LazyForEach.create("3", this, ObservedObject.GetRawObject(this.momentData), (msg) => {
            this.isRenderingInProgress = true;
            ListItem.create();
            ListItem.debugLine("pages/FriendsMomentsPage.ets(76:15)");
            let earlierCreatedChild_2 = this.findChildById("2");
            if (earlierCreatedChild_2 == undefined) {
                View.create(new OneMoment("2", this, { moment: msg }));
            }
            else {
                earlierCreatedChild_2.updateWithValueParams({
                    moment: msg
                });
                if (!earlierCreatedChild_2.needsUpdate()) {
                    earlierCreatedChild_2.markStatic();
                }
                View.create(earlierCreatedChild_2);
            }
            ListItem.pop();
            this.isRenderingInProgress = false;
        }, (msg) => msg.id);
        LazyForEach.pop();
        List.pop();
        Column.pop();
        Column.pop();
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
        for (let i = 1; i <= 120; i++) {
            let imageStr = `/resources/images/photo${(i % 50).toString()}.jpg`;
            let mo = new MsgBase_1.FriendMoment(i.toString(), new MsgBase_1.EMContact(i.toString(), `朋友${i.toString()}`, imageStr), `<朋友圈配文${i.toString()}>`);
            this.momentData.pushData(mo);
        }
    }
}
class OneMoment extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.moment = undefined;
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.moment !== undefined) {
            this.moment = params.moment;
        }
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id());
    }
    render() {
        Row.create();
        Row.debugLine("pages/FriendsMomentsPage.ets(117:5)");
        Row.justifyContent(FlexAlign.Start);
        Row.margin({ left: 10 });
        Row.padding({ right: 70 });
        Row.alignItems(VerticalAlign.Top);
        Row.create();
        Row.debugLine("pages/FriendsMomentsPage.ets(118:7)");
        Row.width(50);
        Row.height(50);
        Image.create(this.moment.user.userImage);
        Image.debugLine("pages/FriendsMomentsPage.ets(119:9)");
        Image.autoResize(false);
        Row.pop();
        Column.create();
        Column.debugLine("pages/FriendsMomentsPage.ets(125:7)");
        Column.alignItems(HorizontalAlign.Start);
        Column.width('100%');
        Column.margin({ left: 10 });
        Text.create(this.moment.user.userName);
        Text.debugLine("pages/FriendsMomentsPage.ets(126:9)");
        Text.fontSize(15);
        Text.fontColor(Color.Black);
        Text.pop();
        Text.create(this.moment.text);
        Text.debugLine("pages/FriendsMomentsPage.ets(129:9)");
        Text.fontSize(13);
        Text.fontColor(Color.Black);
        Text.pop();
        Row.create({ space: 5 });
        Row.debugLine("pages/FriendsMomentsPage.ets(132:9)");
        Row.margin({ top: 5, right: 10 });
        let earlierCreatedChild_4 = this.findChildById("4");
        if (earlierCreatedChild_4 == undefined) {
            View.create(new MomentsImage("4", this, { imageStr: { "id": 16777270, "type": 20000, params: [] }, imageStrId: 1 }));
        }
        else {
            earlierCreatedChild_4.updateWithValueParams({
                imageStr: { "id": 16777270, "type": 20000, params: [] },
                imageStrId: 1
            });
            View.create(earlierCreatedChild_4);
        }
        let earlierCreatedChild_5 = this.findChildById("5");
        if (earlierCreatedChild_5 == undefined) {
            View.create(new MomentsImage("5", this, { imageStr: { "id": 16777271, "type": 20000, params: [] }, imageStrId: 2 }));
        }
        else {
            earlierCreatedChild_5.updateWithValueParams({
                imageStr: { "id": 16777271, "type": 20000, params: [] },
                imageStrId: 2
            });
            View.create(earlierCreatedChild_5);
        }
        let earlierCreatedChild_6 = this.findChildById("6");
        if (earlierCreatedChild_6 == undefined) {
            View.create(new MomentsImage("6", this, { imageStr: { "id": 16777272, "type": 20000, params: [] }, imageStrId: 3 }));
        }
        else {
            earlierCreatedChild_6.updateWithValueParams({
                imageStr: { "id": 16777272, "type": 20000, params: [] },
                imageStrId: 3
            });
            View.create(earlierCreatedChild_6);
        }
        Row.pop();
        Row.create({ space: 5 });
        Row.debugLine("pages/FriendsMomentsPage.ets(139:9)");
        Row.margin({ top: 5, right: 10 });
        let earlierCreatedChild_7 = this.findChildById("7");
        if (earlierCreatedChild_7 == undefined) {
            View.create(new MomentsImage("7", this, { imageStr: { "id": 16777273, "type": 20000, params: [] }, imageStrId: 4 }));
        }
        else {
            earlierCreatedChild_7.updateWithValueParams({
                imageStr: { "id": 16777273, "type": 20000, params: [] },
                imageStrId: 4
            });
            View.create(earlierCreatedChild_7);
        }
        let earlierCreatedChild_8 = this.findChildById("8");
        if (earlierCreatedChild_8 == undefined) {
            View.create(new MomentsImage("8", this, { imageStr: { "id": 16777274, "type": 20000, params: [] }, imageStrId: 5 }));
        }
        else {
            earlierCreatedChild_8.updateWithValueParams({
                imageStr: { "id": 16777274, "type": 20000, params: [] },
                imageStrId: 5
            });
            View.create(earlierCreatedChild_8);
        }
        let earlierCreatedChild_9 = this.findChildById("9");
        if (earlierCreatedChild_9 == undefined) {
            View.create(new MomentsImage("9", this, { imageStr: { "id": 16777275, "type": 20000, params: [] }, imageStrId: 6 }));
        }
        else {
            earlierCreatedChild_9.updateWithValueParams({
                imageStr: { "id": 16777275, "type": 20000, params: [] },
                imageStrId: 6
            });
            View.create(earlierCreatedChild_9);
        }
        Row.pop();
        Row.create({ space: 5 });
        Row.debugLine("pages/FriendsMomentsPage.ets(146:9)");
        Row.margin({ top: 5, right: 10 });
        let earlierCreatedChild_10 = this.findChildById("10");
        if (earlierCreatedChild_10 == undefined) {
            View.create(new MomentsImage("10", this, {}));
        }
        else {
            earlierCreatedChild_10.updateWithValueParams({});
            View.create(earlierCreatedChild_10);
        }
        let earlierCreatedChild_11 = this.findChildById("11");
        if (earlierCreatedChild_11 == undefined) {
            View.create(new MomentsImage("11", this, { imageStr: { "id": 16777276, "type": 20000, params: [] }, imageStrId: 7 }));
        }
        else {
            earlierCreatedChild_11.updateWithValueParams({
                imageStr: { "id": 16777276, "type": 20000, params: [] },
                imageStrId: 7
            });
            View.create(earlierCreatedChild_11);
        }
        let earlierCreatedChild_12 = this.findChildById("12");
        if (earlierCreatedChild_12 == undefined) {
            View.create(new MomentsImage("12", this, { imageStr: { "id": 16777277, "type": 20000, params: [] }, imageStrId: 8 }));
        }
        else {
            earlierCreatedChild_12.updateWithValueParams({
                imageStr: { "id": 16777277, "type": 20000, params: [] },
                imageStrId: 8
            });
            View.create(earlierCreatedChild_12);
        }
        Row.pop();
        Row.create();
        Row.debugLine("pages/FriendsMomentsPage.ets(153:9)");
        Row.justifyContent(FlexAlign.SpaceBetween);
        Row.width('100%');
        Row.margin({ top: 5 });
        Row.padding({ right: 5 });
        Text.create(this.moment.time);
        Text.debugLine("pages/FriendsMomentsPage.ets(154:11)");
        Text.fontColor("#e3e3e3");
        Text.fontSize(12);
        Text.pop();
        Image.create({ "id": 16777224, "type": 20000, params: [] });
        Image.debugLine("pages/FriendsMomentsPage.ets(155:11)");
        Image.height(15);
        Image.width(20);
        Row.pop();
        Column.pop();
        Row.pop();
    }
}
class MomentsImage extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.imageStr = { "id": 16777269, "type": 20000, params: [] };
        this.imageStrId = 0;
        this.__active = new ObservedPropertySimple(false, this, "active");
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.imageStr !== undefined) {
            this.imageStr = params.imageStr;
        }
        if (params.imageStrId !== undefined) {
            this.imageStrId = params.imageStrId;
        }
        if (params.active !== undefined) {
            this.active = params.active;
        }
    }
    aboutToBeDeleted() {
        this.__active.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id());
    }
    get active() {
        return this.__active.get();
    }
    set active(newValue) {
        this.__active.set(newValue);
    }
    render() {
        Stack.create();
        Stack.debugLine("pages/FriendsMomentsPage.ets(180:5)");
        Stack.width(70);
        Stack.height(70);
        Image.create(this.imageStr);
        Image.debugLine("pages/FriendsMomentsPage.ets(181:7)");
        Image.width(70);
        Image.height(70);
        Image.onClick(() => {
            _ohos_router_1.push({
                url: 'pages/FullImagePage',
                params: { imageStrId: this.imageStrId }
            });
        });
        Stack.pop();
    }
}
class FriendMomentsData extends BasicDataSource_1.BasicDataSource {
    constructor() {
        super(...arguments);
        this.momentList = [];
    }
    totalCount() {
        return this.momentList.length;
    }
    getData(index) {
        return this.momentList[index];
    }
    addData(index, data) {
        this.momentList.splice(index, 0, data);
        this.notifyDataAdd(index);
    }
    pushData(data) {
        this.momentList.push(data);
        this.notifyDataAdd(this.momentList.length - 1);
    }
}
loadDocument(new FriendsMomentsPage("1", undefined, {}));


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
/******/ 			"./pages/FriendsMomentsPage": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["commons"], () => (__webpack_require__("../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/FriendsMomentsPage.ets?entry")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	_ea65ef4ec7ea008b316d651e7ceca251 = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=FriendsMomentsPage.js.map