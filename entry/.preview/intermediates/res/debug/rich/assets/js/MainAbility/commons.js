(globalThis["webpackChunk_ea65ef4ec7ea008b316d651e7ceca251"] = globalThis["webpackChunk_ea65ef4ec7ea008b316d651e7ceca251"] || []).push([["commons"],{

/***/ "../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/common/BasicDataSource.ets":
/*!*************************************************************************************************************************!*\
  !*** ../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/common/BasicDataSource.ets ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BasicDataSource = void 0;
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
__webpack_require__(/*! @ohos.fileio */ "../../api/@ohos.fileio.d.ts");
__webpack_require__(/*! ../pages/MsgBase */ "../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/MsgBase.ets");
__webpack_require__(/*! @ohos.data.rdb */ "../../api/@ohos.data.rdb.d.ts");
__webpack_require__(/*! @ohos.ability.featureAbility */ "../../api/@ohos.ability.featureAbility.d.ts");
class Index extends View {
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
        Row.debugLine("common/BasicDataSource.ets(27:5)");
        Row.height('100%');
        Column.create();
        Column.debugLine("common/BasicDataSource.ets(28:7)");
        Column.width('100%');
        Text.create(this.message);
        Text.debugLine("common/BasicDataSource.ets(29:9)");
        Text.fontSize(50);
        Text.fontWeight(FontWeight.Bold);
        Text.pop();
        Column.pop();
        Row.pop();
    }
}
class BasicDataSource {
    constructor() {
        this.listeners = [];
    }
    getData(index) {
        return undefined;
    }
    registerDataChangeListener(listener) {
        if (this.listeners.indexOf(listener) < 0) {
            this.listeners.push(listener);
        }
    }
    unregisterDataChangeListener(listener) {
        const pos = this.listeners.indexOf(listener);
        if (pos >= 0) {
            this.listeners.splice(pos, 1);
        }
    }
    notifyDataReload() {
        this.listeners.forEach(listener => {
            listener.onDataReloaded();
        });
    }
    notifyDataAdd(index) {
        this.listeners.forEach(listener => {
            listener.onDataAdded(index);
        });
    }
    notifyDataChange(index) {
        this.listeners.forEach(listener => {
            listener.onDataChanged(index);
        });
    }
    notifyDataDelete(index) {
        this.listeners.forEach(listener => {
            listener.onDataDeleted(index);
        });
    }
    notifyDataMove(from, to) {
        this.listeners.forEach(listener => {
            listener.onDataMoved(from, to);
        });
    }
}
exports.BasicDataSource = BasicDataSource;
loadDocument(new Index("1", undefined, {}));


/***/ }),

