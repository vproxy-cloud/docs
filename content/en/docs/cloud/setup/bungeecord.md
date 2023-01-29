---
title: "BungeeCord 安裝與設置方式"
description: "BungeeCord 是一款可以讓玩家連線一組 IP 就能進到很多伺服器的代理軟體，也就是很常說的分流就是透過此完成的，讓我用簡單的圖文來教你吧！"
date: 2023-01-25T11:27:47+08:00
lastmod: 2023-01-25T11:27:47+08:00
draft: false
images: []
---

什麼是 BungeeCord？BungeeCord　是一款可以讓多個 Minecraft 伺服器做連接的代理軟體，可以讓一個 IP 連接多個伺服器，換個說法就是能達到分流的效果。
BungeeCord 僅支援 Spigot 或之後的分支核心喔！CraftBukkit 或是 Vanilla 並不支援（Vanilla 如果要達到分流目的要改用 VanillaCord）。

BungeeCord 也有一個類似的代理軟體為 Velocity 兩者都能達到同樣目的，但礙於篇幅與兩者設置上相差甚大就不多說明。
BungeeCord 也能裝入一些插件擴充該軟體的功能，但只有指定的插件才能唷，記得安裝時先看清楚！

## 前置需求

1. 一台分流主機，安裝 BungeeCord（前端）（不加任何插件，1GB RAM 就綽綽有餘）
2. 兩台一般的 Minecraft 主機（後端），裝伺服器用（其實一台也可以，如果您只是想當作一個前端，但就沒有分流的效果而已，比較沒意義）

## 操作說明

> 為了方便教學，教學時已將各主機的用途標示在伺服器名稱上。

