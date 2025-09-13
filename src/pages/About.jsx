import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  ArrowRight, 
  Target,
  Eye,
  Users,
  Award,
  CheckCircle,
  Building,
  GraduationCap,
  TrendingUp
} from 'lucide-react'

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center space-y-8">
            <Badge variant="secondary" className="w-fit mx-auto">
              About CNDRO
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              About Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are a software engineering firm who aim to provide support to individuals and businesses alike using engineering principles to solve problems and meet user needs.
            </p>
            <Button size="lg" className="group">
              Let's Talk
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Our History Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Our History
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  CNDRO was a leading data analytics firm leveraging the power of Tableau, Alteryx, and other advanced tools to help individuals and organizations find answers in data.
                </p>
                <p>
                  Whether you seek to upskill through our training programs or need expert assistance with data projects, CNDRO is your trusted partner.
                </p>
                <p>
                  We transform complex data into clear insights and actionable solutions.
                </p>
              </div>
            </div>
            <div className="relative">
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardContent className="p-0 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Building className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Data Analytics Leadership</h4>
                      <p className="text-muted-foreground">Established expertise in data solutions</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Training Excellence</h4>
                      <p className="text-muted-foreground">Comprehensive upskilling programs</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Proven Results</h4>
                      <p className="text-muted-foreground">Clear insights and actionable solutions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Our Vision</h2>
                </div>
                <p className="text-lg text-muted-foreground">
                  To empower our clients to achieve their goals while creating meaningful opportunities and resources that empower, mentor, and positively impact underrepresented communities.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Our Mission</h2>
                </div>
                <p className="text-lg text-muted-foreground">
                  We are a software engineering firm who aim to provide support to individuals and businesses alike using engineering principles to solve problems and meet user needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Goals Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Our Company Goals
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We are committed to excellence in everything we do, with clear objectives that drive our success and our clients' growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 space-y-4">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Top-Notch Engineers</h3>
                <p className="text-muted-foreground">
                  Provide organizations with top-notch software engineers who deliver exceptional results and drive innovation.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 space-y-4">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Professional Training</h3>
                <p className="text-muted-foreground">
                  Train stellar professional software engineers through comprehensive programs and hands-on experience.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 space-y-4">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Top Consultancy</h3>
                <p className="text-muted-foreground">
                  To make CNDRO LLC a top consultancy firm by offering smart solutions and guidance that help clients grow and tackle business challenges.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Solutions Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Our Core Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We're here to provide you with the expert advice and skilled professionals you need to take your business to the next level. We offer a suite of core solutions designed to support all your needs through direct client services.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <div className="flex items-center space-x-3 justify-center">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="font-medium">Expert Consultation</span>
              </div>
              <div className="flex items-center space-x-3 justify-center">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="font-medium">Skilled Professionals</span>
              </div>
              <div className="flex items-center space-x-3 justify-center">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="font-medium">Direct Client Services</span>
              </div>
              <div className="flex items-center space-x-3 justify-center">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="font-medium">Comprehensive Support</span>
              </div>
            </div>

            <Button size="lg" className="mt-8">
              Learn More About Our Services
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