/***/ "../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/components/Header.ets":
/*!********************************************************************************************************************!*\
  !*** ../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/components/Header.ets ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = exports.Prompt = exports.AddData = exports.MySearchComponent = exports.FunctionRow = exports.Swit = exports.InLine = exports.Header = void 0;
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
class Header extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.__title = new ObservedPropertySimple('', this, "title");
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.title !== undefined) {
            this.title = params.title;
        }
    }
    aboutToBeDeleted() {
        this.__title.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id());
    }
    get title() {
        return this.__title.get();
    }
    set title(newValue) {
        this.__title.set(newValue);
    }
    render() {
        Row.create();
        Row.debugLine("components/Header.ets(23:5)");
        Row.justifyContent(FlexAlign.SpaceBetween);
        Row.width('100%');
        Row.height(60);
        Row.backgroundColor(0xEEEEEE);
        Image.create({ "id": 16777261, "type": 20000, params: [] });
        Image.debugLine("components/Header.ets(24:7)");
        Image.key('leftCurrentPageBtn');
        Image.height(30);
        Image.width(30);
        Image.margin({ left: 10, top: 2 });
        Image.onClick(() => {
            _ohos_router_1.back();
        });
        Text.create(this.title);
        Text.debugLine("components/Header.ets(32:7)");
        Text.fontSize(18);
        Text.pop();
        Text.create('');
        Text.debugLine("components/Header.ets(35:7)");
        Text.fontSize(30);
        Text.height(40);
        Text.width(50);
        Text.padding({ right: 10 });
        Text.pop();
        Row.pop();
    }
}
exports.Header = Header;
class InLine extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.__name = new ObservedPropertySimple('', this, "name");
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.name !== undefined) {
            this.name = params.name;
        }
    }
    aboutToBeDeleted() {
        this.__name.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id());
    }
    get name() {
        return this.__name.get();
    }
    set name(newValue) {
        this.__name.set(newValue);
    }
    render() {
        Row.create();
        Row.debugLine("components/Header.ets(52:5)");
        Row.width('100%');
        Row.justifyContent(FlexAlign.SpaceBetween);
        Row.padding({ left: 20, right: 10, top: 15, bottom: 15 });
        Row.backgroundColor("#ffffff");
        Text.create(this.name);
        Text.debugLine("components/Header.ets(53:7)");
        Text.fontSize(16);
        Text.pop();
        Image.create({ "id": 16777286, "type": 20000, params: [] });
        Image.debugLine("components/Header.ets(55:7)");
        Image.height(15);
        Image.width(15);
        Row.pop();
    }
}
exports.InLine = InLine;
class Swit extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.__name = new ObservedPropertySimple("", this, "name");
        this.__btn = new ObservedPropertySimple(true, this, "btn");
        this.__num = new ObservedPropertySimple(1, this, "num");
        this.__color = new ObservedPropertySimple("#f0f0f0", this, "color");
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.name !== undefined) {
            this.name = params.name;
        }
        if (params.btn !== undefined) {
            this.btn = params.btn;
        }
        if (params.num !== undefined) {
            this.num = params.num;
        }
        if (params.color !== undefined) {
            this.color = params.color;
        }
    }
    aboutToBeDeleted() {
        this.__name.aboutToBeDeleted();
        this.__btn.aboutToBeDeleted();
        this.__num.aboutToBeDeleted();
        this.__color.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id());
    }
    get name() {
        return this.__name.get();
    }
    set name(newValue) {
        this.__name.set(newValue);
    }
    get btn() {
        return this.__btn.get();
    }
    set btn(newValue) {
        this.__btn.set(newValue);
    }
    get num() {
        return this.__num.get();
    }
    set num(newValue) {
        this.__num.set(newValue);
    }
    get color() {
        return this.__color.get();
    }
    set color(newValue) {
        this.__color.set(newValue);
    }
    render() {
        Row.create();
        Row.debugLine("components/Header.ets(74:5)");
        Row.width('100%');
        Row.justifyContent(FlexAlign.SpaceBetween);
        Row.padding({ left: 20, right: 10, top: 15, bottom: 15 });
        Row.backgroundColor("#ffffff");
        Text.create(this.name);
        Text.debugLine("components/Header.ets(75:7)");
        Text.fontSize(16);
        Text.pop();
        Row.create();
        Row.debugLine("components/Header.ets(77:7)");
        Row.width(60);
        Row.height(30);
        Row.backgroundColor(this.color);
        Row.borderRadius(15);
        Row.onClick(() => {
            if (this.btn) {
                this.num = 31;
                this.color = "#00cc33";
                this.btn = false;
            }
            else {
                this.num = 1;
                this.color = "#f0f0f0";
                this.btn = true;
            }
        });
        Button.createWithLabel();
        Button.debugLine("components/Header.ets(78:9)");
        Button.width(28);
        Button.height(28);
        Button.backgroundColor("#ffffff");
        Button.borderRadius(14);
        Button.margin({ left: this.num });
        Button.pop();
        Row.pop();
        Row.pop();
    }
}
exports.Swit = Swit;
class FunctionRow extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.__title = new ObservedPropertySimple('', this, "title");
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.title !== undefined) {
            this.title = params.title;
        }
    }
    aboutToBeDeleted() {
        this.__title.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id());
    }
    get title() {
        return this.__title.get();
    }
    set title(newValue) {
        this.__title.set(newValue);
    }
    render() {
        Row.create();
        Row.debugLine("components/Header.ets(114:5)");
        Row.justifyContent(FlexAlign.SpaceBetween);
        Row.width("100%");
        Row.height(70);
        Row.backgroundColor(0xffffff);
        Row.padding({ left: 20, right: 20 });
        Text.create(this.title);
        Text.debugLine("components/Header.ets(115:7)");
        Text.fontSize(16);
        Text.pop();
        Image.create({ "id": 16777286, "type": 20000, params: [] });
        Image.debugLine("components/Header.ets(117:7)");
        Image.height(15);
        Image.width(15);
        Image.opacity(0.5);
        Image.margin({ left: 10, top: 2 });
        Row.pop();
    }
}
exports.FunctionRow = FunctionRow;
class MySearchComponent extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.__changeValue = new ObservedPropertySimple('', this, "changeValue");
        this.__submitValue = new ObservedPropertySimple('', this, "submitValue");
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.changeValue !== undefined) {
            this.changeValue = params.changeValue;
        }
        if (params.submitValue !== undefined) {
            this.submitValue = params.submitValue;
        }
    }
    aboutToBeDeleted() {
        this.__changeValue.aboutToBeDeleted();
        this.__submitValue.aboutToBeDeleted();
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
    render() {
        Column.create();
        Column.debugLine("components/Header.ets(137:5)");
        Search.create({ value: '', placeholder: '' });
        Search.debugLine("components/Header.ets(138:7)");
        Search.placeholderColor(0x999999);
        Search.placeholderFont({ size: 18, weight: 10, family: 'serif', style: FontStyle.Normal });
        Search.onSubmit((value) => {
            this.submitValue = value;
        });
        Search.onChange((value) => {
            this.changeValue = value;
        });
        Search.backgroundColor(0xffffff);
        Search.pop();
        Column.pop();
    }
}
exports.MySearchComponent = MySearchComponent;
class AddData extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.__text1 = new ObservedPropertySimple("", this, "text1");
        this.__img = new ObservedPropertyObject({ "id": 16777231, "type": 20000, params: [] }, this, "img");
        this.__text2 = new ObservedPropertySimple("", this, "text2");
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.text1 !== undefined) {
            this.text1 = params.text1;
        }
        if (params.img !== undefined) {
            this.img = params.img;
        }
        if (params.text2 !== undefined) {
            this.text2 = params.text2;
        }
    }
    aboutToBeDeleted() {
        this.__text1.aboutToBeDeleted();
        this.__img.aboutToBeDeleted();
        this.__text2.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id());
    }
    get text1() {
        return this.__text1.get();
    }
    set text1(newValue) {
        this.__text1.set(newValue);
    }
    get img() {
        return this.__img.get();
    }
    set img(newValue) {
        this.__img.set(newValue);
    }
    get text2() {
        return this.__text2.get();
    }
    set text2(newValue) {
        this.__text2.set(newValue);
    }
    render() {
        Row.create();
        Row.debugLine("components/Header.ets(159:5)");
        Row.height(70);
        Row.backgroundColor("#ffffff");
        Image.create(this.img);
        Image.debugLine("components/Header.ets(160:7)");
        Image.height(40);
        Image.width(40);
        Image.margin({ top: 10, left: 5, bottom: 20 });
        Column.create();
        Column.debugLine("components/Header.ets(164:7)");
        Row.create();
        Row.debugLine("components/Header.ets(165:9)");
        Row.width("90%");
        Row.justifyContent(FlexAlign.SpaceBetween);
        Column.create();
        Column.debugLine("components/Header.ets(166:11)");
        Column.alignItems(HorizontalAlign.Start);
        Text.create(this.text1);
        Text.debugLine("components/Header.ets(167:13)");
        Text.fontSize(16);
        Text.padding({ top: 10, left: 5, right: 5 });
        Text.pop();
        Text.create(this.text2);
        Text.debugLine("components/Header.ets(170:13)");
        Text.fontSize(12);
        Text.padding(5);
        Text.opacity(0.5);
        Text.margin({ bottom: 5 });
        Text.pop();
        Column.pop();
        Image.create({ "id": 16777286, "type": 20000, params: [] });
        Image.debugLine("components/Header.ets(178:11)");
        Image.height(15);
        Image.width(15);
        Image.margin({ top: 2 });
        Image.opacity(0.5);
        Row.pop();
        Divider.create();
        Divider.debugLine("components/Header.ets(187:9)");
        Divider.vertical(false);
        Divider.color("#ffffff");
        Divider.strokeWidth(1);
        Column.pop();
        Row.pop();
    }
}
exports.AddData = AddData;
class Prompt extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.__img = new ObservedPropertyObject({ "id": 16777231, "type": 20000, params: [] }, this, "img");
        this.__text = new ObservedPropertySimple("", this, "text");
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.img !== undefined) {
            this.img = params.img;
        }
        if (params.text !== undefined) {
            this.text = params.text;
        }
    }
    aboutToBeDeleted() {
        this.__img.aboutToBeDeleted();
        this.__text.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id());
    }
    get img() {
        return this.__img.get();
    }
    set img(newValue) {
        this.__img.set(newValue);
    }
    get text() {
        return this.__text.get();
    }
    set text(newValue) {
        this.__text.set(newValue);
    }
    render() {
        Row.create();
        Row.debugLine("components/Header.ets(201:5)");
        Row.width('100%');
        Row.justifyContent(FlexAlign.Start);
        Image.create(this.img);
        Image.debugLine("components/Header.ets(202:7)");
        Image.height(20);
        Image.width(20);
        Image.margin({ top: 5 });
        Text.create(this.text);
        Text.debugLine("components/Header.ets(206:7)");
        Text.fontSize(16);
        Text.fontColor("#ffffff");
        Text.margin({ top: 5 });
        Text.pop();
        Row.pop();
    }
}
exports.Prompt = Prompt;
class User extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.__img = new ObservedPropertyObject({ "id": 16777231, "type": 20000, params: [] }, this, "img");
        this.__text = new ObservedPropertySimple("", this, "text");
        this.__text2 = new ObservedPropertySimple("", this, "text2");
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.img !== undefined) {
            this.img = params.img;
        }
        if (params.text !== undefined) {
            this.text = params.text;
        }
        if (params.text2 !== undefined) {
            this.text2 = params.text2;
        }
    }
    aboutToBeDeleted() {
        this.__img.aboutToBeDeleted();
        this.__text.aboutToBeDeleted();
        this.__text2.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id());
    }
    get img() {
        return this.__img.get();
    }
    set img(newValue) {
        this.__img.set(newValue);
    }
    get text() {
        return this.__text.get();
    }
    set text(newValue) {
        this.__text.set(newValue);
    }
    get text2() {
        return this.__text2.get();
    }
    set text2(newValue) {
        this.__text2.set(newValue);
    }
    render() {
        Row.create();
        Row.debugLine("components/Header.ets(223:5)");
        Row.width('98%');
        Row.justifyContent(FlexAlign.SpaceBetween);
        Row.height(80);
        Row.backgroundColor(0xFFFFFF);
        Row.create();
        Row.debugLine("components/Header.ets(224:7)");
        Text.create(this.text);
        Text.debugLine("components/Header.ets(225:9)");
        Text.fontSize(16);
        Text.padding({ left: 20 });
        Text.pop();
        Row.pop();
        Row.create();
        Row.debugLine("components/Header.ets(230:7)");
        If.create();
        if (this.text === '头像') {
            If.branchId(0);
            Image.create(this.img);
            Image.debugLine("components/Header.ets(232:11)");
            Image.width(60);
            Image.height(60);
            Image.margin({ right: 20 });
        }
        else if (this.text === '我的二维码') {
            If.branchId(1);
            Image.create(this.img);
            Image.debugLine("components/Header.ets(237:11)");
            Image.width(30);
            Image.height(30);
            Image.margin({ right: 20 });
        }
        else {
            If.branchId(2);
            Text.create(this.text2);
            Text.debugLine("components/Header.ets(242:11)");
            Text.fontSize(16);
            Text.margin({ right: 20 });
            Text.pop();
        }
        If.pop();
        Image.create({ "id": 16777286, "type": 20000, params: [] });
        Image.debugLine("components/Header.ets(246:9)");
        Image.height(15);
        Image.width(15);
        Image.opacity(0.5);
        Image.margin({ right: 10, top: 2 });
        Row.pop();
        Row.pop();
    }
}
exports.User = User;
loadDocument(new Header("1", undefined, {}));


/***/ }),

