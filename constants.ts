// constants.ts

// Basic Site Info
export const SITE_NAME = "g.f.t.s. Members";
export const COMPANY_NAME = "株式会社g.f.t.s";

// Contact and Company Details
export const CONTACT_EMAIL = "info.33@gfts.co.jp";
export const TEL_NUMBER = "03-6686-2689";
export const COMPANY_INFO = {
  name: '株式会社g.f.t.s',
  established: '2020年',
  representative: '原康子',
  address: '東京都港区元麻布3-1-6',
  tel: '03-6686-2689',
  email: 'info.33@gfts.co.jp',
  business: '経営者層向け会員制英会話サロンの運営',
};

// Navigation
export const NAV_LINKS = [
  { label: '選ばれる理由', href: '/features' },
  { label: 'カリキュラム', href: '/curriculum' },
  { label: '講師紹介', href: '/instructors' },
  { label: '料金プラン', href: '/pricing' },
  { label: 'FAQ', href: '/faq' },
];

// Hero Section
export const HERO_TITLE = "ビジネスを飛躍的に加速させる、\n経営者の為の英会話サロン";
export const HERO_SUBTITLE = "完全オーダーメイドのカリキュラムと、共に成長する経営者コミュニティ。";

// Problems Section
export const PROBLEMS = {
  title: "その英語学習、経営の足枷になっていませんか？",
  items: [
    {
      icon: "Clock", // Using Lucide icon names as strings
      text: "多忙な業務の合間を縫って学習しているが、成果が見えない",
    },
    {
      icon: "Users",
      text: "一般的な英会話スクールでは、ビジネスの機微が伝わらない",
    },
    {
      icon: "TrendingDown",
      text: "海外展開を視野に入れているが、語学がボトルネックになっている",
    },
  ],
};

// Features Section
export const FEATURES = {
  title: "g.f.t.s. Membersが選ばれる3つの理由",
  items: [
    {
      id: "01",
      title: "完全オーダーメイドカリキュラム",
      description: "海外出張、IR、海外法人との交渉など、あなたのビジネスシーンに直結する内容のみでカリキュラムを構築。最短距離でビジネスを成功に導く英語力を養成します。",
      icon: "Target",
    },
    {
      id: "02",
      title: "ベテラン・カリスマ講師陣",
      description: "指導歴10年以上のベテラン講師や、特定業界のビジネスに精通したカリスマ講師がマンツーマンで指導。経営者特有の課題や思考を深く理解し、最適なソリューションを提供します。",
      icon: "Award",
    },
    {
      id: "03",
      title: "質の高い経営者コミュニティ",
      description: "グローバル展開を志す、意識の高い経営者だけが集まる会員制サロン。レッスンだけでなく、会員同士の交流が新たなビジネスチャンスを生み出します。",
      icon: "Shield",
    },
  ],
};

// Pricing Section
export const PRICING = {
  title: "料金プラン",
  planName: "年間パスポートプラン",
  price: "1,200,000", // To be formatted
  priceUnit: "円 / 年（税別）",
  description: "1日40分のオンラインレッスンをご利用いただけます。この時間を最大4名様（ご家族、社員様）でシェアすることが可能です。",
  benefits: [
    "完全オーダーメイドカリキュラム",
    "ベテラン講師によるマンツーマンレッスン",
    "会員制コミュニティへのアクセス",
    "各種イベント・セミナーへの優先参加権",
  ],
  note: "※詳細なご利用条件については、無料カウンセリングにてご説明いたします。",
};

// Flow Section
export const FLOW = {
  title: "ご利用の流れ",
  items: [
    {
      icon: "MessageCircle",
      title: "無料カウンセリング",
      desc: "現状の課題と目標をヒアリング",
    },
    {
      icon: "FileText",
      title: "学習プランのご提案",
      desc: "あなただけの最適なプランを作成",
    },
    {
      icon: "CheckCircle",
      title: "ご入会・学習スタート",
      desc: "コミュニティに参加し、学習を開始",
    },
    {
      icon: "TrendingUp",
      title: "定期的な進捗確認",
      desc: "月1回の面談で軌道修正",
    },
  ],
};

