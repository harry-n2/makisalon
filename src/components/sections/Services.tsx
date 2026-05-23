import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import { salonContent } from '../../config/salon-content';

const Services = () => {
    return (
        <section id="service" className="py-28 bg-charcoal-800 relative overflow-hidden">
            {/* 背景テクスチャ */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] opacity-[0.04]"></div>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-[150px]"></div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <SectionHeading
                    label="Services"
                    heading="極上のメンテナンス"
                    dark={true}
                />

                {/* MENU ボタン(極上のメンテナンス直下・tol-app.jp 外部遷移) */}
                <div className="flex justify-center mb-12">
                    <a
                        href="https://tol-app.jp/s/detxsalon-maki?utm_source=lp&utm_medium=button&utm_campaign=service_list&utm_content=after_services"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-12 py-4 text-sm font-serif tracking-[0.2em] bg-gradient-to-r from-gold-500 to-gold-600 text-cream-50 rounded-full shadow-xl shadow-gold-700/30 animate-pulse-glow"
                    >
                        MENU
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {salonContent.services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-6 border border-charcoal-600/30">
                                <div className="absolute inset-0 bg-charcoal-900/25 group-hover:bg-charcoal-900/10 transition-colors duration-500 z-10"></div>
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                                />
                                <div className="absolute top-6 left-6 z-20">
                                    <span className="text-xs text-gold-400 tracking-[0.2em] font-medium bg-charcoal-800/90 px-3 py-1 rounded-full backdrop-blur-md border border-charcoal-600/50">
                                        {service.category}
                                    </span>
                                </div>
                            </div>
                            <h4 className="text-lg font-serif text-cream-50 mb-3 tracking-widest group-hover:text-gold-400 transition-colors">
                                {service.title}
                            </h4>
                            <p className="text-sm text-cream-300 font-light leading-relaxed tracking-wider">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
