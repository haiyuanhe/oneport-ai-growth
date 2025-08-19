import { useTranslation } from 'react-i18next';
import Navigation from '@/components/Navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BarChart3, Brain, Network } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="ONEPORT AI Hero" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[hsl(var(--oneport-orange))] to-[hsl(var(--oneport-orange-dark))] bg-clip-text text-transparent">
                {t('home.heroTitle')}
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {t('home.heroSubtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[hsl(var(--oneport-orange))] to-[hsl(var(--oneport-orange-dark))] hover:opacity-90 text-white px-8 py-6 text-lg"
              >
                {t('home.ctaButton')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-muted-foreground self-center">
                {t('home.ctaSubtext')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{t('home.statsTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{t('home.stats.merchants')}</div>
              <p className="text-muted-foreground">across the globe</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{t('home.stats.efficiency')}</div>
              <p className="text-muted-foreground">average improvement</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{t('home.stats.growth')}</div>
              <p className="text-muted-foreground">proven results</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t('home.featuresTitle')}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-6 p-3 rounded-full bg-primary/10 w-fit">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{t('home.features.dataHub.title')}</h3>
                <p className="text-muted-foreground">{t('home.features.dataHub.description')}</p>
              </CardContent>
            </Card>
            
            <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-6 p-3 rounded-full bg-primary/10 w-fit">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{t('home.features.aiAgent.title')}</h3>
                <p className="text-muted-foreground">{t('home.features.aiAgent.description')}</p>
              </CardContent>
            </Card>
            
            <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-6 p-3 rounded-full bg-primary/10 w-fit">
                  <Network className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{t('home.features.network.title')}</h3>
                <p className="text-muted-foreground">{t('home.features.network.description')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