// Testimonials
export const TESTIMONIALS = {
  title: "お客様の声",
  items: [
    {
      name: "外資系IT企業 CEO",
      text: "海外本社との重要な会議で、 nuanced な表現まで的確に伝えられるように。ビジネスの解像度が格段に上がりました。",
      image: "/images/testimonial-01.jpg", // Placeholder for real images
    },
    {
      name: "製造業 2代目経営者",
      text: "講師の質が他のスクールとは全く違う。業界の専門用語にも精通しており、実践的なロールプレイングが非常に役立っています。",
      image: "/images/testimonial-02.jpg",
    },
    {
      name: "スタートアップ 創業者",
      text: "海外投資家向けのピッチで、自信を持って質疑応答できるように。コミュニティで出会った経営者との提携も決まりました。",
      image: "/images/testimonial-03.jpg",
    },
  ],
};

// FAQ
export const FAQS = {
  title: "よくあるご質問",
  items: [
    {
      q: "本当に経営者しかいないのでしょうか？",
      a: "はい。当サロンは、企業の代表者様、役員様、あるいはそれに準ずる方を対象としております。質の高いコミュニティを維持するため、簡単な審査をさせていただいております。",
    },
    {
      q: "レッスンはどのように行われますか？",
      a: "オンラインでのマンツーマンレッスンが基本となります。ご要望に応じて、対面での集中セッションなどもアレンジ可能です。",
    },
    {
      q: "年間パスポートの共有ルールについて詳しく教えてください。",
      a: "ご契約者様を含め、最大4名様までご登録いただけます。1日のレッスン時間（40分）を、ご登録メンバー内で自由に分け合ってご利用いただく形となります。詳細はカウンセリングにてご説明します。",
    },
  ],
};

// Curriculum Section
export const CURRICULUM = {
  title: "あなたの脳に最適化し、目標に直結するカリキュラム",
  subtitle: "38年間の研究成果に基づく独自の学習モデル",
  description: [
    "私たちのメソッドは、画一的なものではありません。あなたのビジネス、目標、そして思考の癖にまで寄り添い、「バイリンガル脳」を育成するために設計された完全オーダーメイドの体験です。",
    "初回カウンセリングでの詳細なヒアリングに基づき、代表講師自らがあなただけの最適化された学習パスを設計。全てのレッスンがあなたの目標達成に直結し、最短距離での成長を約束します。",
  ],
  features: [
    {
      title: "完全オーダーメイド",
      text: "ビジネスでのプレゼン、海外視察、日常会話まで、あなたのニーズに100%合致した内容。"
    },
    {
      title: "没入型学習",
      text: "毎日40分のオンラインレッスンで、英語を浴びる環境を創出し、思考の言語化を加速。"
    },
    {
      title: "リラックスした雰囲気",
      text: "サロンという名の通り、お茶を楽しみながらリラックスして会話できる環境を重視。"
    }
  ]
};

// Instructors Section
export const INSTRUCTORS = {
  title: "単なる語学教師ではない、ビジネスの伴走者",
  subtitle: "平均勤続年数5年以上、経験豊富なカリスマ講師陣",
  description: "当サロンの講師は、語学力はもちろん、ビジネスネットワークや専門知識を豊富に有するプロフェッショナル集団です。あなたのビジネスを深く理解し、共に走るパートナーとなります。",
  profiles: [
    {
      name: "Yasco",
      role: "代表講師",
      imageUrl: "/images/instructor-yasco.jpg", // Placeholder
      specialties: ["TESOL", "ギフテッド教育", "TOEIC", "翻訳・通訳"],
      bio: "指導歴17年、海外在住8年の経験を持つ。効果的な学習戦略の構築を得意とし、数多くの経営者を成功に導いてきた実績を持つ。"
    },
    {
      name: "Ken",
      role: "ベテランコーチ",
      imageUrl: "/images/instructor-ken.jpg", // Placeholder
      specialties: ["中上級者指導", "スピーキング矯正"],
      bio: "指導歴20年以上のベテラン。日本人が英語を習得する上での課題を熟知しており、停滞期を乗り越え、流暢な会話力を身につけるための指導に定評がある。"
    },
    {
      name: "Shin & Mutsumi",
      role: "専門講師陣",
      imageUrl: "/images/instructor-others.jpg", // Placeholder
      specialties: ["医学・薬学", "人文学（ラテン語・ギリシャ語）"],
      bio: "医学部出身のバイリンガル講師や、4ヶ国語に堪能な大学講師など、多様な専門性を持つ講師が在籍。あなたの専門分野に合わせた指導も可能です。"
    }
  ]
};
