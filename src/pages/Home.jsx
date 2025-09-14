import { useState, useEffect } from 'react'
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
      <section id="home" className="relative overflow-hidden hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10 text-center lg:text-left">
              <div className="space-y-6">
                <Badge variant="secondary" className="w-fit mx-auto lg:mx-0 glow-accent">
                  Software Engineering Excellence
                </Badge>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                  Predict <span className="text-gradient">Optimize</span> Succeed
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  We are a software engineering firm who aim to provide support to individuals and businesses alike using engineering principles to solve problems and meet user needs.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <Button size="lg" className="group btn-gradient text-lg px-8 py-4">
                  Let's Talk
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 card-elevated">
                  View Our Work
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl flex items-center justify-center card-elevated">
                <div className="grid grid-cols-2 gap-6 p-10">
                  <Card className="p-6 card-elevated hover:scale-105 transition-transform duration-200">
                    <CardContent className="p-0 text-center">
                      <Database className="h-10 w-10 mx-auto mb-3 text-primary" />
                      <p className="text-sm font-medium">Data Analytics</p>
                    </CardContent>
                  </Card>
                  <Card className="p-6 card-elevated hover:scale-105 transition-transform duration-200">
                    <CardContent className="p-0 text-center">
                      <Code className="h-10 w-10 mx-auto mb-3 text-primary" />
                      <p className="text-sm font-medium">Software Dev</p>
                    </CardContent>
                  </Card>
                  <Card className="p-6 card-elevated hover:scale-105 transition-transform duration-200">
                    <CardContent className="p-0 text-center">
                      <Smartphone className="h-10 w-10 mx-auto mb-3 text-primary" />
                      <p className="text-sm font-medium">App Development</p>
                    </CardContent>
                  </Card>
                  <Card className="p-6 card-elevated hover:scale-105 transition-transform duration-200">
                    <CardContent className="p-0 text-center">
                      <BarChart3 className="h-10 w-10 mx-auto mb-3 text-primary" />
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
      <section className="py-32 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
                Discover the Power of <span className="text-gradient">Reliable Data</span> for Smarter Business Decisions
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Let's discuss more about your business and learn how our solutions can transform your decision-making process and drive your business forward.
              </p>
              <Button size="lg" className="group btn-gradient text-lg px-8 py-4">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <div className="relative">
              <Card className="p-10 card-elevated glow-accent">
                <CardContent className="p-0 space-y-8">
                  <div className="flex items-center space-x-4">
                    <div className="h-3 w-3 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
                    <span className="font-semibold text-lg">Data-driven insights</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="h-3 w-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
                    <span className="font-semibold text-lg">Automated reporting</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="h-3 w-3 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full"></div>
                    <span className="font-semibold text-lg">Real-time analytics</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="h-3 w-3 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
                    <span className="font-semibold text-lg">Strategic planning</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Consultancy Services Section */}
      <section className="py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
              Explore Our <span className="text-gradient">Consultancy Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              At CNDRO, we offer top-tier consultancy services and business meetings guided by our strong principles. We provide career opportunities and invite you to explore our consultancy expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <Card className="p-8 card-elevated group hover:scale-105 transition-all duration-200">
              <CardContent className="p-0 space-y-6">
                <div className="h-16 w-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center glow-accent">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Strategic Planning</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our mission is to lead you to a digitally driven business landscape with smart interactions, automated processes, and future-ready solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 card-elevated group hover:scale-105 transition-all duration-200">
              <CardContent className="p-0 space-y-6">
                <div className="h-16 w-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center glow-accent">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Team Development</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We provide career opportunities and comprehensive training programs to help individuals and teams reach their full potential.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 card-elevated group hover:scale-105 transition-all duration-200">
              <CardContent className="p-0 space-y-6">
                <div className="h-16 w-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center glow-accent">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Process Automation</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Transform your business operations with intelligent automation solutions that increase efficiency and reduce manual work.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16">
            <p className="text-xl text-muted-foreground mb-8">
              Schedule your free consultation now and take the first step towards success.
            </p>
            <Button size="lg" className="btn-gradient text-lg px-10 py-4">
              Book Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* App Development Section */}
      <section id="development" className="py-32 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
              From Idea to Impact - We Build <span className="text-gradient">Apps That Work</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              At CNDRO LLC, we craft digital solutions that drive growth. From streamlining operations and boosting customer engagement to enhancing reporting and transforming e-commerce, we build with our clients' success in mind.
            </p>
          </div>

          <div className="space-y-12 mb-16">
            <h3 className="text-3xl font-bold text-center">
              All the apps we have developed – All built with scalability, strategy, and your goals in mind.
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-8 text-center card-elevated hover:scale-105 transition-all duration-200">
                <CardContent className="p-0 space-y-4">
                  <div className="h-16 w-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto glow-accent">
                    <BarChart3 className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-bold text-lg">Data-Driven Reporting App</h4>
                </CardContent>
              </Card>

              <Card className="p-8 text-center card-elevated hover:scale-105 transition-all duration-200">
                <CardContent className="p-0 space-y-4">
                  <div className="h-16 w-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto glow-accent">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-bold text-lg">Learning Management System</h4>
                </CardContent>
              </Card>

              <Card className="p-8 text-center card-elevated hover:scale-105 transition-all duration-200">
                <CardContent className="p-0 space-y-4">
                  <div className="h-16 w-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto glow-accent">
                    <Database className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-bold text-lg">Customer Relationship Management (CRM)</h4>
                </CardContent>
              </Card>

              <Card className="p-8 text-center card-elevated hover:scale-105 transition-all duration-200">
                <CardContent className="p-0 space-y-4">
                  <div className="h-16 w-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto glow-accent">
                    <Smartphone className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-bold text-lg">E-commerce Order Management App</h4>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 p-12 text-center card-elevated">
            <CardContent className="p-0 space-y-6">
              <h3 className="text-3xl font-bold">
                LET'S BUILD OUR CLIENTS' <span className="text-gradient">SUCCESS STORY</span>
              </h3>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                When our clients choose CNDRO LLC, they gain more than just an app — they gain a dedicated partner who's invested in our clients' growth. Let's discuss our clients' vision, explore what's possible, and build an app that becomes a cornerstone of our clients' business success.
              </p>
              <Button size="lg" className="btn-gradient text-lg px-10 py-4 group">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}

