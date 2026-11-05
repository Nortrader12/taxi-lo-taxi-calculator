的士佬的士計數器｜iPhone PWA v3.0

用途：香港紅的、綠的、藍的車資、每程載客公里、車租、石油氣、每日/每月淨收入試算。

本 ZIP 已包含完整網站：index.html、manifest.webmanifest、sw.js、icons/。

重要：單純將 ZIP／HTML 傳去 iPhone「檔案」App，並唔可以啟用 iOS「加入主畫面」嘅正式 PWA 功能。必須先部署到 HTTPS 網址。

如你已經有 GitHub 帳戶，可以用 GitHub Pages（個人公開靜態站）：
  1. 喺 https://github.com/new 建立新 PUBLIC repository（例 taxi-lo-taxi-calculator）。勿上傳私人資料。
  2. 將本 ZIP 解壓後，進入 repo -> Add file -> Upload files，上傳全部檔案及 icons 目錄，確保 index.html 喺 repository 根目錄（不是另一層資料夾）。
  3. Settings -> Pages -> Build and deployment -> Deploy from a branch -> main / (root) -> Save。
  4. 等 GitHub Pages 顯示 https://用戶名.github.io/taxi-lo-taxi-calculator/ 網址，並用 iPhone Safari 開啟。
  5. Safari「分享」->「加入主畫面」->「加入」。首次開網頁要有網絡，待離線快取裝好先可以真正斷網使用。

亦可將相同檔案部署到任何 HTTPS 靜態託管（例如 Vercel）。

功能測試：基於 Chromium 手機版模擬已核對三色切換、即時計程、資料隔離及無 JS console error。實機 iOS Safari、HTTPS 安裝與 service worker 離線仍需要部署後測試。

資料安全：完全前端運算；設定透過 localStorage 存喺你自己裝置。換機／清除網站數據可能導致遺失，請定期匯出 JSON 備份。

參考氣價與夜租：內置 2026-11 參考數據（包括假設值／待核實值）；不會自動更新，請以車行當日實收租金、加氣收據更新。藍的夜租與氣價預設待填，避免誤當實價。
