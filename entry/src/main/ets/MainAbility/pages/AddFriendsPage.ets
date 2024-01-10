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
import router from '@ohos.router'
import { AddData } from '../components/Header'

@Entry
@Component
struct AddFriendsPage {
  @State changeValue: string = ''
  @State submitValue: string = ''
  @State explain: string = ''
  private scroller: Scroller = new Scroller()

  build() {
    Scroll(this.scroller) {
      Column() {
        Row({}) {
          Image($r('app.media.left'))
            .key('leftAddFriendPageBtn')
            .height(30)
            .width(30)
            .onClick(() => {
              router.back()
            })
          Text("添加朋友")
            .fontWeight(FontWeight.Bold)
            .fontSize(18)
          Text("  ")
            .fontWeight(FontWeight.Bold)
            .fontSize(18)
        }
        .justifyContent(FlexAlign.SpaceBetween)
        .width("100%")
        .padding({ top: 20, bottom: 20, left: 10, right: 10 })

        Column() {
          Search({ value: '', placeholder: '' })
            .placeholderColor(Color.Black)
            .placeholderFont({ size: 16, weight: 10, family: 'serif', style: FontStyle.Normal })
            .onSubmit((value: string) => {
              this.submitValue = value
            })
            .onChange((value: string) => {
              this.changeValue = value
            })
        }

        Row() {
          Text("我的微信号：wxid_xxxxxxxx")
            .fontSize(14)
            .opacity(0.5)
          Image($r('app.media.ic_public_add_filled'))
            .height(16)
            .width(16)
        }
        .padding(10)

        Column() {
          AddData({ text1: "雷达加朋友", img: $r('app.media.radar'), text2: "添加身边的朋友" })
        }

        Column() {
          AddData({ text1: "面对面建群", img: $r('app.media.face'), text2: "与身边的朋友进入一个群聊" })
        }

        Column() {
          AddData({ text1: "扫一扫", img: $r('app.media.scan'), text2: "扫描二维码名片" })
        }

        Column() {
          AddData({ text1: "手机联系人", img: $r('app.media.add'), text2: "添加或邀请通讯录中的朋友" })
        }

        Column() {
          AddData({ text1: "公众号", img: $r('app.media.public'), text2: "获取更多资讯和服务" })
        }

        Column() {
          AddData({ text1: "企业微信联系人", img: $r('app.media.empresa'), text2: "通过手机号搜索企业聊天用户" })
        }
      }
      .backgroundColor("#f5f5f5")
      .width('100%')
    }
  }

  pageTransition() {
    PageTransitionEnter({ duration: 0 })
    PageTransitionExit({ duration: 0 })
  }
}
