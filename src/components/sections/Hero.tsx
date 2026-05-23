import { motion } from 'framer-motion';
import { Crown } from 'lucide-react';
import { salonContent } from '../../config/salon-content';
import { assetPath } from '../../utils/assetPath';

const Hero = () => {
    const { hero } = salonContent;

    return (
        <section className="relative flex flex-col md:flex-row md:items-center md:justify-center md:min-h-screen overflow-hidden">
            {/* ── PC背景: hero-main.jpg + Ken Burns（md以上で表示） ── */}
            <div className="absolute inset-0 z-0 hidden md:block">
                <div className="absolute inset-0 bg-charcoal-900/40 mix-blend-multiply z-10"></div>
                <motion.img
                    src={assetPath(hero.backgroundImage)}
                    alt="デトックスサロン MAKI 施術ルーム"
                    animate={{ scale: [1.0, 1.08] }}
                    transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    className="w-full h-full object-cover object-left"
                />
            </div>

            {/* ── モバイル画像: salon-header.jpg（md未満で表示） ── */}
            <div className="md:hidden relative w-full pt-10">
                <div className="absolute inset-0 bg-charcoal-900/30 z-10"></div>
                <motion.img
                    src={assetPath(hero.backgroundImageMobile)}
                    alt="デトックスサロン MAKI 施術ルーム"
                    animate={{ scale: [1.0, 1.05] }}
                    transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    className="w-full h-auto"
                />
            </div>

            {/* ── モバイルテキスト: ダーク背景上に配置（md未満で表示） ── */}
            <div className="md:hidden bg-gradient-to-b from-charcoal-800 to-charcoal-900 px-6 py-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <h1 className="text-3xl font-serif text-white mb-6 tracking-wider leading-snug whitespace-pre-line drop-shadow-lg">
                        {hero.catchcopy}
                    </h1>
                    <div className="w-16 h-[2px] bg-gradient-to-r from-ice-300 via-gold-400 to-gold-600 mx-auto mb-6"></div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-white/90 text-xs font-light tracking-wider max-w-xl mx-auto leading-loose whitespace-pre-line drop-shadow-md"
                >
                    {hero.subcopy}
                </motion.p>

                {/* ── 信頼バッジ ── */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="mt-6 inline-flex items-center gap-3 bg-gradient-to-r from-gold-800/90 to-gold-600/90 text-cream-50 px-5 py-2.5 rounded-full shadow-xl shadow-gold-900/30 backdrop-blur-sm border border-gold-500/20"
                >
                    <Crown size={16} className="text-gold-300" />
                    <span className="text-[0.6rem] font-serif tracking-[0.12em]">サロン経営17年以上 ｜ 延べ10,000人以上</span>
                </motion.div>

                {/* ── CTA ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.9 }}
                    className="mt-8 flex flex-col gap-3 items-center"
                >
                    <a
                        href={hero.ctaLink}
                        className="inline-flex items-center justify-center w-full max-w-[280px] px-8 py-3.5 text-sm font-serif tracking-[0.12em] bg-gold-600 text-cream-50 rounded-full hover:bg-gold-500 transition-colors duration-300 shadow-xl shadow-gold-700/30"
                    >
                        {hero.ctaText}
                    </a>
                    <a
                        href="https://tol-app.jp/s/detxsalon-maki?utm_source=lp&utm_medium=button&utm_campaign=service_list&utm_content=hero_center"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full max-w-[280px] px-8 py-3.5 text-sm font-serif tracking-[0.12em] bg-gradient-to-r from-gold-500 to-gold-600 text-cream-50 rounded-full shadow-xl shadow-gold-700/30 animate-pulse-glow"
                    >
                        サービス一覧
                    </a>
                    <a
                        href={salonContent.booking.url}
                        className="inline-flex items-center justify-center w-full max-w-[280px] px-8 py-3.5 text-sm font-serif tracking-[0.12em] border-2 border-cream-100/40 text-cream-50 rounded-full hover:bg-cream-50/10 transition-colors duration-300"
                    >
                        {salonContent.booking.ctaTextLong}
                    </a>
                </motion.div>

                {/* ── Scroll Indicator（モバイル） ── */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                    className="mt-8 flex flex-col items-center"
                >
                    <span className="text-cream-100/60 text-xs tracking-[0.3em] mb-2 font-display uppercase">Scroll</span>
                    <div className="w-[1px] h-12 bg-cream-100/20 relative overflow-hidden">
                        <motion.div
                            animate={{ y: [0, 48] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                            className="w-full h-1/2 bg-ice-300 absolute top-0"
                        />
                    </div>
                </motion.div>
            </div>

            {/* ── PC用: 装飾グロー（md以上で表示） ── */}
            <div className="hidden md:block absolute inset-0 z-[2] pointer-events-none">
                <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gold-500/8 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-ice-300/10 rounded-full blur-[100px]"></div>
            </div>

            {/* ── PC用: 中央テキストエリア（md以上で表示） ── */}
            <div className="hidden md:block relative z-10 w-full max-w-3xl mx-auto px-8 text-center pt-24 pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <h1 className="text-5xl lg:text-6xl font-serif text-white mb-8 tracking-wider leading-snug whitespace-pre-line drop-shadow-lg">
                        {hero.catchcopy}
                    </h1>
                    <div className="w-20 h-[2px] bg-gradient-to-r from-ice-300 via-gold-400 to-gold-600 mx-auto mb-8"></div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-white/90 text-base font-light tracking-wider max-w-xl mx-auto leading-loose whitespace-pre-line drop-shadow-md"
                >
                    {hero.subcopy}
                </motion.p>

                {/* ── 信頼バッジ（PC） ── */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="mt-8 inline-flex items-center gap-3 bg-gradient-to-r from-gold-800/90 to-gold-600/90 text-cream-50 px-6 py-3 rounded-full shadow-xl shadow-gold-900/30 backdrop-blur-sm border border-gold-500/20"
                >
                    <Crown size={16} className="text-gold-300" />
                    <span className="text-xs font-serif tracking-[0.15em]">サロン経営17年以上 ｜ 延べ10,000人以上</span>
                </motion.div>

                {/* ── CTA（PC） ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.9 }}
                    className="mt-10 flex flex-wrap gap-4 justify-center"
                >
                    <a
                        href={hero.ctaLink}
                        className="inline-flex items-center justify-center px-10 py-4 text-sm font-serif tracking-[0.15em] bg-gold-600 text-cream-50 rounded-full hover:bg-gold-500 transition-colors duration-300 shadow-xl shadow-gold-700/30"
                    >
                        {hero.ctaText}
                    </a>
                    <a
                        href="https://tol-app.jp/s/detxsalon-maki?utm_source=lp&utm_medium=button&utm_campaign=service_list&utm_content=hero_center"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-10 py-4 text-sm font-serif tracking-[0.15em] bg-gradient-to-r from-gold-500 to-gold-600 text-cream-50 rounded-full shadow-xl shadow-gold-700/30 animate-pulse-glow"
                    >
                        サービス一覧
                    </a>
                    <a
                        href={salonContent.booking.url}
                        className="inline-flex items-center justify-center px-10 py-4 text-sm font-serif tracking-[0.15em] border-2 border-cream-100/40 text-cream-50 rounded-full hover:bg-cream-50/10 transition-colors duration-300 backdrop-blur-sm"
                    >
                        {salonContent.booking.ctaTextLong}
                    </a>
                </motion.div>
            </div>

            {/* ── PC用: 下部グラデーション（md以上で表示） ── */}
            <div className="hidden md:block absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream-50 to-transparent z-10"></div>

            {/* ── PC用: Scroll Indicator（md以上で表示） ── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
                className="hidden"
            >
                <span className="text-cream-100/60 text-xs tracking-[0.3em] mb-2 font-display uppercase">Scroll</span>
                <div className="w-[1px] h-16 bg-cream-100/20 relative overflow-hidden">
                    <motion.div
                        animate={{ y: [0, 64] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                        className="w-full h-1/2 bg-ice-300 absolute top-0"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
