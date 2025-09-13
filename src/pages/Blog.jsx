import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  ArrowRight, 
  Calendar,
  Clock,
  User,
  BookOpen,
  TrendingUp,
  Code,
  Database,
  BarChart3
} from 'lucide-react'

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Data Analytics: Trends to Watch in 2025",
      excerpt: "Explore the emerging trends in data analytics that will shape businesses in the coming year.",
      author: "CNDRO Team",
      date: "March 15, 2025",
      readTime: "5 min read",
      category: "Data Analytics",
      icon: BarChart3,
      featured: true
    },
    {
      id: 2,
      title: "Building Scalable Applications: Best Practices for Modern Development",
      excerpt: "Learn the essential principles for creating applications that grow with your business needs.",
      author: "CNDRO Team",
      date: "March 10, 2025",
      readTime: "8 min read",
      category: "Development",
      icon: Code,
      featured: false
    },
    {
      id: 3,
      title: "Database Optimization Techniques for Better Performance",
      excerpt: "Discover proven strategies to optimize your database performance and reduce query times.",
      author: "CNDRO Team",
      date: "March 5, 2025",
      readTime: "6 min read",
      category: "Database",
      icon: Database,
      featured: false
    },
    {
      id: 4,
      title: "From Data to Insights: A Complete Guide to Business Intelligence",
      excerpt: "Transform your raw data into actionable business insights with our comprehensive guide.",
      author: "CNDRO Team",
      date: "February 28, 2025",
      readTime: "10 min read",
      category: "Business Intelligence",
      icon: TrendingUp,
      featured: false
    },
    {
      id: 5,
      title: "Choosing the Right Technology Stack for Your Startup",
      excerpt: "Navigate the complex world of technology choices with our expert recommendations.",
      author: "CNDRO Team",
      date: "February 20, 2025",
      readTime: "7 min read",
      category: "Technology",
      icon: Code,
      featured: false
    },
    {
      id: 6,
      title: "Data Visualization Best Practices: Making Numbers Tell Stories",
      excerpt: "Learn how to create compelling visualizations that communicate your data effectively.",
      author: "CNDRO Team",
      date: "February 15, 2025",
      readTime: "9 min read",
      category: "Data Visualization",
      icon: BarChart3,
      featured: false
    }
  ]

  const categories = [
    "All",
    "Data Analytics",
    "Development", 
    "Database",
    "Business Intelligence",
    "Technology",
    "Data Visualization"
  ]

  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center space-y-8">
            <Badge variant="secondary" className="w-fit mx-auto">
              CNDRO Blog
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Insights & Expertise
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay updated with the latest trends, best practices, and insights in software engineering, data analytics, and technology.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Featured Article</h2>
            </div>
            
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-12 flex items-center justify-center">
                  <featuredPost.icon className="h-32 w-32 text-primary" />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <Badge variant="outline">{featuredPost.category}</Badge>
                      <Badge variant="secondary">Featured</Badge>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold">{featuredPost.title}</h3>
                    <p className="text-lg text-muted-foreground">{featuredPost.excerpt}</p>
                    <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <Button className="group w-fit">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Categories Filter */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Latest Articles</h2>
            <p className="text-muted-foreground">
              Discover insights, tutorials, and industry best practices from our team of experts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 text-center">
                  <post.icon className="h-16 w-16 mx-auto text-primary" />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">{post.category}</Badge>
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="group/btn">
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-12 bg-primary/5 border-primary/20 text-center max-w-4xl mx-auto">
            <CardContent className="p-0 space-y-6">
              <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Stay Updated</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Subscribe to our newsletter and get the latest insights, tutorials, and industry updates delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-md border border-input bg-background"
                />
                <Button className="group">
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                No spam, unsubscribe at any time.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold">Explore Topics</h2>
            <p className="text-muted-foreground">
              Dive deeper into the subjects that matter most to your business and career.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow group">
              <CardContent className="p-0 space-y-4">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Data Analytics</h3>
                <p className="text-sm text-muted-foreground">Insights and techniques for data-driven decision making</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow group">
              <CardContent className="p-0 space-y-4">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Software Development</h3>
                <p className="text-sm text-muted-foreground">Best practices and modern development techniques</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow group">
              <CardContent className="p-0 space-y-4">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Database Management</h3>
                <p className="text-sm text-muted-foreground">Optimization and management strategies</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow group">
              <CardContent className="p-0 space-y-4">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Business Intelligence</h3>
                <p className="text-sm text-muted-foreground">Transform data into actionable business insights</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}

