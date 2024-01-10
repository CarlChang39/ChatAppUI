var _ea65ef4ec7ea008b316d651e7ceca251;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/ChatDetailPage.ets?entry":
/*!*****************************************************************************************************************************!*\
  !*** ../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/ChatDetailPage.ets?entry ***!
  \*****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
// @ts-nocheck
const BasicDataSource_1 = __webpack_require__(/*! ../common/BasicDataSource */ "../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/common/BasicDataSource.ets");
const MsgBase_1 = __webpack_require__(/*! ./MsgBase */ "../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/MsgBase.ets");
var _ohos_router_1  = globalThis.requireNapi('router') || (isSystemplugin('router', 'ohos') ? globalThis.ohosplugin.router : isSystemplugin('router', 'system') ? globalThis.systemplugin.router : undefined);
const MsgBase_2 = __webpack_require__(/*! ./MsgBase */ "../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/MsgBase.ets");
const Index_1 = __webpack_require__(/*! ./Index */ "../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/Index.ets");
__webpack_require__(/*! @ohos.prompt */ "../../api/@ohos.prompt.d.ts");
var _ohos_multimedia_image_1  = globalThis.requireNapi('multimedia.image') || (isSystemplugin('multimedia.image', 'ohos') ? globalThis.ohosplugin.multimedia.image : isSystemplugin('multimedia.image', 'system') ? globalThis.systemplugin.multimedia.image : undefined);
var _ohos_fileio_1  = globalThis.requireNapi('fileio') || (isSystemplugin('fileio', 'ohos') ? globalThis.ohosplugin.fileio : isSystemplugin('fileio', 'system') ? globalThis.systemplugin.fileio : undefined);
var _ohos_resourceManager_1  = globalThis.requireNapi('resourceManager') || (isSystemplugin('resourceManager', 'ohos') ? globalThis.ohosplugin.resourceManager : isSystemplugin('resourceManager', 'system') ? globalThis.systemplugin.resourceManager : undefined);
const TAG = "[Sample_Chat]";
class ChatDetailPage extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.__str = new ObservedPropertySimple("", this, "str");
        this.__chatName = new ObservedPropertySimple('', this, "chatName");
        this.__msgLength = new ObservedPropertySimple(0, this, "msgLength");
        this.user1 = new MsgBase_1.EMContact("1", "Carl");
        this.user2 = new MsgBase_1.EMContact("2", "朋友1");
        this.msg = new MsgBase_1.TextMessage("我是好友消息1");
        this.msg2 = new MsgBase_1.TextMessage("我是好友消息2");
        this.tdate = new Date();
        this.megbody = new MsgBase_1.MessageBase("1", this.user1, this.user2, this.msg2, 1, this.tdate.getSeconds());
        this.keyboartStr = undefined;
        this.chatDetailData = new ChatDetailData();
        this.scroller = new Scroller();
        this.__wantParams = new ObservedPropertyObject(new Index_1.WantModel() // want的自定义参数
        , this, "wantParams");
        this.__wantFileParams = new ObservedPropertyObject(new Index_1.WantFileModel() // want的自定义参数
        , this, "wantFileParams");
        this.__visibility = new ObservedPropertySimple(Visibility.None, this, "visibility");
        this.__imgFile = new ObservedPropertyObject(undefined, this, "imgFile");
        this.__wantId = new ObservedPropertySimple(0, this, "wantId");
        this.__fdImg = new ObservedPropertySimple(undefined, this, "fdImg");
        this.__contextCaller = new ObservedPropertyObject(undefined, this, "contextCaller");
        this.__user1Name = new ObservedPropertySimple(undefined, this, "user1Name");
        this.__user2Name = new ObservedPropertySimple(undefined, this, "user2Name");
        this.__listHeight = new ObservedPropertySimple(0, this, "listHeight");
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.str !== undefined) {
            this.str = params.str;
        }
        if (params.chatName !== undefined) {
            this.chatName = params.chatName;
        }
        if (params.msgLength !== undefined) {
            this.msgLength = params.msgLength;
        }
        if (params.user1 !== undefined) {
            this.user1 = params.user1;
        }
        if (params.user2 !== undefined) {
            this.user2 = params.user2;
        }
        if (params.msg !== undefined) {
            this.msg = params.msg;
        }
        if (params.msg2 !== undefined) {
            this.msg2 = params.msg2;
        }
        if (params.tdate !== undefined) {
            this.tdate = params.tdate;
        }
        if (params.megbody !== undefined) {
            this.megbody = params.megbody;
        }
        if (params.keyboartStr !== undefined) {
            this.keyboartStr = params.keyboartStr;
        }
        if (params.chatDetailData !== undefined) {
            this.chatDetailData = params.chatDetailData;
        }
        if (params.scroller !== undefined) {
            this.scroller = params.scroller;
        }
        if (params.wantParams !== undefined) {
            this.wantParams = params.wantParams;
        }
        if (params.wantFileParams !== undefined) {
            this.wantFileParams = params.wantFileParams;
        }
        if (params.visibility !== undefined) {
            this.visibility = params.visibility;
        }
        if (params.imgFile !== undefined) {
            this.imgFile = params.imgFile;
        }
        if (params.wantId !== undefined) {
            this.wantId = params.wantId;
        }
        if (params.fdImg !== undefined) {
            this.fdImg = params.fdImg;
        }
        if (params.contextCaller !== undefined) {
            this.contextCaller = params.contextCaller;
        }
        if (params.user1Name !== undefined) {
            this.user1Name = params.user1Name;
        }
        if (params.user2Name !== undefined) {
            this.user2Name = params.user2Name;
        }
        if (params.listHeight !== undefined) {
            this.listHeight = params.listHeight;
        }
    }
    aboutToBeDeleted() {
        this.__str.aboutToBeDeleted();
        this.__chatName.aboutToBeDeleted();
        this.__msgLength.aboutToBeDeleted();
        this.__wantParams.aboutToBeDeleted();
        this.__wantFileParams.aboutToBeDeleted();
        this.__visibility.aboutToBeDeleted();
        this.__imgFile.aboutToBeDeleted();
        this.__wantId.aboutToBeDeleted();
        this.__fdImg.aboutToBeDeleted();
        this.__contextCaller.aboutToBeDeleted();
        this.__user1Name.aboutToBeDeleted();
        this.__user2Name.aboutToBeDeleted();
        this.__listHeight.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id());
    }
    get str() {
        return this.__str.get();
    }
    set str(newValue) {
        this.__str.set(newValue);
    }
    get chatName() {
        return this.__chatName.get();
    }
    set chatName(newValue) {
        this.__chatName.set(newValue);
    }
    get msgLength() {
        return this.__msgLength.get();
    }
    set msgLength(newValue) {
        this.__msgLength.set(newValue);
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
    get visibility() {
        return this.__visibility.get();
    }
    set visibility(newValue) {
        this.__visibility.set(newValue);
    }
    get imgFile() {
        return this.__imgFile.get();
    }
    set imgFile(newValue) {
        this.__imgFile.set(newValue);
    }
    get wantId() {
        return this.__wantId.get();
    }
    set wantId(newValue) {
        this.__wantId.set(newValue);
    }
    get fdImg() {
        return this.__fdImg.get();
    }
    set fdImg(newValue) {
        this.__fdImg.set(newValue);
    }
    get contextCaller() {
        return this.__contextCaller.get();
    }
    set contextCaller(newValue) {
        this.__contextCaller.set(newValue);
    }
    get user1Name() {
        return this.__user1Name.get();
    }
    set user1Name(newValue) {
        this.__user1Name.set(newValue);
    }
    get user2Name() {
        return this.__user2Name.get();
    }
    set user2Name(newValue) {
        this.__user2Name.set(newValue);
    }
    get listHeight() {
        return this.__listHeight.get();
    }
    set listHeight(newValue) {
        this.__listHeight.set(newValue);
    }
    render() {
        Column.create();
        Column.debugLine("pages/ChatDetailPage.ets(55:5)");
        Column.backgroundColor("#f3f3f3");
        Column.height("100%");
        Row.create();
        Row.debugLine("pages/ChatDetailPage.ets(56:7)");
        Row.height(50);
        Row.width("100%");
        Row.backgroundColor("#f5f5f5");
        Row.padding({ left: 0, right: 10 });
        Row.justifyContent(FlexAlign.SpaceBetween);
        Image.create({ "id": 16777261, "type": 20000, params: [] });
        Image.debugLine("pages/ChatDetailPage.ets(57:9)");
        Image.key('returnBtn');
        Image.height(30);
        Image.width(30);
        Image.onClick(() => {
            _ohos_router_1.back();
        });
        Text.create(_ohos_router_1.getParams().chatName);
        Text.debugLine("pages/ChatDetailPage.ets(65:9)");
        Text.fontSize(15);
        Text.pop();
        Stack.create({ alignContent: Alignment.Center });
        Stack.debugLine("pages/ChatDetailPage.ets(67:9)");
        Stack.key('moreBtn');
        Stack.onClick(() => {
            _ohos_router_1.push({
                url: "pages/ChatNewsPage",
                params: { NAME: _ohos_router_1.getParams().chatName, IMAGEID: _ohos_router_1.getParams().chatId }
            });
        });
        Image.create({ "id": 16777257, "type": 20000, params: [] });
        Image.debugLine("pages/ChatDetailPage.ets(68:11)");
        Image.height(40);
        Image.width(40);
        Stack.pop();
        Row.pop();
        List.create({ scroller: this.scroller, initialIndex: this.msgLength });
        List.debugLine("pages/ChatDetailPage.ets(86:7)");
        List.listDirection(Axis.Vertical);
        List.divider({ strokeWidth: 2, color: "#f3f3f3" });
        List.padding({ left: 10, right: 10, bottom: 10 });
        List.layoutWeight(1);
        List.width('100%');
        LazyForEach.create("3", this, ObservedObject.GetRawObject(this.chatDetailData), (msg) => {
            this.isRenderingInProgress = true;
            ListItem.create();
            ListItem.debugLine("pages/ChatDetailPage.ets(88:11)");
            let earlierCreatedChild_2 = this.findChildById("2");
            if (earlierCreatedChild_2 == undefined) {
                View.create(new ChatItemView("2", this, { msg: msg, imgFile: this.__imgFile }));
            }
            else {
                earlierCreatedChild_2.updateWithValueParams({
                    msg: msg
                });
                View.create(earlierCreatedChild_2);
            }
            ListItem.pop();
            this.isRenderingInProgress = false;
        }, (msg) => msg.msgId);
        LazyForEach.pop();
        List.pop();
        //底部输入框
        Row.create({ space: 5 });
        Row.debugLine("pages/ChatDetailPage.ets(99:7)");
        //底部输入框
        Row.backgroundColor("#e3e3e3");
        //底部输入框
        Row.width("100%");
        //底部输入框
        Row.padding(10);
        Image.create({ "id": 16777229, "type": 20000, params: [] });
        Image.debugLine("pages/ChatDetailPage.ets(100:9)");
        Image.height(20);
        Image.width(20);
        TextInput.create({ placeholder: "", text: "" });
        TextInput.debugLine("pages/ChatDetailPage.ets(103:9)");
        TextInput.key('bottomTextInput');
        TextInput.height(40);
        TextInput.width('80%');
        TextInput.enterKeyType(EnterKeyType.Send);
        TextInput.onChange((value) => {
            this.keyboartStr = value;
        });
        TextInput.onSubmit((enterKey) => {
            this.tdate = new Date();
            let msg = new MsgBase_1.TextMessage(this.keyboartStr);
            let msgBody = new MsgBase_1.MessageBase(this.chatDetailData.totalCount()
                .toString(), this.user1, this.user2, msg, 1, this.tdate.getSeconds());
            this.chatDetailData.pushData(msgBody);
            this.msgLength = this.chatDetailData.totalCount();
            this.scroller.scrollToIndex(this.msgLength);
        });
        Image.create({ "id": 16777228, "type": 20000, params: [] });
        Image.debugLine("pages/ChatDetailPage.ets(120:9)");
        Image.key('chatExpression');
        Image.height(20);
        Image.width(20);
        Image.onClick(() => {
            let imagestr = `/resources/images/photo${((_ohos_router_1.getParams().chatId) % 50)}.jpg`;
            let msg = new MsgBase_1.ImageMessage(40, 50, imagestr);
            let msgBody = new MsgBase_1.MessageBase(this.chatDetailData.totalCount().toString(), this.user1, this.user2, msg, 2);
            this.chatDetailData.pushData(msgBody);
            this.msgLength = this.chatDetailData.totalCount();
            this.scroller.scrollToIndex(this.msgLength);
        });
        Image.create({ "id": 16777290, "type": 20000, params: [] });
        Image.debugLine("pages/ChatDetailPage.ets(132:9)");
        Image.height(20);
        Image.width(20);
        Image.margin({ right: 10 });
        //底部输入框
        Row.pop();
        Column.pop();
    }
    async convertResourceToString(resource) {
        let manager = await _ohos_resourceManager_1.getResourceManager();
        return await manager.getString(resource.id);
    }
    async fdTransformPixelMap() {
        try {
            let buf = new ArrayBuffer(90960);
            let opt = {
                offset: 0,
                position: 0,
                length: 90000
            };
            let readOut = await _ohos_fileio_1.readSync(this.wantFileParams.fdImg, buf, opt);
            console.info(TAG + "fdTransformPixelMap: readOut---" + readOut);
            let imgSource = undefined;
            imgSource = await _ohos_multimedia_image_1.createImageSource(buf);
            let decodingOptions = {
                editable: true,
                desiredPixelFormat: 3 // 解码的像素格式
            };
            this.imgFile = await imgSource.createPixelMap(decodingOptions); // 通过图片解码参数创建PixelMap对象
        }
        catch (errorOut) {
            console.info(TAG + "fdTransformPixelMap: errorOut ---" + errorOut);
        }
    }
    async aboutToAppear() {
        this.makeDataLocal();
        // 把Resource类型转成String
        this.user1Name = this.convertResourceToString({ "id": 16777220, "type": 10003, params: [] });
        this.user2Name = this.convertResourceToString({ "id": 16777221, "type": 10003, params: [] });
        // 接收路由传来的分享参数
        this.wantParams = _ohos_router_1.getParams().wantParams;
        console.info(TAG + this.wantParams.textCon);
        console.info(TAG + this.wantParams.srcImg);
        this.wantFileParams = _ohos_router_1.getParams().wantFileParams;
        this.wantId = this.wantParams.kindId || this.wantFileParams.kindId;
        this.fdImg = this.wantFileParams.fdImg;
        // >接收AppStorage中的wantParams数据
        console.info(TAG + `aboutToAppear: wantFileParams--- ${JSON.stringify(this.wantFileParams)}`);
        await this.fdTransformPixelMap();
        // 对分享来的数据分类处理
        let user1 = new MsgBase_1.EMContact("1", this.user1Name);
        let user2 = new MsgBase_1.EMContact("2", `${this.user2Name}${_ohos_router_1.getParams().chatId.toString()}`, `/resources/images/photo${(parseInt(_ohos_router_1.getParams()
            .chatId) % 50).toString()}.jpg`);
        let content;
        let msg;
        let tdate = new Date();
        if (this.wantId == 1) {
            content = new MsgBase_2.ImgTextMessage(200, "100%", this.wantParams.srcImg, this.wantParams.textCon); // 消息内容
            msg = new MsgBase_1.MessageBase(1000, user1, user2, content, 3, tdate.getSeconds()); // 消息构成
            this.chatDetailData.pushData(msg);
        }
        else if (this.wantId == 2) {
            content = new MsgBase_2.FileMessage(180, 200, this.imgFile);
            msg = new MsgBase_1.MessageBase(1000, user1, user2, content, 4, tdate.getSeconds()); // 消息构成
            this.chatDetailData.pushData(msg);
        }
    }
    pageTransition() {
        PageTransition.create();
        PageTransitionEnter.create({ duration: 0 });
        PageTransitionExit.create({ duration: 0 });
        PageTransition.pop();
    }
    makeDataLocal() {
        let tdate = new Date();
        let user1 = new MsgBase_1.EMContact("1", "Carl");
        let user2 = new MsgBase_1.EMContact("2", `朋友${_ohos_router_1.getParams().chatId.toString()}`, `/resources/images/photo${(parseInt(_ohos_router_1.getParams()
            .chatId) % 50).toString()}.jpg`);
        let sum = 0;
        for (let i = 1; i <= 20; i++) {
            let msg2;
            let msgBody;
            if (sum % 3 === 0 || sum % 3 === 1) {
                msg2 = new MsgBase_1.TextMessage(`<第${i.toString()}条消息>`);
                if (i % 2 === 0) {
                    msgBody = new MsgBase_1.MessageBase(i.toString(), user2, user1, msg2, 1, tdate.getSeconds());
                }
                else {
                    msgBody = new MsgBase_1.MessageBase(i.toString(), user1, user2, msg2, 1, tdate.getSeconds());
                }
            }
            else {
                let imagestr = `/resources/images/photo${(i % 50).toString()}.jpg`;
                msg2 = new MsgBase_1.ImageMessage(40, 50, imagestr);
                if (i % 2 === 0) {
                    msgBody = new MsgBase_1.MessageBase(i.toString(), user2, user1, msg2, 2, tdate.getSeconds());
                }
                else {
                    msgBody = new MsgBase_1.MessageBase(i.toString(), user1, user2, msg2, 2, tdate.getSeconds());
                }
            }
            if (i % 2 === 0)
                sum++;
            this.chatDetailData.pushData(msgBody);
        }
        this.msgLength = this.chatDetailData.totalCount();
    }
}
class ChatItemView extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.msg = undefined;
        this.__imgFile = new SynchedPropertyObjectTwoWay(params.imgFile, this, "imgFile");
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.msg !== undefined) {
            this.msg = params.msg;
        }
    }
    aboutToBeDeleted() {
        this.__imgFile.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id());
    }
    get imgFile() {
        return this.__imgFile.get();
    }
    set imgFile(newValue) {
        this.__imgFile.set(newValue);
    }
    render() {
        Column.create();
        Column.debugLine("pages/ChatDetailPage.ets(250:5)");
        If.create();
        if (this.msg.fo.userId != '1') {
            If.branchId(0);
            // 聊天页面对方的消息
            Row.create();
            Row.debugLine("pages/ChatDetailPage.ets(253:9)");
            // 聊天页面对方的消息
            Row.width("100%");
            // 聊天页面对方的消息
            Row.alignItems(VerticalAlign.Top);
            // 聊天页面对方的消息
            Row.margin({ top: 15 });
            // 聊天页面对方的消息
            Row.padding({ right: 50 });
            Image.create(this.msg.fo.userImage);
            Image.debugLine("pages/ChatDetailPage.ets(254:11)");
            Image.width(40);
            Image.height(40);
            Image.borderRadius(5);
            Column.create();
            Column.debugLine("pages/ChatDetailPage.ets(258:11)");
            Column.alignItems(HorizontalAlign.Start);
            Column.margin({ left: 5 });
            Text.create(this.msg.fo.userName);
            Text.debugLine("pages/ChatDetailPage.ets(259:13)");
            Text.pop();
            If.create();
            if (this.msg.msgType === 1) {
                If.branchId(0);
                Text.create(this.msg.msgBody.msg);
                Text.debugLine("pages/ChatDetailPage.ets(261:15)");
                Text.fontSize(15);
                Text.fontColor("#000");
                Text.backgroundColor(Color.White);
                Text.padding(10);
                Text.pop();
            }
            else if (this.msg.msgType === 2) {
                If.branchId(1);
                Image.create(this.msg.msgBody.img);
                Image.debugLine("pages/ChatDetailPage.ets(267:15)");
                Image.width(this.msg.msgBody.width);
                Image.height(this.msg.msgBody.height);
            }
            If.pop();
            Column.pop();
            // 聊天页面对方的消息
            Row.pop();
        }
        else {
            If.branchId(1);
            // 聊天页面本人消息
            Row.create();
            Row.debugLine("pages/ChatDetailPage.ets(281:9)");
            // 聊天页面本人消息
            Row.alignItems(VerticalAlign.Top);
            // 聊天页面本人消息
            Row.width("100%");
            // 聊天页面本人消息
            Row.direction(Direction.Rtl);
            // 聊天页面本人消息
            Row.padding({ left: 50 });
            // 聊天页面本人消息
            Row.margin({ top: 15 });
            Image.create(this.msg.fo.userImage);
            Image.debugLine("pages/ChatDetailPage.ets(282:11)");
            Image.width(40);
            Image.height(40);
            Image.borderRadius(5);
            Column.create();
            Column.debugLine("pages/ChatDetailPage.ets(286:11)");
            Column.alignItems(HorizontalAlign.Start);
            Column.margin({ right: 5 });
            Text.create(this.msg.fo.userName);
            Text.debugLine("pages/ChatDetailPage.ets(287:13)");
            Text.pop();
            If.create();
            if (this.msg.msgType === 1) {
                If.branchId(0);
                Text.create(this.msg.msgBody.msg);
                Text.debugLine("pages/ChatDetailPage.ets(289:15)");
                Text.fontSize(15);
                Text.fontColor("#000");
                Text.backgroundColor("#7fec7d");
                Text.borderRadius(5);
                Text.padding(10);
                Text.pop();
            }
            else if (this.msg.msgType === 2) {
                If.branchId(1);
                Image.create(this.msg.msgBody.img);
                Image.debugLine("pages/ChatDetailPage.ets(296:15)");
                Image.width(this.msg.msgBody.width);
                Image.height(this.msg.msgBody.height);
            }
            else if (this.msg.msgType === 3) {
                If.branchId(2);
                // 接收分享的页面
                Column.create();
                Column.debugLine("pages/ChatDetailPage.ets(301:15)");
                // 接收分享的页面
                Column.margin({ left: "40%" });
                // 接收分享的页面
                Column.padding({ left: "2%", right: "2%", bottom: "2%" });
                // 接收分享的页面
                Column.backgroundColor("#FFFFFF");
                // let msgBody = this.msg.msgBody as ImgTextMessage
                Text.create(this.msg.msgBody.msg);
                Text.debugLine("pages/ChatDetailPage.ets(303:17)");
                // let msgBody = this.msg.msgBody as ImgTextMessage
                Text.backgroundColor("#FFFFFF");
                // let msgBody = this.msg.msgBody as ImgTextMessage
                Text.width("100%");
                // let msgBody = this.msg.msgBody as ImgTextMessage
                Text.fontSize(15);
                // let msgBody = this.msg.msgBody as ImgTextMessage
                Text.fontColor("#000");
                // let msgBody = this.msg.msgBody as ImgTextMessage
                Text.borderRadius(5);
                // let msgBody = this.msg.msgBody as ImgTextMessage
                Text.padding(10);
                // let msgBody = this.msg.msgBody as ImgTextMessage
                Text.pop();
                // Image($r("app.media.phone"))
                Image.create(this.msg.msgBody.img);
                Image.debugLine("pages/ChatDetailPage.ets(311:17)");
                // Image($r("app.media.phone"))
                Image.width(this.msg.msgBody.width);
                // Image($r("app.media.phone"))
                Image.height(this.msg.msgBody.height);
                // Image($r("app.media.phone"))
                Image.objectFit(ImageFit.Contain);
                // 接收分享的页面
                Column.pop();
            }
            else if (this.msg.msgType == 4) {
                If.branchId(3);
                Image.create(this.msg.msgBody.img);
                Image.debugLine("pages/ChatDetailPage.ets(320:15)");
                Image.width(this.msg.msgBody.width);
                Image.height(this.msg.msgBody.height);
                Image.objectFit(ImageFit.Contain);
            }
            If.pop();
            Column.pop();
            // 聊天页面本人消息
            Row.pop();
        }
        If.pop();
        Column.pop();
    }
}
class ChatDetailData extends BasicDataSource_1.BasicDataSource {
    constructor() {
        super(...arguments);
        this.msgList = [];
    }
    totalCount() {
        return this.msgList.length;
    }
    getData(index) {
        return this.msgList[index];
    }
    addData(index, data) {
        this.msgList.splice(index, 0, data);
        this.notifyDataAdd(index);
    }
    pushData(data) {
        this.msgList.push(data);
        this.notifyDataAdd(this.msgList.length - 1);
    }
}
loadDocument(new ChatDetailPage("1", undefined, {}));


/***/ }),

/***/ "../../api/@ohos.prompt.d.ts":
/*!***********************************!*\
  !*** ../../api/@ohos.prompt.d.ts ***!
  \***********************************/
/***/ (() => {



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
/******/ 			"./pages/ChatDetailPage": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["commons"], () => (__webpack_require__("../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/ChatDetailPage.ets?entry")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	_ea65ef4ec7ea008b316d651e7ceca251 = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=ChatDetailPage.js.map