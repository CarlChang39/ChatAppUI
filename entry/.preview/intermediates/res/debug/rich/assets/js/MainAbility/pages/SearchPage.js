var _ea65ef4ec7ea008b316d651e7ceca251;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/SearchPage.ets?entry":
/*!*************************************************************************************************************************!*\
  !*** ../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/SearchPage.ets?entry ***!
  \*************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


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
class SearchPage extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.__changeValue = new ObservedPropertySimple('', this, "changeValue");
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.changeValue !== undefined) {
            this.changeValue = params.changeValue;
        }
    }
    aboutToBeDeleted() {
        this.__changeValue.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id());
    }
    get changeValue() {
        return this.__changeValue.get();
    }
    set changeValue(newValue) {
        this.__changeValue.set(newValue);
    }
    render() {
        Column.create();
        Column.debugLine("pages/SearchPage.ets(23:5)");
        Column.padding(10);
        Column.backgroundColor("#f5f5f5");
        Column.height('100%');
        Row.create();
        Row.debugLine("pages/SearchPage.ets(24:7)");
        Row.margin({ top: 30 });
        Stack.create({ alignContent: Alignment.Center });
        Stack.debugLine("pages/SearchPage.ets(25:9)");
        Stack.backgroundColor(Color.White);
        Stack.height(40);
        Stack.width('90%');
        Stack.borderRadius(10);
        Row.create();
        Row.debugLine("pages/SearchPage.ets(26:11)");
        Image.create({ "id": 16777288, "type": 20000, params: [] });
        Image.debugLine("pages/SearchPage.ets(27:13)");
        Image.width(20);
        Image.height(20);
        Image.opacity(0.5);
        Image.margin({ left: 10 });
        Text.create("搜索");
        Text.debugLine("pages/SearchPage.ets(32:13)");
        Text.fontSize(20);
        Text.opacity(0.5);
        Text.padding({ left: 10 });
        Text.pop();
        Row.pop();
        Stack.pop();
        Text.create("取消");
        Text.debugLine("pages/SearchPage.ets(43:9)");
        Text.key('cancelSearchBtn');
        Text.fontSize(16);
        Text.fontColor("#0066cc");
        Text.margin({ left: 10 });
        Text.onClick(() => {
            _ohos_router_1.back();
        });
        Text.pop();
        Row.pop();
        Row.create();
        Row.debugLine("pages/SearchPage.ets(54:7)");
        Row.opacity(0.5);
        Row.padding(30);
        Row.height(86);
        Text.create("搜索指定内容");
        Text.debugLine("pages/SearchPage.ets(55:9)");
        Text.fontSize(16);
        Text.pop();
        Row.pop();
        Row.create();
        Row.debugLine("pages/SearchPage.ets(62:7)");
        Row.margin({ left: "7%" });
        Row.justifyContent(FlexAlign.SpaceBetween);
        Text.create("社区");
        Text.debugLine("pages/SearchPage.ets(63:9)");
        Text.fontColor("#0066cc");
        Text.width("33%");
        Text.fontSize(20);
        Text.padding(20);
        Text.pop();
        Text.create("文章");
        Text.debugLine("pages/SearchPage.ets(68:9)");
        Text.fontColor("#0066cc");
        Text.width("33%");
        Text.fontSize(20);
        Text.padding(20);
        Text.pop();
        Text.create("表情");
        Text.debugLine("pages/SearchPage.ets(73:9)");
        Text.fontColor("#0066cc");
        Text.width("33%");
        Text.fontSize(20);
        Text.padding(20);
        Text.pop();
        Row.pop();
        Row.create();
        Row.debugLine("pages/SearchPage.ets(82:7)");
        Row.justifyContent(FlexAlign.SpaceBetween);
        Row.margin({ left: "7%" });
        Text.create("小程序");
        Text.debugLine("pages/SearchPage.ets(83:9)");
        Text.fontColor("#0066cc");
        Text.width("33%");
        Text.fontSize(20);
        Text.padding(20);
        Text.pop();
        Text.create("音乐");
        Text.debugLine("pages/SearchPage.ets(88:9)");
        Text.fontColor("#0066cc");
        Text.width("33%");
        Text.fontSize(20);
        Text.padding(20);
        Text.pop();
        Text.create("公众号");
        Text.debugLine("pages/SearchPage.ets(93:9)");
        Text.fontColor("#0066cc");
        Text.width("33%");
        Text.fontSize(20);
        Text.padding(20);
        Text.pop();
        Row.pop();
        Row.create();
        Row.debugLine("pages/SearchPage.ets(102:7)");
        Row.justifyContent(FlexAlign.SpaceBetween);
        Row.margin({ left: "7%" });
        Text.create("服务");
        Text.debugLine("pages/SearchPage.ets(103:9)");
        Text.fontColor("#0066cc");
        Text.width("33%");
        Text.fontSize(20);
        Text.padding(20);
        Text.pop();
        Row.pop();
        Column.pop();
    }
    pageTransition() {
        PageTransition.create();
        PageTransitionEnter.create({ duration: 0 });
        PageTransitionExit.create({ duration: 0 });
        PageTransition.pop();
    }
}
loadDocument(new SearchPage("1", undefined, {}));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/SearchPage.ets?entry"](0, __webpack_exports__);
/******/ 	_ea65ef4ec7ea008b316d651e7ceca251 = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=SearchPage.js.map