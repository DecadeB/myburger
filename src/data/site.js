const img = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const brand = {
  name: "MyBurger",
  tagline: "Everyday Burger",
  nameZh: "每日漢堡",
  phone: "+886 2 2771 0126",
  phoneHref: "tel:+886227710126",
  email: "hello@myburger.tw",
  address: "台北市大安區復興南路一段 107 巷 5 號",
  mapQuery: "台北市大安區復興南路一段107巷5號",
  instagram: "https://www.instagram.com/myburger.tw",
  threads: "https://www.threads.net/@myburger.tw",
};

export const navLinks = [
  { label: "品牌故事", href: "#story" },
  { label: "服務項目", href: "#services" },
  { label: "菜單價格", href: "#pricing" },
  { label: "空間寫真", href: "#gallery" },
  { label: "常見問題", href: "#faq" },
  { label: "聯絡我們", href: "#contact" },
];

export const heroSlides = [
  {
    id: "special",
    eyebrow: "今日限定 · 每日限量 40 份",
    title: "煙燻焦糖培根堡",
    description: "秘製煙燻醬 × 焦糖洋蔥 × 厚切培根，售完即止。",
    price: "NT$ 320",
    chip: "現點現煎 · 約 8 分鐘",
    image: img("photo-1607013251379-e6eecfffe234", 1600),
    alt: "MyBurger 雙層起司牛肉堡，夾著焦糖洋蔥與融化起司",
    cta: { label: "立即訂購", href: "#contact" },
  },
  {
    id: "signature",
    eyebrow: "招牌主打",
    title: "每日鮮絞牛肉堡",
    description: "原塊牛肉每日鮮絞，12 小時低溫發酵布里歐，賣完為止。",
    price: "NT$ 280",
    chip: "100% 每日鮮絞",
    image: img("photo-1568901346375-23c9450c58cd", 1600),
    alt: "布里歐麵包夾著雙層牛肉排與融化起司的招牌漢堡",
    cta: { label: "看菜單價格", href: "#pricing" },
  },
  {
    id: "duo",
    eyebrow: "兩個人，剛剛好",
    title: "雙人分享餐",
    description: "兩份招牌漢堡＋共享脆薯與煙燻雞翅＋兩杯特調。",
    price: "NT$ 680",
    chip: "最受歡迎",
    image: img("photo-1550547660-d9450f859349", 1600),
    alt: "兩份現做漢堡與飲品，適合派對分享",
    cta: { label: "立即訂購", href: "#contact" },
  },
];

export const stats = [
  { value: 100, suffix: "%", label: "每日鮮絞牛肉", note: "非預製肉排" },
  { value: 12, suffix: " 小時", label: "布里歐低溫發酵", note: "每日手工烘焙" },
  { value: 4.9, suffix: "/5", decimals: 1, label: "Google 顧客評分", note: "1,200+ 則評論" },
];

export const marqueeWords = [
  "Daily Fresh Ground Beef",
  "Hand-Baked Brioche",
  "House-Made Smoke Sauce",
  "No Shortcuts",
];

export const services = [
  {
    id: "dine-in",
    number: "01",
    title: "現點現煎堂食體驗",
    eyebrow: "Dine-in · 11:30 – 21:30",
    description:
      "拒絕預製保溫。每份肉排都在點單後才上煎台，以高溫鎖住肉汁與焦香脆邊；開放式廚房讓你看見每一道工序，也讓香氣先替你排隊。",
    points: ["點單後現絞現煎，絕非預製肉排", "18 席街頭風格座位，不限時、無低消", "手工煙燻醬與酸黃瓜免費續加"],
    image: img("photo-1594212699903-ec8a3eca50f5", 1200),
    imageAlt: "現煎牛肉堡與現炸脆薯，MyBurger 招牌套餐",
    action: { label: "預約座位", href: "#contact" },
  },
  {
    id: "catering",
    number: "02",
    title: "派對外燴與客製套餐",
    eyebrow: "Catering · 10 人起",
    description:
      "多人分享盒、企業午間餐盒與小型派對餐車。依人數自由搭配經典漢堡、炸物小食與特調飲品，讓每一次聚會都多一個被記住的味道。",
    points: ["10 人以上客製菜單與預算規劃", "雙北專人配送，保溫直送不軟爛", "可加購餐車現場現煎服務"],
    image: img("photo-1550547660-d9450f859349", 1200),
    imageAlt: "兩份現做漢堡與飲品，適合派對分享",
    action: { label: "取得外燴報價", href: "#contact" },
  },
];

export const principles = [
  {
    number: "01",
    title: "每日鮮絞牛肉",
    body: "嚴選黃金肥瘦比例的原塊牛肉，每日新鮮絞製，鎖住最純粹的肉汁與香氣。",
  },
  {
    number: "02",
    title: "手工烘焙麵包",
    body: "獨家配方布里歐，12 小時低溫發酵。外皮微酥、內裡鬆軟，完美承載豐富餡料。",
  },
  {
    number: "03",
    title: "真材實料醬汁",
    body: "拒絕現成調味。從焦糖洋蔥到秘製煙燻醬，每一口都是時間與火候的結晶。",
  },
];

