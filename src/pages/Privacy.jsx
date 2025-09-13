import { Badge } from '@/components/ui/badge.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { 
  Shield,
  Lock,
  Eye,
  FileText,
  Mail,
  Calendar
} from 'lucide-react'

export default function Privacy() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center space-y-8">
            <Badge variant="secondary" className="w-fit mx-auto">
              <Shield className="h-4 w-4 mr-2" />
              Privacy Policy
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>Last updated: March 1, 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Introduction */}
            <Card className="p-8">
              <CardContent className="p-0 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Introduction</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    CNDRO LLC ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
                  </p>
                  <p>
                    Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access our website or use our services.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Information We Collect */}
            <Card className="p-8">
              <CardContent className="p-0 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Eye className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Information We Collect</h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Personal Information</h3>
                    <p className="text-muted-foreground mb-3">
                      We may collect personal information that you voluntarily provide to us when you:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      <li>Register for our services or create an account</li>
                      <li>Contact us through our website or email</li>
                      <li>Subscribe to our newsletter or marketing communications</li>
                      <li>Apply for internships or job opportunities</li>
                      <li>Participate in surveys, contests, or promotions</li>
                      <li>Request information about our services</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Types of Personal Information</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      <li>Name and contact information (email address, phone number, mailing address)</li>
                      <li>Professional information (company name, job title, work experience)</li>
                      <li>Educational background and qualifications</li>
                      <li>Resume and portfolio information</li>
                      <li>Payment information (when applicable)</li>
                      <li>Communication preferences</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Automatically Collected Information</h3>
                    <p className="text-muted-foreground mb-3">
                      When you visit our website, we may automatically collect certain information about your device and usage patterns:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      <li>IP address and location information</li>
                      <li>Browser type and version</li>
                      <li>Operating system</li>
                      <li>Pages visited and time spent on our website</li>
                      <li>Referring website or source</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Your Information */}
            <Card className="p-8">
              <CardContent className="p-0 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Lock className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">How We Use Your Information</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    We use the information we collect for various purposes, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Providing and maintaining our services</li>
                    <li>Processing applications for internships, jobs, or training programs</li>
                    <li>Communicating with you about our services, updates, and promotional offers</li>
                    <li>Responding to your inquiries and providing customer support</li>
                    <li>Improving our website and services</li>
                    <li>Analyzing usage patterns and trends</li>
                    <li>Ensuring the security and integrity of our systems</li>
                    <li>Complying with legal obligations</li>
                    <li>Protecting our rights and interests</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Information Sharing */}
            <Card className="p-8">
              <CardContent className="p-0 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Information Sharing and Disclosure</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and providing our services</li>
                    <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights, property, or safety</li>
                    <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
                    <li><strong>Consent:</strong> We may share information with your explicit consent</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card className="p-8">
              <CardContent className="p-0 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Lock className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Data Security</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Encryption of sensitive data in transit and at rest</li>
                    <li>Regular security assessments and updates</li>
                    <li>Access controls and authentication measures</li>
                    <li>Employee training on data protection practices</li>
                    <li>Secure data storage and backup procedures</li>
                  </ul>
                  <p>
                    However, please note that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="p-8">
              <CardContent className="p-0 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Eye className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Your Rights and Choices</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Depending on your location, you may have certain rights regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li><strong>Access:</strong> Request access to your personal information</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                    <li><strong>Portability:</strong> Request a copy of your information in a portable format</li>
                    <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                    <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
                  </ul>
                  <p className="text-muted-foreground">
                    To exercise these rights, please contact us using the information provided below.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Cookies and Tracking */}
            <Card className="p-8">
              <CardContent className="p-0 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Cookies and Tracking Technologies</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small data files stored on your device that help us:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Remember your preferences and settings</li>
                    <li>Analyze website traffic and usage patterns</li>
                    <li>Improve our website functionality</li>
                    <li>Provide personalized content and advertisements</li>
                  </ul>
                  <p>
                    You can control cookie settings through your browser preferences. However, disabling cookies may affect the functionality of our website.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Data Retention */}
            <Card className="p-8">
              <CardContent className="p-0 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Data Retention</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Factors that influence our retention periods include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>The nature of the information and how it is used</li>
                    <li>Legal and regulatory requirements</li>
                    <li>Contractual obligations</li>
                    <li>Business and operational needs</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="p-8 bg-primary/5 border-primary/20">
              <CardContent className="p-0 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Contact Us</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>Email:</strong> privacy@cndro.com</p>
                    <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                    <p><strong>Address:</strong> 123 Business District, Tech City, TC 12345</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Updates */}
            <Card className="p-8">
              <CardContent className="p-0 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Changes to This Privacy Policy</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Posting the updated policy on our website</li>
                    <li>Updating the "Last updated" date at the top of this policy</li>
                    <li>Sending you an email notification (if you have provided your email address)</li>
                  </ul>
                  <p>
                    We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
                  </p>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </>
  )
}

