import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Zap, 
  Target, 
  BarChart3,
  Database,
  Code,
  Smartphone
} from 'lucide-react'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  Software Engineering Excellence
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  Predict <span className="text-primary">Optimize</span> Succeed
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  We are a software engineering firm who aim to provide support to individuals and businesses alike using engineering principles to solve problems and meet user needs.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group btn-gradient">
                  Let's Talk
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg">
                  View Our Work
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 p-8">
                  <Card className="p-4 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0 text-center">
                      <Database className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <p className="text-sm font-medium">Data Analytics</p>
                    </CardContent>
                  </Card>
                  <Card className="p-4 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0 text-center">
                      <Code className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <p className="text-sm font-medium">Software Dev</p>
                    </CardContent>
                  </Card>
                  <Card className="p-4 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0 text-center">
                      <Smartphone className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <p className="text-sm font-medium">App Development</p>
                    </CardContent>
                  </Card>
                  <Card className="p-4 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0 text-center">
                      <BarChart3 className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <p className="text-sm font-medium">Consulting</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data-Driven Decisions Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Discover the Power of Reliable Data for Smarter Business Decisions
              </h2>
              <p className="text-lg text-muted-foreground">
                Let's discuss more about your business and learn how our solutions can transform your decision-making process and drive your business forward.
              </p>
              <Button size="lg" className="group">
                Schedule Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <div className="relative">
              <Card className="p-8">
                <CardContent className="p-0 space-y-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span className="font-medium">Data-driven insights</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span className="font-medium">Automated reporting</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span className="font-medium">Real-time analytics</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span className="font-medium">Strategic planning</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Consultancy Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Explore Our Consultancy Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              At CNDRO, we offer top-tier consultancy services and business meetings guided by our strong principles. We provide career opportunities and invite you to explore our consultancy expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 space-y-4">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Strategic Planning</h3>
                <p className="text-muted-foreground">
                  Our mission is to lead you to a digitally driven business landscape with smart interactions, automated processes, and future-ready solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 space-y-4">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Team Development</h3>
                <p className="text-muted-foreground">
                  We provide career opportunities and comprehensive training programs to help individuals and teams reach their full potential.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 space-y-4">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Process Automation</h3>
                <p className="text-muted-foreground">
                  Transform your business operations with intelligent automation solutions that increase efficiency and reduce manual work.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg font-medium mb-4">
              Schedule your free consultation now and take the first step towards success.
            </p>
            <Button size="lg">
              Book Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* App Development Section */}
      <section id="development" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              From Idea to Impact - We Build Apps That Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              At CNDRO LLC, we craft digital solutions that drive growth. From streamlining operations and boosting customer engagement to enhancing reporting and transforming e-commerce, we build with our clients' success in mind.
            </p>
          </div>

          <div className="space-y-8 mb-12">
            <h3 className="text-2xl font-bold text-center">
              All the apps we have developed – All built with scalability, strategy, and your goals in mind.
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-0 space-y-3">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold">Data-Driven Reporting App</h4>
                </CardContent>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-0 space-y-3">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold">Learning Management System</h4>
                </CardContent>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-0 space-y-3">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <Database className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold">Customer Relationship Management (CRM)</h4>
                </CardContent>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-0 space-y-3">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <Smartphone className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold">E-commerce Order Management App</h4>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="p-8 bg-primary/5 border-primary/20">
            <CardContent className="p-0 text-center space-y-4">
              <h3 className="text-2xl font-bold">LET'S BUILD OUR CLIENTS' SUCCESS STORY</h3>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                When our clients choose CNDRO LLC, they gain more than just an app — they gain a dedicated partner who's invested in our clients' growth. Let's discuss our clients' vision, explore what's possible, and build an app that becomes a cornerstone of our clients' business success.
              </p>
              <Button size="lg" className="mt-6">
                Start Your Project
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}

