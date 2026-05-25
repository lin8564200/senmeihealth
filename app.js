// ============================================
// 醫起溝通 - 主程式 v2 (雜誌風)
// ============================================

// 分類對應的色彩 (logo 葉子的延伸)
const CAT_COLORS = {
  "長照補助": "#2D4A36",
  "重大傷病": "#B8643C",
  "身心障礙": "#6B8E5A",
  "老人福利": "#8FA83A",
  "居家護理": "#4A7C5F",
  "健保資源": "#5A6B5E",
  "兒童福利": "#C8A35E",
  "心理健康": "#8B6F8A",
  "職災補助": "#A06850",
  "低收補助": "#7A8E3D"
};

// 渲染分類卡片(雜誌風:編號 + 標題 + 描述 + 計數)
function renderCategories() {
  const grid = document.getElementById('categories');
  grid.innerHTML = CATEGORIES.map((cat, idx) => {
    const count = SUBSIDIES.filter(s => s.category === cat.name).length;
    const num = String(idx + 1).padStart(2, '0');
    const color = CAT_COLORS[cat.name] || 'var(--forest)';
    return `
      <div class="cat-card"
           style="--cat-color:${color};"
           onclick="showCategory('${cat.name}')">
        <div class="cat-number">${num}</div>
        <div class="cat-content">
          <div class="cat-name">${cat.name}</div>
          <div class="cat-desc">${cat.desc}</div>
        </div>
        <div class="cat-meta">
          <span class="cat-count">${count} ITEMS</span>
          <i class="ti ti-arrow-up-right cat-arrow"></i>
        </div>
      </div>
    `;
  }).join('');
}

// 顯示分類詳細頁
function showCategory(categoryName) {
  const category = CATEGORIES.find(c => c.name === categoryName);
  const items = SUBSIDIES.filter(s => s.category === categoryName);
  const catIdx = CATEGORIES.findIndex(c => c.name === categoryName);
  const num = String(catIdx + 1).padStart(2, '0');
  const color = CAT_COLORS[categoryName] || 'var(--forest)';

  // 切換頁面
  document.getElementById('home').classList.add('hidden');
  document.getElementById('detail').classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // 標頭
  document.getElementById('detail-head').innerHTML = `
    <div class="detail-number" style="color:${color};">${num}</div>
    <div class="detail-title-block">
      <span class="eyebrow">Category — ${items.length} subsidies</span>
      <h1>${category.name}</h1>
      <p>${category.desc}</p>
    </div>
  `;

  // 補助卡片(雜誌風列表)
  document.getElementById('subsidy-list').innerHTML = items.map((item, idx) => {
    const itemNum = String(idx + 1).padStart(2, '0');
    return `
    <article class="subsidy-card">
      <div class="subsidy-grid-layout">
        <div class="subsidy-index">${itemNum}</div>
        <div>
          <h2 class="subsidy-name">${item.name}</h2>
          <span class="subsidy-agency-tag">${item.agency}</span>

          <div class="subsidy-fields">
            <div>
              <div class="sub-field-label">Eligibility · 適用對象</div>
              <div class="sub-field-value">${item.target}</div>
            </div>
            <div>
              <div class="sub-field-label">Content · 補助內容</div>
              <div class="sub-field-value">${item.content}</div>
            </div>
            <div>
              <div class="sub-field-label">Amount · 補助金額</div>
              <div class="sub-field-value highlight">${item.amount}</div>
            </div>
            <div>
              <div class="sub-field-label">Process · 申請方式</div>
              <div class="sub-field-value">${item.apply}</div>
            </div>
          </div>
        </div>

        <div class="subsidy-actions">
          <a href="tel:${item.phone.replace(/[^0-9]/g, '')}" class="action-btn">
            <span>${item.phone.split(/[;:]/)[0]}</span>
            <i class="ti ti-phone"></i>
          </a>
          <a href="${item.website}" target="_blank" rel="noopener" class="action-btn">
            <span>Official</span>
            <i class="ti ti-external-link"></i>
          </a>
          <button class="action-btn primary" onclick="askAI('${item.name}')">
            <span>Ask AI</span>
            <i class="ti ti-sparkles"></i>
          </button>
        </div>
      </div>
    </article>
  `}).join('');
}

function goHome() {
  document.getElementById('home').classList.remove('hidden');
  document.getElementById('detail').classList.remove('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleAI() {
  const difyBtn = document.getElementById('dify-chatbot-bubble-button');
  if (difyBtn) {
    difyBtn.click();
  } else {
    alert('AI 顧問需要部署到正式網域才能運作。\n\n本機預覽看到這個訊息是正常的,網站上傳到 GitHub Pages 後,右下角會自動顯示 Dify 對話氣泡。');
  }
}

function loadAIIframe() {
  // 已改用 Dify 官方嵌入,此函式保留為空以維持相容
}

function askAI(subsidyName) {
  toggleAI();
  // 提示使用者要問的問題
  setTimeout(() => {
    console.log('建議詢問:' + subsidyName + ' 要怎麼申請?');
  }, 300);
}

function scrollToCats() {
  const el = document.getElementById('cats-section');
  if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
}

function scrollToFeatures() {
  const el = document.getElementById('features-section');
  if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
});
