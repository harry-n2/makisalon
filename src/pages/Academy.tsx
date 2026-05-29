import { motion } from 'framer-motion';
import SectionHeading from '../components/common/SectionHeading';
import CTAButton from '../components/common/CTAButton';
import { academyContent } from '../config/academy-content';
import { assetPath } from '../utils/assetPath';
import { BookOpen, Users, TrendingUp, Sparkles, Target, Zap } from 'lucide-react';

const Academy = () => {
    const { hero, story, curriculum, target, line } = academyContent;

    return (
        <div className="bg-base-white min-h-screen text-charcoal-800">
            {/* ─── Hero（PC: md以上）── 信頼感重視・上品レイアウト ─── */}
            <section className="hidden md:block relative min-h-screen overflow-hidden">
                {/* 背景画像 */}
                <img
                    src={assetPath('/images/header_academy_PC.png')}
                    alt="MAKI ACADEMY ラグジュアリーサロン内観"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />

                {/* 明るいクリームオーバーレイ（黒テキスト視認性確保） */}
                <div className="absolute inset-0 z-[1]" style={{
                    background: 'linear-gradient(to bottom, rgba(253,252,250,0.78) 0%, rgba(253,252,250,0.60) 40%, rgba(253,252,250,0.20) 70%, rgba(253,252,250,0) 100%)'
                }} />

                {/* テキスト: 信頼感重視の上品な階層構造 */}
                <div className="relative z-[2] flex flex-col items-center text-center min-h-screen pt-[160px] px-10 max-w-[960px] mx-auto">
                    {/* ① ラベルバッジ */}
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="inline-block text-[13px] font-sans font-medium tracking-[0.28em] text-gold-600 border border-gold-500 rounded-sm px-[22px] py-1.5 mb-7"
                    >
                        一人サロン特化型
                    </motion.span>

                    {/* ② メインコピー（最大） */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.25 }}
                    >
                        <h1 className="text-[52px] font-serif font-semibold text-charcoal-800 leading-[1.45] tracking-[0.06em]" style={{ textShadow: '0 1px 6px rgba(255,255,255,0.7)' }}>
                            あなたの技術を<br />
                            <span className="text-gold-700 font-bold">「極上のブランド」</span>へ
                        </h1>
                    </motion.div>

                    {/* divider */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="w-[60px] h-[1.5px] mx-auto my-[30px]"
                        style={{ background: 'linear-gradient(to right, transparent, #B8956A, transparent)' }}
                    />

                    {/* ③ 講座名サブヘッド */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.6 }}
                        className="text-[26px] font-serif font-medium text-charcoal-700 leading-[1.7] tracking-[0.10em] mb-[18px]"
                        style={{ textShadow: '0 1px 4px rgba(255,255,255,0.7)' }}
                    >
                        月商<span className="text-charcoal-800 font-bold">100万円</span>を達成する集客講座
                    </motion.p>

                    {/* ④ 実績コピー */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.75 }}
                        className="text-[15px] text-charcoal-600 leading-[2] tracking-[0.05em] mb-11"
                        style={{ textShadow: '0 1px 3px rgba(255,255,255,0.7)' }}
                    >
                        23歳で月商<span className="text-gold-700 font-semibold text-[16px]">270万円</span>を達成した現役サロンオーナーが、<br />
                        月商<span className="text-gold-700 font-semibold text-[16px]">100万円</span>を達成する集客メソッドを伝授
                    </motion.p>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.9 }}
                    >
                        <a
                            href={hero.ctaLink}
                            className="inline-flex items-center justify-center gap-2.5 px-14 py-[18px] text-[16px] font-serif font-semibold tracking-[0.14em] text-white rounded-full shadow-lg animate-pulse-glow transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02]"
                            style={{ background: 'linear-gradient(135deg, #A07C4E, #B8956A)', boxShadow: '0 6px 24px rgba(184,149,106,0.30)' }}
                        >
                            <span>✨ {hero.ctaText}</span>
                            <span className="text-lg">→</span>
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* ─── Hero（モバイル: md未満）── 信頼感重視・上品レイアウト ─── */}
            <section className="md:hidden overflow-hidden">
                <div className="relative w-full min-h-screen">
                    {/* 背景画像: フルビューポート */}
                    <img
                        src={assetPath('/images/header_academy_mobile2.png')}
                        alt="MAKI ACADEMY ラグジュアリーサロン内観"
                        className="absolute inset-0 w-full h-full object-cover object-top"
                    />

                    {/* クリームオーバーレイ（PC版と統一：黒テキスト視認性確保） */}
                    <div className="absolute inset-0 z-[1]" style={{
                        background: 'linear-gradient(to bottom, rgba(253,252,250,0.82) 0%, rgba(253,252,250,0.65) 35%, rgba(253,252,250,0.25) 65%, rgba(253,252,250,0) 100%)'
                    }} />

                    {/* テキスト: 信頼感重視の上品な階層構造（PC版と統一） */}
                    <div className="relative z-[2] flex flex-col items-center min-h-screen px-6 pt-[80px]">
                        {/* ① ラベルバッジ */}
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="inline-block text-[11px] font-sans font-medium tracking-[0.24em] text-gold-600 border border-gold-500 rounded-sm px-[18px] py-1 mb-5"
                        >
                            一人サロン特化型
                        </motion.span>

                        {/* ② メインコピー（最大） */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.25 }}
                            className="text-center"
                        >
                            <h1 className="text-[32px] font-serif font-semibold text-charcoal-800 leading-[1.45] tracking-[0.04em]" style={{ textShadow: '0 1px 6px rgba(255,255,255,0.7)' }}>
                                あなたの技術を<br />
                                <span className="text-gold-700 font-bold">「極上のブランド」</span>へ
                            </h1>
                        </motion.div>

                        {/* divider */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="w-[50px] h-[1.5px] mx-auto my-[22px]"
                            style={{ background: 'linear-gradient(to right, transparent, #B8956A, transparent)' }}
                        />

                        {/* ③ 講座名サブヘッド */}
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.6 }}
                            className="text-[18px] font-serif font-medium text-charcoal-700 leading-[1.7] tracking-[0.08em] mb-[14px] text-center"
                            style={{ textShadow: '0 1px 4px rgba(255,255,255,0.7)' }}
                        >
                            月商<span className="text-charcoal-800 font-bold">100万円</span>を達成する集客講座
                        </motion.p>

                        {/* ④ 実績コピー */}
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.75 }}
                            className="text-[13px] text-charcoal-600 leading-[2] tracking-[0.04em] mb-8 text-center"
                            style={{ textShadow: '0 1px 3px rgba(255,255,255,0.7)' }}
                        >
                            23歳で月商<span className="text-gold-700 font-semibold text-[14px]">270万円</span>を達成した<br />
                            現役サロンオーナーが、<br />
                            月商<span className="text-gold-700 font-semibold text-[14px]">100万円</span>の集客メソッドを伝授
                        </motion.p>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.9 }}
                            className="w-full"
                        >
                            <a
                                href={hero.ctaLink}
                                className="flex items-center justify-center gap-2 w-full py-[16px] text-[15px] font-serif font-bold tracking-[0.14em] rounded-full shadow-lg animate-pulse-glow"
                                style={{ background: 'linear-gradient(135deg, #8B6914, #A07C4E)', boxShadow: '0 6px 24px rgba(140,105,20,0.35)', color: '#FFFEF8', textShadow: '0 1px 3px rgba(100,70,10,0.4)' }}
                            >
                                <span>✨ {hero.ctaText}</span>
                                <span className="text-lg">→</span>
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* マンガ①: 課題 — あるサロンオーナーの悩み(縦並びフル表示・スライダー廃止) */}
            <section id="academy-pain" className="scroll-mt-20 py-12 bg-cream-100 border-t border-gold-100">
                <div className="container mx-auto px-6 lg:px-12 max-w-2xl">
                    {/* ヘッダー(既存 MangaViewer 踏襲) */}
                    <div className="text-center mb-6">
                        <h2 className="text-xs text-gold-600 tracking-[0.4em] uppercase mb-2 font-display">
                            Manga Story
                        </h2>
                        <div className="w-8 h-[1px] bg-gradient-to-r from-gold-300 to-gold-500 mx-auto mb-3"></div>
                        <h3 className="text-lg md:text-xl font-serif text-charcoal-800 tracking-widest">
                            あるサロンオーナーの悩み
                        </h3>
                    </div>
                    {/* 4画像 縦並び */}
                    <div className="flex flex-col gap-4">
                        <img
                            src={assetPath('/manga/academy/section1_academy/page_1.png')}
                            alt="一人サロンオーナーが施術台でスマホを見つめ『今月も…予約が入らない』と悩む。売上¥82,000・家賃¥150,000の家計を見て『家賃も払えない…』。"
                            className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white"
                            loading="lazy"
                        />
                        <img
                            src={assetPath('/manga/academy/section1_academy/page_2.png')}
                            alt="メニュー価格を下げ『もっと安くしないとお客様来ないのかな…』。壁の認定証を見上げ『技術は負けてないはずなのに…』。顔を覆い『リピートもつかない、単価も上げられない…このまま潰れるかな』。"
                            className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white"
                            loading="lazy"
                        />
                        <img
                            src={assetPath('/manga/academy/section1_academy/page_3.png')}
                            alt="夜PCで集客方法を検索『何が正解かわからない…』。怪しい広告群『簡単に稼げるって…ホントなの? でも怪しい…』。ベッドで泣きながら『誰か本当のこと教えて…』。"
                            className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white"
                            loading="lazy"
                        />
                        <img
                            src={assetPath('/manga/academy/section1_academy/page_4.png')}
                            alt="涙を拭い『頑張ってるのに売れない…私 サロン経営 向いてないのかな』。スマホでMAKI/サロン経営コンサルタント『選ばれ続ける人と消える人の決定的な違い』を発見『サロン経営17年? なんか…気になる』。"
                            className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>

            {/* ─── ターゲット ─── */}
            <section id="academy-target" className="scroll-mt-20 py-24 bg-gradient-to-br from-ice-50 via-ice-100/40 to-cream-50">
                <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
                    <SectionHeading
                        label="Who is this for?"
                        heading="こんなお悩みありませんか？"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        {target.painPoints.map((point, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="bg-white/90 backdrop-blur-sm border border-ice-200 rounded-xl p-8 text-center hover:border-ice-400 hover:shadow-lg transition-all duration-300 shadow-md"
                            >
                                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-ice-50 border border-ice-200 flex items-center justify-center">
                                    {i === 0 && <Users className="w-6 h-6 text-ice-600" />}
                                    {i === 1 && <TrendingUp className="w-6 h-6 text-ice-600" />}
                                    {i === 2 && <Target className="w-6 h-6 text-ice-600" />}
                                </div>
                                <p className="text-charcoal-800 font-medium tracking-widest text-lg">{point}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* マンガ②: 介入 — MAKIとの出会い(縦並びフル表示・スライダー廃止) */}
            <section className="py-12 bg-cream-100 border-t border-gold-100">
                <div className="container mx-auto px-6 lg:px-12 max-w-2xl">
                    <div className="text-center mb-6">
                        <h2 className="text-xs text-gold-600 tracking-[0.4em] uppercase mb-2 font-display">Manga Story</h2>
                        <div className="w-8 h-[1px] bg-gradient-to-r from-gold-300 to-gold-500 mx-auto mb-3"></div>
                        <h3 className="text-lg md:text-xl font-serif text-charcoal-800 tracking-widest">MAKIとの出会い</h3>
                    </div>
                    <div className="flex flex-col gap-4">
                        <img src={assetPath('/manga/academy/section2_academy/page_5.png')} alt="リナがサロン入口で『サロン経営17年… ホンモノなのかな…』と緊張。マキが笑顔『おっ来た来た! 緊張すんなー笑 まぁ座んなよ!』と歓迎。" className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white" loading="lazy" />
                        <img src={assetPath('/manga/academy/section2_academy/page_6.png')} alt="リナ『リピートがつかなくて単価も3980円のまま…』。マキが『信頼で売れる仕組み』を図解。『ぶっちゃけ言うよ? 3万円受け取るのに罪悪感持ってたら— お客様に失礼だろ!』" className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white" loading="lazy" />
                        <img src={assetPath('/manga/academy/section2_academy/page_7.png')} alt="リナ『安くしないと来てもらえないって思い込んでた…』。輝きサロンアカデミー個別セミナーでマキ『大丈夫。私もそうだった。17年やってきてわかったことがある』と寄り添う。" className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white" loading="lazy" />
                        <img src={assetPath('/manga/academy/section2_academy/page_8.png')} alt="マキがホワイトボードで『集客×単価×リピート=売上』『信頼で売れる仕組み』を図解。『感覚じゃダメ。仕組みがあれば一人でも安定して売れる』" className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white" loading="lazy" />
                        <img src={assetPath('/manga/academy/section2_academy/page_9.png')} alt="マキがKindle本『選ばれ続ける人と消える人の決定的な違い』を提示『全部この本にも書いた』。リナ『学びたいです! この講座受けさせてください!』と決意。" className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white" loading="lazy" />
                    </div>
                </div>
            </section>

            {/* ─── ストーリー（マキ実績） ─── */}
            <section id="academy-achievement" className="scroll-mt-20 py-24 bg-gradient-to-b from-charcoal-800 to-charcoal-900 text-white">
                <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
                    <SectionHeading label="Story" heading={story.heading} dark />
                    <div className="space-y-6 text-cream-200 font-light leading-relaxed tracking-wider text-sm md:text-base">
                        {story.paragraphs.map((p, i) => (
                            <motion.p
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >{p}</motion.p>
                        ))}
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mt-12 bg-gradient-to-r from-gold-900/40 to-gold-800/30 border border-gold-500/30 rounded-xl p-8 md:p-12 text-center"
                    >
                        <Sparkles className="w-8 h-8 text-gold-400 mx-auto mb-4" />
                        <p className="text-xl md:text-2xl font-serif text-cream-100 tracking-widest leading-relaxed whitespace-pre-line">
                            {story.highlight}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* マンガ③: 実績提示 — 圧倒的な実績(縦並びフル表示・スライダー廃止) */}
            <section className="py-12 bg-cream-100 border-t border-gold-100">
                <div className="container mx-auto px-6 lg:px-12 max-w-2xl">
                    <div className="text-center mb-6">
                        <h2 className="text-xs text-gold-600 tracking-[0.4em] uppercase mb-2 font-display">Manga Story</h2>
                        <div className="w-8 h-[1px] bg-gradient-to-r from-gold-300 to-gold-500 mx-auto mb-3"></div>
                        <h3 className="text-lg md:text-xl font-serif text-charcoal-800 tracking-widest">圧倒的な実績</h3>
                    </div>
                    <div className="flex flex-col gap-4">
                        <img src={assetPath('/manga/academy/section3_academy/page_10.png')} alt="講座Day1。マキが『一人サロン特化型集客講座』で『まず大事なのは導線設計です』と説明。図解『SNS→LINE→カウンセリング→来店→リピート、ここが9割のサロンが止まるポイント』" className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white" loading="lazy" />
                        <img src={assetPath('/manga/academy/section3_academy/page_11.png')} alt="マキ『集客・単価・リピート、この3つが自然に整う仕組みを作る』。リナ『安売り集客してた…仕組みがなかった』。マキ&リナ『頑張るほど整う、それが信頼で売れる仕組み』" className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white" loading="lazy" />
                        <img src={assetPath('/manga/academy/section3_academy/page_12.png')} alt="リナが学びを実践。カウンセリングシート準備・メッセージ送信・日々投稿。スマホ通知『新規予約・リピートメッセージ・いいね・お問い合わせ』。リナ『来てくれた! リピート予約も!』" className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white" loading="lazy" />
                        <img src={assetPath('/manga/academy/section3_academy/page_13.png')} alt="マキ&リナが乾杯『おめでとう! コツコツやれば結果は出る! 感覚じゃなく仕組みで売れたろ?笑』。リナ『もっと頑張ります! 売れないを卒業した成長はまだ始まったばかり』" className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white" loading="lazy" />
                    </div>
                </div>
            </section>

            {/* ─── カリキュラム ─── */}
            <section id="academy-curriculum" className="scroll-mt-20 py-24 bg-gradient-to-br from-rose-50 via-cream-100 to-rose-100/50">
                <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
                    <SectionHeading label="Curriculum" heading="3ヶ月で変わるサロン経営" />
                    <div className="space-y-12 mt-12">
                        {curriculum.map((month, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="flex flex-col md:flex-row gap-8 items-start"
                            >
                                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-rose-400 to-gold-600 flex items-center justify-center border border-rose-300/50 shadow-lg shadow-rose-400/20">
                                    <div className="text-center">
                                        <p className="text-xs text-gold-300 tracking-widest">MONTH</p>
                                        <p className="text-2xl font-serif text-white">{month.month}</p>
                                    </div>
                                </div>
                                <div className="flex-1 bg-white/90 backdrop-blur-sm border border-rose-200 rounded-xl p-8 hover:border-rose-400 hover:shadow-lg transition-all duration-300 shadow-md">
                                    <h4 className="text-xl font-serif text-charcoal-800 mb-4 tracking-widest flex items-center gap-2">
                                        {i === 0 && <BookOpen className="w-5 h-5 text-gold-600" />}
                                        {i === 1 && <Zap className="w-5 h-5 text-gold-600" />}
                                        {i === 2 && <TrendingUp className="w-5 h-5 text-gold-600" />}
                                        {month.title}
                                    </h4>
                                    <ul className="space-y-3">
                                        {month.items.map((item, j) => (
                                            <li key={j} className="flex items-start gap-3 text-charcoal-700 font-light tracking-wider text-sm">
                                                <span className="text-gold-600 mt-1">▸</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* マンガ④: 解決策 — あなたのサロンが変わる(縦並びフル表示・スライダー廃止) */}
            <section className="py-12 bg-cream-100 border-t border-gold-100">
                <div className="container mx-auto px-6 lg:px-12 max-w-2xl">
                    <div className="text-center mb-6">
                        <h2 className="text-xs text-gold-600 tracking-[0.4em] uppercase mb-2 font-display">Manga Story</h2>
                        <div className="w-8 h-[1px] bg-gradient-to-r from-gold-300 to-gold-500 mx-auto mb-3"></div>
                        <h3 className="text-lg md:text-xl font-serif text-charcoal-800 tracking-widest">あなたのサロンが変わる</h3>
                    </div>
                    <div className="flex flex-col gap-4">
                        <img src={assetPath('/manga/academy/section4_academy/page_14.png')} alt="マキ若い頃『23歳で独立 最初はボロボロだった』。大人マキ『17年コツコツやった 最高月商270万円 リピーター率90%以上』の実績。" className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white" loading="lazy" />
                        <img src={assetPath('/manga/academy/section4_academy/page_15.png')} alt="マキがKindle本『全部この一冊にまとめた』。要点『一人でも安定して売上をつくれる/リピートが生まれる関係性/自然に集客できる仕組み』。リナ『全部リアル… 実体験だから刺さる』" className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white" loading="lazy" />
                        <img src={assetPath('/manga/academy/section4_academy/page_16.png')} alt="マキ『頑張ってるのに売れないを卒業させたい、17年それが私の使命』。マキ&リナ夕日『サロン経営はもっと楽しく自由になれる コツコツ一緒に整えていこう』" className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white" loading="lazy" />
                        <img src={assetPath('/manga/academy/section4_academy/page_17.png')} alt="Before/After『仕組みがあれば一人でも売れる』Before:全然予約が入らない不安/After:予約常に満席・リピーター多数・紹介で広がる。マキがウインク手差し『あなたの番だよ?』" className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white" loading="lazy" />
                    </div>
                </div>
            </section>

            {/* ─── CTA ─── */}
            <section id="academy-cta" className="scroll-mt-20 py-24 bg-gradient-to-b from-gold-100/60 via-cream-100 to-base-white">
                <div className="container mx-auto px-6 lg:px-12 max-w-3xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-serif text-charcoal-800 mb-6 tracking-widest">
                            まずは無料個別相談から
                        </h2>
                        <p className="text-charcoal-600 font-light tracking-wider leading-relaxed mb-12">
                            あなたのサロンの課題をヒアリングし、<br />
                            最適なプランをご提案いたします。
                        </p>
                        <CTAButton href={line.url} text={line.ctaText} variant="line" external={true} />
                        <p className="text-xs text-charcoal-400 mt-6 tracking-widest">
                            ※ 無理な勧誘は一切ありません
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* マンガ⑤: 結び — 成功したオーナーの声(縦並びフル表示・スライダー廃止) */}
            <section id="academy-voice" className="scroll-mt-20 py-12 bg-cream-100 border-t border-gold-100">
                <div className="container mx-auto px-6 lg:px-12 max-w-2xl">
                    <div className="text-center mb-6">
                        <h2 className="text-xs text-gold-600 tracking-[0.4em] uppercase mb-2 font-display">Manga Story</h2>
                        <div className="w-8 h-[1px] bg-gradient-to-r from-gold-300 to-gold-500 mx-auto mb-3"></div>
                        <h3 className="text-lg md:text-xl font-serif text-charcoal-800 tracking-widest">成功したオーナーの声</h3>
                    </div>
                    <div className="flex flex-col gap-4">
                        <img src={assetPath('/manga/academy/section5_academy/page_18.png')} alt="マキが講座入口で両腕広げ『悩んでる時間がもったいないよ! まず話聞きにおいでよ!』。リナがLINE予約画面を見せ『LINEで相談から始めた あの一歩で全部変わった♪』予約満席。" className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white" loading="lazy" />
                        <img src={assetPath('/manga/academy/section5_academy/page_19.png')} alt="装飾タイトル『想いを売上に変える 信頼で売れるサロン設計』。夕日マキ『凛として豊かで自分らしいサロン経営』。マキ親指立て『待ってるよー笑』" className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white" loading="lazy" />
                        <img src={assetPath('/manga/academy/section5_academy/page_20.png')} alt="LINE公式アカウント『M beauty salon』QRコード。友だち追加で5特典(最新集客ノウハウ/予約仕組み/リピート関係/成功マインド/最新書籍電子版)。MAKI初の著書プレゼント。一人サロン特化型集客講座『頑張っているのに売れないを卒業しよう』" className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white" loading="lazy" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Academy;
