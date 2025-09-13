import { Badge } from '@/components/ui/badge.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { 
  FileText,
  Scale,
  Shield,
  AlertTriangle,
  Mail,
  Calendar,
  Users,
  Lock
} from 'lucide-react'

export default function Terms() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center space-y-8">
            <Badge variant="secondary" className="w-fit mx-auto">
              <Scale className="h-4 w-4 mr-2" />
              Terms of Use
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Terms of Use
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Please read these terms carefully before using our website and services.
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

      {/* Terms Content */}
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
                    Welcome to CNDRO LLC ("we," "our," or "us"). These Terms of Use ("Terms") govern your use of our website, services, and any related applications or platforms (collectively, the "Services").
                  </p>
                  <p>
                    By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Services.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Acceptance of Terms */}
            <Card className="p-8">
              <CardContent className="p-0 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Scale className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Acceptance of Terms</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    By accessing and using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. These Terms constitute a legally binding agreement between you and CNDRO LLC.
                  </p>
                  <p>
                    If you are using our Services on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Use of Services */}
            <Card className="p-8">
              <CardContent className="p-0 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Use of Services</h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Permitted Use</h3>
                    <p className="text-muted-foreground mb-3">
                      You may use our Services for lawful purposes only. You agree to use our Services in accordance with:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      <li>All applicable laws and regulations</li>
                      <li>These Terms of Use</li>
                      <li>Our Privacy Policy</li>
                      <li>Any additional terms or guidelines we may provide</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Prohibited Activities</h3>
                    <p className="text-muted-foreground mb-3">
                      You agree not to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      <li>Use our Services for any illegal or unauthorized purpose</li>
                      <li>Violate any applicable laws or regulations</li>
                      <li>Infringe upon the rights of others</li>
                      <li>Transmit any harmful, offensive, or inappropriate content</li>
                      <li>Attempt to gain unauthorized access to our systems</li>
                      <li>Interfere with or disrupt our Services</li>
                      <li>Use automated systems to access our Services without permission</li>
                      <li>Reverse engineer or attempt to extract source code</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card className="p-8">
              <CardContent className="p-0 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Lock className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Intellectual Property Rights</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    All content, features, and functionality of our Services, including but not limited to text, graphics, logos, images, software, and design, are owned by CNDRO LLC or our licensors and are protected by copyright, trademark, and other intellectual property laws.
                  </p>
                  <p>
                    You are granted a limited, non-exclusive, non-transferable license to access and use our Services for your personal or business use. This license does not include the right to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Modify, copy, or distribute our content</li>
                    <li>Use our trademarks or logos without permission</li>
                    <li>Create derivative works based on our Services</li>
                    <li>Sell, license, or otherwise commercialize our content</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* User Content */}
            <Card className="p-8">
              <CardContent className="p-0 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">User Content</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    When you submit content to our Services (such as through contact forms, applications, or communications), you grant us a non-exclusive, worldwide, royalty-free license to use, modify, and display such content for the purpose of providing our Services.
                  </p>
                  <p>
                    You represent and warrant that:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>You own or have the necessary rights to the content you submit</li>
                    <li>Your content does not violate any third-party rights</li>
                    <li>Your content is accurate and not misleading</li>
                    <li>Your content does not contain harmful or inappropriate material</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Privacy and Data Protection */}
            <Card className="p-8">
              <CardContent className="p-0 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Privacy and Data Protection</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Your privacy is important to us. Our collection, use, and protection of your personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
                  </p>
                  <p>
                    By using our Services, you consent to the collection and use of your information as described in our Privacy Policy.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Service Availability */}
            <Card className="p-8">
              <CardContent className="p-0 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <AlertTriangle className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Service Availability</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We strive to provide reliable and accessible Services, but we cannot guarantee that our Services will be available at all times. Our Services may be temporarily unavailable due to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Scheduled maintenance</li>
                    <li>Technical difficulties</li>
                    <li>Internet connectivity issues</li>
                    <li>Force majeure events</li>
                  </ul>
                  <p>
                    We reserve the right to modify, suspend, or discontinue any part of our Services at any time without prior notice.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Disclaimers */}
            <Card className="p-8">
              <CardContent className="p-0 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <AlertTriangle className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Disclaimers</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Our Services are provided "as is" and "as available" without warranties of any kind, either express or implied. We disclaim all warranties, including but not limited to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Merchantability and fitness for a particular purpose</li>
                    <li>Non-infringement of third-party rights</li>
                    <li>Accuracy, completeness, or reliability of content</li>
                    <li>Uninterrupted or error-free operation</li>
                  </ul>
                  <p>
                    We do not warrant that our Services will meet your specific requirements or that any defects will be corrected.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="p-8">
              <CardContent className="p-0 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Scale className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Limitation of Liability</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    To the maximum extent permitted by law, CNDRO LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Loss of profits or revenue</li>
                    <li>Loss of data or information</li>
                    <li>Business interruption</li>
                    <li>Loss of goodwill or reputation</li>
                  </ul>
                  <p>
                    Our total liability for any claims arising from or related to these Terms or our Services shall not exceed the amount you have paid us in the twelve months preceding the claim.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Indemnification */}
            <Card className="p-8">
              <CardContent className="p-0 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Indemnification</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    You agree to indemnify, defend, and hold harmless CNDRO LLC, its officers, directors, employees, and agents from and against any claims, damages, losses, costs, and expenses (including reasonable attorneys' fees) arising from or related to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Your use of our Services</li>
                    <li>Your violation of these Terms</li>
                    <li>Your violation of any applicable laws or regulations</li>
                    <li>Your infringement of any third-party rights</li>
                    <li>Any content you submit to our Services</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card className="p-8">
              <CardContent className="p-0 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <AlertTriangle className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Termination</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We may terminate or suspend your access to our Services at any time, with or without cause, and with or without notice. You may also terminate your use of our Services at any time.
                  </p>
                  <p>
                    Upon termination, your right to use our Services will cease immediately, and any provisions of these Terms that by their nature should survive termination will remain in effect.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card className="p-8">
              <CardContent className="p-0 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Scale className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Governing Law and Jurisdiction</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of the jurisdiction where CNDRO LLC is incorporated, without regard to its conflict of law principles.
                  </p>
                  <p>
                    Any disputes arising from or related to these Terms or our Services shall be resolved through binding arbitration or in the courts of competent jurisdiction in our location.
                  </p>
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
                  <h2 className="text-2xl font-bold">Contact Information</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    If you have any questions about these Terms of Use, please contact us:
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>Email:</strong> legal@cndro.com</p>
                    <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                    <p><strong>Address:</strong> 123 Business District, Tech City, TC 12345</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Changes to Terms */}
            <Card className="p-8">
              <CardContent className="p-0 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Changes to These Terms</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We reserve the right to modify these Terms at any time. We will notify you of any material changes by:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Posting the updated Terms on our website</li>
                    <li>Updating the "Last updated" date</li>
                    <li>Sending you an email notification (if applicable)</li>
                  </ul>
                  <p>
                    Your continued use of our Services after any changes constitutes acceptance of the new Terms.
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