/***/ "../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/components/Logger.ets":
/*!********************************************************************************************************************!*\
  !*** ../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/components/Logger.ets ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Logger = void 0;
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
var _ohos_hilog_1  = globalThis.requireNapi('hilog') || (isSystemplugin('hilog', 'ohos') ? globalThis.ohosplugin.hilog : isSystemplugin('hilog', 'system') ? globalThis.systemplugin.hilog : undefined);
class LoggerModel {
    constructor(prefix) {
        this.format = '%{public}s, %{public}s';
        this.prefix = prefix;
        this.domain = 0xFF00;
    }
    debug(...args) {
        _ohos_hilog_1.debug(this.domain, this.prefix, this.format, args);
    }
    info(...args) {
        _ohos_hilog_1.info(this.domain, this.prefix, this.format, args);
    }
    warn(...args) {
        _ohos_hilog_1.warn(this.domain, this.prefix, this.format, args);
    }
    error(...args) {
        _ohos_hilog_1.error(this.domain, this.prefix, this.format, args);
    }
}
exports.Logger = new LoggerModel('[Sample_chat]');


/***/ }),

/***/ "../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/ChatListPage.ets":
/*!*********************************************************************************************************************!*\
  !*** ../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/ChatListPage.ets ***!
  \*********************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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


/***/ }),

