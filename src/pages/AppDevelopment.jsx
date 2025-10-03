import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  ArrowRight, 
  CheckCircle,
  BarChart3,
  Users,
  Database,
  Smartphone,
  TrendingUp,
  Clock,
  Award,
  Target,
  Zap
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function AppDevelopment() {
  const navigate = useNavigate()
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center space-y-8">
            <Badge variant="secondary" className="w-fit mx-auto">
              App Development
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Apps Built for Impact. Designed for You.
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Unlock your free 45-minute strategy session—discover three custom growth opportunities for your business.
            </p>
            <Badge variant="outline" className="text-sm">
              Limited spots available this month.
            </Badge>
          </div>
        </div>
      </section>

      {/* Strategy Session CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">
                Unlock Your Free 45-Minute Strategy Session—Discover Three Custom Growth Opportunities For Your Business.
              </h2>
            </div>
            <div className="text-center lg:text-right">
              <p className="text-lg mb-4">Limited Spots Available This Month.</p>
              <Button variant="secondary" size="lg" className="group" onClick={() => navigate('/contact')}>
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* We Don't Just Build Apps Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              We Don't Just Build Apps. We Build What Matters
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              At CNDRO LLC, we craft digital solutions that drive growth. From streamlining operations and boosting customer engagement to enhancing reporting and transforming ecommerce, we build with our clients' success in mind.
            </p>
          </div>
        </div>
      </section>

      {/* Why CNDRO Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Why CNDRO?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 space-y-4">
                <div className="flex items-center space-x-3">
                  <Award className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Proven Results</h3>
                </div>
                <p className="text-muted-foreground">
                  Our portfolio speaks for itself — every app we build delivers tangible outcomes.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 space-y-4">
                <div className="flex items-center space-x-3">
                  <Target className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Tailored Solutions</h3>
                </div>
                <p className="text-muted-foreground">
                  We take the time to understand our clients' business inside and out, building software that fits like a glove.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 space-y-4">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Future-Ready Design</h3>
                </div>
                <p className="text-muted-foreground">
                  Our apps grow with our clients' business, adapting as our clients' needs evolve.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 space-y-4">
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Ongoing Support & Partnership</h3>
                </div>
                <p className="text-muted-foreground">
                  We don't just launch our clients' app and walk away — we stay by our clients' side, refining, improving, and ensuring lasting success.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground">
              We build apps swiftly, following best practices to ensure scalability and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Proven App Development Success Stories
            </h2>
          </div>

          <div className="space-y-12">
            {/* Data-Driven Reporting App */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <BarChart3 className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold">DATA-DRIVEN REPORTING APP</h3>
                    </div>
                    <Badge variant="outline" className="w-fit">FULLY DEPLOYED & THRIVING</Badge>
                    
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                        <div>
                          <h4 className="font-semibold">From Complexity to Clarity:</h4>
                          <p className="text-muted-foreground">We developed an app that turns raw data into dynamic, easy-to-understand dashboards.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                        <div>
                          <h4 className="font-semibold">Next-Level Analytics:</h4>
                          <p className="text-muted-foreground">The app empowers our clients to track sales, monitor performance, and make strategic decisions with confidence.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                        <div>
                          <h4 className="font-semibold">Impact:</h4>
                          <p className="text-muted-foreground">Our clients reported quicker decision-making, smarter resource allocation, and a sharper understanding of business metrics. It helped our clients to move from intuition-based choices to data-driven decisions.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-8 text-center">
                    <BarChart3 className="h-24 w-24 mx-auto text-primary mb-4" />
                    <p className="text-sm text-muted-foreground">Interactive dashboards and real-time analytics</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Learning Management System */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-8 text-center">
                    <Users className="h-24 w-24 mx-auto text-primary mb-4" />
                    <p className="text-sm text-muted-foreground">Comprehensive learning platform</p>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold">Learning Management System</h3>
                    </div>
                    <Badge variant="outline" className="w-fit">Fully Developed and Transforming Learning Experiences</Badge>
                    
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                        <div>
                          <h4 className="font-semibold">Effortless Course Management:</h4>
                          <p className="text-muted-foreground">Our LMS makes it simple for our clients to use, deliver, and oversee learning programs.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                        <div>
                          <h4 className="font-semibold">Comprehensive Platform:</h4>
                          <p className="text-muted-foreground">With built-in progress tracking, instructor tools, and support features, everything is in one place.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                        <div>
                          <h4 className="font-semibold">Impact:</h4>
                          <p className="text-muted-foreground">Our clients praised the platform for enhancing training outcomes, boosting learner participation, and reducing administrative headaches. It consolidates our clients' communication.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CRM System */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Database className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold">Customer Relationship Management App (CRM)</h3>
                    </div>
                    <Badge variant="outline" className="w-fit">Built for CNDRO's Internal Team Management</Badge>
                    
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                        <div>
                          <h4 className="font-semibold">Complete Team Oversight:</h4>
                          <p className="text-muted-foreground">We built this CRM to manage CNDRO's clients, projects, and internal operations with precision.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                        <div>
                          <h4 className="font-semibold">Refined Workflows:</h4>
                          <p className="text-muted-foreground">The app automates follow-ups, schedules appointments, and centralizes communication for a smoother process.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                        <div>
                          <h4 className="font-semibold">Impact:</h4>
                          <p className="text-muted-foreground">Our team saw increased productivity, better organization, and a stronger ability to deliver seamless client experiences. This app perfectly aligns with our business because it was custom-built. Unlike other solutions that forced us to adapt our processes, this one adapts to fit us.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-8 text-center">
                    <Database className="h-24 w-24 mx-auto text-primary mb-4" />
                    <p className="text-sm text-muted-foreground">Custom CRM solution</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* E-commerce Order Management */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-8 text-center">
                    <Smartphone className="h-24 w-24 mx-auto text-primary mb-4" />
                    <p className="text-sm text-muted-foreground">E-commerce automation platform</p>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Smartphone className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold">E-commerce Order Management App</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                        <div>
                          <h4 className="font-semibold">Custom-Built to Match the Vision:</h4>
                          <p className="text-muted-foreground">We're finalizing an app designed to handle orders, automate inventory, and introduce unique features that go beyond standard platforms.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                        <div>
                          <h4 className="font-semibold">Early Positive Feedback:</h4>
                          <p className="text-muted-foreground">Our clients are excited about the app's intuitive design, time-saving automation, and overall functionality.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                        <div>
                          <h4 className="font-semibold">Impact:</h4>
                          <p className="text-muted-foreground">Early testing shows faster order fulfillment, fewer manual errors, and a more efficient end-to-end process. Our clients' labor-intensive process, reliant on two full-time assistants, led to human errors, customer dissatisfaction, and rising costs due to incorrect shipments.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-12 bg-primary/5 border-primary/20 text-center">
            <CardContent className="p-0 space-y-6">
              <h2 className="text-3xl font-bold">Ready to Build Your Success Story?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Let's discuss your vision, explore what's possible, and build an app that becomes a cornerstone of your business success.
              </p>
              <Button size="lg" className="group" onClick={() => navigate('/contact')}>
                Start Your Project Today
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}

