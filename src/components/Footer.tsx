import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Slogan */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[hsl(var(--oneport-orange))] to-[hsl(var(--oneport-orange-dark))] bg-clip-text text-transparent">
              ONEPORT
            </h3>
            <p className="text-white/80 text-lg">
              {t('footer.slogan')}
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white flex items-center gap-2">
              <span className="w-2 h-2 bg-[hsl(var(--oneport-orange))] rounded-full"></span>
              {t('nav.aboutUs')}
            </h4>
            <div className="space-y-3 text-white/70">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-[hsl(var(--oneport-orange))]" />
                <span className="text-sm">{t('footer.contact.address')}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[hsl(var(--oneport-orange))]" />
                <span className="text-sm">{t('footer.contact.phone')}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[hsl(var(--oneport-orange))]" />
                <a 
                  href={`mailto:${t('footer.contact.email')}`}
                  className="text-sm hover:text-[hsl(var(--oneport-orange))] transition-colors"
                >
                  {t('footer.contact.email')}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white flex items-center gap-2">
              <span className="w-2 h-2 bg-[hsl(var(--oneport-orange))] rounded-full"></span>
              {t('nav.home')}
            </h4>
            <div className="space-y-2">
              <a 
                href="/" 
                className="block text-sm text-white/70 hover:text-[hsl(var(--oneport-orange))] transition-colors"
              >
                {t('nav.home')}
              </a>
              <a 
                href="/amazon-solutions" 
                className="block text-sm text-white/70 hover:text-[hsl(var(--oneport-orange))] transition-colors"
              >
                {t('nav.amazonSolutions')}
              </a>
              <a 
                href="/pricing" 
                className="block text-sm text-white/70 hover:text-[hsl(var(--oneport-orange))] transition-colors"
              >
                {t('nav.pricing')}
              </a>
              <a 
                href="/about" 
                className="block text-sm text-white/70 hover:text-[hsl(var(--oneport-orange))] transition-colors"
              >
                {t('nav.aboutUs')}
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-center text-sm text-white/60">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;