import { motion } from 'framer-motion';

interface SectionHeadingProps {
  label: string;
  heading: string;
  description?: string;
  align?: 'center' | 'left';
  dark?: boolean;
  marginBottomClass?: string;
}

const SectionHeading = ({ label, heading, description, align = 'center', dark = false, marginBottomClass = 'mb-14' }: SectionHeadingProps) => {
  const textAlign = align === 'center' ? 'text-center' : 'text-left';
  const labelColor = dark ? 'text-ice-300' : 'text-gold-600';
  const headingColor = dark ? 'text-cream-50' : 'text-charcoal-800';
  const descColor = dark ? 'text-cream-200' : 'text-charcoal-700';

  return (
    <div className={`${textAlign} ${marginBottomClass}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-4"
      >
        <span className={`text-xs ${labelColor} tracking-[0.4em] uppercase font-display font-medium`}>{label}</span>
        <div className={`mt-2 ${align === 'center' ? 'mx-auto' : ''} w-12 h-[1px] bg-gradient-to-r from-ice-300 via-gold-300 to-gold-500`}></div>
      </motion.div>
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-2xl md:text-3xl font-serif ${headingColor} tracking-widest leading-relaxed whitespace-pre-line`}
      >
        {heading}
      </motion.h3>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`${descColor} font-light tracking-wider text-sm max-w-2xl ${align === 'center' ? 'mx-auto' : ''} leading-loose mt-5`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
