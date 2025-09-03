import { useTranslation } from 'react-i18next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const Pricing = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-muted/30 via-muted/20 to-muted/30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[hsl(var(--oneport-orange))] to-[hsl(var(--oneport-orange-dark))] bg-clip-text text-transparent">
                {t('pricing.title')}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t('pricing.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t('pricing.plans.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('pricing.plans.subtitle')}
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[hsl(var(--oneport-orange))] to-[hsl(var(--oneport-orange-dark))]"></div>
              <CardHeader className="text-center">
                <Badge variant="secondary" className="w-fit mx-auto mb-4">
                  {t('pricing.plans.basic.title')}
                </Badge>
                <CardTitle className="text-3xl font-bold">
                  {t('pricing.plans.basic.price')}
                </CardTitle>
                <p className="text-muted-foreground">
                  {t('pricing.plans.basic.description')}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {(t('pricing.plans.basic.features', {
                  returnObjects: true
                }) as string[]).map((feature: string, index: number) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('pricing.features.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('pricing.features.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(t('pricing.features.list', {
              returnObjects: true
            }) as Array<{title: string, description: string}>).map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('pricing.cta.title')}</h2>
          <p className="text-lg text-muted-foreground mb-8">
            {t('pricing.cta.description')}
          </p>
          <a 
            href="https://app.oneportai.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-[hsl(var(--oneport-orange))] text-white font-medium rounded-lg hover:bg-[hsl(var(--oneport-orange-dark))] transition-colors"
          >
            {t('pricing.cta.button')}
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
