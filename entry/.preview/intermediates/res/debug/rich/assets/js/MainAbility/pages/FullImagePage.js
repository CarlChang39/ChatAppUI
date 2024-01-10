var _ea65ef4ec7ea008b316d651e7ceca251;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/FullImagePage.ets?entry":
/*!****************************************************************************************************************************!*\
  !*** ../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/FullImagePage.ets?entry ***!
  \****************************************************************************************************************************/
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
// @ts-nocheck
var _ohos_router_1  = globalThis.requireNapi('router') || (isSystemplugin('router', 'ohos') ? globalThis.ohosplugin.router : isSystemplugin('router', 'system') ? globalThis.systemplugin.router : undefined);
class FullImagePage extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.__imageStrId = new ObservedPropertySimple(_ohos_router_1.getParams().imageStrId
        //第一个手指的横坐标开始
        , this, "imageStrId");
        this.__picStar1x = new ObservedPropertySimple(0
        //第一个手指的横坐标结束
        , this, "picStar1x");
        this.__picEnd1x = new ObservedPropertySimple(0
        //第一个手指移动过程中的横坐标位置
        , this, "picEnd1x");
        this.__picAddStar1x = new ObservedPropertySimple(0
        //第一个手指的纵坐标开始
        , this, "picAddStar1x");
        this.__picStar1y = new ObservedPropertySimple(0
        //第一个手指的纵坐标结束
        , this, "picStar1y");
        this.__picEnd1y = new ObservedPropertySimple(0
        //第一个手指移动过程中的纵坐标位置
        , this, "picEnd1y");
        this.__picAddStar1y = new ObservedPropertySimple(0
        //第二个手指的横坐标开始
        , this, "picAddStar1y");
        this.__picStar2x = new ObservedPropertySimple(0
        //第二个手指的横坐标结束
        , this, "picStar2x");
        this.__picEnd2x = new ObservedPropertySimple(0
        //第二个手指移动过程中的横坐标位置
        , this, "picEnd2x");
        this.__picAddStar2x = new ObservedPropertySimple(0
        //第二个手指的纵坐标开始
        , this, "picAddStar2x");
        this.__picStar2y = new ObservedPropertySimple(0
        //第二个手指的纵坐标结束
        , this, "picStar2y");
        this.__picEnd2y = new ObservedPropertySimple(0
        //第二个手指移动过程中的纵坐标位置
        , this, "picEnd2y");
        this.__picAddStar2y = new ObservedPropertySimple(0
        //两个手指之间的距离变化
        , this, "picAddStar2y");
        this.__picChange = new ObservedPropertySimple(0
        //开始时两个手指之间的距离
        , this, "picChange");
        this.__now1 = new ObservedPropertySimple(0
        //移动中两个手指之间的距离
        , this, "now1");
        this.__now2 = new ObservedPropertySimple(0
        //图片缩放后，一个手指时的起始横坐标位置
        , this, "now2");
        this.__point1 = new ObservedPropertySimple(0
        //图片缩放后，一个手指移动时的横坐标位置
        , this, "point1");
        this.__point2 = new ObservedPropertySimple(0
        //图片缩放后，一个手指时的起始纵坐标位置
        , this, "point2");
        this.__point4 = new ObservedPropertySimple(0
        //图片缩放后，一个手指移动时的纵坐标位置
        , this, "point4");
        this.__point5 = new ObservedPropertySimple(0
        //图片的左边距
        , this, "point5");
        this.__marginLeft = new ObservedPropertySimple(0
        //图片的上边距
        , this, "marginLeft");
        this.__marginTop = new ObservedPropertySimple(0
        //图片移动的左距离
        , this, "marginTop");
        this.__numLeft = new ObservedPropertySimple(0
        //图片移动的上距离
        , this, "numLeft");
        this.__numTop = new ObservedPropertySimple(0
        //将手指抬起时的变化记录赋值
        , this, "numTop");
        this.__size = new ObservedPropertySimple(0, this, "size");
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.imageStrId !== undefined) {
            this.imageStrId = params.imageStrId;
        }
        if (params.picStar1x !== undefined) {
            this.picStar1x = params.picStar1x;
        }
        if (params.picEnd1x !== undefined) {
            this.picEnd1x = params.picEnd1x;
        }
        if (params.picAddStar1x !== undefined) {
            this.picAddStar1x = params.picAddStar1x;
        }
        if (params.picStar1y !== undefined) {
            this.picStar1y = params.picStar1y;
        }
        if (params.picEnd1y !== undefined) {
            this.picEnd1y = params.picEnd1y;
        }
        if (params.picAddStar1y !== undefined) {
            this.picAddStar1y = params.picAddStar1y;
        }
        if (params.picStar2x !== undefined) {
            this.picStar2x = params.picStar2x;
        }
        if (params.picEnd2x !== undefined) {
            this.picEnd2x = params.picEnd2x;
        }
        if (params.picAddStar2x !== undefined) {
            this.picAddStar2x = params.picAddStar2x;
        }
        if (params.picStar2y !== undefined) {
            this.picStar2y = params.picStar2y;
        }
        if (params.picEnd2y !== undefined) {
            this.picEnd2y = params.picEnd2y;
        }
        if (params.picAddStar2y !== undefined) {
            this.picAddStar2y = params.picAddStar2y;
        }
        if (params.picChange !== undefined) {
            this.picChange = params.picChange;
        }
        if (params.now1 !== undefined) {
            this.now1 = params.now1;
        }
        if (params.now2 !== undefined) {
            this.now2 = params.now2;
        }
        if (params.point1 !== undefined) {
            this.point1 = params.point1;
        }
        if (params.point2 !== undefined) {
            this.point2 = params.point2;
        }
        if (params.point4 !== undefined) {
            this.point4 = params.point4;
        }
        if (params.point5 !== undefined) {
            this.point5 = params.point5;
        }
        if (params.marginLeft !== undefined) {
            this.marginLeft = params.marginLeft;
        }
        if (params.marginTop !== undefined) {
            this.marginTop = params.marginTop;
        }
        if (params.numLeft !== undefined) {
            this.numLeft = params.numLeft;
        }
        if (params.numTop !== undefined) {
            this.numTop = params.numTop;
        }
        if (params.size !== undefined) {
            this.size = params.size;
        }
    }
    aboutToBeDeleted() {
        this.__imageStrId.aboutToBeDeleted();
        this.__picStar1x.aboutToBeDeleted();
        this.__picEnd1x.aboutToBeDeleted();
        this.__picAddStar1x.aboutToBeDeleted();
        this.__picStar1y.aboutToBeDeleted();
        this.__picEnd1y.aboutToBeDeleted();
        this.__picAddStar1y.aboutToBeDeleted();
        this.__picStar2x.aboutToBeDeleted();
        this.__picEnd2x.aboutToBeDeleted();
        this.__picAddStar2x.aboutToBeDeleted();
        this.__picStar2y.aboutToBeDeleted();
        this.__picEnd2y.aboutToBeDeleted();
        this.__picAddStar2y.aboutToBeDeleted();
        this.__picChange.aboutToBeDeleted();
        this.__now1.aboutToBeDeleted();
        this.__now2.aboutToBeDeleted();
        this.__point1.aboutToBeDeleted();
        this.__point2.aboutToBeDeleted();
        this.__point4.aboutToBeDeleted();
        this.__point5.aboutToBeDeleted();
        this.__marginLeft.aboutToBeDeleted();
        this.__marginTop.aboutToBeDeleted();
        this.__numLeft.aboutToBeDeleted();
        this.__numTop.aboutToBeDeleted();
        this.__size.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id());
    }
    get imageStrId() {
        return this.__imageStrId.get();
    }
    set imageStrId(newValue) {
        this.__imageStrId.set(newValue);
    }
    get picStar1x() {
        return this.__picStar1x.get();
    }
    set picStar1x(newValue) {
        this.__picStar1x.set(newValue);
    }
    get picEnd1x() {
        return this.__picEnd1x.get();
    }
    set picEnd1x(newValue) {
        this.__picEnd1x.set(newValue);
    }
    get picAddStar1x() {
        return this.__picAddStar1x.get();
    }
    set picAddStar1x(newValue) {
        this.__picAddStar1x.set(newValue);
    }
    get picStar1y() {
        return this.__picStar1y.get();
    }
    set picStar1y(newValue) {
        this.__picStar1y.set(newValue);
    }
    get picEnd1y() {
        return this.__picEnd1y.get();
    }
    set picEnd1y(newValue) {
        this.__picEnd1y.set(newValue);
    }
    get picAddStar1y() {
        return this.__picAddStar1y.get();
    }
    set picAddStar1y(newValue) {
        this.__picAddStar1y.set(newValue);
    }
    get picStar2x() {
        return this.__picStar2x.get();
    }
    set picStar2x(newValue) {
        this.__picStar2x.set(newValue);
    }
    get picEnd2x() {
        return this.__picEnd2x.get();
    }
    set picEnd2x(newValue) {
        this.__picEnd2x.set(newValue);
    }
    get picAddStar2x() {
        return this.__picAddStar2x.get();
    }
    set picAddStar2x(newValue) {
        this.__picAddStar2x.set(newValue);
    }
    get picStar2y() {
        return this.__picStar2y.get();
    }
    set picStar2y(newValue) {
        this.__picStar2y.set(newValue);
    }
    get picEnd2y() {
        return this.__picEnd2y.get();
    }
    set picEnd2y(newValue) {
        this.__picEnd2y.set(newValue);
    }
    get picAddStar2y() {
        return this.__picAddStar2y.get();
    }
    set picAddStar2y(newValue) {
        this.__picAddStar2y.set(newValue);
    }
    get picChange() {
        return this.__picChange.get();
    }
    set picChange(newValue) {
        this.__picChange.set(newValue);
    }
    get now1() {
        return this.__now1.get();
    }
    set now1(newValue) {
        this.__now1.set(newValue);
    }
    get now2() {
        return this.__now2.get();
    }
    set now2(newValue) {
        this.__now2.set(newValue);
    }
    get point1() {
        return this.__point1.get();
    }
    set point1(newValue) {
        this.__point1.set(newValue);
    }
    get point2() {
        return this.__point2.get();
    }
    set point2(newValue) {
        this.__point2.set(newValue);
    }
    get point4() {
        return this.__point4.get();
    }
    set point4(newValue) {
        this.__point4.set(newValue);
    }
    get point5() {
        return this.__point5.get();
    }
    set point5(newValue) {
        this.__point5.set(newValue);
    }
    get marginLeft() {
        return this.__marginLeft.get();
    }
    set marginLeft(newValue) {
        this.__marginLeft.set(newValue);
    }
    get marginTop() {
        return this.__marginTop.get();
    }
    set marginTop(newValue) {
        this.__marginTop.set(newValue);
    }
    get numLeft() {
        return this.__numLeft.get();
    }
    set numLeft(newValue) {
        this.__numLeft.set(newValue);
    }
    get numTop() {
        return this.__numTop.get();
    }
    set numTop(newValue) {
        this.__numTop.set(newValue);
    }
    get size() {
        return this.__size.get();
    }
    set size(newValue) {
        this.__size.set(newValue);
    }
    render() {
        Column.create();
        Column.debugLine("pages/FullImagePage.ets(72:5)");
        Column.onClick(() => {
            _ohos_router_1.back();
        });
        Column.width('100%');
        Column.height('100%');
        Image.create(`/resources/images/photo${this.imageStrId.toString()}.jpg`);
        Image.debugLine("pages/FullImagePage.ets(73:7)");
        Image.width(330 + this.picChange);
        Image.sharedTransition('shareImage');
        Image.objectFit(ImageFit.Contain);
        Image.margin({ left: this.marginLeft, top: this.marginTop });
        Image.onTouch((event) => {
            //判断是否是双指
            if (event.touches.length === 2) {
                this.marginLeft = 0;
                if (event.type === TouchType.Down) {
                    //取双指的坐标位置
                    this.picStar1x = event.touches[0].x;
                    this.picStar1y = event.touches[0].y;
                    this.picStar2x = event.touches[1].x;
                    this.picStar2y = event.touches[1].y;
                }
                else if (event.type === TouchType.Move) {
                    //双指移动时的位置
                    this.picAddStar1x = event.touches[0].x;
                    this.picAddStar1y = event.touches[0].y;
                    this.picAddStar2x = event.touches[1].x;
                    this.picAddStar2y = event.touches[1].y;
                    //勾股定理算出开始和移动时的双指距离
                    this.now1 = Math.sqrt((this.picStar2x - this.picStar1x) * (this.picStar2x - this.picStar1x) + (this.picStar2y - this.picStar1y) * (this.picStar2y - this.picStar1y));
                    this.now2 = Math.sqrt((this.picAddStar2x - this.picAddStar1x) * (this.picAddStar2x - this.picAddStar1x) + (this.picAddStar2y - this.picAddStar1y) * (this.picAddStar2y - this.picAddStar1y));
                }
                else if (event.type === TouchType.Up) {
                    //将手指抬起时的变化记录赋值
                    this.size = this.picChange;
                }
                //双指变化的距离
                this.picChange = (this.now2 - this.now1) + this.size;
                if (this.picChange < -150) {
                    this.picChange = -150;
                }
                else if (this.picChange > 200) {
                    this.picChange = 200;
                }
                //一个手指
            }
            else if (event.touches.length === 1) {
                if (event.type === TouchType.Down) {
                    //获取手指的横坐标
                    this.point1 = event.touches[0].x;
                    //获取手指的纵坐标
                    this.point4 = event.touches[0].y;
                }
                else if (event.type === TouchType.Move) {
                    this.point2 = event.touches[0].x;
                    this.point5 = event.touches[0].y;
                    //只有图片放大才可以移动
                    if (this.picChange != 0) {
                        //变化值不为0
                        if (this.numLeft != 0) {
                            this.marginLeft = this.numLeft + (this.point2 - this.point1);
                            this.marginTop = this.numTop + (this.point5 - this.point4);
                            //左边距
                            if (this.marginLeft > 200) {
                                this.marginLeft = 200;
                            }
                            else if (this.marginLeft < -100) {
                                this.marginLeft = -100;
                            }
                            //上边距
                            if (this.marginTop > 200) {
                                this.marginTop = 200;
                            }
                            else if (this.marginTop < -200) {
                                this.marginTop = -200;
                            }
                            //变化值为0
                        }
                        else {
                            this.marginLeft = (this.point2 - this.point1);
                            this.marginTop = (this.point5 - this.point4);
                            //左边距
                            if (this.marginLeft > 200) {
                                this.marginLeft = 200;
                            }
                            else if (this.marginLeft < -100) {
                                this.marginLeft = -100;
                            }
                            //上边距
                            if (this.marginTop > 200) {
                                this.marginTop = 200;
                            }
                            else if (this.marginTop < -200) {
                                this.marginTop = -200;
                            }
                        }
                    }
                }
                else if (event.type === TouchType.Up) {
                    //记录值
                    this.numLeft = this.marginLeft;
                    this.numTop = this.marginTop;
                }
            }
        });
        Column.pop();
    }
    pageTransition() {
        PageTransition.create();
        PageTransitionEnter.create({ duration: 0 });
        PageTransitionExit.create({ duration: 0 });
        PageTransition.pop();
    }
}
loadDocument(new FullImagePage("1", undefined, {}));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../../../../../../../../OneDrive/Codes/OpenHarmony/Chat/entry/src/main/ets/MainAbility/pages/FullImagePage.ets?entry"](0, __webpack_exports__);
/******/ 	_ea65ef4ec7ea008b316d651e7ceca251 = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=FullImagePage.js.map