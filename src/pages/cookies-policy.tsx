import { motion } from 'motion/react';
import { Card, CardContent } from '@/components/ui/card';

export default function CookiesPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <title>Cookies Policy - JA Domain Hub</title>
      <meta
        name="description"
        content="Cookies Policy for JA Domain Hub. Learn about how we use cookies and similar technologies on our website."
      />

      {/* Hero Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="mb-6 text-5xl font-bold tracking-tight lg:text-6xl">Cookies Policy</h1>
              <p className="text-lg text-muted-foreground">
                Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-2">
                <CardContent className="prose prose-slate max-w-none p-8 lg:p-12">
                  <h2>1. What Are Cookies?</h2>
                  <p>
                    Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
                  </p>

                  <h2>2. How We Use Cookies</h2>
                  <p>
                    JA Domain Hub uses cookies to:
                  </p>
                  <ul>
                    <li>Keep you signed in to your account</li>
                    <li>Remember your preferences and settings</li>
                    <li>Understand how you use our website</li>
                    <li>Improve our services and user experience</li>
                    <li>Provide secure access to our services</li>
                  </ul>

                  <h2>3. Types of Cookies We Use</h2>
                  
                  <h3>Essential Cookies</h3>
                  <p>
                    These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt out of these cookies.
                  </p>

                  <h3>Functional Cookies</h3>
                  <p>
                    These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
                  </p>

                  <h3>Analytics Cookies</h3>
                  <p>
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website and services.
                  </p>

                  <h3>Session Cookies</h3>
                  <p>
                    These temporary cookies are deleted when you close your browser. They help us maintain your session as you navigate through our website.
                  </p>

                  <h3>Persistent Cookies</h3>
                  <p>
                    These cookies remain on your device for a set period or until you delete them. They help us remember your preferences and settings for future visits.
                  </p>

                  <h2>4. Third-Party Cookies</h2>
                  <p>
                    We may use third-party services that set cookies on our website, including:
                  </p>
                  <ul>
                    <li><strong>Service Providers:</strong> For service integration and functionality</li>
                    <li><strong>Analytics Providers:</strong> To understand website usage</li>
                    <li><strong>Payment Processors:</strong> To process secure transactions</li>
                  </ul>
                  <p>
                    These third parties have their own privacy policies and cookie policies.
                  </p>

                  <h2>5. Managing Cookies</h2>
                  <p>
                    Most web browsers allow you to control cookies through their settings. You can:
                  </p>
                  <ul>
                    <li>View what cookies are stored on your device</li>
                    <li>Delete cookies from your device</li>
                    <li>Block cookies from being set</li>
                    <li>Set preferences for specific websites</li>
                  </ul>
                  <p>
                    Please note that blocking or deleting cookies may impact your experience on our website and prevent you from using certain features.
                  </p>

                  <h3>Browser Settings</h3>
                  <p>
                    You can manage cookies in your browser settings:
                  </p>
                  <ul>
                    <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                    <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                    <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                    <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
                  </ul>

                  <h2>6. Cookie Consent</h2>
                  <p>
                    When you first visit our website, we will ask for your consent to use non-essential cookies. You can change your cookie preferences at any time through our cookie banner or browser settings.
                  </p>

                  <h2>7. Do Not Track</h2>
                  <p>
                    Some browsers have a "Do Not Track" feature that signals to websites that you do not want to have your online activity tracked. We currently do not respond to Do Not Track signals.
                  </p>

                  <h2>8. Updates to This Policy</h2>
                  <p>
                    We may update this Cookies Policy from time to time to reflect changes in technology or legal requirements. We will post any changes on this page and update the "Last updated" date.
                  </p>

                  <h2>9. More Information</h2>
                  <p>
                    For more information about how we handle your personal data, please see our <a href="/privacy-policy">Privacy Policy</a>.
                  </p>

                  <h2>10. Contact Us</h2>
                  <p>
                    If you have questions about our use of cookies, please contact us:
                  </p>
                  <ul>
                    <li>Help Center: <a href="https://www.secureserver.net/help?pl_id=599857&prog_id=599857" target="_blank" rel="noopener noreferrer">Online Support (24/7)</a></li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
