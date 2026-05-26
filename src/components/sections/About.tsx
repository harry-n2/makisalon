import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import { salonContent } from '../../config/salon-content';

const About = () => {
    const { about } = salonContent;

    return (
        <section id="about" className="py-24 bg-cream-50 relative overflow-hidden">
            {/* 装飾用背景要素 */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-ice-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-100/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-16">
                    {/* モバイル専用: 見出しを画像の上に表示（余白タイトに）*/}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1 }}
                        className="lg:hidden w-full"
                    >
                        <SectionHeading label={about.label} heading={about.heading} align="left" dark={false} marginBottomClass="mb-2" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="w-full lg:w-1/2 grid grid-cols-2 gap-5"
                    >
                        <div className="relative h-[500px] rounded-sm overflow-hidden shadow-2xl border border-gold-300/40">
                            <img
                                src={`${import.meta.env.BASE_URL}${about.images.main.replace(/^\//, '')}`}
                                alt="代表 小倉真樹"
                                className="w-full h-full object-cover select-none"
                            />
                            <div className="absolute inset-0 bg-gold-50/10 mix-blend-overlay"></div>
                        </div>
                        <div className="relative h-[500px] rounded-sm overflow-hidden shadow-2xl border border-gold-200/30">
                            <img
                                src={`${import.meta.env.BASE_URL}${about.images.sub.replace(/^\//, '')}`}
                                alt="施術風景"
                                className="w-full h-full object-cover select-none"
                            />
                            <div className="absolute inset-0 bg-rose-50/15 mix-blend-overlay"></div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="w-full lg:w-1/2"
                    >
                        {/* PC専用: 見出し（モバイルでは画像の上に既出のため非表示） */}
                        <div className="hidden lg:block">
                            <SectionHeading label={about.label} heading={about.heading} align="left" dark={false} />
                        </div>

                        <div className="space-y-5 text-charcoal-700 font-light leading-relaxed tracking-wider text-sm md:text-base">
                            {about.paragraphs.map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}
                            <p className="text-gold-700 font-medium pt-4 whitespace-pre-line">
                                {about.highlight}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
