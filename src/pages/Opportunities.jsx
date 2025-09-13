import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { 
  ArrowRight, 
  Users,
  GraduationCap,
  Award,
  Clock,
  CheckCircle,
  DollarSign,
  BookOpen,
  Code,
  Database,
  BarChart3
} from 'lucide-react'

export default function Opportunities() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    course: '',
    otherCourse: '',
    occupation: '',
    experience: '',
    careerBenefit: '',
    grantReason: '',
    careerGoals: '',
    previousTraining: '',
    additionalInfo: ''
  })

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center space-y-8">
            <Badge variant="secondary" className="w-fit mx-auto">
              Opportunities Hub
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              OPPORTUNITIES HUB
            </h1>
          </div>
        </div>
      </section>

      {/* Internship Program Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Internship Program
              </h2>
              <p className="text-lg text-muted-foreground">
                Are you passionate about data and eager to kickstart your career in data analytics? Join us for a hands-on learning experience through our Free Internship Program at Cndro, a leading data analytics training and consulting firm.
              </p>
            </div>
            <div className="relative">
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardContent className="p-0 text-center">
                  <GraduationCap className="h-16 w-16 mx-auto text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Free Internship Program</h3>
                  <p className="text-muted-foreground">Hands-on learning experience in data analytics</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About the Internship Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              About The Internship
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our internship is designed for students and recent graduates who are enthusiastic about exploring the world of data analytics. This program offers a unique opportunity to gain real-world experience, build your skills, and work alongside industry professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 space-y-4">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Assist with Data Analysis</h3>
                <p className="text-muted-foreground">
                  Work on real client projects, helping to analyze data, identify trends, and generate insights.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 space-y-4">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Support Ongoing Research</h3>
                <p className="text-muted-foreground">
                  Contribute to research projects that explore new techniques and tools in data analytics.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 space-y-4">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Participate in Training Sessions</h3>
                <p className="text-muted-foreground">
                  Attend workshops and training sessions to learn about the latest technologies and methodologies in the field.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 space-y-4">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Collaborate with Our Team</h3>
                <p className="text-muted-foreground">
                  Engage with our experienced analysts and consultants, gaining valuable industry insights and professional mentorship.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We're Looking For Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              What We're Looking For
            </h2>
            <p className="text-lg text-muted-foreground">
              We welcome applications from individuals who are:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <CardContent className="p-0 space-y-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <div>
                    <h4 className="font-semibold">Curious and Eager to Learn</h4>
                    <p className="text-muted-foreground">You should have a strong interest in data analytics and a desire to expand your knowledge.</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <div>
                    <h4 className="font-semibold">Detail-Oriented</h4>
                    <p className="text-muted-foreground">A keen eye for detail and accuracy is essential when working with data.</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <div>
                    <h4 className="font-semibold">Good with Numbers</h4>
                    <p className="text-muted-foreground">Basic knowledge of statistics or experience with data tools (like Tableau, Alteryx, SQL, or Python) is a plus but not required.</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <div>
                    <h4 className="font-semibold">A Team Player</h4>
                    <p className="text-muted-foreground">Collaboration is key in our work, so being able to work well with others is important.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 bg-primary/5 border-primary/20">
              <CardContent className="p-0 space-y-6">
                <h3 className="text-xl font-semibold">Why Intern with Us?</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Award className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium">Real-World Experience</h4>
                      <p className="text-sm text-muted-foreground">Gain practical experience that will enhance your resume and help you stand out in the job market.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium">Mentorship</h4>
                      <p className="text-sm text-muted-foreground">Learn from experts who are passionate about sharing their knowledge.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium">Networking</h4>
                      <p className="text-sm text-muted-foreground">Connect with professionals and peers in the data analytics industry.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium">Flexible Schedule</h4>
                      <p className="text-sm text-muted-foreground">We understand that everyone has different commitments, so we offer flexibility in working hours.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Award className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium">Career Growth</h4>
                      <p className="text-sm text-muted-foreground">Successful interns may be considered for full-time positions or future opportunities within the company.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Card className="p-8 bg-secondary/5 border-secondary/20 max-w-2xl mx-auto">
              <CardContent className="p-0 space-y-4">
                <h3 className="text-xl font-semibold">How to Apply</h3>
                <p className="text-muted-foreground">
                  Ready to start your journey in data analytics? Send us your resume and a brief cover letter explaining why you're interested in the internship and what you hope to gain from it.
                </p>
                <div className="space-y-2">
                  <p className="font-medium">Application Deadline: 29/07/2025</p>
                  <p className="text-muted-foreground">Email: info@cndro.com</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  We look forward to hearing from you and helping you launch your career in data analytics!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Grant Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16">
            <Badge variant="outline" className="text-lg px-4 py-2">
              <DollarSign className="h-5 w-5 mr-2" />
              UNLOCK A $4000 GRANT ON ALL OUR TRAINING SERVICES!
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Elevate Your Skills
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Seize this opportunity to enhance your professional skills with our top-tier training programs. With a $4000 grant available for a limited time, there has never been a better moment to invest in your future.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Elevate your skills with our industry-leading training programs, now with a $4000 grant available for a limited time. Whether you're starting your career or aiming to enhance your expertise, we have the right course for you. Enroll today and take the first step towards a brighter future!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0 space-y-4">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Tableau</h3>
                <p className="text-muted-foreground">Master data visualization to create insightful dashboards.</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0 space-y-4">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">SQL</h3>
                <p className="text-muted-foreground">Acquire essential SQL skills for effective database management.</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0 space-y-4">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Python</h3>
                <p className="text-muted-foreground">From basics to advanced programming, enhance your coding skills.</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center space-y-8 mb-16">
            <h3 className="text-2xl font-bold">How to Get Your $4000 Grant</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="h-12 w-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <h4 className="font-semibold mb-2">Explore Our Courses</h4>
                <p className="text-muted-foreground">Browse our wide range of training programs.</p>
              </div>
              <div className="text-center">
                <div className="h-12 w-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <h4 className="font-semibold mb-2">Apply for the Grant</h4>
                <p className="text-muted-foreground">Fill out a simple application form on our website.</p>
              </div>
              <div className="text-center">
                <div className="h-12 w-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <h4 className="font-semibold mb-2">Start Learning</h4>
                <p className="text-muted-foreground">Once approved, enjoy $4000 off your chosen program.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grant Application Form */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold">Grant Application Form</h2>
              <p className="text-muted-foreground">Complete the form below to apply for your $4000 training grant</p>
            </div>

            <Card className="p-8">
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold">Personal Information</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Course Selection */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold">Course Selection</h3>
                    <div className="space-y-2">
                      <Label htmlFor="course">Select your Preferred Course</Label>
                      <Select value={formData.course} onValueChange={(value) => handleInputChange('course', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Preferred Course Selection" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tableau">Tableau</SelectItem>
                          <SelectItem value="sql">SQL</SelectItem>
                          <SelectItem value="python">Python</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    {formData.course === 'other' && (
                      <div className="space-y-2">
                        <Label htmlFor="otherCourse">Other (please specify):</Label>
                        <Input
                          id="otherCourse"
                          value={formData.otherCourse}
                          onChange={(e) => handleInputChange('otherCourse', e.target.value)}
                        />
                      </div>
                    )}
                  </div>

                  {/* Background Information */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold">Background Information</h3>
                    <div className="space-y-2">
                      <Label htmlFor="occupation">Current Occupation:</Label>
                      <Input
                        id="occupation"
                        value={formData.occupation}
                        onChange={(e) => handleInputChange('occupation', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="experience">Relevant Experience:</Label>
                      <Textarea
                        id="experience"
                        value={formData.experience}
                        onChange={(e) => handleInputChange('experience', e.target.value)}
                        rows={3}
                      />
                    </div>
                  </div>

                  {/* Grant Application */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold">Grant Application</h3>
                    <div className="space-y-2">
                      <Label htmlFor="careerBenefit">How will this course benefit your career?</Label>
                      <Textarea
                        id="careerBenefit"
                        value={formData.careerBenefit}
                        onChange={(e) => handleInputChange('careerBenefit', e.target.value)}
                        rows={3}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="grantReason">Why are you applying for this grant?</Label>
                      <Textarea
                        id="grantReason"
                        value={formData.grantReason}
                        onChange={(e) => handleInputChange('grantReason', e.target.value)}
                        rows={3}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="careerGoals">What are your long-term career goals?</Label>
                      <Textarea
                        id="careerGoals"
                        value={formData.careerGoals}
                        onChange={(e) => handleInputChange('careerGoals', e.target.value)}
                        rows={3}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="previousTraining">Have you received any previous training or certifications in this field? If yes, please provide details.</Label>
                      <Textarea
                        id="previousTraining"
                        value={formData.previousTraining}
                        onChange={(e) => handleInputChange('previousTraining', e.target.value)}
                        rows={3}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="additionalInfo">Is there any additional information you would like to share about your motivation or circumstances?</Label>
                      <Textarea
                        id="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                        rows={3}
                      />
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full group">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}

