/**
 * ③ 一人サロン集客講座LP用コンテンツデータ
 * ────────────────────────────────────────
 * 【編集ガイド】
 * - 講座の章立てやキャッチコピーを変えたい場合、該当のテキストを書き換えてください。
 * - コンサルLINE URLを変えたい場合、line.urlを書き換えてください。
 */

export const academyContent = {
  meta: {
    title: '一人サロン集客講座 | 営業25年×AI×マーケティング | MAKI Academy',
    description:
      '23歳で月商270万円を達成したサロンオーナー・小倉真樹が教える、AIエージェント×集客マーケティングの最新メソッド。一人サロンの売上を劇的に変える実践講座。',
  },

  hero: {
    catchcopy: '営業25年の実績 ×\n集客＆マーケティング',
    subcopy:
      '23歳で月商270万円を達成した現役サロンオーナーが、\n最新のAI自動集客メソッドを伝授。',
    ctaText: '無料個別相談に申し込む',
    ctaLink: '#academy-cta',
  },

  story: {
    heading: 'なぜ、23歳で月商270万円を\n達成できたのか？',
    paragraphs: [
      '横浜・東京でタレント・モデルの専属エステティシャンとして活動し、23歳で独立。最高月商270万円を達成。',
      '20年以上にわたるオールハンド×機械の施術実績と、最新のAIテクノロジーを組み合わせた集客メソッドを確立。',
      '「技術があるのに売れない」「単価を上げたいけど怖い」そんな一人サロンオーナーの悩みを、根本から解決します。',
    ],
    highlight: '「3万円受け取るのに罪悪感持ってたら、\nお客様に失礼だろ！」',
  },

  curriculum: [
    {
      month: 1,
      title: '世界観の構築と高単価メニュー設計',
      items: [
        '「極上の高級感」＋「親しみやすさ」を両立するブランディング',
        '全方位（顔・カラダ・足）の技術を活かした高単価パッケージの作り方',
        'ゴージャスなLPを作るための素材準備とサイト構成の要件定義',
      ],
    },
    {
      month: 2,
      title: 'AI×デジタル集客の仕組み構築',
      items: [
        'AIエージェントを活用した自動集客の仕組み作り',
        '診断ツール＋公式LINE連携で見込み客を取りこぼさない導線設計',
        'LINEステップシナリオの作成と配信設定',
      ],
    },
    {
      month: 3,
      title: '成約術とリピート永続化',
      items: [
        '高級サロンにふさわしいVIP接客術とカウンセリング',
        '自然な物販（サプリ）とクロスセルのテクニック',
        '完成した「LP＋診断ツール」に広告でアクセスを流し込み自動化テスト',
      ],
    },
  ],

  /** 禁止ワード — これらの表現はLP内で絶対に使わない */
  prohibitedWords: ['絶対にできる', '簡単に稼げる', '努力なしで稼げる'],

  /** ターゲット */
  target: {
    primary: 'サロン開業したい人、サロンの売り上げに悩む開業したばかりの人',
    painPoints: [
      'リピートがつかない',
      '売り上げが上がらない',
      '単価アップが難しい',
    ],
  },

  line: {
    url: 'https://line.me/R/ti/p/@335pckre?ts=01031548&oat_content=url',
    qrImage: '/qr/line-academy-maki.png',
    ctaText: '無料個別相談に申し込む',
  },

  instagram: {
    url: 'https://www.instagram.com/aisare_salon/',
    qrImage: '/qr/insta-academy-maki.png',
  },

  headerCta: {
    text: '無料相談に申し込む',
    url: 'https://line.me/R/ti/p/@335pckre?ts=01031548&oat_content=url',
  },

  nav: [
    { name: 'HOME', hash: '' },
    { name: 'STORY', hash: '#academy-pain' },
    { name: 'お悩み', hash: '#academy-target' },
    { name: '実績', hash: '#academy-achievement' },
    { name: 'CURRICULUM', hash: '#academy-curriculum' },
    { name: 'VOICE', hash: '#academy-voice' },
    { name: 'CONTACT', hash: '#academy-cta' },
  ],
} as const;