/***/ "../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/DiscoverPage.ets":
/*!*********************************************************************************************************************!*\
  !*** ../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/DiscoverPage.ets ***!
  \*********************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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


/***/ }),

/***/ "../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/FriendsPage.ets":
/*!********************************************************************************************************************!*\
  !*** ../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/FriendsPage.ets ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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


/***/ }),

/***/ "../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/Index.ets":
/*!**************************************************************************************************************!*\
  !*** ../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/Index.ets ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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


/***/ }),

/***/ "../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/MsgBase.ets":
/*!****************************************************************************************************************!*\
  !*** ../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/MsgBase.ets ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FriendMoment = exports.EMContact = exports.FileMessage = exports.ImgTextMessage = exports.ImageMessage = exports.TextMessage = exports.MessageBody = exports.MessageBase = exports.ChatModel = void 0;
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
__webpack_require__(/*! @ohos.multimedia.image */ "../../api/@ohos.multimedia.image.d.ts");
class MsgBase extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id());
    }
    render() {
        Row.create();
        Row.debugLine("pages/MsgBase.ets(22:5)");
        Row.height('100%');
        Column.create();
        Column.debugLine("pages/MsgBase.ets(23:7)");
        Column.width('100%');
        Text.create('Hello World');
        Text.debugLine("pages/MsgBase.ets(24:9)");
        Text.fontSize(50);
        Text.fontWeight(FontWeight.Bold);
        Text.pop();
        Column.pop();
        Row.pop();
    }
}
/**
 * 聊天list中item对象
 * @param user 用户名
 * @param lastMsg 最后一天信息
 * @param time 时间
 */
