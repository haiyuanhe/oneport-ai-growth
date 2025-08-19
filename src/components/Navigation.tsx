import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from './LanguageSwitcher';

const Navigation = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.amazonSolutions'), href: '/amazon-solutions' },
    { name: t('nav.aboutUs'), href: '/about' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-[hsl(var(--oneport-orange))] to-[hsl(var(--oneport-orange-dark))] bg-clip-text text-transparent">
                ONEPORT
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href)
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-muted-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side - Language switcher and auth buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <Link to="/login">
              <Button variant="outline" size="sm">
                {t('nav.login')}
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="sm" className="bg-gradient-to-r from-[hsl(var(--oneport-orange))] to-[hsl(var(--oneport-orange-dark))] hover:opacity-90">
                {t('nav.signUp')}
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-primary bg-accent'
                    : 'text-muted-foreground hover:text-primary hover:bg-accent'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-2 px-3 py-2">
              <LanguageSwitcher />
            </div>
            <div className="flex flex-col space-y-2 px-3 py-2">
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full">
                  {t('nav.login')}
                </Button>
              </Link>
              <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-[hsl(var(--oneport-orange))] to-[hsl(var(--oneport-orange-dark))] hover:opacity-90">
                  {t('nav.signUp')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;