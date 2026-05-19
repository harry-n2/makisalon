/**
 * ② 店舗LP用コンテンツデータ
 * ────────────────────────────────────────
 * 【編集ガイド】
 * - キャッチコピーやメニュー説明を変えたい場合、該当のテキストを書き換えてください。
 * - LINE URLやQR画像パスを変えたい場合、該当のURLを書き換えてください。
 * - 保存後、Vercelが自動デプロイします。
 */

export const salonContent = {
  meta: {
    title: 'デトックスサロン MAKI | 浜松市のエステ・デトックスケア',
    description:
      '静岡県浜松市の本格デトックスサロンMAKI。20年以上の実績を持つ代表・小倉真樹によるオールハンド施術で、顔・カラダ・足の全方位からあなたの美と健康を引き出します。',
  },

  hero: {
    catchcopy: 'カラダの中から\nキレイになる',
    subcopy:
      '全メニュー100%ハンド施術。\n浜松で20年、延べ10,000人以上が実感した\nデトックス専門サロン。',
    ctaText: '無料診断へ進む',
    ctaLink: '#diagnostic',
    backgroundImage: '/images/hero-main.jpg',
    backgroundImageMobile: '/images/salon-header.jpg',
  },

  about: {
    label: 'About MAKI',
    heading: '20年の確かな実績と、\n『全ての女性を救いたい』\nという強い想い。',
    paragraphs: [
      '2013年10月のオープン以来、横浜・東京などで7年間「本物の美と健康とは何か？」を追求し、4年間の店長経験を経て培った確かな技術。',
      'タレント・モデル（冨田りかさん等）の専属エステティシャンとしても成果を上げ、多くのプレッシャーの中で『人に喜んで頂ける技術』を極めてまいりました。',
      '現代の生活習慣やストレス社会がもたらす悪影響に対し、「いらないものを外に出す（排毒）」ことの重要性を実感。ダイエットはもちろん、心のもやもやが取れ、内側から元気になる感覚を、一人でも多くの女性にお届けしたいと願っています。',
    ],
    highlight:
      '「エステにとどまらない東洋医術」\n無理な勧誘は一切なく、100%ハンドケアで一生懸命施術させていただきます。',
    images: {
      main: '/images/about1.jpg',
      sub: '/images/about2.jpg',
    },
  },

  services: [
    {
      category: '顔 / FACIAL',
      title: 'フェイシャル・美顔・若返り',
      description:
        'シワ消し・シミ消し・美白・小顔など、年齢に負けない極上の透明感とハリを取り戻す至高のフェイシャルケア。',
      image:
        'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800',
    },
    {
      category: 'カラダ / BODY',
      title: 'ボディトリートメント・痩身',
      description:
        '排毒リンパドレナージュやアロママッサージで、不要なものを落とし理想のサイズダウンを実現。ブライダルエステや姿勢矯正・脱毛にも対応。',
      image:
        'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800',
    },
    {
      category: '足 / FOOT',
      title: 'フットケア・足つぼ',
      description:
        '東洋医術の粋を集めた足つぼ・フットケア。第二の心臓と呼ばれる足裏から全身の巡りを整え、深いリラクゼーションへ導きます。',
      image:
        'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800',
    },
  ],

  line: {
    url: 'https://lin.ee/hZjjsCT',
    deepLink: 'https://line.me/R/ti/p/@335pckre?ts=01031548&oat_content=url',
    qrImage: '/qr/line-salon.png',
    ctaText: 'LINE登録して結果の続きを見る',
  },

  instagram: {
    url: 'https://www.instagram.com/aisare_salon?igsh=cDlhdTVmdWFicjN0',
    detoxUrl: 'https://www.instagram.com/detxsalon_maki?igsh=MXVqdGdiajY1bjR1MQ%3D%3D&utm_source=qr',
    qrImage: '/qr/instagram.png',
    images: ['/images/insta1.png', '/images/insta2.png', '/images/insta3.png'],
  },

  diagnostic: {
    title: 'あなたに最適な極上ケア診断',
    subtitle:
      '3つの質問に答えるだけで、あなたの本来の美しさを引き出す最適なアプローチをご提案します。',
    questions: [
      {
        id: 1,
        text: '現在、最も解消したいお悩みはどれですか？',
        options: [
          '顔のシワ・たるみ・くすみ',
          '肩こり・全身の疲労感',
          'ボディラインの崩れ・ダイエット',
          '足のむくみ・冷え',
        ],
      },
      {
        id: 2,
        text: 'エステやマッサージに行く頻度はどのくらいですか？',
        options: [
          '月に1回以上',
          '2〜3ヶ月に1回',
          '年に数回程度',
          'ほとんど行かない',
        ],
      },
      {
        id: 3,
        text: '施術を選ぶ際、最も重視するポイントは何ですか？',
        options: [
          '即効性と結果',
          'リラクゼーション・癒し',
          'スタッフの技術と信頼感',
          '通いやすさと価格',
        ],
      },
    ],
  },
} as const;
