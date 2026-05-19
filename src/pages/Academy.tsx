import { motion } from 'framer-motion';
import SectionHeading from '../components/common/SectionHeading';
import CTAButton from '../components/common/CTAButton';
import MangaViewer from '../components/common/MangaViewer';
import { academyContent } from '../config/academy-content';
import { academyMangaPanels } from '../config/manga-academy';
import { BookOpen, Users, TrendingUp, Sparkles, Target, Zap } from 'lucide-react';

/**
 * マンガを「scene」フィールドでセグメント分割（20コマ → 5セグメント）
 * Hero後 = 課題(1-4)  /  ターゲット後 = 介入(5-8)  /  ストーリー後 = 実績提示(9-12)
 * カリキュラム後 = 解決策(13-17)  /  CTA内 = 結び(18-20)
 */
const mangaSegments = {
    challenge:  academyMangaPanels.filter((p) => p.scene === '課題'),      // 1-4
    intervention: academyMangaPanels.filter((p) => p.scene === '介入'),    // 5-8
    proof:      academyMangaPanels.filter((p) => p.scene === '実績提示'),  // 9-12
    solution:   academyMangaPanels.filter((p) => p.scene === '解決策'),    // 13-17
    closing:    academyMangaPanels.filter((p) => p.scene === '結び'),      // 18-20
};

const Academy = () => {
    const { hero, story, curriculum, target, line } = academyContent;

    return (
        <div className="bg-base-white min-h-screen text-charcoal-800">
            {/* ─── Hero（PC: md以上）── 集客特化型 ─── */}
            <section className="hidden md:block relative min-h-screen overflow-hidden">
                {/* 背景画像 */}
                <img
                    src="/images/header_academy_PC.png"
                    alt="MAKI ACADEMY ラグジュアリーサロン内観"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />

                {/* テキスト: 最上段・水平中央（黒テキストで視認性最大化） */}
                <div className="relative z-[2] flex flex-col items-center text-center min-h-screen pt-[140px] px-10 max-w-[900px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h1 className="text-[60px] font-serif font-bold text-charcoal-800 leading-[1.4] tracking-[0.05em] mb-2">
                            あなたの技術を<br />
                            <span className="text-gold-700 font-black">「極上のブランド」へ</span>
                        </h1>
                        <div className="w-[80px] h-[2px] bg-gradient-to-r from-gold-700 via-gold-500 to-gold-700 mx-auto my-7" />
                        <p className="text-xl text-charcoal-700 leading-[2] tracking-[0.06em] mb-9">
                            23歳で月商<span className="text-gold-700 font-bold text-[22px]">270万円</span>を達成した現役サロンオーナーが、<br />
                            月商<span className="text-gold-700 font-bold text-[22px]">100万円</span>を達成する集客メソッドを伝授
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                    >
                        <a
                            href={hero.ctaLink}
                            className="inline-flex items-center justify-center gap-2.5 px-16 py-5 text-lg font-serif font-bold tracking-[0.14em] text-white bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 rounded-full shadow-xl shadow-gold-700/30 animate-pulse-glow"
                        >
                            <span>✨ {hero.ctaText}</span>
                            <span className="text-xl">→</span>
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* ─── Hero（モバイル: md未満）── 集客特化型フルインパクト ─── */}
            <section className="md:hidden overflow-hidden">
                <div className="relative w-full min-h-screen">
                    {/* 背景画像: フルビューポート */}
                    <img
                        src="/images/header_academy_mobile2.png"
                        alt="MAKI ACADEMY ラグジュアリーサロン内観"
                        className="absolute inset-0 w-full h-full object-cover object-top"
                    />

                    {/* ダークグラデーション: 上部ダーク → 下部クリア（画像下部は鮮明） */}
                    <div className="absolute inset-0 z-[1]" style={{
                        background: 'linear-gradient(to bottom, rgba(15,12,10,0.88) 0%, rgba(15,12,10,0.80) 20%, rgba(15,12,10,0.55) 40%, rgba(15,12,10,0.25) 55%, rgba(15,12,10,0.08) 70%, rgba(15,12,10,0) 85%, rgba(15,12,10,0) 100%)'
                    }} />

                    {/* テキスト: 最上段・水平中央配置 */}
                    <div className="relative z-[2] flex flex-col items-center min-h-screen px-6 pt-[72px]">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2 }}
                            className="text-center"
                        >
                            <h1 className="text-[30px] font-serif font-bold text-white leading-[1.45] tracking-[0.03em] mb-1" style={{ textShadow: '0 3px 16px rgba(0,0,0,0.5)' }}>
                                あなたの技術を<br />
                                <span className="text-gold-400 font-black">「極上のブランド」へ</span>
                            </h1>
                            <div className="w-[60px] h-[2px] bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 mx-auto my-5" />
                            <p className="text-base text-white/90 leading-[1.85] tracking-[0.04em] mb-8" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.4)' }}>
                                月商<span className="text-gold-400 font-bold text-lg">270万円</span>を達成した<br />
                                現役サロンオーナーが、<br />
                                月商<span className="text-gold-400 font-bold text-lg">100万円</span>の集客メソッドを伝授。
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="w-full"
                        >
                            <a
                                href={hero.ctaLink}
                                className="flex items-center justify-center gap-2 w-full py-[18px] text-base font-serif font-bold tracking-[0.14em] text-white bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 rounded-full shadow-xl shadow-gold-700/30 animate-pulse-glow"
                            >
                                <span>✨ {hero.ctaText}</span>
                                <span className="text-lg">→</span>
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* マンガ①: 課題 — 共感の導入 */}
            <MangaViewer
                panels={mangaSegments.challenge}
                title="あるサロンオーナーの悩み"
                variant="compact"
            />

            {/* ─── ターゲット ─── */}
            <section className="py-24 bg-gradient-to-br from-ice-50 via-ice-100/40 to-cream-50">
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

            {/* マンガ②: 介入 — マキとの出会い */}
            <MangaViewer
                panels={mangaSegments.intervention}
                title="MAKIとの出会い"
                variant="compact"
            />

            {/* ─── ストーリー ─── */}
            <section className="py-24 bg-gradient-to-b from-charcoal-800 to-charcoal-900 text-white">
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

            {/* マンガ③: 実績提示 — 証拠と信頼 */}
            <MangaViewer
                panels={mangaSegments.proof}
                title="圧倒的な実績"
                variant="compact"
            />

            {/* ─── カリキュラム ─── */}
            <section className="py-24 bg-gradient-to-br from-rose-50 via-cream-100 to-rose-100/50">
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

            {/* マンガ④: 解決策 — 具体的な未来 */}
            <MangaViewer
                panels={mangaSegments.solution}
                title="あなたのサロンが変わる"
                variant="compact"
            />

            {/* ─── CTA ─── */}
            <section id="academy-cta" className="py-24 bg-gradient-to-b from-gold-100/60 via-cream-100 to-base-white">
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

            {/* マンガ⑤: 結び — 成功ストーリー */}
            <MangaViewer
                panels={mangaSegments.closing}
                title="成功したオーナーの声"
                variant="compact"
            />
        </div>
    );
};

export default Academy;
