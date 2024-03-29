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
import { BasicDataSource } from '../common/BasicDataSource'
import router from '@ohos.router'
import { EMContact, MessageBase, FriendMoment } from './MsgBase'

@Entry
@Component
struct FriendsMomentsPage {
  @State itemLength: number = 0
  private momentData = new FriendMomentsData()

  build() {
    Column() {
      Column() {
        Row() {
          Image($r('app.media.icon_back'))
            .height(30)
            .width(30)
            .onClick(() => {
              router.back()
            })

          Text("朋友圈")
            .fontSize(20)
            .fontColor(Color.White)
          Image($r('app.media.icon_talk'))
            .height(30)
            .width(30)
        }
        .backgroundColor(Color.Black)
        .justifyContent(FlexAlign.SpaceBetween)
        .height(50)
        .width('100%')
        .padding({ left: 10, right: 10 })

        Column() {
          List() {
            ListItem() {
              Column() {
                Row() {
                  Image($r('app.media.user_ba'))
                }
                .height('100%')
                .width('100%')

                Row() {
                  Text("Carl")
                    .fontSize(20)
                    .fontColor(Color.Black)
                  Image($r('app.media.personality3'))
                    .height(50)
                    .width(50)
                }.margin({ top: -25 })
              }
              .margin({ bottom: 20 })

              .alignItems(HorizontalAlign.End)
              .height('40%')
            }

            LazyForEach(this.momentData, (msg: FriendMoment) => {
              ListItem() {
                OneMoment({ moment: msg })
              }
            }, (msg: FriendMoment) => msg.id)
          }
          .width('100%')
          .height('100%')
          .listDirection(Axis.Vertical)
        }
        .height('100%')
      }
      .height('100%')
      .padding({ bottom: 50 })
    }
    .height('100%')
    .width('100%')
  }

  private aboutToAppear(): void {
    this.makeDataLocal()
  }

  pageTransition() {
    PageTransitionEnter({ duration: 0 })
    PageTransitionExit({ duration: 0 })
  }

  makeDataLocal() {
    for (let i = 1;i <= 120; i++) {
      let imageStr = `/resources/images/photo${(i % 50).toString()}.jpg`
      let mo = new FriendMoment(i.toString(), new EMContact(i.toString(), `朋友${i.toString()}`, imageStr), `<朋友圈配文${i.toString()}>`)
      this.momentData.pushData(mo)
    }
  }
}

@Component
struct OneMoment {
  private moment: FriendMoment

  build() {
    Row() {
      Row() {
        Image(this.moment.user.userImage)
          .autoResize(false)
      }
      .width(50)
      .height(50)

      Column() {
        Text(this.moment.user.userName)
          .fontSize(15)
          .fontColor(Color.Black)
        Text(this.moment.text)
          .fontSize(13)
          .fontColor(Color.Black)
        Row({ space: 5 }) {
          MomentsImage({ imageStr: $r('app.media.photo1'), imageStrId: 1 })
          MomentsImage({ imageStr: $r('app.media.photo2'), imageStrId: 2 })
          MomentsImage({ imageStr: $r('app.media.photo3'), imageStrId: 3 })
        }
        .margin({ top: 5, right: 10 })

        Row({ space: 5 }) {
          MomentsImage({ imageStr: $r('app.media.photo4'), imageStrId: 4 })
          MomentsImage({ imageStr: $r('app.media.photo5'), imageStrId: 5 })
          MomentsImage({ imageStr: $r('app.media.photo6'), imageStrId: 6 })
        }
        .margin({ top: 5, right: 10 })

        Row({ space: 5 }) {
          MomentsImage()
          MomentsImage({ imageStr: $r('app.media.photo7'), imageStrId: 7 })
          MomentsImage({ imageStr: $r('app.media.photo8'), imageStrId: 8 })
        }
        .margin({ top: 5, right: 10 })

        Row() {
          Text(this.moment.time).fontColor("#e3e3e3").fontSize(12)
          Image($r('app.media.afr')).height(15).width(20)
        }
        .justifyContent(FlexAlign.SpaceBetween)
        .width('100%')
        .margin({ top: 5 })
        .padding({ right: 5 })
      }
      .alignItems(HorizontalAlign.Start)
      .width('100%')
      .margin({ left: 10 })
    }
    .justifyContent(FlexAlign.Start)
    .margin({ left: 10 })
    .padding({ right: 70 })
    .alignItems(VerticalAlign.Top)
  }
}

@Component
struct MomentsImage {
  private imageStr: string = $r('app.media.photo0')
  private imageStrId: number = 0
  @State active: boolean = false

  build() {
    Stack() {
      Image(this.imageStr)
        .width(70)
        .height(70)
        .onClick(() => {
          router.push({
            url: 'pages/FullImagePage',
            params: { imageStrId: this.imageStrId }
          })
        })
    }
    .width(70)
    .height(70)
  }
}

class FriendMomentsData extends BasicDataSource {
  momentList: Array<FriendMoment> = []

  public totalCount(): number {
    return this.momentList.length
  }

  public getData(index: number): any {
    return this.momentList[index]
  }

  public addData(index: number, data: FriendMoment): void {
    this.momentList.splice(index, 0, data)
    this.notifyDataAdd(index)
  }

  public pushData(data: FriendMoment): void {
    this.momentList.push(data)
    this.notifyDataAdd(this.momentList.length - 1)
  }
}