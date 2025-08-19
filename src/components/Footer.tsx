import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Slogan */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              ONEPORT
            </h3>
            <p className="text-muted-foreground text-lg">
              {t('footer.slogan')}
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">
              {t('nav.aboutUs')}
            </h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-primary" />
                <span className="text-sm">{t('footer.contact.address')}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-sm">{t('footer.contact.phone')}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a 
                  href={`mailto:${t('footer.contact.email')}`}
                  className="text-sm hover:text-primary transition-colors"
                >
                  {t('footer.contact.email')}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">
              {t('nav.home')}
            </h4>
            <div className="space-y-2">
              <a 
                href="/" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t('nav.home')}
              </a>
              <a 
                href="/amazon-solutions" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t('nav.amazonSolutions')}
              </a>
              <a 
                href="/about" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t('nav.aboutUs')}
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;