![所使用的伺服器](https://image.vproxy.cloud/wp-content/uploads/cloud.bungeecord_ServerList.png)

1. 進入預計架設的 BungeeCord 的主機（前端）控制台內。
2. 進入後選擇左側選單中的「**啟動設定**」
  ![啟動設定位置](https://image.vproxy.cloud/wp-content/uploads/cloud.setup_bungeecord2.png)
3. 到啟動設定最下面，找到「**更改伺服器核心類型**」並點擊「**更換類型**」
  ![更改伺服器和新類型位置](https://image.vproxy.cloud/wp-content/uploads/cloud.setup_bungeecord3.png)
4. 進入後找到「**【代理】Bungeecord** 」並選擇更換的模式，由於這是空的主機所以選擇「**更換環境並重新安裝**」並點擊「**更換**」再點擊一次「**確定更換**」，等待一點時間讓主機重新安裝。
  ![選擇類型](https://image.vproxy.cloud/wp-content/uploads/cloud.setup_bungeecord4.png)
   兩種模式介紹
   1. 僅更換環境：代表僅重新設置伺服器環境為該類型，**不刪除任何資料**，啟動設定中的設置會更改，啟動前請記得先檢查，**不會自動安裝核心**。
   2. 更換環境並重新安裝：將進行重新安裝伺服器，代表會**刪除部分必要檔案**，例如核心及其設定，更換前請務必先備份，**並自動安裝該類型的核心**。
5. 重新安裝完成後回到「**控制台**」並啟動伺服器，啟動完成控制台會顯示「伺服器狀態更新為 running...」（如果非使用對應類型的啟動可能不會出現此行，但看到　Listening．．．也是代表啟動完成。）
  ![控制台介面](https://image.vproxy.cloud/wp-content/uploads/cloud.setup_bungeecord5.png)
6. 啟動完畢進到「**BungeeCord 伺服器主機（前端）的檔案管理**」
  ![BungeeCord端的檔案管理](https://image.vproxy.cloud/wp-content/uploads/cloud.setup_bungeecord6.png)
7. 點擊檔案名稱為「**config.yml**」的檔案，並進入編輯
  ![config.yml](https://image.vproxy.cloud/wp-content/uploads/cloud.setup_bungeecord7.png)
```yml
# BungeeCord config.yml 預設檔案
# BungeeCord config.yml
enforce_secure_profile: false
server_connect_timeout: 5000
listeners:
- bind_local_address: true
  force_default_server: false
  forced_hosts:
    pvp.md-5.net: pvp
  host: 0.0.0.0:20005
  max_players: 1
  motd: '&1Another Bungee server'
  ping_passthrough: false
  priorities:
  - lobby
  proxy_protocol: false
  query_enabled: false
  query_port: 20005
  tab_list: GLOBAL_PING
  tab_size: 60
remote_ping_cache: -1
network_compression_threshold: 256
permissions:
  admin:
  - bungeecord.command.alert
  - bungeecord.command.end
  - bungeecord.command.ip
  - bungeecord.command.reload
  - bungeecord.command.kick
  default:
  - bungeecord.command.server
  - bungeecord.command.list
log_pings: true
connection_throttle_limit: 3
prevent_proxy_connections: false
timeout: 30000
player_limit: -1
ip_forward: false
groups:
  md_5:
  - admin
remote_ping_timeout: 5000
connection_throttle: 4000
log_commands: false
stats: e980d1e4-3592-4f7a-8e2b-c0dbd7f2cdc5
online_mode: true
forge_support: false
disabled_commands:
- disabledcommandhere
servers:
  lobby:
    address: localhost:25565
    motd: '&1Just another BungeeCord - Forced Host'
    restricted: false
```
8. 找到 `ip_forward` 將預設的 `false` 改為 `true`（BungeeCord config.yml）
9. 找到
  ```yaml
# BungeeCord config.yml
  servers:
    lobby:
      address: localhost:25565
      motd: '&1Just another BungeeCord - Forced Host'
      restricted: false
  ```
我們要編輯這個區塊，這個區塊是編輯這個 BungeeCord 能連哪些伺服器。需要更改的是以下幾個選項。
* lobby => 伺服器名稱
* address => 伺服器連線位置

複製整個區塊（不含 server:）並複製到這個區塊的下面，並更改「**伺服器名稱**」與「**伺服器連線位置**」

**伺服器名稱務必不能重複，否則會無法啟動**，並將連線位置各**改為其他兩個伺服器的連線位置**

範例如下：
  ```yaml
# BungeeCord config.yml
  servers:
    lobby:
      address: tw1.plmc.cc:20011
      motd: '&1Just another BungeeCord - Forced Host'
      restricted: false
    survive:
      address: tw1.plmc.cc:2001２
      motd: '&1Just another BungeeCord - Forced Host'
      restricted: false
  ```
10. 儲存後重啟 BungeeCord 伺服器主機（前端）。
11. 進入其中一個 Minecraft 伺服器的「**檔案管理**」（後端）。
12. 找到 `server.properties` 並進入找到 `online-mode` 將 `true` 改為 `false`（不管是否為正版伺服器）
![server.properties](https://image.vproxy.cloud/wp-content/uploads/cloud.setup_bungeecord8.png)
13. 儲存後，回到檔案管理找到 `bukkit.yml`並進入找到 `connection-throttle` 將其值設為 `-1`
![bukkit.yml](https://image.vproxy.cloud/wp-content/uploads/cloud.setup_bungeecord9.png)
14. 儲存後，回到檔案管理找到 `spigot.yml` 並進入找到 `bungeecord` 將 `false` 改為 `true` 並儲存
![spigot.yml](https://image.vproxy.cloud/wp-content/uploads/cloud.setup_bungeecord10.png)
15. 設置完成後重啟伺服器，另一台 Minecraft 伺服器做一樣的動作。
16. 完成，現在您可以使用 **BungeeCord 的伺服器 IP** 連線。

> 整個設定完成並架設後，請不要將後端的連線位置公開，雖然普通玩家無法直接連線，但是有意人士可以透過某些方式連線並獲得伺服器內部的管理權限，為了避免這些行為可以安裝像是 BungeeGuard 的插件，增加一些安全。

BungeeGuard 的設置方法：<https://docs.vproxy.cloud/docs/server/bungeecord/plugins/bungeeguard/>

BungeeCord config.yml 設定文檔：<https://docs.vproxy.cloud/docs/server/bungeecord/config/>


