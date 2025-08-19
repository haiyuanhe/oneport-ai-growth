import { useTranslation } from 'react-i18next';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Eye, Heart, Users, Clock, Award, Quote } from "lucide-react";
import aboutTeamImage from "@/assets/about-team.jpg";

const About = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Customer First",
      description: t('about.philosophy.values.customerFirst')
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "People-Oriented", 
      description: t('about.philosophy.values.peopleOriented')
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Simplicity & Reliability",
      description: t('about.philosophy.values.simplicity')
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Win-Win Collaboration",
      description: t('about.philosophy.values.winWin')
    }
  ];

  const timeline = t('about.milestones.timeline', { returnObjects: true }) as Array<{
    date: string;
    title: string;
    description: string;
  }>;

  const testimonials = t('about.team.testimonials.cases', { returnObjects: true }) as Array<{
    company: string;
    result: string;
    quote: string;
  }>;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={aboutTeamImage} 
            alt="About ONEPORT Team" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[hsl(var(--oneport-orange))] to-[hsl(var(--oneport-orange-dark))] bg-clip-text text-transparent">
                {t('about.title')}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Brand Philosophy */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8">{t('about.philosophy.title')}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <Card className="text-center">
                <CardHeader>
                  <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{t('about.philosophy.mission')}</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{t('about.philosophy.vision')}</p>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-semibold mb-8">{t('about.philosophy.values.title')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="p-3 rounded-full bg-primary/10 text-primary mx-auto w-fit">
                      {value.icon}
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t('about.milestones.title')}</h2>
            <p className="text-xl text-muted-foreground">{t('about.milestones.subtitle')}</p>
          </div>
          
          <div className="space-y-8">
            {timeline.map((milestone, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <Badge variant="outline" className="text-lg px-4 py-2">
                    {milestone.date}
                  </Badge>
                </div>
                <Card className="flex-1">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      {milestone.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Advantages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t('about.team.title')}</h2>
            <p className="text-xl text-muted-foreground mb-8">{t('about.team.subtitle')}</p>
            <p className="text-lg text-muted-foreground">{t('about.team.coreTeam')}</p>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12">{t('about.team.testimonials.title')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="relative">
                  <CardHeader>
                    <Quote className="h-8 w-8 text-primary/20 absolute top-4 right-4" />
                    <CardTitle className="text-lg">{testimonial.company}</CardTitle>
                    <Badge variant="secondary" className="w-fit">
                      {testimonial.result}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;