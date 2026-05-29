import { Link, useLocation } from 'react-router-dom';
import { CalendarCheck } from 'lucide-react';
import { companyInfo } from '../../config/company';
import { salonContent } from '../../config/salon-content';
import { academyContent } from '../../config/academy-content';
import { assetPath } from '../../utils/assetPath';
import QRBlock from '../common/QRBlock';

const Footer = () => {
    const location = useLocation();
    const isAcademy = location.pathname.startsWith('/academy');

    return (
        <footer className="bg-charcoal-800 text-cream-100 pt-16 pb-8 border-t border-charcoal-700">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    <div>
                        <div className="bg-white rounded-xl inline-block px-5 py-4 mb-4 border border-gold-200 shadow-lg">
                            <img
                                src={assetPath('/logos/maki-salon-logo.png')}
                                alt="DETOX SALON MAKI ロゴ"
                                className="h-20 w-auto"
                            />
                        </div>
                        <p className="text-cream-300 text-xs leading-relaxed mb-6 font-light tracking-wider">
                            極上のハンドケアと最新フェイシャル技術で<br />
                            真の美しさと健康を引き出すデトックスサロン。
                        </p>
                        <a
                            href={salonContent.booking.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-gold-600 hover:bg-gold-500 text-white px-5 py-3 rounded-full text-xs font-medium tracking-wider transition-colors shadow-lg shadow-gold-900/20"
                        >
                            <CalendarCheck size={14} />
                            {salonContent.booking.ctaText}
                        </a>
                    </div>

                    <div>
                        <h3 className="text-sm font-display tracking-[0.2em] mb-6 border-b border-charcoal-600 pb-2 inline-block text-gold-400">CONTACT</h3>
                        <ul className="space-y-3 text-xs text-cream-300 font-light tracking-wider">
                            <li>{companyInfo.address.postalCode}</li>
                            <li>{companyInfo.address.full}</li>
                            <li className="text-gold-400 pt-2 text-base whitespace-pre-line leading-relaxed">{companyInfo.phoneDisplay}</li>
                            <li className="text-cream-300/70 leading-relaxed">{companyInfo.phoneNote}</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-display tracking-[0.2em] mb-6 border-b border-charcoal-600 pb-2 inline-block text-gold-400">INFORMATION</h3>
                        <ul className="space-y-3 text-xs text-cream-300 font-light tracking-wider">
                            <li><a href="https://tol-app.jp/s/detxsalon-maki?utm_source=lp&utm_medium=link&utm_campaign=service_list&utm_content=footer" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">サービス一覧</a></li>
                            <li><Link to="/law" className="hover:text-gold-400 transition-colors">特定商取引法に基づく表記</Link></li>
                            <li><Link to="/privacy" className="hover:text-gold-400 transition-colors">プライバシーポリシー</Link></li>
                            <li><Link to="/contact" className="hover:text-gold-400 transition-colors">お問い合わせフォーム</Link></li>
                            {isAcademy ? (
                                <li><Link to="/" className="hover:text-gold-300 transition-colors">デトックスサロンMAKI</Link></li>
                            ) : (
                                <li><Link to="/academy" className="hover:text-gold-300 transition-colors">📚 一人サロン集客講座</Link></li>
                            )}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-display tracking-[0.2em] mb-6 border-b border-charcoal-600 pb-2 inline-block text-gold-400">CONNECT</h3>
                        <div className="flex flex-col gap-4">
                            {isAcademy ? (
                                <>
                                    <QRBlock
                                        qrImage={academyContent.line.qrImage}
                                        label="公式LINE"
                                        linkUrl=""
                                        size="sm"
                                        noLink
                                    />
                                    <QRBlock
                                        qrImage={academyContent.instagram.qrImage}
                                        label="Instagram"
                                        linkUrl={academyContent.instagram.url}
                                        linkText="フォローする"
                                        size="sm"
                                    />
                                </>
                            ) : (
                                <>
                                    <QRBlock
                                        qrImage={salonContent.line.qrImage}
                                        label="公式LINE"
                                        linkUrl={salonContent.line.url}
                                        linkText="友だち追加"
                                        size="sm"
                                    />
                                    <QRBlock
                                        qrImage={salonContent.instagram.qrImage}
                                        label="Instagram"
                                        linkUrl={salonContent.instagram.url}
                                        linkText="フォローする"
                                        size="sm"
                                    />
                                </>
                            )}
                        </div>
                    </div>

                </div>

                <div className="border-t border-charcoal-600/50 pt-8 text-center text-xs text-cream-400 tracking-wider">
                    <p>&copy; {new Date().getFullYear()} {companyInfo.name}. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