class ChatModel {
    constructor(user, lastMsg) {
        this.user = user;
        this.lastMsg = lastMsg;
    }
    toString() {
        return this.user.toString() + "  " + this.lastMsg + "  ";
    }
}
exports.ChatModel = ChatModel;
// 聊天信息
class MessageBase {
    constructor(id, fo, to, msg, ty, time) {
        this.msgId = id;
        this.fo = fo;
        this.to = to;
        this.msgBody = msg;
        this.msgType = ty;
        this.msgTime = time;
    }
    toString() {
        return this.msgId + "  " + this.fo + "  " + this.to + "  " + this.msgBody + "  " + this.msgType + "  " + this.msgTime;
    }
}
exports.MessageBase = MessageBase;
class MessageBody {
    toString() {
        return "";
    }
}
exports.MessageBody = MessageBody;
// 文本消息
class TextMessage extends MessageBody {
    constructor(msg) {
        super();
        this.msg = msg;
    }
    toString() {
        return this.msg;
    }
}
exports.TextMessage = TextMessage;
// 图片消息
class ImageMessage extends MessageBody {
    constructor(hei, wid, img) {
        super();
        this.height = hei;
        this.width = wid;
        this.img = img;
    }
    toString() {
        return this.height + "  " + this.width + "  " + this.img;
    }
}
exports.ImageMessage = ImageMessage;
// wantParams:图片+文本消息
class ImgTextMessage extends MessageBody {
    constructor(hei, wid, img, msg) {
        super();
        this.height = hei;
        this.width = wid;
        this.img = img;
        this.msg = msg;
    }
    toString() {
        return this.msg + ' ' +
            this.height + "  " + this.width + "  " + this.img;
    }
}
exports.ImgTextMessage = ImgTextMessage;
// wantParams:图片文件
class FileMessage extends MessageBody {
    constructor(hei, wid, img) {
        super();
        this.height = hei;
        this.width = wid;
        this.img = img;
    }
}
exports.FileMessage = FileMessage;
// user消息
class EMContact {
    constructor(id, name, image) {
        this.userId = id;
        this.userName = name;
        this.userImage = { "id": 16777264, "type": 20000, params: [] };
        if (image != null) {
            this.userImage = image;
        }
    }
    toString() {
        return this.userId + "  " + this.userName + "  " + this.userImage;
    }
}
exports.EMContact = EMContact;
class FriendMoment {
    constructor(id, user, text, time, List) {
        this.id = id;
        this.user = user;
        this.time = time;
        this.text = text;
        if (List != null) {
            this.imageList = List;
        }
    }
    toString() {
        return this.id + "  " + this.user.toString() + "  " + this.text + "  " + this.time + "  "; // +this.imageList.toString()
    }
}
exports.FriendMoment = FriendMoment;
loadDocument(new MsgBase("1", undefined, {}));


