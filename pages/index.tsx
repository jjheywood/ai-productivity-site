import Head from 'next/head';

const testimonials = [
  {
    quote: "This tool completely transformed how I manage my daily tasks. I've saved 5+ hours every week.",
    author: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    rating: 5,
  },
  {
    quote: "The AI suggestions are incredibly accurate. It's like having a personal assistant that knows exactly what I need.",
    author: "Michael Chen",
    role: "Software Engineer",
    company: "DevStudio",
    rating: 5,
  },
  {
    quote: "We implemented this across our entire team. Productivity increased by 40% in the first month.",
    author: "Emily Rodriguez",
    role: "Team Lead",
    company: "InnovateCo",
    rating: 5,
  },
  {
    quote: "Simple to use, powerful results. I wish I had discovered this sooner.",
    author: "David Kim",
    role: "Freelance Designer",
    company: "KimCreative",
    rating: 5,
  },
  {
    quote: "The workflow automation features are a game changer. No more manual task tracking.",
    author: "Amanda Foster",
    role: "Operations Manager",
    company: "FlowState",
    rating: 5,
  },
  {
    quote: "Best investment we've made for our startup. The ROI was visible within weeks.",
    author: "James Wilson",
    role: "Founder",
    company: "LaunchPad",
    rating: 5,
  },
];

const features = [
  {
    title: "AI-Powered Task Prioritization",
    description: "Let our intelligent algorithms sort and prioritize your tasks based on urgency, importance, and context.",
    icon: "🧠",
  },
  {
    title: "Smart Scheduling",
    description: "Automatically schedule your tasks at optimal times based on your calendar, energy levels, and preferences.",
    icon: "📅",
  },
  {
    title: "Real-Time Collaboration",
    description: "Work seamlessly with your team with instant updates, shared projects, and synchronized progress tracking.",
    icon: "👥",
  },
  {
    title: "Deep Work Mode",
    description: "Block distractions and enter focused work sessions with smart notifications and do-not-disturb integrations.",
    icon: "🎯",
  },
  {
    title: "Analytics & Insights",
    description: "Track your productivity patterns with detailed analytics and personalized recommendations for improvement.",
    icon: "📊",
  },
  {
    title: "Cross-Platform Sync",
    description: "Access your tasks and projects from anywhere with seamless sync across web, desktop, and mobile apps.",
    icon: "🔄",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Head>
        <title>AI Productivity - Supercharge Your Workflow</title>
        <meta name="description" content="AI-powered productivity tools to help you work smarter, not harder. Automate tasks, prioritize intelligently, and achieve more." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">AI Productivity</div>
            <div className="flex gap-6">
              <a href="#features" className="hover:text-blue-200 transition">Features</a>
              <a href="#testimonials" className="hover:text-blue-200 transition">Testimonials</a>
              <a href="/blog" className="hover:text-blue-200 transition">Blog</a>
              <a href="#pricing" className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition">Get Started</a>
            </div>
          </div>
        </nav>
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Work Smarter, <br />Not Harder
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto">
              AI-powered productivity tools that help you prioritize, focus, and achieve more every day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#pricing" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition shadow-lg">
                Start Free Trial
              </a>
              <a href="#features" className="border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition">
                Explore Features
              </a>
            </div>
          </div>
        </main>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Powerful Features</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Everything you need to supercharge your productivity, all in one place.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border border-slate-100">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">What Our Users Say</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Join thousands of professionals who have transformed their workflow.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition border border-slate-100">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-700 italic mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="border-t border-slate-100 pt-4">
                  <p className="font-semibold text-slate-800">{testimonial.author}</p>
                  <p className="text-sm text-slate-500">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Boost Your Productivity?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Start your free trial today. No credit card required.
          </p>
          <a href="#pricing" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition shadow-lg inline-block">
            Get Started Free
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-slate-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">AI Productivity</h3>
              <p className="text-sm">Empowering professionals to achieve more with AI-powered tools.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="hover:text-white transition">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
                <li><a href="/blog" className="hover:text-white transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} AI Productivity. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}