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
import router from '@ohos.router'
import { SettingItemView } from './SettingPage'

@Entry
@Component
export struct DiscoverPage {
  private scroller: Scroller = new Scroller()

  build() {
    Column() {
      Scroll(this.scroller) {
        Column() {
          Divider().vertical(false).strokeWidth(20).color("#cccccc")
          Row() {
            SettingItemView({ image: $r('app.media.find_friends'), text: "朋友圈" })
          }
          .onClick(() => {
            router.push({
              url: 'pages/FriendsMomentsPage'
            })
          })

          Divider().vertical(false).strokeWidth(20).color("#cccccc")
          SettingItemView({ image: $r('app.media.icon_de_video'), text: "视频号" })
          SettingItemView({ image: $r('app.media.icon_de_live'), text: "直播" })

          Divider().vertical(false).strokeWidth(20).color("#cccccc")
          SettingItemView({ image: $r('app.media.icon_de_scan'), text: "扫一扫" })
          SettingItemView({ image: $r('app.media.icon_de_shake'), text: "摇一摇" })

          Divider().vertical(false).strokeWidth(20).color("#cccccc")
          SettingItemView({ image: $r('app.media.icon_de_watch'), text: "看一看" })
          SettingItemView({ image: $r('app.media.icon_de_search'), text: "搜一搜" })

          // Divider().vertical(false).strokeWidth(20).color("#cccccc")
          // Column() {
          //   SettingItemView({ image: $r('app.media.searchOne'), text: "搜一搜" })
          // }

          Divider().vertical(false).strokeWidth(20).color("#cccccc")
          Column() {
            SettingItemView({ image: $r('app.media.icon_de_nearby'), text: "附近" })
          }

          Divider().vertical(false).strokeWidth(20).color("#cccccc")
          SettingItemView({ image: $r('app.media.icon_de_shop'), text: "购物" })
          SettingItemView({ image: $r('app.media.icon_de_game'), text: "游戏" })

          Divider().vertical(false).strokeWidth(20).color("#cccccc")
          Column() {
            SettingItemView({ image: $r('app.media.applet'), text: "小程序" })
          }
        }
      }
    }
    .backgroundColor("#cccccc")
    .width("100%")
    .height("100%")
  }

  pageTransition() {
    PageTransitionEnter({ duration: 0 })
    PageTransitionExit({ duration: 0 })
  }
}