---
title: "如何使用 SFTP 進行檔案傳輸"
description: "SFTP 是一個檔案傳輸協定，透過 SFTP 與 SFTP 傳輸軟體可以使一次將多個檔案進行上傳到伺服器主機內或下載到本機內，非常簡單的操作方式，並且也沒有面板上的 100MB 的傳輸限制。"
date: 2023-01-25T11:27:47+08:00
lastmod: 2023-01-25T11:27:47+08:00
draft: false
images: []
---

需要傳輸的檔案太大？要傳輸很多檔案？那就來透過 SFTP 工具來傳輸檔案吧！在這裡將藉由 WinSCP 工具進行教學，讓您更方便的傳輸檔案。

## 事前需求

1. 安裝 SFTP 傳輸軟體

推薦使用以下幾款：

[WinSCP](https://winscp.net/eng/download.php)－（本頁文檔使用此軟體）僅支援 Windows 系統

[FileZilla](https://filezilla-project.org/download.php?type=client)－支援 Windows、MacOS、Linux 系統

## 使用方式

1. 進入伺服器控制面板，並點擊左側選單中的其他設定
2. 進入後找到「SFTP 連線資訊」下的「啟動 SFTP」按鈕
  ![SFTP按鈕與介面](https://image.vproxy.cloud/wp-content/uploads/cloud.panel_sftp1.png)
  > 目前測試僅有 WinSCP 支援此按鈕，如果您使用 FileZilla 或其他軟體沒反應的話，請直接將上述的值帶入到該軟體的對應欄位當中。
3. 出現以下畫面後點擊確認啟動
  ![啟動通知](https://image.vproxy.cloud/wp-content/uploads/cloud.panel_sftp2.png)
4. 自動啟動 WinSCP 後會出現下面的畫面，點擊是
  ![金鑰通知](https://image.vproxy.cloud/wp-content/uploads/cloud.panel_sftp3.png)
5. 之後會跳出以下畫面，密碼位置輸入您的伺服器控制面板密碼
  ![面板密碼輸入](https://image.vproxy.cloud/wp-content/uploads/cloud.panel_sftp4.png)
6. 完成連線，現在您可以對伺服器進行檔案傳輸。
  ![登入後圖片](https://image.vproxy.cloud/wp-content/uploads/cloud.panel_sftp5.png)

左側為本地（您的電腦）的檔案，右邊為伺服器端的檔案。

> 如果您有很多的檔案要進行傳輸，建議您先壓縮後再傳輸，因為 SFTP 對於檔案多傳輸時會很慢，控制面板上也可以對檔案進行壓縮或解壓縮，如果有任何問題歡迎隨時洽詢客服。

傳輸檔案的方法：
* 點選檔案右鍵後選擇上傳/下載
  ![右鍵傳輸](https://image.vproxy.cloud/wp-content/uploads/cloud.panel_sftp_gif1.gif)
* 將檔案以拖曳的方式傳輸（可以多個檔案，也不一定要從 WinSCP 拉檔案，可以直接從其他的視窗拉）
  ![拖曳傳輸](https://image.vproxy.cloud/wp-content/uploads/cloud.panel_sftp_gif2.gif)
