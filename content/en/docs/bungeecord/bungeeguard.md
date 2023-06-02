---
title : "BungeeGuard"
description: "BungeeGuard 藉指在提高原版 BungeeCord 的安全性，防範 UUID-Spoof 的駭客攻擊手法。"
lead: ""
date: 2020-10-06T08:48:23+00:00
lastmod: 2020-10-06T08:48:23+00:00
draft: false
images: []
---

> 本文檔基於 BungeeGuard 1.3.3 版本所撰寫，其他版本可能會有所差異。

## 插件資訊
* 適用版本：1.8 ~ 1.19
* 下載連結：<https://www.spigotmc.org/resources/bungeeguard.79601/>

## 插件介紹
BungeeGuard 是一個增添 BungeeCord 與 Minecraft 伺服器之間安全的插件，防範 BungeeCord 的 UUID-Spoof 漏洞問題。
使玩家連線伺服器時需要獲取特定金鑰並且 BungeeCord 與伺服端之間相同才允許連線。

## 防範 UUID-Spoof 其他方案
讓 BungeeCord 與後端 Minecraft 伺服器走內網，並且後端伺服器的端口不允許公網連線，只開放 BungeeCord 的端口。（最佳方式是使用此方案並搭配此插件）

## 前置需求
1. Minecraft 伺服器（後端）需要使用 Paper 或其分支
2. Minecraft 伺服器（後端）需要安裝 [ProtocolLib](https://www.spigotmc.org/resources/protocollib.1997/)

## 操作說明

### 在 BungeeCord 上的安裝方式

1. 下載 BungeeGuard 插件
2. 將 BungeeGuard 插件上傳到 **BungeeCord（前端）** 與　**Minecraft 伺服器（後端）** 的 `plugins` 資料夾，並「**重啟**」
3. 重啟完成後到 **BungeeCord（前端）** 的 `plugins/BungeeGuard` 資料夾中的 `token.yml`
4. 複製 `token.yml` 中的 `token`

![token位置](https://image.vproxy.cloud/wp-content/uploads/server.bungeecord.plugins_bungeeguard1.png)

5. 到 **Minecraft 伺服器（後端）** 的 `plugins/BungeeGuard` 資料夾中的 `config.yml` 並將 `token` 貼上到 `allowed-tokens:`

  實際範例如下圖：
  ![token放置的範例](https://image.vproxy.cloud/wp-content/uploads/server.bungeecord.plugins_bungeeguard2.png)

6. 於控制台輸入 `bungeeguard reload` 就設定完成

```yaml
# BungeeGuard 後端 config.yml 預設檔案
# BungeeGuard Configuration

# Allowed authentication tokens.
allowed-tokens:
  - "fT2Q1Elb5dARx6tDvR54jq6c9N2GugYoWmzxjdWNRonKlbABOCMHnkOVW7uR00vd"
  - "you can add as many as you like."


# Messages

# Kick message sent to connections without any forwarded data from the proxy.
# Most likely a vanilla client connecting directly to the server, bypassing the proxy.
no-data-kick-message: "&cUnable to authenticate - no data was forwarded by the proxy."

# Kick message sent to connections with forwarding data, but without a correct BungeeGuard token
# included in their handshake. Assuming BungeeGuard is installed correctly on all proxies,
# this is most likely a client trying to exploit the BungeeCord protocol to spoof their uuid.
invalid-token-kick-message: "&cUnable to authenticate."
```

6. 完成後重啟就完成了！

### 在 Velocity 上的安裝方式
#### 使用 Velocity 前提醒
> Velocity 內建更好的模式進行防禦，它們提供的轉發模式中有一個稱為 modern。但是依舊可以選擇透過 BungeeGuard 進行，Velocity 內建也有 BungeeGuard。

* Velocity modern 模式下與 BungeeGuard 模式並不兼容，您只能擇一使用。

改為 BungeeGuard 模式您需要先做以下動作：
1. Minecraft 伺服器（後端）的 `spigot.yml` 中的 `bungeecord` 設為 `true`
2. **如果您使用的核心為 Paper 或其分支**，您還要在 `paper-global.yml`（舊版為 `paper.yml`） 的 `velocity:` 下的 `enabled:` 設置為 `false`
  位置如下圖：
  ![velocity-enbled 位置](https://image.vproxy.cloud/wp-content/uploads/server.bungeecord.plugins_bungeeguard3.png)

### 安裝方式

1. 下載 BungeeGuard 插件
2. 將 BungeeGuard 插件上傳到　**Minecraft 伺服器（後端）** 的 `plugins` 資料夾，並「**重啟**」
3. 重啟完成後到 **Velocity（前端）** 的 `velocity.toml` 找到 `player-info-forwarding-mode` 並將其值改為 `bungeeguard` 並「**重啟**」

![player-info-forwarding-mode位置](https://image.vproxy.cloud/wp-content/uploads/server.bungeecord.plugins_bungeeguard4.png)

4. 重啟完成後回到 **Velocity（前端）** 的資料夾找到 `forwarding.secret` 並將裡面的值複製

  ![forwarding.secret](https://image.vproxy.cloud/wp-content/uploads/server.bungeecord.plugins_bungeeguard5.png)

5. 到 **Minecraft 伺服器（後端）** 的 `plugins/BungeeGuard` 資料夾中的 `config.yml` 並將剛複製的值貼上到 `allowed-tokens:`

  ![velocity-token放置位置](https://image.vproxy.cloud/wp-content/uploads/server.bungeecord.plugins_bungeeguard6.png)

6. 於控制台輸入 `bungeeguard reload` 就設定完成

## 設定檔中文翻譯

```yaml
# BungeeGuard 後端 /plugins/BungeeGuard/config.yml

# 允許的 token（請將前端的 token 放置於此，可放置不只一組，如果有多個前端請放置多個）
allowed-tokens:
  - "Put your token here"
  - "you can add as many as you like."


# 訊息

# 如果連線時沒有將 token 傳給後端伺服器將會直接踢出玩家時所顯示的訊息。
# 很有可能是玩家繞過了前端 Proxy，直接連線後端伺服器。
no-data-kick-message: "&c［BungeeGuard］無法驗證－代理沒有轉發任何驗證資料。"

# 如果連線時有將 token 傳給後端伺服器，但是 token 是錯誤並不匹配時將踢出玩家所顯示的訊息。
# 假設 BungeeGuard 已經正確設置成功，這很有可能是玩家利用漏洞嘗試登入伺服器，但是被阻止了。
invalid-token-kick-message: "&c［BungeeGuard］無法驗證"
```
