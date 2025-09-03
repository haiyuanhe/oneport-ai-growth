import { useTranslation } from 'react-i18next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Privacy = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {t('privacy.title')}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[hsl(var(--oneport-orange))] to-[hsl(var(--oneport-orange-dark))] mx-auto"></div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="mb-8">
            <p className="text-muted-foreground leading-relaxed">
              {t('privacy.content.intro')}
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              {t('privacy.content.applicability')}
            </p>
          </div>

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
              <span className="w-2 h-2 bg-[hsl(var(--oneport-orange))] rounded-full mr-3"></span>
              {t('privacy.content.section1.title')}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t('privacy.content.section1.content')}
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {t('privacy.content.section1.accountInfo.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('privacy.content.section1.accountInfo.content')}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {t('privacy.content.section1.businessData.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t('privacy.content.section1.businessData.content')}
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>{t('privacy.content.section1.businessData.orders')}</li>
                  <li>{t('privacy.content.section1.businessData.procurement')}</li>
                  <li>{t('privacy.content.section1.businessData.inventory')}</li>
                  <li>{t('privacy.content.section1.businessData.products')}</li>
                  <li>{t('privacy.content.section1.businessData.financial')}</li>
                  <li>{t('privacy.content.section1.businessData.hr')}</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {t('privacy.content.section1.pii.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('privacy.content.section1.pii.content')}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {t('privacy.content.section1.technical.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('privacy.content.section1.technical.content')}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {t('privacy.content.section1.support.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('privacy.content.section1.support.content')}
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
              <span className="w-2 h-2 bg-[hsl(var(--oneport-orange))] rounded-full mr-3"></span>
              {t('privacy.content.section2.title')}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t('privacy.content.section2.content')}
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {t('privacy.content.section2.service.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('privacy.content.section2.service.content')}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {t('privacy.content.section2.personalization.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('privacy.content.section2.personalization.content')}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {t('privacy.content.section2.analytics.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('privacy.content.section2.analytics.content')}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {t('privacy.content.section2.security.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('privacy.content.section2.security.content')}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {t('privacy.content.section2.legal.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('privacy.content.section2.legal.content')}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {t('privacy.content.section2.communication.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('privacy.content.section2.communication.content')}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {t('privacy.content.section2.piiUsage.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t('privacy.content.section2.piiUsage.content')}
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>{t('privacy.content.section2.piiUsage.fulfillment')}</li>
                  <li>{t('privacy.content.section2.piiUsage.customerService')}</li>
                  <li>{t('privacy.content.section2.piiUsage.commitment')}</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
              <span className="w-2 h-2 bg-[hsl(var(--oneport-orange))] rounded-full mr-3"></span>
              {t('privacy.content.section3.title')}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t('privacy.content.section3.content')}
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {t('privacy.content.section3.encryption.title')}
                </h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>{t('privacy.content.section3.encryption.transit')}</li>
                  <li>{t('privacy.content.section3.encryption.atRest')}</li>
                  <li>{t('privacy.content.section3.encryption.environment')}</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {t('privacy.content.section3.accessControl.title')}
                </h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>{t('privacy.content.section3.accessControl.principle')}</li>
                  <li>{t('privacy.content.section3.accessControl.rbac')}</li>
                  <li>{t('privacy.content.section3.accessControl.mfa')}</li>
                  <li>{t('privacy.content.section3.accessControl.identity')}</li>
                  <li>{t('privacy.content.section3.accessControl.audit')}</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {t('privacy.content.section3.isolation.title')}
                </h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>{t('privacy.content.section3.isolation.customer')}</li>
                  <li>{t('privacy.content.section3.isolation.backup')}</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {t('privacy.content.section3.vulnerability.title')}
                </h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>{t('privacy.content.section3.vulnerability.scanning')}</li>
                  <li>{t('privacy.content.section3.vulnerability.penetration')}</li>
                  <li>{t('privacy.content.section3.vulnerability.code')}</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {t('privacy.content.section3.incident.title')}
                </h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>{t('privacy.content.section3.incident.irp')}</li>
                  <li>{t('privacy.content.section3.incident.evidence')}</li>
                  <li>{t('privacy.content.section3.incident.notification')}</li>
                </ul>
              </div>

              <div>
                <p className="text-muted-foreground leading-relaxed">
                  {t('privacy.content.section3.training')}
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
              <span className="w-2 h-2 bg-[hsl(var(--oneport-orange))] rounded-full mr-3"></span>
              {t('privacy.content.section4.title')}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t('privacy.content.section4.content')}
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {t('privacy.content.section4.providers.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('privacy.content.section4.providers.content')}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {t('privacy.content.section4.legal.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('privacy.content.section4.legal.content')}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {t('privacy.content.section4.business.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('privacy.content.section4.business.content')}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {t('privacy.content.section4.partners.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('privacy.content.section4.partners.content')}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {t('privacy.content.section4.piiSharing.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t('privacy.content.section4.piiSharing.content')}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t('privacy.content.section4.piiSharing.logistics')}
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
              <span className="w-2 h-2 bg-[hsl(var(--oneport-orange))] rounded-full mr-3"></span>
              {t('privacy.content.section5.title')}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t('privacy.content.section5.content')}
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {t('privacy.content.section5.endCustomer.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('privacy.content.section5.endCustomer.content')}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {t('privacy.content.section5.legalRetention.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('privacy.content.section5.legalRetention.content')}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {t('privacy.content.section5.otherData.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('privacy.content.section5.otherData.content')}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {t('privacy.content.section5.deletion.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('privacy.content.section5.deletion.content')}
                </p>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
              <span className="w-2 h-2 bg-[hsl(var(--oneport-orange))] rounded-full mr-3"></span>
              {t('privacy.content.section6.title')}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t('privacy.content.section6.content')}
            </p>
            
            <div className="space-y-4 mb-6">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {t('privacy.content.section6.rights.access')}
                </h3>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {t('privacy.content.section6.rights.correction')}
                </h3>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {t('privacy.content.section6.rights.deletion')}
                </h3>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {t('privacy.content.section6.rights.restriction')}
                </h3>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {t('privacy.content.section6.rights.portability')}
                </h3>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {t('privacy.content.section6.rights.objection')}
                </h3>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {t('privacy.content.section6.rights.withdrawal')}
                </h3>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {t('privacy.content.section6.rights.complaint')}
                </h3>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {t('privacy.content.section6.contact')}
            </p>
          </section>

          {/* Section 7 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
              <span className="w-2 h-2 bg-[hsl(var(--oneport-orange))] rounded-full mr-3"></span>
              {t('privacy.content.section7.title')}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {t('privacy.content.section7.content')}
            </p>
          </section>

          {/* Section 8 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
              <span className="w-2 h-2 bg-[hsl(var(--oneport-orange))] rounded-full mr-3"></span>
              {t('privacy.content.section8.title')}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {t('privacy.content.section8.content')}
            </p>
          </section>

          {/* Section 9 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
              <span className="w-2 h-2 bg-[hsl(var(--oneport-orange))] rounded-full mr-3"></span>
              {t('privacy.content.section9.title')}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {t('privacy.content.section9.content')}
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
