import { useTranslation } from 'react-i18next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Package, Search, BarChart3, Target, DollarSign, ShoppingCart, Users, MessageSquare, Truck, Calculator, BookOpen, Check } from "lucide-react";
import amazonSolutionsImage from "@/assets/amazon-solutions.jpg";
const AmazonSolutions = () => {
  const {
    t
  } = useTranslation();
  const features = [{
    category: t('amazon.productLifecycle.title'),
    items: [{
      icon: <Package className="h-6 w-6" />,
      title: t('amazon.productLifecycle.pim.title'),
      description: t('amazon.productLifecycle.pim.description')
    }, {
      icon: <Search className="h-6 w-6" />,
      title: t('amazon.productLifecycle.research.title'),
      description: t('amazon.productLifecycle.research.description')
    }]
  }, {
    category: t('amazon.operations.title'),
    items: [{
      icon: <BarChart3 className="h-6 w-6" />,
      title: t('amazon.operations.inventory.title'),
      description: t('amazon.operations.inventory.description')
    }, {
      icon: <Target className="h-6 w-6" />,
      title: t('amazon.operations.ads.title'),
      description: t('amazon.operations.ads.description')
    }, {
      icon: <DollarSign className="h-6 w-6" />,
      title: t('amazon.operations.pricing.title'),
      description: t('amazon.operations.pricing.description')
    }]
  }, {
    category: t('amazon.marketing.title'),
    items: [{
      icon: <ShoppingCart className="h-6 w-6" />,
      title: t('amazon.marketing.promotions.title'),
      description: t('amazon.marketing.promotions.description')
    }, {
      icon: <Users className="h-6 w-6" />,
      title: t('amazon.marketing.buyer.title'),
      description: t('amazon.marketing.buyer.description')
    }, {
      icon: <MessageSquare className="h-6 w-6" />,
      title: t('amazon.marketing.feedback.title'),
      description: t('amazon.marketing.feedback.description')
    }]
  }, {
    category: t('amazon.supplyChain.title'),
    items: [{
      icon: <Truck className="h-6 w-6" />,
      title: t('amazon.supplyChain.fulfillment.title'),
      description: t('amazon.supplyChain.fulfillment.description')
    }, {
      icon: <Calculator className="h-6 w-6" />,
      title: t('amazon.supplyChain.accounting.title'),
      description: t('amazon.supplyChain.accounting.description')
    }]
  }, {
    category: t('amazon.enhancement.title'),
    items: [{
      icon: <BookOpen className="h-6 w-6" />,
      title: t('amazon.enhancement.courses.title'),
      description: t('amazon.enhancement.courses.description')
    }]
  }];
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={amazonSolutionsImage} alt="Amazon Solutions" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[hsl(var(--oneport-orange))] to-[hsl(var(--oneport-orange-dark))] bg-clip-text text-transparent">
                {t('amazon.title')}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t('amazon.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {features.map((category, categoryIndex) => <div key={categoryIndex}>
                <h2 className="text-3xl font-bold mb-8 text-center">{category.category}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => <Card key={itemIndex} className="hover:shadow-lg transition-all duration-300 group">
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <div className="p-2 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            {item.icon}
                          </div>
                          <CardTitle className="text-lg">{item.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>)}
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t('amazon.pricing.title')}</h2>
          </div>
          
          <div className="max-w-md mx-auto">
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[hsl(var(--oneport-orange))] to-[hsl(var(--oneport-orange-dark))]"></div>
              <CardHeader className="text-center">
                <Badge variant="secondary" className="w-fit mx-auto mb-4">
                  {t('amazon.pricing.basic.title')}
                </Badge>
                <CardTitle className="text-3xl font-bold">
                  {t('amazon.pricing.basic.price')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {(t('amazon.pricing.basic.features', {
                returnObjects: true
              }) as string[]).map((feature: string, index: number) => <div key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>)}
                
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>;
};
export default AmazonSolutions;