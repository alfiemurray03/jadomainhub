import { motion } from 'motion/react';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

export default function TermsOfServicePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <title>Terms of Service - JA Domain Hub</title>
      <meta
        name="description"
        content="Terms of Service for JA Domain Hub. Read our terms governing your use of our domain registration and hosting services."
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background pt-28 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl text-center"
          >
            <h1 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">Terms of Service</h1>
            <p className="text-lg text-muted-foreground">
              JA Domain Hub – Terms of Service
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Effective Date: 21st March 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-2">
                <CardContent className="prose prose-sm max-w-none p-8 lg:prose-base lg:p-12">
                  
                  <h2>1. Introduction</h2>
                  <p><strong>1.1</strong> These Terms of Service ("Terms") govern your access to and use of the JA Domain Hub platform, including all websites, subdomains, services, and digital environments operated under this brand.</p>
                  <p><strong>1.2</strong> JA Domain Hub is a trading name and division of JA Group Services Ltd (the "Company", "we", "us", or "our"), a company incorporated in England and Wales with company number 16314179 and registered office at 167–169 Great Portland Street, 5th Floor, London, W1W 5PF, United Kingdom.</p>
                  <p><strong>1.3</strong> JA Domain Hub does not constitute a separate legal entity.</p>
                  <p><strong>1.4</strong> These Terms apply to:</p>
                  <ul>
                    <li>jadomainhub.jagroupservices.co.uk;</li>
                    <li>shop.jadomainhub.jagroupservices.co.uk;</li>
                    <li>any associated subdomains or branded environments;</li>
                    <li>all services, tools, features, and systems made available under JA Domain Hub.</li>
                  </ul>
                  <p><strong>1.5</strong> These Terms must be read alongside the JA Group Services Ltd – Terms of Service, which apply to all Platform use. In the event of any inconsistency, these Terms shall take precedence in relation to JA Domain Hub services.</p>
                  <p><strong>1.6</strong> By accessing or using the Platform, you agree to be legally bound by these Terms.</p>

                  <hr className="my-8" />

                  <h2>2. Definitions</h2>
                  <ul>
                    <li><strong>"Platform"</strong> means the JA Domain Hub websites, systems, storefront, and digital environments.</li>
                    <li><strong>"User"</strong> means any individual or organisation accessing or using the Platform.</li>
                    <li><strong>"Third Party Provider"</strong> means any external provider supplying domain registration, hosting, or related services.</li>
                    <li><strong>"Storefront"</strong> means the domain and hosting reseller interface made available under JA Domain Hub branding.</li>
                    <li><strong>"Third Party Terms"</strong> means the contractual terms, including Universal Terms of Service, applied by Third Party Providers.</li>
                  </ul>

                  <hr className="my-8" />

                  <h2>3. Nature of Services</h2>
                  <p><strong>3.1</strong> JA Domain Hub operates as a branded reseller platform, intermediary, and introducer for domain registration and related digital services.</p>
                  <p><strong>3.2</strong> The Platform may:</p>
                  <ul>
                    <li>provide access to domain registration, hosting, and related services;</li>
                    <li>present services under JA Domain Hub branding;</li>
                    <li>facilitate access to Third Party Provider systems;</li>
                    <li>provide general support and customer assistance.</li>
                  </ul>
                  <p><strong>3.3</strong> The Company does not operate the underlying infrastructure used to deliver domain or hosting services.</p>
                  <p><strong>3.4</strong> The Company's role is limited to platform access, branding, and facilitation.</p>

                  <hr className="my-8" />

                  <h2>4. Operation of the Platform</h2>
                  <p><strong>4.1</strong> The Platform provides access to a combination of Company-branded content and Third Party Provider systems.</p>
                  <p><strong>4.2</strong> Depending on the service, users may:</p>
                  <ul>
                    <li>browse information provided by the Company;</li>
                    <li>access services through the Storefront;</li>
                    <li>be redirected to third-party systems or environments;</li>
                    <li>interact with systems not controlled by the Company.</li>
                  </ul>
                  <p><strong>4.3</strong> Certain parts of the Platform may:</p>
                  <ul>
                    <li>operate using third-party infrastructure;</li>
                    <li>include embedded or integrated systems;</li>
                    <li>redirect users to external URLs or platforms.</li>
                  </ul>
                  <p><strong>4.4</strong> The Storefront available at shop.jadomainhub.jagroupservices.co.uk is a branded interface which utilises third-party reseller infrastructure.</p>
                  <p><strong>4.5</strong> The Company does not have full control over third-party systems, including functionality, availability, or performance.</p>

                  <hr className="my-8" />

                  <h2>5. Contracting and Intermediary Role</h2>
                  <p><strong>5.1</strong> JA Domain Hub operates as an intermediary and reseller platform.</p>
                  <p><strong>5.2</strong> Where services are provided directly by the Company, any contract shall be between you and JA Group Services Ltd.</p>
                  <p><strong>5.3</strong> Where services are provided by a Third Party Provider:</p>
                  <ul>
                    <li>this will be clearly indicated through the Platform or checkout process;</li>
                    <li>your contract will be formed directly with that provider;</li>
                    <li>the provider's terms and conditions shall apply.</li>
                  </ul>
                  <p><strong>5.4</strong> The Company is not a party to contracts formed with Third Party Providers and does not assume responsibility for service delivery, performance, or outcomes.</p>
                  <p><strong>5.5</strong> Any support provided by the Company does not constitute responsibility for the underlying service.</p>

                  <hr className="my-8" />

                  <h2>6. Third Party Providers and Infrastructure</h2>
                  <p><strong>6.1</strong> Services available through JA Domain Hub are delivered by Third Party Providers.</p>
                  <p><strong>6.2</strong> These providers may include entities operating domain registrar, hosting, and digital infrastructure systems.</p>
                  <p><strong>6.3</strong> Third Party Providers are responsible for:</p>
                  <ul>
                    <li>domain registration and lifecycle management;</li>
                    <li>billing, renewals, and pricing;</li>
                    <li>account systems and authentication;</li>
                    <li>service availability and uptime.</li>
                  </ul>
                  <p><strong>6.4</strong> The Company does not control or operate these systems.</p>

                  <hr className="my-8" />

                  <h2>7. Storefront and External Systems</h2>
                  <p><strong>7.1</strong> The Storefront is a reseller interface made available under JA Domain Hub branding.</p>
                  <p><strong>7.2</strong> The Storefront may:</p>
                  <ul>
                    <li>be powered by third-party reseller infrastructure;</li>
                    <li>operate partially outside the Company's direct control;</li>
                    <li>redirect users to external systems or environments.</li>
                  </ul>
                  <p><strong>7.3</strong> Users acknowledge that parts of the Platform may function through external systems provided by Third Party Providers.</p>
                  <p><strong>7.4</strong> The Company provides branding, access, and interface only.</p>

                  <hr className="my-8" />

                  <h2>8. Third Party Terms and Universal Terms of Service</h2>
                  <p><strong>8.1</strong> Services accessed through the Storefront are governed by Third Party Terms.</p>
                  <p><strong>8.2</strong> These include the provider's Universal Terms of Service (UToS) and associated agreements.</p>
                  <p><strong>8.3</strong> By using the Platform, you acknowledge and agree that:</p>
                  <ul>
                    <li>your contract is with the relevant Third Party Provider;</li>
                    <li>the provider's Universal Terms of Service and related policies apply;</li>
                    <li>you are responsible for reviewing and accepting those terms prior to any transaction.</li>
                  </ul>
                  <p><strong>8.4</strong> The applicable Universal Terms of Service are available at: <a href="https://shop.jadomainhub.jagroupservices.co.uk/legal-agreement?id=utos" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1">https://shop.jadomainhub.jagroupservices.co.uk/legal-agreement?id=utos <ExternalLink className="h-3 w-3" /></a></p>
                  <p><strong>8.5</strong> JA Group Services Ltd is not a party to those terms and does not control or modify them.</p>
                  <p><strong>8.6</strong> In the event of any conflict between these Terms and Third Party Terms, the Third Party Terms shall prevail in relation to the relevant services.</p>

                  <hr className="my-8" />

                  <h2>9. Pricing and Promotions</h2>
                  <p><strong>9.1</strong> The Company may display pricing and offer promotional discounts.</p>
                  <p><strong>9.2</strong> Pricing may be determined or influenced by Third Party Providers.</p>
                  <p><strong>9.3</strong> Prices may change from time to time.</p>
                  <p><strong>9.4</strong> Final pricing, billing, and charges are determined by the Third Party Provider unless expressly stated otherwise.</p>

                  <hr className="my-8" />

                  <h2>10. Payments</h2>
                  <p><strong>10.1</strong> Payments are processed by Third Party Providers unless otherwise stated.</p>
                  <p><strong>10.2</strong> The Company does not generally act as merchant of record unless expressly stated.</p>
                  <p><strong>10.3</strong> The Company does not control third-party payment systems.</p>

                  <hr className="my-8" />

                  <h2>11. Refunds and Cancellations</h2>
                  <p><strong>11.1</strong> Refunds and cancellations are governed by the terms of the relevant Third Party Provider.</p>
                  <p><strong>11.2</strong> The Company does not process or guarantee refunds for Third Party Services.</p>

                  <hr className="my-8" />

                  <h2>12. Customer Support</h2>
                  <p><strong>12.1</strong> Users may contact the Company for general support and assistance.</p>
                  <p><strong>12.2</strong> The Company may assist in communication with Third Party Providers.</p>
                  <p><strong>12.3</strong> Users may also contact Third Party Providers directly.</p>
                  <p><strong>12.4</strong> The Company does not control or override provider decisions.</p>

                  <hr className="my-8" />

                  <h2>13. Acceptable Use</h2>
                  <p><strong>13.1</strong> Users must not:</p>
                  <ul>
                    <li>use the Platform for unlawful purposes;</li>
                    <li>attempt unauthorised access;</li>
                    <li>interfere with systems or security;</li>
                    <li>misuse services or infrastructure.</li>
                  </ul>
                  <p><strong>13.2</strong> The Company may suspend or restrict access where necessary.</p>

                  <hr className="my-8" />

                  <h2>14. Intellectual Property</h2>
                  <p><strong>14.1</strong> All branding, content, and materials relating to JA Domain Hub are owned by or licensed to JA Group Services Ltd.</p>
                  <p><strong>14.2</strong> Third Party Providers retain ownership of their systems and content.</p>

                  <hr className="my-8" />

                  <h2>15. Data Protection</h2>
                  <p><strong>15.1</strong> Personal data is processed in accordance with the Company's Privacy Policy.</p>
                  <p><strong>15.2</strong> Third Party Providers process data independently.</p>

                  <hr className="my-8" />

                  <h2>16. Disclaimer</h2>
                  <p><strong>16.1</strong> The Platform is provided on an "as is" and "as available" basis.</p>
                  <p><strong>16.2</strong> The Company makes no representations or warranties, whether express or implied, regarding accuracy, availability, or reliability.</p>

                  <hr className="my-8" />

                  <h2>17. Limitation of Liability</h2>
                  <p><strong>17.1</strong> Nothing excludes liability for death, personal injury, fraud, or any liability which cannot be excluded under applicable law.</p>
                  <p><strong>17.2</strong> The Company shall not be liable for:</p>
                  <ul>
                    <li>Third Party Provider failures;</li>
                    <li>domain loss, expiry, or suspension;</li>
                    <li>service outages or disruptions;</li>
                    <li>indirect or consequential loss.</li>
                  </ul>

                  <hr className="my-8" />

                  <h2>18. Complaints and Feedback</h2>
                  <p><strong>18.1</strong> Formal complaints must be submitted to: <a href="mailto:complaints@jagroupservices.co.uk">complaints@jagroupservices.co.uk</a></p>
                  <p><strong>18.2</strong> General feedback must be submitted to: <a href="mailto:feedback@jagroupservices.co.uk">feedback@jagroupservices.co.uk</a></p>
                  <p><strong>18.3</strong> Communications submitted incorrectly may not be treated as formal complaints.</p>

                  <hr className="my-8" />

                  <h2>19. Assignment</h2>
                  <p><strong>19.1</strong> The Company may assign, transfer, or subcontract its rights and obligations under these Terms without restriction.</p>

                  <hr className="my-8" />

                  <h2>20. Severability</h2>
                  <p><strong>20.1</strong> If any provision of these Terms is found to be invalid or unenforceable, such provision shall be modified to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.</p>

                  <hr className="my-8" />

                  <h2>21. Third Party Rights</h2>
                  <p><strong>21.1</strong> A person who is not a party to these Terms shall have no right to enforce any provision under the Contracts (Rights of Third Parties) Act 1999.</p>

                  <hr className="my-8" />

                  <h2>22. Entire Agreement</h2>
                  <p><strong>22.1</strong> These Terms constitute the entire agreement between you and the Company in relation to your use of JA Domain Hub.</p>

                  <hr className="my-8" />

                  <h2>23. Variation</h2>
                  <p><strong>23.1</strong> The Company may amend these Terms by publishing an updated version on the Platform.</p>

                  <hr className="my-8" />

                  <h2>24. Governing Law and Jurisdiction</h2>
                  <p><strong>24.1</strong> These Terms are governed by the laws of England and Wales.</p>
                  <p><strong>24.2</strong> Consumers may bring proceedings in their local UK courts.</p>
                  <p><strong>24.3</strong> Business Users submit to the exclusive jurisdiction of the courts of England and Wales.</p>

                  <hr className="my-8" />

                  <h2>25. Contact</h2>
                  <p>
                    <strong>JA Group Services Ltd</strong><br />
                    167–169 Great Portland Street<br />
                    5th Floor<br />
                    London<br />
                    W1W 5PF<br />
                    United Kingdom
                  </p>
                  <p>Email: <a href="mailto:hello@jagroupservices.co.uk">hello@jagroupservices.co.uk</a></p>

                  <hr className="my-8" />

                  <div className="mt-8 rounded-lg border-2 border-primary/20 bg-primary/5 p-6">
                    <h3 className="mb-3 text-lg font-semibold">Universal Terms of Service (UTOS)</h3>
                    <p className="mb-4 text-sm">
                      <strong>Important:</strong> These Terms of Service apply to your use of the JA Domain Hub website (jadomainhub.jagroupservices.co.uk).
                    </p>
                    <p className="mb-4 text-sm">
                      When you access our shop subdomain (shop.jadomainhub.jagroupservices.co.uk) or external service provider platforms (including domain registration, hosting, and account management systems), those platforms are governed by the{' '}
                      <a
                        href="https://shop.jadomainhub.jagroupservices.co.uk/legal-agreement?id=utos"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold underline hover:text-primary"
                      >
                        Universal Terms of Service (UTOS)
                      </a>
                      .
                    </p>
                    <p className="text-sm text-muted-foreground">
                      The UTOS applies to shop.jadomainhub.jagroupservices.co.uk and external platforms where our branding appears but services are provided by third-party infrastructure. By accessing those platforms, you acknowledge and accept the UTOS.
                    </p>
                  </div>

                  <div className="mt-6 rounded-lg bg-muted/50 p-6">
                    <h3 className="mb-3 text-lg font-semibold">Additional Legal Documents</h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                      For comprehensive legal information, please also review the JA Group Services Ltd standard terms and policies:
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href="https://jagroupservices.co.uk/terms-of-service"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                      >
                        JA Group Services Terms
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                      <a
                        href="https://jagroupservices.co.uk/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-lg bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/90"
                      >
                        Privacy Policy
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>

                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
