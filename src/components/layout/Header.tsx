import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CalendarCheck, Menu, X, Search } from 'lucide-react';
import { salonContent } from '../../config/salon-content';
import { academyContent } from '../../config/academy-content';
import { assetPath } from '../../utils/assetPath';
import LineIcon from '../common/LineIcon';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    // GitHub Pages対応: ベースパスを動的に取得
    const base = import.meta.env.BASE_URL.replace(/\/$/, '');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const isAcademy = location.pathname.startsWith('/academy');

    const salonNavLinks: { name: string; path: string; external?: boolean }[] = [
        { name: 'HOME', path: `${base}/` },
        { name: 'ABOUT', path: `${base}/#about` },
        { name: 'MENU', path: 'https://tol-app.jp/s/detxsalon-maki?utm_source=lp&utm_medium=nav&utm_campaign=service_list&utm_content=header_nav', external: true },
        { name: 'SERVICE', path: `${base}/#service` },
        { name: 'GALLERY', path: `${base}/#gallery` },
        { name: 'COMPANY', path: `${base}/#company` },
    ];

    const academyNavLinks: { name: string; path: string; external?: boolean }[] = academyContent.nav.map((item) => ({
        name: item.name,
        path: `${base}/academy${item.hash}`,
    }));

    const navLinks = isAcademy ? academyNavLinks : salonNavLinks;

    const handleToggleLpClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (isAcademy) {
            navigate('/');
        } else {
            if (location.pathname === '/academy') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                navigate('/academy');
            }
        }
    };

    /* ─── Hero上（未スクロール）: 透明背景＆白文字 / スクロール後: クリーム背景 ─── */
    /* Academy LP は明るいクリームHeroオーバーレイのため常時黒文字+クリーム背景 */
    const headerBg = isScrolled
        ? 'bg-cream-50/95 backdrop-blur-xl shadow-sm border-b border-gold-200/50 py-2'
        : isAcademy
            ? 'bg-cream-50/85 backdrop-blur-md border-b border-cream-200/50 py-1.5 md:py-5'
            : 'bg-charcoal-900/30 backdrop-blur-sm border-b border-transparent py-1.5 md:py-5';

    const navTextColor = isAcademy
        ? 'text-charcoal-700'
        : (isScrolled ? 'text-charcoal-700' : 'text-white/85');
    const navHoverColor = isAcademy
        ? 'hover:text-gold-600'
        : (isScrolled ? 'hover:text-gold-600' : 'hover:text-gold-300');
    const menuIconColor = isAcademy
        ? 'text-charcoal-700'
        : (isScrolled ? 'text-charcoal-700' : 'text-white');

    const toggleLpLabel = isAcademy ? 'サロンLP' : '講座LP';
    const toggleLpHref = isAcademy ? `${base}/` : `${base}/academy`;

    return (
        <header className={`fixed w-full z-50 transition-all duration-500 ${headerBg}`}>
            <div className="container mx-auto px-4 md:px-6 lg:px-12 flex justify-between items-center">
                {/* ── ロゴ: モバイル時は縮小して画面幅に収める ── */}
                <Link to="/" className="flex items-center max-w-[40%] md:max-w-none">
                    <div className={`transition-all duration-500 ${isScrolled
                        ? ''
                        : 'bg-white rounded-md md:rounded-xl px-1.5 py-0.5 md:px-3 md:py-2 border border-gold-200 shadow-md'
                    }`}>
                        <img
                            src={assetPath('/logos/maki-salon-logo.png')}
                            alt="DETOX SALON MAKI ロゴ"
                            className={`transition-all duration-500 w-auto ${isScrolled
                                ? 'h-5 md:h-10'
                                : 'h-6 md:h-14'
                                }`}
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-4 items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.path}
                            {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                            className={`${navTextColor} ${navHoverColor} transition-colors text-xs tracking-[0.15em] font-light`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href={toggleLpHref}
                        onClick={handleToggleLpClick}
                        className={`text-xs tracking-[0.15em] font-light transition-colors ${navTextColor} ${navHoverColor}`}
                    >
                        {toggleLpLabel}
                    </a>

                    {/* ── 無料診断（サロンLPのみ） ── */}
                    {!isAcademy && (
                        <a
                            href={`${base}/#diagnostic`}
                            className={`flex items-center gap-1.5 border px-4 py-2 rounded-full transition-all text-xs font-medium tracking-wider ${isScrolled
                                ? 'border-gold-400 text-gold-700 hover:bg-gold-500 hover:text-white'
                                : 'border-cream-100/40 text-cream-50 hover:bg-cream-50/10'
                                }`}
                        >
                            <Search size={13} />
                            無料診断
                        </a>
                    )}

                    {/* ── CTAボタン（LP別） ── */}
                    {isAcademy ? (
                        <a
                            href={academyContent.headerCta.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 bg-[#06C755] hover:bg-[#05B14C] text-white px-4 py-2 rounded-full transition-colors text-xs font-medium tracking-wider shadow-sm shadow-green-900/20"
                        >
                            <LineIcon size={13} />
                            {academyContent.headerCta.text}
                        </a>
                    ) : (
                        <a
                            href={salonContent.booking.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 bg-gold-600 hover:bg-gold-500 text-white px-4 py-2 rounded-full transition-colors text-xs font-medium tracking-wider shadow-sm shadow-gold-700/20"
                        >
                            <CalendarCheck size={13} />
                            {salonContent.booking.ctaText}
                        </a>
                    )}
                </nav>

                {/* Mobile menu button */}
                <button
                    className={`md:hidden ${menuIconColor} focus:outline-none`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
                >
                    {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <div
                className={`md:hidden absolute top-full left-0 w-full bg-cream-50 border-t border-gold-100 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-[600px] opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
                    }`}
            >
                <div className="flex flex-col space-y-4 px-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.path}
                            {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                            className="text-charcoal-700 hover:text-gold-600 transition-colors text-xs tracking-[0.2em] py-2 border-b border-gold-100"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href={toggleLpHref}
                        onClick={handleToggleLpClick}
                        className="text-charcoal-700 hover:text-gold-600 transition-colors text-xs tracking-[0.2em] py-2 border-b border-gold-100"
                    >
                        {isAcademy ? '🏠 サロンLP' : '📚 一人サロン集客講座'}
                    </a>

                    <div className="flex flex-col gap-3 mt-4">
                        {!isAcademy && (
                            <a
                                href={`${base}/#diagnostic`}
                                className="flex items-center justify-center gap-2 border border-gold-400 text-gold-700 px-6 py-3 rounded-full font-medium tracking-wider text-xs"
                            >
                                <Search size={14} />
                                無料診断はこちら
                            </a>
                        )}

                        {isAcademy ? (
                            <a
                                href={academyContent.headerCta.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 bg-[#06C755] text-white px-6 py-3 rounded-full font-medium tracking-wider text-xs"
                            >
                                <LineIcon size={14} />
                                {academyContent.headerCta.text}
                            </a>
                        ) : (
                            <a
                                href={salonContent.booking.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 bg-gold-600 text-white px-6 py-3 rounded-full font-medium tracking-wider text-xs"
                            >
                                <CalendarCheck size={14} />
                                {salonContent.booking.ctaText}
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
