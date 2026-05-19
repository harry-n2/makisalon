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
            {/* ─── Hero（PC: md以上） ─── */}
            <section className="hidden md:flex relative min-h-screen items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-charcoal-900/70 via-charcoal-800/50 to-charcoal-900/60 z-10"></div>
                <div className="absolute inset-0">
                    <div className="w-full h-full bg-[url('/images/academy-hero-composite.jpg')] bg-cover bg-center"></div>
                </div>

                <div className="relative z-20 text-center px-6 max-w-4xl mx-auto pt-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="bg-white rounded-2xl inline-block px-6 py-4 mb-4 border border-gold-200 shadow-lg">
                            <img
                                src="/logos/maki-salon-logo.png"
                                alt="DETOX SALON MAKI ロゴ"
                                className="h-36 w-auto"
                            />
                        </div>
                        <span className="inline-block bg-cream-100 border border-gold-300 text-gold-700 text-xs tracking-[0.3em] px-4 py-2 rounded-full mb-8">
                            MAKI ACADEMY
                        </span>
                        <h1 className="text-5xl lg:text-6xl font-serif text-white mb-8 tracking-[0.15em] leading-tight whitespace-pre-line drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
                            {hero.catchcopy}
                        </h1>
                        <div className="w-24 h-[2px] bg-gradient-to-r from-gold-500 via-ice-400 to-gold-500 mx-auto my-8"></div>
                        <p className="text-lg text-white/90 font-light tracking-widest max-w-2xl mx-auto leading-loose whitespace-pre-line drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                            {hero.subcopy}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="mt-12"
                    >
                        <CTAButton href={hero.ctaLink} text={hero.ctaText} variant="outline" />
                    </motion.div>
                </div>
            </section>

            {/* ─── Hero（モバイル: md未満） ─── */}
            <section className="md:hidden flex flex-col overflow-hidden">
                {/* 画像: header_academy_mobile2.png を全体表示（オーバーレイなし） */}
                <div className="relative w-full pt-10">
                    <img
                        src="/images/header_academy_mobile2.png"
                        alt="MAKI ACADEMY ラグジュアリーサロン内観"
                        className="w-full h-auto"
                    />
                </div>

                {/* テキスト: クリーム背景上に黒字で配置 */}
                <div className="bg-cream-50 px-6 py-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h1 className="text-2xl font-serif text-charcoal-800 mb-6 tracking-[0.04em] leading-tight whitespace-pre-line">
                            {`あなたの技術を\n「極上のブランド」へ。`}
                        </h1>
                        <div className="w-20 h-[2px] bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 mx-auto my-6"></div>
                        <p className="text-sm text-charcoal-600 font-light tracking-wider max-w-xs mx-auto leading-relaxed whitespace-pre-line">
                            {`23歳で月商270万円を達成した現役サロンオーナーが、\n月商100万円を達成する集客メソッドを伝授。`}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="mt-8"
                    >
                        <a
                            href={hero.ctaLink}
                            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-serif tracking-[0.12em] bg-gold-600 text-cream-50 rounded-full hover:bg-gold-500 transition-colors duration-300 shadow-lg shadow-gold-700/20"
                        >
                            {hero.ctaText}
                        </a>
                    </motion.div>
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
