import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, X, Linkedin, Instagram, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(156, 146, 172, 0.1) 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="p-6 md:p-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-2xl md:text-3xl font-bold text-white">SSQ</div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-6 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Hero Section */}
            <div className="mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm mb-8">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Coming Soon
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
                Something
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Amazing
                </span>
                is Coming
              </h1>

              <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
                We're working hard to bring you an exceptional experience. Be the first to know when we launch.
              </p>
            </div>

            {/* Email Signup */}
            <Card className="max-w-md mx-auto bg-white/10 backdrop-blur-sm border-white/20 mb-16">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Get Notified</h3>
                <form className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-purple-400"
                  />
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0">
                    Notify Me
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                <p className="text-xs text-white/60 mt-3">We'll never spam you. Unsubscribe at any time.</p>
              </CardContent>
            </Card>

            {/* Features Preview */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-sm"></div>
                </div>
                <h4 className="text-white font-semibold mb-2">Innovation</h4>
                <p className="text-white/70 text-sm">Cutting-edge solutions designed for the future</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-sm"></div>
                </div>
                <h4 className="text-white font-semibold mb-2">Quality</h4>
                <p className="text-white/70 text-sm">Premium experience with attention to every detail</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-sm"></div>
                </div>
                <h4 className="text-white font-semibold mb-2">Support</h4>
                <p className="text-white/70 text-sm">Dedicated team ready to help you succeed</p>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="p-6 md:p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-white/60 text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} SSQ. All rights reserved.
              </div>

              <div className="flex items-center space-x-6">
                <Link to="#" className="text-white/60 hover:text-white transition-colors" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </Link>
                <Link to="#" className="text-white/60 hover:text-white transition-colors" aria-label="Twitter">
                  <X className="h-5 w-5" />
                </Link>
                <Link to="#" className="text-white/60 hover:text-white transition-colors" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link to="#" className="text-white/60 hover:text-white transition-colors" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
