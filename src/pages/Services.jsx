import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  ArrowRight, 
  Target,
  Users,
  Zap,
  BarChart3,
  TrendingUp,
  CheckCircle,
  Briefcase,
  Clock,
  Shield,
  Star
} from 'lucide-react'

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center space-y-8">
            <Badge variant="secondary" className="w-fit mx-auto">
              CNDRO Fractional CEO
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              CNDRO Fractional CEO
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tech Strategy. Clear Direction. Real Growth.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                The Problem
              </h2>
              <p className="text-lg text-muted-foreground">
                Most small businesses don't fail due to lack of effort. They fail because they lack direction, the right systems, and someone who can lead their tech and operations.
              </p>
            </div>
            <div className="relative">
              <Card className="p-8 bg-destructive/5 border-destructive/20">
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 bg-destructive rounded-full"></div>
                    <span className="text-muted-foreground">Lack of clear direction</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 bg-destructive rounded-full"></div>
                    <span className="text-muted-foreground">Missing right systems</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 bg-destructive rounded-full"></div>
                    <span className="text-muted-foreground">No tech leadership</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 bg-destructive rounded-full"></div>
                    <span className="text-muted-foreground">Operational challenges</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              What We Do
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              CNDRO acts as your Fractional CEO, giving you senior-level strategy and hands-on execution without the overhead of a full-time executive.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We combine the insight of a CTO, the structure of a COO, and the urgency of a founder to move your business forward.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 space-y-4">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">CTO Insight</h3>
                <p className="text-muted-foreground">
                  Strategic technology leadership and technical vision to guide your business decisions.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 space-y-4">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">COO Structure</h3>
                <p className="text-muted-foreground">
                  Operational excellence and systematic processes to streamline your business operations.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 space-y-4">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Founder Urgency</h3>
                <p className="text-muted-foreground">
                  The drive and passion of a founder to execute quickly and achieve results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Who This Is For
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              This is built for founders and small teams who are:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <CardContent className="p-0 space-y-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <span className="font-medium">Stuck managing tech tasks with no clarity on what's essential</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <span className="font-medium">Unsure how to scale or automate their backend</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <span className="font-medium">Not ready to hire a full-time CTO or COO</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <span className="font-medium">Frustrated with freelancers and agencies who just deliver projects, not growth</span>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="p-6 bg-primary/5 border-primary/20">
                <CardContent className="p-0">
                  <h3 className="font-semibold mb-2">Perfect for:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Small business founders</li>
                    <li>• Growing startups</li>
                    <li>• Teams needing direction</li>
                    <li>• Businesses ready to scale</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="p-6 bg-secondary/5 border-secondary/20">
                <CardContent className="p-0">
                  <h3 className="font-semibold mb-2">Not suitable for:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Large enterprises</li>
                    <li>• One-time projects</li>
                    <li>• Businesses not ready for change</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              What You Get
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 space-y-4">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Strategic Direction</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Full business audit and 90-day execution roadmap</li>
                  <li>• Growth planning aligned to your goals</li>
                  <li>• Recommendations on tools, platforms, and processes</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 space-y-4">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Tech and Team Oversight</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Weekly leadership calls and reporting</li>
                  <li>• We manage your devs, designers, vendors, and tech stack</li>
                  <li>• Build or refine your operating systems and automations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 space-y-4">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Founder-Level Support</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Advising on hiring, funding, and tech execution</li>
                  <li>• Ongoing coaching for scaling, product development, and revenue growth</li>
                  <li>• Dedicated point of contact throughout</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Engagement Options Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Engagement Options
            </h2>
            <p className="text-lg font-medium">
              No long-term commitment. Cancel any time.
            </p>
            
            <div className="flex items-center justify-center space-x-6 mt-8">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">Flexible scheduling</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">No long-term contracts</span>
              </div>
              <div className="flex items-center space-x-2">
                <Briefcase className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">Professional service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <CardContent className="p-0 space-y-4">
                <p className="text-lg italic">
                  "Before CNDRO, I was managing everything and burning out. Now I just focus on sales and vision. They lead the rest."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-primary">F</span>
                  </div>
                  <div>
                    <p className="font-semibold">Fairdale</p>
                    <p className="text-sm text-muted-foreground">Founder</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0 space-y-4">
                <p className="text-lg italic">
                  "A full-time CTO wasn't in the budget. This gave me better results without overhead."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-primary">M</span>
                  </div>
                  <div>
                    <p className="font-semibold">Mark Adam</p>
                    <p className="text-sm text-muted-foreground">CEO</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-12 bg-primary/5 border-primary/20 text-center">
            <CardContent className="p-0 space-y-6">
              <h2 className="text-3xl font-bold">Book a Free Strategy Session here:</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We step into your business as a senior partner, helping you scale smarter with better systems, better execution, and a clear roadmap turn your ideas into successful ventures.
              </p>
              <Button size="lg" className="group">
                Book Free Strategy Session
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}