export const gallery = [
  {
    title: "每日鮮絞牛肉堡",
    category: "Signature",
    image: img("photo-1568901346375-23c9450c58cd", 900),
    alt: "布里歐麵包夾著雙層牛肉排與融化起司的招牌漢堡",
  },
  {
    title: "焦糖洋蔥培根堡",
    category: "Limited",
    image: img("photo-1553979459-d2229ba7433b", 900),
    alt: "夾入厚切培根與焦糖洋蔥的限定漢堡",
  },
  {
    title: "煙燻辣味雙層",
    category: "Spicy",
    image: img("photo-1586190848861-99aa4a171e90", 900),
    alt: "黑底攝影的雙層牛肉漢堡，夾著生菜與培根",
  },
  {
    title: "松露野菇漢堡",
    category: "Seasonal",
    image: img("photo-1550317138-10000687a72b", 900),
    alt: "淋上松露醬與半熟蛋的牛肉漢堡",
  },
  {
    title: "帕瑪森脆薯",
    category: "Sides",
    image: img("photo-1573080496219-bb080dd4f877", 900),
    alt: "灑上帕瑪森起司與香草的現炸脆薯",
  },
  {
    title: "手打肉排與炭烤香氣",
    category: "Craft",
    image: img("photo-1571091718767-18b5b1457add", 900),
    alt: "木盤上新鮮製作的牛肉漢堡特寫",
  },
];

export const plans = [
  {
    id: "solo",
    name: "經典單人套餐",
    label: "Solo Set",
    price: 320,
    unit: "/ 人",
    summary: "第一次來，就從招牌開始。",
    features: [
      "招牌鮮絞牛肉堡（單層）",
      "帕瑪森脆薯",
      "冷萃紅茶或氣泡水",
      "內用、外帶皆可",
    ],
    cta: "立即訂購",
    featured: false,
  },
  {
    id: "duo",
    name: "雙人分享餐",
    label: "Most Popular",
    price: 680,
    unit: "/ 2 人",
    summary: "兩個人，剛剛好的份量。",
    features: [
      "任選兩份招牌漢堡",
      "共享脆薯與煙燻雞翅",
      "兩杯精釀或特調飲品",
      "手工醬料三選一：煙燻／蒜味／辣根",
      "優先訂位，保留靠窗座位",
    ],
    cta: "立即訂購",
    featured: true,
  },
  {
    id: "catering",
    name: "派對外燴",
    label: "Catering",
    price: 1880,
    unit: "/ 10 人起",
    summary: "把整間店的香氣，搬到你的聚會。",
    features: [
      "十份客製漢堡，可選牛或雞",
      "派對脆薯與小食拼盤",
      "雙北專人配送",
      "餐車現場現煎（另詢）",
      "專人協助菜單規劃",
    ],
    cta: "洽詢外燴",
    featured: false,
  },
];

export const faqs = [
  {
    q: "需要事先訂位嗎？",
    a: "平日多數時段可直接入座；週五至週日 18:00 後與國定假日建議提前訂位。透過頁面下方的需求表單或電話訂位，我們會保留座位 15 分鐘。",
  },
  {
    q: "為什麼堅持每日鮮絞牛肉？",
    a: "絞肉與空氣接觸後，油脂氧化會帶走香氣。我們每天開店前以原塊牛肉現絞，並少量備料；賣完為止，寧願提早售罄，也不留隔夜肉排。",
  },
  {
    q: "有不吃牛或素食的選擇嗎？",
    a: "有。我們提供炭烤雞腿堡與烤波特菇堡（奶蛋素），醬汁與配菜亦可調整。點餐時告知需求，廚房會更換專用器具。",
  },
  {
    q: "外燴需要提前多久預訂？",
    a: "建議 5 個工作天前預訂；30 人以上或需餐車現場現煎，請至少提前 10 天。旺季（尾牙、畢業季）請盡早洽詢，我們會依產能回覆可行時段。",
  },
  {
    q: "可以外帶或外送嗎？",
    a: "可以外帶，漢堡會分層包裝，避免麵包吸濕。外送與 Uber Eats、foodpanda 合作，尖峰時段現煎約需 15–20 分鐘，建議提前下單。",
  },
  {
    q: "有提供無麩質或低醣選項嗎？",
    a: "可將麵包換為生菜包（免費），或加價 NT$40 換購無麩質麵包。炸物使用獨立油鍋，但廚房仍處理含麩質食材，嚴重過敏者請先告知。",
  },
];

export const hours = [
  { day: "週一 · 週三 – 週日", time: "11:30 – 21:30" },
  { day: "週二", time: "公休" },
  { day: "最後點餐", time: "21:00" },
];

export const socials = [
  { label: "Instagram", href: brand.instagram, handle: "@myburger.tw" },
  { label: "Threads", href: brand.threads, handle: "@myburger.tw" },
];