/***/ }),

/***/ "../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/SettingPage.ets":
/*!********************************************************************************************************************!*\
  !*** ../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/SettingPage.ets ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

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


/***/ }),

/***/ "../../api/@ohos.ability.featureAbility.d.ts":
/*!***************************************************!*\
  !*** ../../api/@ohos.ability.featureAbility.d.ts ***!
  \***************************************************/
/***/ (() => {



/***/ }),

/***/ "../../api/@ohos.data.rdb.d.ts":
/*!*************************************!*\
  !*** ../../api/@ohos.data.rdb.d.ts ***!
  \*************************************/
/***/ (() => {



/***/ }),

/***/ "../../api/@ohos.fileio.d.ts":
/*!***********************************!*\
  !*** ../../api/@ohos.fileio.d.ts ***!
  \***********************************/
/***/ (() => {



/***/ }),

/***/ "../../api/@ohos.multimedia.image.d.ts":
/*!*********************************************!*\
  !*** ../../api/@ohos.multimedia.image.d.ts ***!
  \*********************************************/
/***/ (() => {



/***/ }),

/***/ "../../api/@ohos.router.d.ts":
/*!***********************************!*\
  !*** ../../api/@ohos.router.d.ts ***!
  \***********************************/
/***/ (() => {



/***/ })

}]);
          globalThis["__common_module_cache___ea65ef4ec7ea008b316d651e7ceca251"] = globalThis["__common_module_cache___ea65ef4ec7ea008b316d651e7ceca251"] || {};
//# sourceMappingURL=commons.js.map