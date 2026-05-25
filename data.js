// 醫起溝通 - 補助資料庫
// 資料來源:Notion「政府補助項目總表」
// 最後更新:2026-05-25

const SUBSIDIES = [
  // ========== 長照補助 ==========
  {
    id: 1,
    category: "長照補助",
    name: "長照2.0四包錢",
    target: "失能者(失能等級2-8級)、65歲以上衰弱長者、55歲以上原住民、50歲以上失智症患者",
    content: "提供照顧及專業服務、交通接送、輔具與居家無障礙改善、喘息服務四大類",
    amount: "依失能等級每月補助 10,020元 ~ 36,180元;一般戶自付16%,中低收入自付5%,低收入免費",
    apply: "撥打1966長照專線 → 照管專員到府評估 → 核定失能等級 → 開始使用服務",
    phone: "1966(免付費)",
    website: "https://1966.gov.tw",
    agency: "衛生福利部長照司"
  },
  {
    id: 2,
    category: "長照補助",
    name: "輔具及居家無障礙環境改善補助",
    target: "領有身心障礙證明者、長照需要等級2-8級者",
    content: "輪椅、助行器、氣墊床、移位機等輔具補助;浴室扶手、斜坡道等居家改善",
    amount: "三年內最高補助 40,000元(身障);長照失能者四包錢內含輔具額度",
    apply: "向各縣市社會局或長照中心提出申請,評估後核定",
    phone: "1966 或各縣市社會局",
    website: "https://repat.sfaa.gov.tw",
    agency: "衛生福利部社會及家庭署"
  },
  {
    id: 3,
    category: "長照補助",
    name: "喘息服務",
    target: "長照失能等級2-8級的家庭照顧者",
    content: "提供居家喘息、機構喘息、社區喘息三種模式,讓主要照顧者休息",
    amount: "每年最高 32,340元(失能2-6級)或 48,510元(失能7-8級)",
    apply: "撥打1966或聯繫長照管理中心安排",
    phone: "1966",
    website: "https://1966.gov.tw",
    agency: "衛生福利部長照司"
  },

  // ========== 重大傷病 ==========
  {
    id: 4,
    category: "重大傷病",
    name: "重大傷病卡",
    target: "罹患癌症、洗腎、慢性精神病、自體免疫疾病等30大類重大傷病者",
    content: "重大傷病相關醫療費用免除部分負擔(門診、住院、急診)",
    amount: "免部分負擔,大幅減輕醫療費用",
    apply: "由主治醫師開立診斷證明 → 持證明至健保署各分區業務組辦理",
    phone: "健保署:0800-030-598",
    website: "https://www.nhi.gov.tw",
    agency: "中央健康保險署"
  },
  {
    id: 5,
    category: "重大傷病",
    name: "罕見疾病醫療補助",
    target: "經醫師確診罹患罕見疾病並領有罕病證明者",
    content: "罕病特殊營養食品、緊急維生需用藥品、居家照護費用補助",
    amount: "依個案需求核定,部分項目100%補助",
    apply: "向衛福部國民健康署提出申請,需附罕病證明",
    phone: "國健署:02-2522-0888",
    website: "https://www.hpa.gov.tw",
    agency: "衛生福利部國民健康署"
  },

  // ========== 身心障礙 ==========
  {
    id: 6,
    category: "身心障礙",
    name: "身心障礙者生活補助",
    target: "領有身心障礙證明,且家庭總收入未達一定標準者",
    content: "每月固定現金補助,協助身障者基本生活",
    amount: "輕度 4,872元/月、中度 5,065元/月、重度極重度 8,499元/月(低收最高)",
    apply: "向戶籍地公所社會課提出申請,需附身障證明及財稅資料",
    phone: "1957福利諮詢專線",
    website: "https://dep.mohw.gov.tw/dops",
    agency: "衛生福利部社會及家庭署"
  },
  {
    id: 7,
    category: "身心障礙",
    name: "助聽器補助",
    target: "領有聽覺障礙身心障礙證明者",
    content: "依聽損程度補助助聽器費用",
    amount: "最高補助 20,000元/耳,每5年補助1次(兒童每3年)",
    apply: "向各縣市社會局申請,需附身障證明及醫療評估",
    phone: "各縣市社會局或1957",
    website: "https://repat.sfaa.gov.tw",
    agency: "衛生福利部社會及家庭署"
  },

  // ========== 老人福利 ==========
  {
    id: 8,
    category: "老人福利",
    name: "國民年金老年年金給付",
    target: "65歲以上、未領其他社會保險老年給付者",
    content: "每月固定給付,保障老年基本生活",
    amount: "A式:月投保金額×0.65%×年資+3,977元;B式:月投保金額×1.3%×年資",
    apply: "向勞保局或國民年金局申請",
    phone: "0800-089-995",
    website: "https://www.bli.gov.tw",
    agency: "勞動部勞工保險局"
  },
  {
    id: 9,
    category: "老人福利",
    name: "中低收入老人生活津貼",
    target: "65歲以上、家庭總收入未達一定標準的長者",
    content: "每月現金補助",
    amount: "中低收入戶:3,879元/月;低收入戶:7,759元/月",
    apply: "向戶籍地公所提出申請,需附財稅資料審核",
    phone: "各縣市社會局",
    website: "https://dep.mohw.gov.tw/dosaasw",
    agency: "衛生福利部社會及家庭署"
  },

  // ========== 居家護理 ==========
  {
    id: 10,
    category: "居家護理",
    name: "居家護理",
    target: "病情穩定、需長期護理但不需住院的患者",
    content: "護理師到府提供傷口換藥、管路更換、抽痰、衛教等護理服務",
    amount: "健保給付每月2次訪視,自付10%部分負擔;低收免費",
    apply: "由醫師開立轉介單 → 聯繫居家護理所",
    phone: "健保署:0800-030-598",
    website: "https://www.nhi.gov.tw",
    agency: "中央健康保險署"
  },
  {
    id: 11,
    category: "居家護理",
    name: "居家醫療(在宅醫療)",
    target: "重病、失能或行動不便,難以至醫療機構就醫的患者",
    content: "醫師、護理師、藥師等醫療團隊定期到府提供完整醫療照護",
    amount: "健保給付,自付部分負擔與門診相同",
    apply: "由醫師評估開立居家醫療轉介,或聯繫提供居家醫療的院所",
    phone: "各縣市衛生局",
    website: "https://www.nhi.gov.tw",
    agency: "中央健康保險署"
  },

  // ========== 健保資源 ==========
  {
    id: 12,
    category: "健保資源",
    name: "成人預防保健",
    target: "40-64歲每3年1次;65歲以上每年1次;原住民、罹癌風險者每年1次",
    content: "免費健康檢查,包含血液、尿液、身體檢查、健康諮詢",
    amount: "完全免費",
    apply: "持健保卡至健保特約醫療院所",
    phone: "0800-030-598",
    website: "https://www.hpa.gov.tw",
    agency: "衛生福利部國民健康署"
  },
  {
    id: 13,
    category: "健保資源",
    name: "四癌篩檢",
    target: "大腸癌(50-74歲)、乳癌(45-69歲女性)、口腔癌(30歲以上嚼檳榔或吸菸)、子宮頸癌(30歲以上女性)",
    content: "免費癌症篩檢,早期發現早期治療",
    amount: "完全免費",
    apply: "持健保卡至健保特約醫療院所",
    phone: "0800-030-598",
    website: "https://www.hpa.gov.tw",
    agency: "衛生福利部國民健康署"
  },
  {
    id: 14,
    category: "健保資源",
    name: "慢性病連續處方箋",
    target: "經醫師診斷需長期用藥的慢性病患者",
    content: "一次開立可分次調劑3個月份量的藥物",
    amount: "減少回診次數,節省時間與部分負擔費用",
    apply: "由主治醫師評估後開立",
    phone: "0800-030-598",
    website: "https://www.nhi.gov.tw",
    agency: "中央健康保險署"
  },
  {
    id: 15,
    category: "健保資源",
    name: "中醫、牙科健保給付",
    target: "全體健保被保險人",
    content: "牙科:洗牙、補牙、拔牙;中醫:傷科、內科、婦科診療",
    amount: "健保給付,自付部分負擔約50-150元;洗牙每半年1次",
    apply: "持健保卡至特約牙醫或中醫診所",
    phone: "0800-030-598",
    website: "https://www.nhi.gov.tw",
    agency: "中央健康保險署"
  },

  // ========== 兒童福利 ==========
  {
    id: 16,
    category: "兒童福利",
    name: "生育給付 PLUS(2026年起保底10萬)",
    target: "2026年起所有新生兒父母,不限投保身份",
    content: "中央保證每名新生兒10萬元生育給付",
    amount: "保底10萬元/胎,可與縣市生育津貼疊加",
    apply: "戶政事務所辦理出生登記時申辦",
    phone: "勞保局:02-2396-1266",
    website: "https://www.mohw.gov.tw",
    agency: "衛生福利部"
  },
  {
    id: 17,
    category: "兒童福利",
    name: "各縣市生育津貼",
    target: "設籍各縣市滿一定期間的新生兒父母",
    content: "一次性現金獎勵,各縣市金額不同",
    amount: "第一胎約1-3萬;第二胎以上可達3-5萬(各縣市不同)",
    apply: "至戶籍地戶政事務所申辦",
    phone: "各縣市1999或區公所",
    website: "https://www.sfaa.gov.tw",
    agency: "各縣市政府"
  },
  {
    id: 18,
    category: "兒童福利",
    name: "育兒津貼(0-未滿5歲)",
    target: "未領取育嬰留停津貼、未就讀公立或準公共托嬰/幼兒園的0-未滿5歲兒童",
    content: "每月固定現金補助至兒童滿5歲",
    amount: "第一胎 5,000元/月、第二胎 6,000元/月、第三胎以上 7,000元/月",
    apply: "向戶籍地公所申辦",
    phone: "各縣市社會局",
    website: "https://www.sfaa.gov.tw",
    agency: "衛生福利部社會及家庭署"
  },
  {
    id: 19,
    category: "兒童福利",
    name: "托育補助(送托準公共/公托)",
    target: "0-未滿3歲送托公共化或準公共化托嬰中心、保母的兒童",
    content: "送托費用補助,減輕家長負擔",
    amount: "第一胎 13,000元/月起、第二胎 14,000元/月、第三胎 15,000元/月",
    apply: "與簽約準公共保母/托嬰中心簽約後,由機構協助申辦",
    phone: "各縣市社會局",
    website: "https://www.sfaa.gov.tw",
    agency: "衛生福利部社會及家庭署"
  },
  {
    id: 20,
    category: "兒童福利",
    name: "孕婦產前檢查補助",
    target: "孕婦",
    content: "全孕期14次產前檢查、2次超音波、1次妊娠糖尿病篩檢等",
    amount: "完全免費(健保給付)",
    apply: "持健保卡至婦產科診所或醫院",
    phone: "國健署:02-2522-0888",
    website: "https://www.hpa.gov.tw",
    agency: "衛生福利部國民健康署"
  },
  {
    id: 21,
    category: "兒童福利",
    name: "人工生殖試管嬰兒補助",
    target: "已婚且妻子小於45歲、經診斷需試管嬰兒治療的夫妻",
    content: "試管嬰兒療程費用補助",
    amount: "首次最高 100,000元;低收/中低收最高 150,000元;再次申請最高 60,000元",
    apply: "向國健署指定試管嬰兒機構申請",
    phone: "國健署:02-2522-0888",
    website: "https://www.hpa.gov.tw",
    agency: "衛生福利部國民健康署"
  },
  {
    id: 22,
    category: "兒童福利",
    name: "育嬰留職停薪津貼",
    target: "就業保險年資滿1年,子女滿3歲前申請育嬰留停的父母",
    content: "留停期間每月發給平均月投保薪資80%",
    amount: "每月平均月投保薪資80%,父母合計最長12個月",
    apply: "向勞保局申請",
    phone: "勞保局:02-2396-1266",
    website: "https://www.bli.gov.tw",
    agency: "勞動部勞工保險局"
  },
  {
    id: 23,
    category: "兒童福利",
    name: "發展遲緩兒童早期療育補助",
    target: "經醫療團隊評估有發展遲緩或疑似發展遲緩的0-6歲兒童",
    content: "療育交通、療育訓練費用補助",
    amount: "一般戶最高 3,000元/月;低收/中低收最高 5,000元/月",
    apply: "向戶籍地社會局/處申請,需附綜合報告書",
    phone: "各縣市社會局",
    website: "https://www.sfaa.gov.tw",
    agency: "衛生福利部社會及家庭署"
  },
  {
    id: 24,
    category: "兒童福利",
    name: "弱勢兒童及少年生活扶助",
    target: "家庭總收入未達貧窮線1.5倍,且家庭資產未達一定標準的兒少",
    content: "每月固定現金補助",
    amount: "每名兒少 2,200元/月起(各縣市略有不同)",
    apply: "向戶籍地公所申請",
    phone: "1957福利諮詢專線",
    website: "https://dep.mohw.gov.tw/dops",
    agency: "衛生福利部社會及家庭署"
  },

  // ========== 心理健康 ==========
  {
    id: 25,
    category: "心理健康",
    name: "年輕族群心理健康支持方案",
    target: "15-45歲民眾",
    content: "免費或補助心理諮商服務,協助情緒、壓力、人際議題",
    amount: "每人每年補助3次心理諮商,每次自付數百元",
    apply: "至衛福部公告之合作心理諮商所或心理治療所",
    phone: "1925安心專線(24小時)",
    website: "https://dep.mohw.gov.tw/domhaoh",
    agency: "衛生福利部心理健康司"
  },

  // ========== 職災補助 ==========
  {
    id: 26,
    category: "職災補助",
    name: "勞保傷病給付",
    target: "因職業傷害或疾病不能工作的勞工",
    content: "因傷不能工作期間發給薪資補助",
    amount: "前2個月平均月投保薪資70%;第3個月起50%,最長2年",
    apply: "向勞保局申請,需附診斷書與請假證明",
    phone: "勞保局:02-2396-1266",
    website: "https://www.bli.gov.tw",
    agency: "勞動部勞工保險局"
  },
  {
    id: 27,
    category: "職災補助",
    name: "職業災害醫療給付",
    target: "因職業災害導致傷病的勞工",
    content: "職災相關醫療費用免部分負擔,並提供醫療補助",
    amount: "免部分負擔,膳食費補助每月最高 14,400元",
    apply: "持職災醫療書單就醫,或事後申請核退",
    phone: "勞保局:02-2396-1266",
    website: "https://www.bli.gov.tw",
    agency: "勞動部勞工保險局"
  },
  {
    id: 28,
    category: "職災補助",
    name: "失業給付",
    target: "非自願離職且就業保險年資滿1年以上者",
    content: "失業期間每月發給薪資補助,並提供職訓媒合",
    amount: "平均月投保薪資60%,最長6個月(年資滿10年最長9個月)",
    apply: "離職後14天內至公立就業服務站辦理求職登記",
    phone: "0800-777-888",
    website: "https://www.wda.gov.tw",
    agency: "勞動部勞動力發展署"
  },

  // ========== 低收補助 ==========
  {
    id: 29,
    category: "低收補助",
    name: "低收入戶生活扶助",
    target: "經審核通過列冊之低收入戶",
    content: "每月現金補助,並享有健保費補助、學雜費減免等多項福利",
    amount: "依家庭規模核給,每人每月 14,898元(112年最低生活費標準)",
    apply: "向戶籍地公所申請,需經財稅審核",
    phone: "1957福利諮詢專線",
    website: "https://dep.mohw.gov.tw/dosaasw",
    agency: "衛生福利部社會及家庭署"
  },
  {
    id: 30,
    category: "低收補助",
    name: "急難救助金",
    target: "戶內人口死亡無力殮葬、失業或失蹤致生活陷困、重大傷病無力負擔者",
    content: "一次性緊急現金救助",
    amount: "依個案核給,最高 30,000元",
    apply: "向戶籍地公所申請,需附證明文件",
    phone: "1957福利諮詢專線",
    website: "https://dep.mohw.gov.tw/dosaasw",
    agency: "衛生福利部社會及家庭署"
  },
  {
    id: 31,
    category: "低收補助",
    name: "特殊境遇家庭扶助",
    target: "65歲以下,因配偶死亡、重病、家暴、單親等致生活困難者",
    content: "緊急生活扶助、子女生活津貼、就學補助、傷病醫療補助等",
    amount: "緊急生活扶助一次最高 7,759元;子女生活津貼每月 1,937元/人",
    apply: "向戶籍地公所申請",
    phone: "1957福利諮詢專線",
    website: "https://dep.mohw.gov.tw/dops",
    agency: "衛生福利部社會及家庭署"
  },
  {
    id: 32,
    category: "低收補助",
    name: "中低收入戶健保費補助",
    target: "經審核通過列冊之中低收入戶",
    content: "健保費全額或半額補助",
    amount: "低收入戶100%補助;中低收入戶補助50%",
    apply: "向戶籍地公所申請列冊後,自動補助",
    phone: "0800-030-598",
    website: "https://www.nhi.gov.tw",
    agency: "中央健康保險署"
  }
];

const CATEGORIES = [
  { name: "長照補助", icon: "ti-heart-rate-monitor", color: "blue", desc: "長照2.0、居家服務、日照、輔具" },
  { name: "重大傷病", icon: "ti-id-badge-2", color: "red", desc: "重大傷病卡、罕見疾病補助" },
  { name: "身心障礙", icon: "ti-accessible", color: "purple", desc: "生活補助、輔具補助、助聽器" },
  { name: "老人福利", icon: "ti-user-heart", color: "amber", desc: "國民年金、中低收老人津貼" },
  { name: "居家護理", icon: "ti-home-heart", color: "teal", desc: "居家護理、在宅醫療" },
  { name: "健保資源", icon: "ti-pill", color: "gray", desc: "成人健檢、四癌篩檢、慢箋" },
  { name: "兒童福利", icon: "ti-baby-carriage", color: "amber", desc: "生育、育兒、托育、早療" },
  { name: "心理健康", icon: "ti-brain", color: "pink", desc: "心理諮商補助、安心專線" },
  { name: "職災補助", icon: "ti-tools", color: "coral", desc: "勞保傷病、職災醫療、失業" },
  { name: "低收補助", icon: "ti-hand-three-fingers", color: "green", desc: "低收扶助、急難救助" }
];
