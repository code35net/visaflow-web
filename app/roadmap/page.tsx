import { CheckCircle, Clock, Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Product <span className="text-blue-600">Roadmap</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              See what we're building next for VisaFlow CRM. Our roadmap is driven by customer feedback and industry
              needs.
            </p>
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8 py-3">
                Request a Feature
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Roadmap Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Q1 2024 - Completed */}
            <div className="relative">
              <div className="flex items-center mb-8">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mr-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Q1 2024</h3>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Completed</Badge>
                </div>
              </div>

              <div className="ml-16 mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="border-l-4 border-l-green-500">
                    <CardHeader>
                      <CardTitle className="text-lg">Core CRM Features</CardTitle>
                      <CardDescription>
                        Client management, application tracking, and basic reporting functionality
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="border-l-4 border-l-green-500">
                    <CardHeader>
                      <CardTitle className="text-lg">Document Management</CardTitle>
                      <CardDescription>Secure document storage with encryption and access controls</CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="border-l-4 border-l-green-500">
                    <CardHeader>
                      <CardTitle className="text-lg">Mobile App</CardTitle>
                      <CardDescription>iOS and Android apps for on-the-go access to client information</CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="border-l-4 border-l-green-500">
                    <CardHeader>
                      <CardTitle className="text-lg">Email Integration</CardTitle>
                      <CardDescription>Automated email notifications and communication tracking</CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </div>
            </div>

            {/* Q2 2024 - In Progress */}
            <div className="relative">
              <div className="flex items-center mb-8">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mr-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Q2 2024</h3>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">In Progress</Badge>
                </div>
              </div>

              <div className="ml-16 mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="border-l-4 border-l-blue-500">
                    <CardHeader>
                      <CardTitle className="text-lg">Advanced Analytics</CardTitle>
                      <CardDescription>
                        Comprehensive dashboards with success rates, processing times, and revenue metrics
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="border-l-4 border-l-blue-500">
                    <CardHeader>
                      <CardTitle className="text-lg">API Platform</CardTitle>
                      <CardDescription>
                        RESTful API for integrations with government portals and third-party services
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="border-l-4 border-l-blue-500">
                    <CardHeader>
                      <CardTitle className="text-lg">Automated Workflows</CardTitle>
                      <CardDescription>
                        Custom workflow builder for automating repetitive tasks and processes
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="border-l-4 border-l-blue-500">
                    <CardHeader>
                      <CardTitle className="text-lg">Multi-language Support</CardTitle>
                      <CardDescription>Support for 10+ languages to serve diverse client bases</CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </div>
            </div>

            {/* Q3 2024 - Planned */}
            <div className="relative">
              <div className="flex items-center mb-8">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mr-4">
                  <Calendar className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Q3 2024</h3>
                  <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">Planned</Badge>
                </div>
              </div>

              <div className="ml-16 mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="border-l-4 border-l-orange-500">
                    <CardHeader>
                      <CardTitle className="text-lg">AI-Powered Insights</CardTitle>
                      <CardDescription>
                        Machine learning algorithms to predict application success rates and optimize processes
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="border-l-4 border-l-orange-500">
                    <CardHeader>
                      <CardTitle className="text-lg">Video Consultations</CardTitle>
                      <CardDescription>
                        Built-in video calling for remote client consultations and interviews
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="border-l-4 border-l-orange-500">
                    <CardHeader>
                      <CardTitle className="text-lg">Advanced Security</CardTitle>
                      <CardDescription>Two-factor authentication, SSO, and enhanced audit trails</CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="border-l-4 border-l-orange-500">
                    <CardHeader>
                      <CardTitle className="text-lg">White-label Solution</CardTitle>
                      <CardDescription>Customizable branding options for agencies and consultants</CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </div>
            </div>

            {/* Q4 2024 - Future */}
            <div className="relative">
              <div className="flex items-center mb-8">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mr-4">
                  <Calendar className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Q4 2024</h3>
                  <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Future</Badge>
                </div>
              </div>

              <div className="ml-16 mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="border-l-4 border-l-gray-400">
                    <CardHeader>
                      <CardTitle className="text-lg">Blockchain Integration</CardTitle>
                      <CardDescription>
                        Secure, immutable document verification using blockchain technology
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="border-l-4 border-l-gray-400">
                    <CardHeader>
                      <CardTitle className="text-lg">Global Expansion</CardTitle>
                      <CardDescription>Support for 50+ countries with localized forms and requirements</CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="border-l-4 border-l-gray-400">
                    <CardHeader>
                      <CardTitle className="text-lg">Advanced Reporting</CardTitle>
                      <CardDescription>
                        Custom report builder with data visualization and export capabilities
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="border-l-4 border-l-gray-400">
                    <CardHeader>
                      <CardTitle className="text-lg">Mobile SDK</CardTitle>
                      <CardDescription>
                        Software development kit for building custom mobile applications
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Request Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Have a Feature Request?</h2>
            <p className="text-xl text-gray-600 mb-8">
              We're always looking for ways to improve VisaFlow CRM. If you have an idea for a new feature or
              enhancement, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="text-lg px-8 py-3">
                  Submit Feature Request
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-transparent">
                Join Beta Program
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
