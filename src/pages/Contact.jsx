import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
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

const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  service: z.string().optional(),
})

export default function Contact() {
  const liveRef = useRef(null)
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset, setFocus, setValue, watch } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', phone: '', company: '', subject: '', message: '', service: '' }
  })

  useEffect(() => {
    const first = Object.keys(errors)[0]
    if (first) setFocus(first)
  }, [errors, setFocus])

  const onSubmit = async (values) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || !data?.ok) {
        const msg = data?.error || 'Submission failed'
        toast?.error ? toast.error('There was a problem sending your message.') : null
        if (liveRef.current) liveRef.current.textContent = `Error: ${msg}`
        return
      }
      toast?.success ? toast.success('Message sent! We will get back to you within 24 hours.') : null
      if (liveRef.current) liveRef.current.textContent = 'Your message has been sent successfully.'
      reset()
    } catch {
      toast?.error ? toast.error('Network error. Please try again.') : null
      if (liveRef.current) liveRef.current.textContent = 'Network error while sending your message.'
    }
  }

  const serviceValue = watch('service')

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
              </div>

              <Card className="p-8">
                <CardContent className="p-0">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                    <div className="sr-only" aria-live="polite" aria-atomic="true" ref={liveRef}></div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          aria-invalid={!!errors.name || undefined}
                          aria-describedby={errors.name ? 'name-error' : undefined}
                          disabled={isSubmitting}
                          {...register('name')}
                        />
                        {errors.name && <p id="name-error" className="text-destructive text-sm">{errors.name.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          aria-invalid={!!errors.email || undefined}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                          disabled={isSubmitting}
                          {...register('email')}
                        />
                        {errors.email && <p id="email-error" className="text-destructive text-sm">{errors.email.message}</p>}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" disabled={isSubmitting} {...register('phone')} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input id="company" disabled={isSubmitting} {...register('company')} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service of Interest</Label>
                      <Select value={serviceValue} onValueChange={(v) => setValue('service', v, { shouldValidate: true })} disabled={isSubmitting}>
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
                        aria-invalid={!!errors.subject || undefined}
                        aria-describedby={errors.subject ? 'subject-error' : undefined}
                        disabled={isSubmitting}
                        {...register('subject')}
                      />
                      {errors.subject && <p id="subject-error" className="text-destructive text-sm">{errors.subject.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        rows={5}
                        placeholder="Tell us about your project or how we can help you..."
                        aria-invalid={!!errors.message || undefined}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                        disabled={isSubmitting}
                        {...register('message')}
                      />
                      {errors.message && <p id="message-error" className="text-destructive text-sm">{errors.message.message}</p>}
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

          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-2">How long does a typical project take?</h3>
                <p className="text-muted-foreground">
                  Project timelines vary depending on complexity and scope. Simple applications typically take 4-8 weeks, while complex enterprise solutions may take 3-6 months. We'll provide a detailed timeline during our initial consultation.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-2">What is your development process?</h3>
                <p className="text-muted-foreground">
                  We follow an agile development methodology with regular check-ins and updates. Our process includes discovery, planning, design, development, testing, and deployment phases with continuous client collaboration.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-2">Do you provide ongoing support after launch?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer comprehensive post-launch support including maintenance, updates, bug fixes, and feature enhancements. We believe in long-term partnerships with our clients.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-2">Can you work with our existing team?</h3>
                <p className="text-muted-foreground">
                  Absolutely! We can integrate with your existing development team, provide consulting services, or work as an extension of your team. We're flexible and adapt to your preferred working style.
                </p>
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
              <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Let's discuss your project and explore how we can help you achieve your business goals with innovative software solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="group">
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg">
                  View Our Portfolio
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}

