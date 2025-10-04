import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { toast } from 'sonner'
import { 
  ArrowRight, 
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Users,
  Briefcase
} from 'lucide-react'

// Mock API function for development
const mockContactAPI = async (formData) => {
  await new Promise(resolve => setTimeout(resolve, 1500))
  console.log('📧 Contact form submitted with data:', formData)
  return { ok: true }
}

// Real API function for production
const realContactAPI = async (formData) => {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })
  
  const data = await res.json().catch(() => ({}))
  
  if (!res.ok || !data?.ok) {
    const msg = data?.error || 'Submission failed'
    throw new Error(msg)
  }
  
  return { ok: true }
}

export default function Contact() {
  const liveRef = useRef(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    service: ''
  })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  // Check if we're in development mode
  const isDevelopment = import.meta.env.DEV || window.location.hostname === 'localhost'

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Full name is required'
        if (value.trim().length < 2) return 'Please enter your full name'
        return ''
      case 'email':
        if (!value.trim()) return 'Email is required'
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value)) return 'Please enter a valid email'
        return ''
      case 'subject':
        if (!value.trim()) return 'Subject is required'
        if (value.trim().length < 3) return 'Subject must be at least 3 characters'
        return ''
      case 'message':
        if (!value.trim()) return 'Message is required'
        if (value.trim().length < 10) return 'Message must be at least 10 characters'
        return ''
      default:
        return ''
    }
  }

  const handleInputChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (touched[name]) {
      const error = validateField(name, value)
      setErrors(prev => ({ ...prev, [name]: error }))
    }
  }

  const handleBlur = (name) => {
    setTouched(prev => ({ ...prev, [name]: true }))
    const error = validateField(name, formData[name])
    setErrors(prev => ({ ...prev, [name]: error }))
  }

  const validateForm = () => {
    const newErrors = {}
    const requiredFields = ['name', 'email', 'subject', 'message']
    
    requiredFields.forEach(field => {
      const error = validateField(field, formData[field])
      if (error) newErrors[field] = error
    })
    
    setErrors(newErrors)
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true
    })
    
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      toast?.error ? toast.error('Please fix the errors in the form.') : null
      return
    }

    setIsSubmitting(true)
    
    try {
      let result
      
      if (isDevelopment) {
        // Use mock API in development
        result = await mockContactAPI(formData)
        toast?.success ? toast.success('✅ Message sent successfully! (Development mode - using mock API)') : null
      } else {
        // Use real API in production
        result = await realContactAPI(formData)
        toast?.success ? toast.success('Message sent! We will get back to you within 24 hours.') : null
      }
      
      if (liveRef.current) {
        liveRef.current.textContent = 'Your message has been sent successfully.'
      }
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        service: ''
      })
      setErrors({})
      setTouched({})
      
    } catch (error) {
      console.error('Form submission error:', error)
      const errorMessage = error.message || 'Network error. Please try again.'
      toast?.error ? toast.error(`There was a problem sending your message: ${errorMessage}`) : null
      if (liveRef.current) {
        liveRef.current.textContent = `Error: ${errorMessage}`
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center space-y-8">
            <Badge variant="secondary" className="w-fit mx-auto">
              Contact Us
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Let's Start a Conversation
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge software solutions? We're here to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Get in Touch</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
                {isDevelopment && (
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <p className="text-sm text-amber-800">
                      🚧 <strong>Development Mode:</strong> Using mock API. In production, this will send real emails via Mailgun.
                    </p>
                  </div>
                )}
              </div>

              <Card className="p-8">
                <CardContent className="p-0">
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div className="sr-only" aria-live="polite" aria-atomic="true" ref={liveRef}></div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          onBlur={() => handleBlur('name')}
                          disabled={isSubmitting}
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? 'name-error' : undefined}
                        />
                        {errors.name && (
                          <p id="name-error" className="text-destructive text-sm">
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          onBlur={() => handleBlur('email')}
                          disabled={isSubmitting}
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                        />
                        {errors.email && (
                          <p id="email-error" className="text-destructive text-sm">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service of Interest</Label>
                      <Select 
                        value={formData.service} 
                        onValueChange={(value) => handleInputChange('service', value)}
                        disabled={isSubmitting}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="app-development">App Development</SelectItem>
                          <SelectItem value="data-analytics">Data Analytics</SelectItem>
                          <SelectItem value="consulting">Consulting Services</SelectItem>
                          <SelectItem value="fractional-ceo">Fractional CEO</SelectItem>
                          <SelectItem value="training">Training Programs</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        onBlur={() => handleBlur('subject')}
                        disabled={isSubmitting}
                        aria-invalid={!!errors.subject}
                        aria-describedby={errors.subject ? 'subject-error' : undefined}
                      />
                      {errors.subject && (
                        <p id="subject-error" className="text-destructive text-sm">
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        rows={5}
                        placeholder="Tell us about your project or how we can help you..."
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        onBlur={() => handleBlur('message')}
                        disabled={isSubmitting}
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                      />
                      {errors.message && (
                        <p id="message-error" className="text-destructive text-sm">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <Button type="submit" size="lg" className="w-full group" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Contact Information</h2>
                <p className="text-muted-foreground">
                  We're here to help you succeed. Reach out to us through any of these channels.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold">Email Us</h3>
                        <p className="text-muted-foreground">info@cndro.com</p>
                        <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold">Call Us</h3>
                        <p className="text-muted-foreground">+1 (713)348-9243 (Ext-800)</p>
                        <p className="text-sm text-muted-foreground">Monday - Friday, 9 AM - 6 PM EST</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold">Visit Us</h3>
                        <p className="text-muted-foreground">5850 San Felipe St, <br />Houston, TX 77057, USA</p>
                        <p className="text-sm text-muted-foreground">By appointment only</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold">Business Hours</h3>
                        <div className="text-muted-foreground space-y-1">
                          <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                          <p>Saturday: 10:00 AM - 4:00 PM</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold">Quick Contact Options</h2>
            <p className="text-muted-foreground">
              Choose the best way to reach us based on your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow group">
              <CardContent className="p-0 space-y-6">
                <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <MessageSquare className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">General Inquiries</h3>
                  <p className="text-muted-foreground">
                    Questions about our services, pricing, or how we can help your business.
                  </p>
                </div>
                <Button variant="outline" className="group/btn">
                  Start Conversation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow group">
              <CardContent className="p-0 space-y-6">
                <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Project Consultation</h3>
                  <p className="text-muted-foreground">
                    Ready to discuss your project? Let's schedule a detailed consultation.
                  </p>
                </div>
                <Button variant="outline" className="group/btn">
                  Book Consultation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow group">
              <CardContent className="p-0 space-y-6">
                <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Partnership Opportunities</h3>
                  <p className="text-muted-foreground">
                    Interested in partnering with us? Let's explore collaboration opportunities.
                  </p>
                </div>
                <Button variant="outline" className="group/btn">
                  Explore Partnership
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Find answers to common questions about our services and process.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold mb-2">How quickly can you start on my project?</h3>
                <p className="text-muted-foreground">
                  We typically begin new projects within 1-2 weeks of contract signing, depending on our current workload and project complexity.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold mb-2">Do you work with startups or only established companies?</h3>
                <p className="text-muted-foreground">
                  We work with businesses of all sizes, from early-stage startups to Fortune 500 companies. Our solutions are tailored to fit your specific needs and budget.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold mb-2">What's included in your consulting services?</h3>
                <p className="text-muted-foreground">
                  Our consulting includes strategic planning, technical architecture review, process optimization, and ongoing support to help your business grow.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold mb-2">Do you provide ongoing support after project completion?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer various support packages including maintenance, updates, and technical support to ensure your solution continues to perform optimally.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}