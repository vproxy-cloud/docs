---
title: "GeyserMC 獨立版架設方式"
description: "GeyserMC 是一個可以使 Minecraft 基岩版玩家連線 Java 伺服器的 Proxy，透過獨立版的方式除了將它獨立架設外還能讓不支援 UDP 的主機，透過外部支援 UDP 的主機架設讓基岩版玩家依舊可以加入 Java 伺服器。"
date: 2023-01-25T11:27:47+08:00
lastmod: 2023-01-25T11:27:47+08:00
draft: false
images: []
---

GeyserMC 是一款 Minecraft Proxy，可以使基岩版玩家連線至 Java 版伺服器，預設如果是使用基岩板連線，連線時還是會需要 Java 帳號才能進入伺服器。

如果再搭配 GeyserMC 所開發的 Floodgate 插件就能使基岩版玩家不用 Java 版帳號也能進入伺服器遊玩。

本次將以「獨立版」做為架設教學，獨立版優勢在於如果主機不支援 UDP 協定可透過其他支援的主機進行轉接到伺服器，這樣一來就能解決這個問題。

## 前置需求

1. 一台 Minecraft 伺服器**或**BungeeCord 主機（後端）
2. 一台支援 UDP 的主機（前端）

## 操作說明

本次使用到的主機，將以 BungeeCord 作為後端
![使用到的主機](https://image.vproxy.cloud/wp-content/uploads/cloud.setup_geyser-standalone0.png)

### Floodgate 前置作業

> Floodgate 插件可以使基岩版玩家無須 Java 版帳號也可以連線伺服器
>
> **本次以 BungeeCord 作為後端主機**
1. 在您的伺服器（Minecraft 伺服器或 BungeeCord）**安裝對應版本的 Floodgate 插件**，並「**重啟**」

  Floodgate 下載連結：<https://ci.opencollab.dev/job/GeyserMC/job/Floodgate/job/master/>

  |檔案名稱| 適用類型                                             |
  |--------------------------------------------------|----|
  |floodgate-spigot.jar| 適用於 Minecraft 伺服器（Spigot, Paper, Purpur 等）       |
  |floodgate-bungee.jar| 適用於 BungeeCord 類型（Waterfall, FlameCord, XCord 等） |
  |floodgate-velocity.jar| 適用於 Velocity                                     |

![檔案位置](https://image.vproxy.cloud/wp-content/uploads/cloud.setup_geyser-standalone1.png)

2. 重啟完成後回到**後端的 plugins/floodgate 資料夾，並將 `key.pem` 先下載儲存**

![key.pem 下載](https://image.vproxy.cloud/wp-content/uploads/cloud.setup_geyser-standalone2.png)

### 獨立版 GeyserMC 安裝

1. 至支援 UDP 主機內的「啟動設定」並找到「更改伺服器核心類型」點擊「更換類型」
![更換類型位置](https://image.vproxy.cloud/wp-content/uploads/cloud.setup_geyser-standalone3.png)
2. 選擇「**【跨平台】GeyserMC**」並點擊「更換」（選擇**更換環境並重新安裝**將自動安裝獨立版核心，這將覆蓋原有的部分資料）
![GeyserMC類型](https://image.vproxy.cloud/wp-content/uploads/cloud.setup_geyser-standalone4.png)
3. 更換後等待重新安裝，重新安裝完成後啟動伺服器
![啟動伺服器](https://image.vproxy.cloud/wp-content/uploads/cloud.setup_geyser-standalone5.png)
4. 進到**獨立版 GeyserMC 的檔案管理**，並進入 `config.yml`
![GeyserMC config](https://image.vproxy.cloud/wp-content/uploads/cloud.setup_geyser-standalone6.png)
5. 找到以下區域
```yaml
remote:
    address: auto
    allow-password-authentication: true
    auth-type: online
    forward-hostname: false
    port: 25565
    use-proxy-protocol: false
```
|欄位名稱| 填入值         |
|---|-------------|
|address| 後端的伺服器 IP   |
|port| 後端的伺服器 Port |
|auth-type| 登入驗證模式      |
> auth-type 登入驗證模式種類
>
> online：登入時需要輸入 Java 版帳號
>
> offline：登入時不用驗證（僅未正版驗證伺服器使用）
>
> floodgate：如果要使用 floodgate 填入此

範例（使用 floodgate 插件）：
```yaml
remote:
    address: tw1.plmc.cc
    allow-password-authentication: true
    auth-type: floodgate
    forward-hostname: false
    port: 20005
    use-proxy-protocol: false
```
6. （**如果並未使用 floodgate 跳過此步驟**）將一開始所下載的 `key.pem` 上傳到 GeyserMC 主機上，與核心放在一起

![key.pem 上傳](https://image.vproxy.cloud/wp-content/uploads/cloud.setup_geyser-standalone7.png)

7. 設定完成後儲存並「**重啟**」就完成，現在基岩版玩家可以使用 UDP 主機的 IP 登入了
