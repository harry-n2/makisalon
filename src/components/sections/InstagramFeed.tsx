import { motion } from 'framer-motion';
import { MessageCircle, BookOpen } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { salonContent } from '../../config/salon-content';

const InstagramFeed = () => {
    const { instagram, line } = salonContent;

    return (
        <section id="gallery" className="py-24 bg-cream-50 relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-5">
                <div className="w-full h-full bg-gradient-to-br from-cream-200/30 to-rose-50/20"></div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <SectionHeading
                    label="Instagram / Gallery"
                    heading="圧倒的な美の追求"
                    description="数多くの実績と確かな技術。日々の変化やリアルな施術風景はInstagramでも公開中。"
                />

                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-6 mb-16 max-w-7xl mx-auto">
                    {instagram.images.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className="relative aspect-square overflow-hidden group border border-gold-100 rounded-sm shadow-md"
                        >
                            <img
                                src={`${import.meta.env.BASE_URL}${src.replace(/^\//, '')}`}
                                alt={`MAKI Gallery ${index + 1}`}
                                className="w-full h-full object-cover transform group-hover:scale-110 group-hover:brightness-110 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-charcoal-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="w-10 h-10 border border-gold-400 rounded-full flex items-center justify-center">
                                    <span className="text-gold-400 text-xl font-light">+</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Instagram CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href={instagram.detoxUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-pink-600 via-purple-600 to-orange-500 rounded-full overflow-hidden shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-purple-500/20"
                        >
                            <span className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></span>
                            <div className="relative z-10 flex items-center gap-3">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-white font-serif tracking-widest text-sm">
                                    Official Instagram
                                </span>
                            </div>
                        </a>
                        <a
                            href={line.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#06C755] hover:bg-[#05b34c] text-white rounded-full shadow-2xl shadow-[#06C755]/20 transition-all duration-300 hover:scale-105"
                        >
                            <MessageCircle size={18} />
                            <span className="font-serif tracking-widest text-sm">公式ライン</span>
                        </a>
                        <a
                            href="https://tol-app.jp/s/detxsalon-maki?utm_source=lp&utm_medium=button&utm_campaign=service_list&utm_content=instagram_section"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-cream-50 rounded-full shadow-2xl shadow-gold-700/20 transition-all duration-300 hover:scale-105"
                        >
                            <BookOpen size={18} />
                            <span className="font-serif tracking-widest text-sm">MENU</span>
                        </a>
                    </div>
                    <p className="mt-4 text-xs font-light text-charcoal-600 tracking-widest">
                        症例写真やお得な情報を日々アップデート
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default InstagramFeed;
