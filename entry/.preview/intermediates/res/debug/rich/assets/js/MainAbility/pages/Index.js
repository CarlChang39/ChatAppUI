var _ea65ef4ec7ea008b316d651e7ceca251;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/Index.ets?entry":
/*!********************************************************************************************************************!*\
  !*** ../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/Index.ets?entry ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WantFileModel = exports.WantModel = void 0;
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
var _ohos_ability_featureAbility_1  = globalThis.requireNapi('ability.featureAbility') || (isSystemplugin('ability.featureAbility', 'ohos') ? globalThis.ohosplugin.ability.featureAbility : isSystemplugin('ability.featureAbility', 'system') ? globalThis.systemplugin.ability.featureAbility : undefined);
__webpack_require__(/*! @ohos.multimedia.image */ "../../api/@ohos.multimedia.image.d.ts");
var _ohos_fileio_1  = globalThis.requireNapi('fileio') || (isSystemplugin('fileio', 'ohos') ? globalThis.ohosplugin.fileio : isSystemplugin('fileio', 'system') ? globalThis.systemplugin.fileio : undefined);
const ChatListPage_1 = __webpack_require__(/*! ./ChatListPage */ "../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/ChatListPage.ets");
const DiscoverPage_1 = __webpack_require__(/*! ./DiscoverPage */ "../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/DiscoverPage.ets");
const SettingPage_1 = __webpack_require__(/*! ./SettingPage */ "../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/SettingPage.ets");
const FriendsPage_1 = __webpack_require__(/*! ./FriendsPage */ "../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/FriendsPage.ets");
const Header_1 = __webpack_require__(/*! ../components/Header */ "../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/components/Header.ets");
const TAG = "[Sample_Chat]";
class WantModel {
    constructor(srcImg, text, kindId) {
        this.srcImg = srcImg;
        this.textCon = text;
        this.kindId = kindId;
    }
    toString() {
        return this.srcImg + "  " + this.textCon + "  " + this.kindId;
    }
}
exports.WantModel = WantModel;
class WantFileModel {
}
exports.WantFileModel = WantFileModel;
class Index extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.__wantParams = new ObservedPropertyObject(new WantModel("./resources/images/photo0.jpg", "111", 0), this, "wantParams");
        this.__wantFileParams = new ObservedPropertyObject(new WantFileModel(), this, "wantFileParams");
        this.__flagWant = new ObservedPropertySimple(false, this, "flagWant");
        this.___pixelMap = new ObservedPropertyObject(undefined, this, "_pixelMap");
        this.__imgSource = new ObservedPropertyObject(undefined, this, "imgSource");
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.wantParams !== undefined) {
            this.wantParams = params.wantParams;
        }
        if (params.wantFileParams !== undefined) {
            this.wantFileParams = params.wantFileParams;
        }
        if (params.flagWant !== undefined) {
            this.flagWant = params.flagWant;
        }
        if (params._pixelMap !== undefined) {
            this._pixelMap = params._pixelMap;
        }
        if (params.imgSource !== undefined) {
            this.imgSource = params.imgSource;
        }
    }
    aboutToBeDeleted() {
        this.__wantParams.aboutToBeDeleted();
        this.__wantFileParams.aboutToBeDeleted();
        this.__flagWant.aboutToBeDeleted();
        this.___pixelMap.aboutToBeDeleted();
        this.__imgSource.aboutToBeDeleted();
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
    get flagWant() {
        return this.__flagWant.get();
    }
    set flagWant(newValue) {
        this.__flagWant.set(newValue);
    }
    get _pixelMap() {
        return this.___pixelMap.get();
    }
    set _pixelMap(newValue) {
        this.___pixelMap.set(newValue);
    }
    get imgSource() {
        return this.__imgSource.get();
    }
    set imgSource(newValue) {
        this.__imgSource.set(newValue);
    }
    async getWant() {
        _ohos_ability_featureAbility_1.getWant()
            .then(async (data) => {
            console.info("Sample_Chat");
            let want = data;
            console.info(`${TAG}  getWant: want.parameters ---${JSON.stringify(want.parameters)}`);
            if (want.parameters) {
                // 文本、链接的参数处理
                this.wantParams.srcImg = want.parameters.srcImg;
                this.wantParams.textCon = want.parameters.text;
                this.wantParams.kindId = want.parameters.kindId;
                console.info(`${TAG} getWant: params.srcImg--- ${want.parameters.srcImg}`);
                console.info(`${TAG} getWant: params.textContent---${want.parameters.text}`);
                // 图片文件的参数处理
                this.wantFileParams.fdImg = want.parameters["keyFd"].value;
                this.wantFileParams.kindId = want.parameters.kindId;
                console.info(`${TAG} getWant: params.fdImg--- ${this.wantFileParams.fdImg} ,type: ${typeof (this.wantFileParams.fdImg)} `);
                console.info(`${TAG} getWant: params.kindId---${this.wantFileParams.kindId}`);
                let fd = want.parameters["keyFd"].value;
                console.info(`${TAG} getWant, fd111 = ${JSON.stringify(fd)}`);
                // Test
                let buf = new ArrayBuffer(90960);
                let opt = {
                    offset: 0,
                    position: 0,
                    length: 90000
                };
                try {
                    let readOut, view;
                    readOut = await _ohos_fileio_1.readSync(fd, buf, opt);
                    console.info(TAG + "getWant, fd222 = " + JSON.stringify(fd));
                    console.info(TAG + "getWant, readLength = " + JSON.stringify(readOut));
                    console.info(TAG + "getWant, buf = " + JSON.stringify(buf));
                    view = new Uint32Array(buf);
                    console.info(TAG + "getWant, view = " + JSON.stringify(view));
                }
                catch (e) {
                    console.info(TAG + "getWant, e = " + JSON.stringify(e));
                }
                // 查看fd是否传来成功
                try {
                    let stat = _ohos_fileio_1.fstatSync(this.wantFileParams.fdImg);
                    console.info(TAG + `getWant ,stat ---${stat.uid}`);
                }
                catch (error) {
                    console.info(TAG + 'getWant ,stat error');
                }
                this.flagWant = true;
                return this.flagWant;
            }
            return this.flagWant;
        });
    }
    aboutToAppear() {
        this.getWant();
    }
    render() {
        Column.create();
        Column.debugLine("pages/Index.ets(117:5)");
        Column.width('100%');
        Column.height('100%');
        Tabs.create({ barPosition: BarPosition.End });
        Tabs.debugLine("pages/Index.ets(118:7)");
        Tabs.barWidth(400);
        Tabs.barHeight(50);
        Tabs.animationDuration(0);
        TabContent.create();
        TabContent.debugLine("pages/Index.ets(119:9)");
        TabContent.tabBar({ icon: { "id": 16777224, "type": 20000, params: [] }, text: "微信" });
        Column.create();
        Column.debugLine("pages/Index.ets(120:11)");
        let earlierCreatedChild_2 = this.findChildById("2");
        if (earlierCreatedChild_2 == undefined) {
            View.create(new TopBar("2", this, {}));
        }
        else {
            earlierCreatedChild_2.updateWithValueParams({});
            View.create(earlierCreatedChild_2);
        }
        let earlierCreatedChild_3 = this.findChildById("3");
        if (earlierCreatedChild_3 == undefined) {
            View.create(new ChatListPage_1.ChatListView("3", this, { wantParams: this.wantParams, wantFileParams: this.wantFileParams }));
        }
        else {
            earlierCreatedChild_3.updateWithValueParams({
                wantParams: this.wantParams, wantFileParams: this.wantFileParams
            });
            View.create(earlierCreatedChild_3);
        }
        Column.pop();
        TabContent.pop();
        TabContent.create();
        TabContent.debugLine("pages/Index.ets(127:9)");
        TabContent.tabBar({ icon: { "id": 16777230, "type": 20000, params: [] }, text: "通讯录" });
        let earlierCreatedChild_4 = this.findChildById("4");
        if (earlierCreatedChild_4 == undefined) {
            View.create(new FriendsPage_1.FriendsPage("4", this, {}));
        }
        else {
            earlierCreatedChild_4.updateWithValueParams({});
            View.create(earlierCreatedChild_4);
        }
        TabContent.pop();
        TabContent.create();
        TabContent.debugLine("pages/Index.ets(132:9)");
        TabContent.tabBar({ icon: { "id": 16777234, "type": 20000, params: [] }, text: "发现" });
        let earlierCreatedChild_5 = this.findChildById("5");
        if (earlierCreatedChild_5 == undefined) {
            View.create(new DiscoverPage_1.DiscoverPage("5", this, {}));
        }
        else {
            earlierCreatedChild_5.updateWithValueParams({});
            if (!earlierCreatedChild_5.needsUpdate()) {
                earlierCreatedChild_5.markStatic();
            }
            View.create(earlierCreatedChild_5);
        }
        TabContent.pop();
        TabContent.create();
        TabContent.debugLine("pages/Index.ets(137:9)");
        TabContent.tabBar({ icon: { "id": 16777283, "type": 20000, params: [] }, text: "我" });
        let earlierCreatedChild_6 = this.findChildById("6");
        if (earlierCreatedChild_6 == undefined) {
            View.create(new SettingPage_1.SettingPage("6", this, {}));
        }
        else {
            earlierCreatedChild_6.updateWithValueParams({});
            if (!earlierCreatedChild_6.needsUpdate()) {
                earlierCreatedChild_6.markStatic();
            }
            View.create(earlierCreatedChild_6);
        }
        TabContent.pop();
        Tabs.pop();
        Column.pop();
    }
    pageTransition() {
        PageTransition.create();
        PageTransitionEnter.create({ duration: 0 });
        PageTransitionExit.create({ duration: 0 });
        PageTransition.pop();
    }
}
class TopBar extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.__num = new ObservedPropertySimple(0, this, "num");
        this.dialogController = new CustomDialogController({
            builder: () => {
                let jsDialog = new CustomDialogExample("7", this, {});
                jsDialog.setController(this.dialogController);
                View.create(jsDialog);
            },
            autoCancel: true,
            alignment: DialogAlignment.TopEnd,
            offset: { dx: "-5", dy: "40" },
            customStyle: true
        }, this);
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.num !== undefined) {
            this.num = params.num;
        }
        if (params.dialogController !== undefined) {
            this.dialogController = params.dialogController;
        }
    }
    aboutToBeDeleted() {
        this.__num.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id());
    }
    get num() {
        return this.__num.get();
    }
    set num(newValue) {
        this.__num.set(newValue);
    }
    render() {
        Row.create();
        Row.debugLine("pages/Index.ets(168:5)");
        Row.width('100%');
        Row.height(50);
        Column.create();
        Column.debugLine("pages/Index.ets(169:7)");
        Stack.create({ alignContent: Alignment.Center });
        Stack.debugLine("pages/Index.ets(170:9)");
        Stack.backgroundColor('#eeeeee');
        Stack.height(50);
        Stack.width("100%");
        Stack.create({ alignContent: Alignment.Center });
        Stack.debugLine("pages/Index.ets(171:11)");
        Stack.height(50);
        Stack.width("100%");
        Text.create("微信");
        Text.debugLine("pages/Index.ets(172:13)");
        Text.fontSize(20);
        Text.fontColor(Color.Black);
        Text.pop();
        Stack.pop();
        Stack.create({ alignContent: Alignment.End });
        Stack.debugLine("pages/Index.ets(179:11)");
        Stack.height(50);
        Stack.width("100%");
        Stack.padding(10);
        Stack.create({ alignContent: Alignment.End });
        Stack.debugLine("pages/Index.ets(180:13)");
        Stack.key('addBtn');
        Stack.height("100%");
        Stack.width(50);
        Stack.onClick(() => {
            this.dialogController.open();
        });
        Image.create({ "id": 16777235, "type": 20000, params: [] });
        Image.debugLine("pages/Index.ets(181:15)");
        Image.height(30);
        Image.width(30);
        Stack.pop();
        Stack.pop();
        Stack.pop();
        Column.pop();
        Row.pop();
    }
}
class CustomDialogExample extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.asd = [[], [], [], []];
        this.controller = undefined;
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.asd !== undefined) {
            this.asd = params.asd;
        }
        if (params.controller !== undefined) {
            this.controller = params.controller;
        }
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id());
    }
    setController(ctr) {
        this.controller = ctr;
    }
    render() {
        Column.create();
        Column.debugLine("pages/Index.ets(212:5)");
        Column.backgroundColor("#696969");
        Column.borderRadius(5);
        Column.padding({ left: 5, bottom: 5 });
        Column.width(120);
        Column.create();
        Column.debugLine("pages/Index.ets(214:7)");
        Column.onClick(() => {
            this.controller.close();
            _ohos_router_1.push({ url: "pages/CreateGroupChatPage" });
        });
        let earlierCreatedChild_8 = this.findChildById("8");
        if (earlierCreatedChild_8 == undefined) {
            View.create(new Header_1.Prompt("8", this, { img: { "id": 16777279, "type": 20000, params: [] }, text: "发起群聊" }));
        }
        else {
            earlierCreatedChild_8.updateWithValueParams({
                img: { "id": 16777279, "type": 20000, params: [] },
                text: "发起群聊"
            });
            View.create(earlierCreatedChild_8);
        }
        Column.pop();
        Column.create();
        Column.debugLine("pages/Index.ets(221:7)");
        Column.onClick(() => {
            this.controller.close();
            _ohos_router_1.push({ url: "pages/AddFriendsPage" });
        });
        let earlierCreatedChild_9 = this.findChildById("9");
        if (earlierCreatedChild_9 == undefined) {
            View.create(new Header_1.Prompt("9", this, { img: { "id": 16777278, "type": 20000, params: [] }, text: "添加朋友" }));
        }
        else {
            earlierCreatedChild_9.updateWithValueParams({
                img: { "id": 16777278, "type": 20000, params: [] },
                text: "添加朋友"
            });
            View.create(earlierCreatedChild_9);
        }
        Column.pop();
        Column.create();
        Column.debugLine("pages/Index.ets(228:7)");
        Column.onClick(() => {
            this.controller.close();
        });
        let earlierCreatedChild_10 = this.findChildById("10");
        if (earlierCreatedChild_10 == undefined) {
            View.create(new Header_1.Prompt("10", this, { img: { "id": 16777280, "type": 20000, params: [] }, text: "扫一扫" }));
        }
        else {
            earlierCreatedChild_10.updateWithValueParams({
                img: { "id": 16777280, "type": 20000, params: [] },
                text: "扫一扫"
            });
            View.create(earlierCreatedChild_10);
        }
        Column.pop();
        Column.create();
        Column.debugLine("pages/Index.ets(234:7)");
        Column.onClick(() => {
            this.controller.close();
        });
        let earlierCreatedChild_11 = this.findChildById("11");
        if (earlierCreatedChild_11 == undefined) {
            View.create(new Header_1.Prompt("11", this, { img: { "id": 16777281, "type": 20000, params: [] }, text: "收付款" }));
        }
        else {
            earlierCreatedChild_11.updateWithValueParams({
                img: { "id": 16777281, "type": 20000, params: [] },
                text: "收付款"
            });
            View.create(earlierCreatedChild_11);
        }
        Column.pop();
        Column.pop();
    }
}
loadDocument(new Index("1", undefined, {}));


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
/******/ 			"./pages/Index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["commons"], () => (__webpack_require__("../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/Index.ets?entry")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	_ea65ef4ec7ea008b316d651e7ceca251 = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=Index.js.map