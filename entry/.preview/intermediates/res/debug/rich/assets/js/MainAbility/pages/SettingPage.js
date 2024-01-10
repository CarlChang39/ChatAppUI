var _ea65ef4ec7ea008b316d651e7ceca251;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/SettingPage.ets?entry":
/*!**************************************************************************************************************************!*\
  !*** ../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/SettingPage.ets?entry ***!
  \**************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SettingItemView = exports.SettingPage = void 0;
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
class SettingPage extends View {
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
        Column.debugLine("pages/SettingPage.ets(24:5)");
        Column.backgroundColor("#cccccc");
        Column.width("100%");
        Column.height("100%");
        Scroll.create(this.scroller);
        Scroll.debugLine("pages/SettingPage.ets(25:7)");
        Column.create();
        Column.debugLine("pages/SettingPage.ets(26:9)");
        Column.create();
        Column.debugLine("pages/SettingPage.ets(27:11)");
        Column.backgroundColor(Color.White);
        Column.height(100);
        Column.onClick(() => {
            _ohos_router_1.push({ url: 'pages/UserInfo' });
        });
        Column.margin({ bottom: 10 });
        Row.create();
        Row.debugLine("pages/SettingPage.ets(28:13)");
        Row.backgroundColor(Color.White);
        Row.padding(10);
        Row.backgroundColor(Color.White);
        Row.width('100%');
        Image.create({ "id": 16777264, "type": 20000, params: [] });
        Image.debugLine("pages/SettingPage.ets(29:15)");
        Image.width(80);
        Image.height(80);
        Column.create({ space: 10 });
        Column.debugLine("pages/SettingPage.ets(32:15)");
        Column.alignItems(HorizontalAlign.Start);
        Column.padding({ left: 20 });
        Row.create();
        Row.debugLine("pages/SettingPage.ets(33:17)");
        Text.create("Carl");
        Text.debugLine("pages/SettingPage.ets(34:19)");
        Text.fontSize(15);
        Text.fontColor(Color.Black);
        Text.pop();
        Row.pop();
        Text.create("微信号：\nwxid_xxxxxxxx");
        Text.debugLine("pages/SettingPage.ets(39:17)");
        Text.fontSize(15);
        Text.fontColor(Color.Black);
        Text.pop();
        Column.pop();
        Row.pop();
        Column.pop();
        Column.create();
        Column.debugLine("pages/SettingPage.ets(58:11)");
        Column.margin({ bottom: 10 });
        let earlierCreatedChild_2 = this.findChildById("2");
        if (earlierCreatedChild_2 == undefined) {
            View.create(new SettingItemView("2", this, { image: { "id": 16777254, "type": 20000, params: [] }, text: '服务' }));
        }
        else {
            earlierCreatedChild_2.updateWithValueParams({
                image: { "id": 16777254, "type": 20000, params: [] },
                text: '服务'
            });
            if (!earlierCreatedChild_2.needsUpdate()) {
                earlierCreatedChild_2.markStatic();
            }
            View.create(earlierCreatedChild_2);
        }
        Column.pop();
        Column.create();
        Column.debugLine("pages/SettingPage.ets(63:11)");
        let earlierCreatedChild_3 = this.findChildById("3");
        if (earlierCreatedChild_3 == undefined) {
            View.create(new SettingItemView("3", this, { image: { "id": 16777252, "type": 20000, params: [] }, text: '收藏' }));
        }
        else {
            earlierCreatedChild_3.updateWithValueParams({
                image: { "id": 16777252, "type": 20000, params: [] },
                text: '收藏'
            });
            if (!earlierCreatedChild_3.needsUpdate()) {
                earlierCreatedChild_3.markStatic();
            }
            View.create(earlierCreatedChild_3);
        }
        Column.pop();
        Column.create();
        Column.debugLine("pages/SettingPage.ets(67:11)");
        let earlierCreatedChild_4 = this.findChildById("4");
        if (earlierCreatedChild_4 == undefined) {
            View.create(new SettingItemView("4", this, { image: { "id": 16777253, "type": 20000, params: [] }, text: '朋友圈' }));
        }
        else {
            earlierCreatedChild_4.updateWithValueParams({
                image: { "id": 16777253, "type": 20000, params: [] },
                text: '朋友圈'
            });
            if (!earlierCreatedChild_4.needsUpdate()) {
                earlierCreatedChild_4.markStatic();
            }
            View.create(earlierCreatedChild_4);
        }
        Column.pop();
        Column.create();
        Column.debugLine("pages/SettingPage.ets(71:11)");
        let earlierCreatedChild_5 = this.findChildById("5");
        if (earlierCreatedChild_5 == undefined) {
            View.create(new SettingItemView("5", this, { image: { "id": 16777251, "type": 20000, params: [] }, text: '卡包' }));
        }
        else {
            earlierCreatedChild_5.updateWithValueParams({
                image: { "id": 16777251, "type": 20000, params: [] },
                text: '卡包'
            });
            if (!earlierCreatedChild_5.needsUpdate()) {
                earlierCreatedChild_5.markStatic();
            }
            View.create(earlierCreatedChild_5);
        }
        Column.pop();
        Column.create();
        Column.debugLine("pages/SettingPage.ets(75:11)");
        Column.margin({ bottom: 10 });
        let earlierCreatedChild_6 = this.findChildById("6");
        if (earlierCreatedChild_6 == undefined) {
            View.create(new SettingItemView("6", this, { image: { "id": 16777256, "type": 20000, params: [] }, text: '表情' }));
        }
        else {
            earlierCreatedChild_6.updateWithValueParams({
                image: { "id": 16777256, "type": 20000, params: [] },
                text: '表情'
            });
            if (!earlierCreatedChild_6.needsUpdate()) {
                earlierCreatedChild_6.markStatic();
            }
            View.create(earlierCreatedChild_6);
        }
        Column.pop();
        Column.create();
        Column.debugLine("pages/SettingPage.ets(80:11)");
        Column.margin({ bottom: 10 });
        Column.onClick(() => {
            _ohos_router_1.push({ url: 'pages/Setting' });
        });
        let earlierCreatedChild_7 = this.findChildById("7");
        if (earlierCreatedChild_7 == undefined) {
            View.create(new SettingItemView("7", this, { image: { "id": 16777255, "type": 20000, params: [] }, text: '设置' }));
        }
        else {
            earlierCreatedChild_7.updateWithValueParams({
                image: { "id": 16777255, "type": 20000, params: [] },
                text: '设置'
            });
            if (!earlierCreatedChild_7.needsUpdate()) {
                earlierCreatedChild_7.markStatic();
            }
            View.create(earlierCreatedChild_7);
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
exports.SettingPage = SettingPage;
class SettingItemView extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.image = undefined;
        this.text = undefined;
        this.callBack = undefined;
        this.height = 40;
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
        Stack.create({ alignContent: Alignment.End });
        Stack.debugLine("pages/SettingPage.ets(109:5)");
        Stack.width('100%');
        Stack.height(this.height);
        Row.create();
        Row.debugLine("pages/SettingPage.ets(110:7)");
        Row.width('100%');
        Row.height(this.height);
        Row.padding({ left: 10, right: 10 });
        Row.backgroundColor(Color.White);
        Image.create(this.image);
        Image.debugLine("pages/SettingPage.ets(111:9)");
        Image.width(30);
        Image.height(30);
        Text.create(this.text);
        Text.debugLine("pages/SettingPage.ets(114:9)");
        Text.fontSize(15);
        Text.fontColor('#000000');
        Text.margin({ left: 10 });
        Text.pop();
        Row.pop();
        Image.create({ "id": 16777286, "type": 20000, params: [] });
        Image.debugLine("pages/SettingPage.ets(124:7)");
        Image.height(20);
        Image.width(15);
        Image.align(Alignment.End);
        Image.margin({ right: 15 });
        Stack.pop();
    }
}
exports.SettingItemView = SettingItemView;
loadDocument(new SettingPage("1", undefined, {}));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/SettingPage.ets?entry"](0, __webpack_exports__);
/******/ 	_ea65ef4ec7ea008b316d651e7ceca251 = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=SettingPage.js.map