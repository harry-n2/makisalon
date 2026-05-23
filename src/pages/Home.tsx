import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import InstagramFeed from '../components/sections/InstagramFeed';
import Diagnostic from '../components/sections/Diagnostic';
import Company from '../components/sections/Company';
import MangaViewer from '../components/common/MangaViewer';
import { salonMangaPanels } from '../config/manga-salon';
import { assetPath } from '../utils/assetPath';

/**
 * マンガを「scene」フィールドでセグメント分割
 * Hero後 = 導入(1-3)  /  About後 = 出会い(4-6)  /  Services後 = 転換(7-9)
 * Instagram後 = 確信(10-11)  /  Diagnostic後 = 結び(12-13)
 */
const mangaSegments = {
  intro:   salonMangaPanels.filter((p) => p.scene === '導入'),    // 1-3
  meeting: salonMangaPanels.filter((p) => p.scene === '出会い'),  // 4-6
  turning: salonMangaPanels.filter((p) => p.scene === '転換'),    // 7-9
  proof:   salonMangaPanels.filter((p) => p.scene === '確信'),    // 10-11
  closing: salonMangaPanels.filter((p) => p.scene === '結び'),    // 12-13
};

const Home = () => {
    return (
        <div className="bg-cream-50 min-h-screen text-charcoal-700">
            <Hero />

            {/* マンガ①: 導入 — ある40代女性の悩み（縦並びフル表示・スライダー廃止） */}
            <section className="py-12 bg-cream-100 border-t border-gold-100">
                <div className="container mx-auto px-6 lg:px-12 max-w-2xl">
                    {/* ヘッダー（既存 MangaViewer 踏襲） */}
                    <div className="text-center mb-6">
                        <h2 className="text-xs text-gold-600 tracking-[0.4em] uppercase mb-2 font-display">
                            Manga Story
                        </h2>
                        <div className="w-8 h-[1px] bg-gradient-to-r from-gold-300 to-gold-500 mx-auto mb-3"></div>
                        <h3 className="text-lg md:text-xl font-serif text-charcoal-800 tracking-widest">
                            ある40代女性の悩み
                        </h3>
                    </div>
                    {/* 3画像 縦並び */}
                    <div className="flex flex-col gap-4">
                        <img
                            src={assetPath('/manga/salon/section1/page_1.png')}
                            alt="鏡を見て老けたと感じる40代女性。顔のアップで悩む表情。"
                            className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white"
                            loading="lazy"
                        />
                        <img
                            src={assetPath('/manga/salon/section1/page_2.png')}
                            alt="仕事・家事・育児で疲弊し、自分のことを後回しにする女性。"
                            className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white"
                            loading="lazy"
                        />
                        <img
                            src={assetPath('/manga/salon/section1/page_3.png')}
                            alt="安いサロンに通っても変わらず、浜松エステを検索してデトックスサロンMAKIを発見する女性。"
                            className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>

            <About />

            {/* マンガ②: 出会い — MAKIとの出会い（縦並びフル表示・スライダー廃止） */}
            <section className="py-12 bg-cream-100 border-t border-gold-100">
                <div className="container mx-auto px-6 lg:px-12 max-w-2xl">
                    {/* ヘッダー（既存 MangaViewer 踏襲） */}
                    <div className="text-center mb-6">
                        <h2 className="text-xs text-gold-600 tracking-[0.4em] uppercase mb-2 font-display">
                            Manga Story
                        </h2>
                        <div className="w-8 h-[1px] bg-gradient-to-r from-gold-300 to-gold-500 mx-auto mb-3"></div>
                        <h3 className="text-lg md:text-xl font-serif text-charcoal-800 tracking-widest">
                            MAKIとの出会い
                        </h3>
                    </div>
                    {/* 4画像 縦並び */}
                    <div className="flex flex-col gap-4">
                        <img
                            src={assetPath('/manga/salon/section2/page_4.png')}
                            alt="デトックスサロンMAKIの入口に立つ女性『ここがあのサロン…』。マキが笑顔で『いらっしゃい！初めてだよね？緊張しなくていいよ！』と出迎える。"
                            className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white"
                            loading="lazy"
                        />
                        <img
                            src={assetPath('/manga/salon/section2/page_5.png')}
                            alt="『安いサロン何軒も行ったけど変わらなくて…』と打ち明ける女性。マキが『ぶっちゃけ、いらないモノを外に出さないと何やってもムダだよ！』と本音で答える。"
                            className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white"
                            loading="lazy"
                        />
                        <img
                            src={assetPath('/manga/salon/section2/page_6.png')}
                            alt="マキが図解で老廃物・むくみが美容トラブルの原因と説明。『20年で1万人以上見てきたから大丈夫』と寄り添い、女性が信頼を抱く。"
                            className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white"
                            loading="lazy"
                        />
                        <img
                            src={assetPath('/manga/salon/section2/page_7.png')}
                            alt="『じゃ、カラダの中からキレイにしよっか！』とマキが施術ルームへ案内。いよいよ施術が始まる。"
                            className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>

            <Services />

            {/* マンガ③: 転換 — 施術で変わる体験(縦並びフル表示・スライダー廃止) */}
            <section className="py-12 bg-cream-100 border-t border-gold-100">
                <div className="container mx-auto px-6 lg:px-12 max-w-2xl">
                    {/* ヘッダー(既存 MangaViewer 踏襲) */}
                    <div className="text-center mb-6">
                        <h2 className="text-xs text-gold-600 tracking-[0.4em] uppercase mb-2 font-display">
                            Manga Story
                        </h2>
                        <div className="w-8 h-[1px] bg-gradient-to-r from-gold-300 to-gold-500 mx-auto mb-3"></div>
                        <h3 className="text-lg md:text-xl font-serif text-charcoal-800 tracking-widest">
                            施術で変わる体験
                        </h3>
                    </div>
                    {/* 4画像 縦並び */}
                    <div className="flex flex-col gap-4">
                        <img
                            src={assetPath('/manga/salon/section3/page_8.png')}
                            alt="施術台に横たわる女性にマキがハンド施術。『100%ハンド施術／タレント・モデル専属20年の技術』。女性『えっ…手だけでこんなに…!?』と驚く。"
                            className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white"
                            loading="lazy"
                        />
                        <img
                            src={assetPath('/manga/salon/section3/page_9.png')}
                            alt="東洋医術×オールハンドで老廃物を徹底排毒。女性『きもちいい…』と気持ちよさそう。マキ『いい感じ。だいぶ流れてきたよ』と微笑む。"
                            className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white"
                            loading="lazy"
                        />
                        <img
                            src={assetPath('/manga/salon/section3/page_10.png')}
                            alt="施術後の女性が驚き『えっっ…!? カラダ軽っ…!!』。鏡を見て『顔がちっちゃくなってる!? 肌も透明感…!』。『たった1回でこんなに変わるの…?』と感動。"
                            className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white"
                            loading="lazy"
                        />
                        <img
                            src={assetPath('/manga/salon/section3/page_11.png')}
                            alt="マキが『ね?カラダの中からキレイにするってこういうコト!』。女性が涙ぐみ『もっと早く来ればよかった』。ユカの変化はまだ始まったばかり。"
                            className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>

            <InstagramFeed />

            {/* マンガ④: 確信 — 驚きの変化(縦並びフル表示・スライダー廃止) */}
            <section className="py-12 bg-cream-100 border-t border-gold-100">
                <div className="container mx-auto px-6 lg:px-12 max-w-2xl">
                    {/* ヘッダー(既存 MangaViewer 踏襲) */}
                    <div className="text-center mb-6">
                        <h2 className="text-xs text-gold-600 tracking-[0.4em] uppercase mb-2 font-display">
                            Manga Story
                        </h2>
                        <div className="w-8 h-[1px] bg-gradient-to-r from-gold-300 to-gold-500 mx-auto mb-3"></div>
                        <h3 className="text-lg md:text-xl font-serif text-charcoal-800 tracking-widest">
                            驚きの変化
                        </h3>
                    </div>
                    {/* 4画像 縦並び */}
                    <div className="flex flex-col gap-4">
                        <img
                            src={assetPath('/manga/salon/section4/page_12.png')}
                            alt="若い頃のマキが表参道の美容サロンで独立『23歳で独立／最高月商270万円』。大人のマキは『タレント・モデル専属20年／1万人以上のカラダを見てきた』実績を持つ。"
                            className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white"
                            loading="lazy"
                        />
                        <img
                            src={assetPath('/manga/salon/section4/page_13.png')}
                            alt="マキがKindle電子書籍『選ばれ続ける人 消える人の決定的な違い』を出版(67ページ／Amazon Kindle)。顧客『本まで出してるんだ…!この人、ホンモノだ…』と確信。"
                            className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white"
                            loading="lazy"
                        />
                        <img
                            src={assetPath('/manga/salon/section4/page_14.png')}
                            alt="マキ『お客様の心と身体を治したい。それが私のすべて』。マキと顧客が笑顔で『コツコツ自分らしくキレイになろ!』と寄り添う。顧客『私、変われたんだ…!』と感動。"
                            className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white"
                            loading="lazy"
                        />
                        <img
                            src={assetPath('/manga/salon/section4/page_15.png')}
                            alt="Before → After: 一回でここまで変わる顧客の劇的な変化。マキがウインクして手を差し伸べ『次は、あなたの番だよ?』と誘う。"
                            className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>

            <Diagnostic />

            {/* マンガ⑤: 結び — あなたも始めよう(縦並びフル表示・スライダー廃止) */}
            <section className="py-12 bg-cream-100 border-t border-gold-100">
                <div className="container mx-auto px-6 lg:px-12 max-w-2xl">
                    {/* ヘッダー(既存 MangaViewer 踏襲) */}
                    <div className="text-center mb-6">
                        <h2 className="text-xs text-gold-600 tracking-[0.4em] uppercase mb-2 font-display">
                            Manga Story
                        </h2>
                        <div className="w-8 h-[1px] bg-gradient-to-r from-gold-300 to-gold-500 mx-auto mb-3"></div>
                        <h3 className="text-lg md:text-xl font-serif text-charcoal-800 tracking-widest">
                            あなたも始めよう
                        </h3>
                    </div>
                    {/* 3画像 縦並び */}
                    <div className="flex flex-col gap-4">
                        <img
                            src={assetPath('/manga/salon/section5/page_16.png')}
                            alt="マキがMAKIサロン入口で両腕を広げ『悩んでる時間もったいないよ!まずおいでよ!』と笑顔で誘う。顧客がスマホでLINE予約完了画面を見せ『私はLINEで予約したよ!簡単だった♪』。"
                            className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white"
                            loading="lazy"
                        />
                        <img
                            src={assetPath('/manga/salon/section5/page_17.png')}
                            alt="『カラダの中からキレイになる 本物のデトックス体験』装飾タイトル。マキ『凛として豊かで自分らしい自分』。マキがウインクして指差し『待ってるよ!』と誘う。"
                            className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white"
                            loading="lazy"
                        />
                        <img
                            src={assetPath('/manga/salon/section5/page_18.png')}
                            alt="デトックスサロンMAKI公式LINEのQRコード『まずは公式LINEに登録♪ 無料相談受付中!』。ご予約簡単／最新情報お届け／限定特典あり。MAKIサロン外観でマキが立ち『お待ちしていますね♪』。"
                            className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>

            <Company />
        </div>
    );
};

export default Home;
