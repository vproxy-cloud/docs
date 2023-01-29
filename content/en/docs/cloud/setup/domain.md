---
title: "使用自己的網域連線"
description: "您自己有一個網域嗎？您想透過您的網域來連線伺服器，但不知道該如何設定嗎？在本章將會教您如何透過 Cloudflare DNS 系統，藉由您所擁有的網域來連線伺服器。"
date: 2023-01-25T11:27:47+08:00
lastmod: 2023-01-25T11:27:47+08:00
draft: false
images: []
---

想透過自己酷酷的網域連線到伺服器嗎？或是覺得我們提供的網域太醜。在本章將教您透過 Cloudflare DNS 系統來設定您的網域，以達到連線伺服器的效果。

## 事前需求

1. 您需要有一組自己的網域
2. 如果您不是使用 Cloudflare 而是其他的 DNS 平台，請確保擁有 SRV 記錄功能

## 操作說明

1. 進入到您的 Cloudflare 介面並選擇您要使用的網域
2. 點擊左側選單中的 **DNS/紀錄** 之後點擊 **新增紀錄**
![cloudflare介面](https://image.vproxy.cloud/wp-content/uploads/cloud.setup_domain1.png)
3. 選擇 SRV 紀錄，並依據下圖填入指定的值
![範例介紹圖](https://image.vproxy.cloud/wp-content/uploads/cloud.setup_domain2.png)

實際範例，假設我要讓 `play.plmc.cc` 可以連線到 `tw1.plmc.cc:20011` 的伺服器：
![伺服器連線位置](https://image.vproxy.cloud/wp-content/uploads/cloud.setup_domain3.png)
![實際範例介紹圖](https://image.vproxy.cloud/wp-content/uploads/cloud.setup_domain4.png)
4. 儲存後，等待一點時間即可使用連線
