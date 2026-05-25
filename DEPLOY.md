# 🚀 部署教學

從零到網站上線,大約 15 分鐘。

---

## ✅ AI 顧問已內建

你的 Dify 應用程式「**醫起溝通**」(token: `2Elka6uwiGvXneJe`)已**內建**在網站中。

部署後右下角會自動出現一個**深森林綠的對話氣泡按鈕**,點開就是你訓練好的醫起溝通 AI。

---

## 📋 流程總覽

```
Step 1  建立 GitHub 倉庫        (5 分鐘)
Step 2  上傳檔案                 (3 分鐘)
Step 3  啟用 GitHub Pages        (2 分鐘)
Step 4  測試你的網站             (5 分鐘)
```

---

## Step 1 — 建立 GitHub 倉庫

1. 到 [github.com](https://github.com) 登入(沒帳號就先註冊,免費)
2. 右上角點 **+** → **New repository**
3. 填寫:
   - **Repository name**: `medical-website`(或你喜歡的名字)
   - **Description**: 醫起溝通 - 台灣政府醫療補助查詢
   - 選 **Public**(必須公開才能用免費的 GitHub Pages)
   - **不要**勾選 "Add a README file"
4. 點 **Create repository**

---

## Step 2 — 上傳檔案

最簡單的方法是**直接拖拉上傳**:

1. 在剛建好的倉庫頁面,看到「**uploading an existing file**」就點它
   - 找不到的話,網址後面手動加 `/upload/main`,例如:
     ```
     https://github.com/你的帳號/medical-website/upload/main
     ```

2. 把以下 5 個檔案**全部拖進去**(注意 assets 資料夾也要拖進去):
   - `index.html`
   - `data.js`
   - `config.js`
   - `app.js`
   - `README.md`
   - `assets/` 資料夾(包含 logo.jpg)

3. 滾到下面,在 **Commit changes** 區塊:
   - 訊息隨便寫,例如「初次上傳」
   - 點 **Commit changes**

---

## Step 3 — 啟用 GitHub Pages

1. 在倉庫頁面,點上方的 **Settings**(齒輪圖示)
2. 左側選單點 **Pages**
3. **Source** 區塊:
   - **Branch** 選 `main`
   - 資料夾選 `/ (root)`
   - 點 **Save**
4. 等 1-2 分鐘,頁面上方會出現綠色框框:

   ```
   ✅ Your site is live at https://你的帳號.github.io/medical-website/
   ```

5. **這就是你的網站網址!** 複製起來

---

## Step 4 — 測試

打開網站網址,確認:

- ✅ 首頁正常顯示(深綠色 logo、雜誌風大標題)
- ✅ 點分類卡片能進入詳細頁
- ✅ 補助項目正確顯示
- ✅ **右下角自動出現深森林綠的對話氣泡**(Dify AI 顧問)
- ✅ 點氣泡能跟「醫起溝通」AI 對話

---

## 🔄 更新內容

### 想換 Dify 應用?
編輯 `index.html` 最底部,找到:
```html
token: '2Elka6uwiGvXneJe',
```
換成你的新 token 即可。

### 想新增補助項目?
編輯 `data.js`,在 `SUBSIDIES` 陣列加新項目:
```javascript
{
  id: 33,
  category: "長照補助",
  name: "新補助名稱",
  target: "適用對象",
  content: "補助內容",
  amount: "補助金額",
  apply: "申請方式",
  phone: "聯絡電話",
  website: "https://官方網站",
  agency: "主管機關"
}
```

### 想改顏色?
編輯 `index.html` 最上方的 `:root` 區塊:
```css
--forest: #2D4A36;       /* 深森林綠(主色)*/
--moss: #8FA83A;         /* 嫩黃綠(強調)*/
--terracotta: #B8643C;   /* 陶土橘(對比)*/
```

### 想用自己的網域?
1. 買網域(Cloudflare 或 Namecheap)
2. GitHub Settings → Pages → **Custom domain** 填網域
3. 在網域 DNS 設定加 CNAME 指向 `你的帳號.github.io`

---

## ❓ 常見問題

**Q: 修改檔案後網站沒更新?**
A: GitHub Pages 有快取,改完等 1-2 分鐘,並用 Ctrl+Shift+R 強制重新整理。

**Q: 為什麼本機預覽看不到 Dify 氣泡?**
A: Dify 嵌入腳本只在正式網域 (https://) 才能運作,本機 file:// 無法載入。**部署到 GitHub Pages 就會自動顯示**。

**Q: 可以用 Vercel 部署嗎?**
A: 可以,而且更快。把整個資料夾丟到 [vercel.com](https://vercel.com),Import 即可。

**Q: AI 氣泡顏色想改?**
A: 編輯 `index.html`,搜尋 `dify-chatbot-bubble-button`,在 CSS 中改 `background-color`。

---

完成後把網址傳給我,我幫你檢查!
