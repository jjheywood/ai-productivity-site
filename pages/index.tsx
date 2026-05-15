import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>AI Productivity - Supercharge Your Workflow with AI</title>
        <meta name="description" content="Boost your productivity with AI-powered tools. Automate repetitive tasks, generate content faster, and streamline your workflow." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
        {/* Hero Section */}
        <section className="px-4 py-20 mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              Supercharge Your Workflow with AI
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 max-w-2xl mx-auto">
              Boost your productivity with AI-powered tools. Automate repetitive tasks,
              generate content faster, and streamline your workflow.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#features"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a
                href="#testimonials"
                className="text-sm font-semibold leading-6 text-slate-900 hover:text-indigo-600"
              >
                See what others say <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Everything you need to work smarter
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Powerful features designed to save you time and boost efficiency
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'Smart Automation',
                  description: 'Automate repetitive tasks with intelligent workflows that learn from your patterns.',
                  icon: '⚡',
                },
                {
                  title: 'Content Generation',
                  description: 'Create high-quality content in seconds with AI-powered writing assistance.',
                  icon: '✍️',
                },
                {
                  title: 'Data Insights',
                  description: 'Get actionable insights from your data with intelligent analysis and visualization.',
                  icon: '📊',
                },
                {
                  title: 'Seamless Integration',
                  description: 'Connect with your favorite tools and platforms for a unified workflow experience.',
                  icon: '🔗',
                },
                {
                  title: 'Real-Time Collaboration',
                  description: 'Work together with your team in real-time with synchronized AI assistance.',
                  icon: '👥',
                },
                {
                  title: 'Secure & Private',
                  description: 'Your data stays protected with enterprise-grade security and privacy controls.',
                  icon: '🔒',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-slate-50 p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
                  <p className="mt-2 text-slate-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-gradient-to-b from-slate-100 to-slate-50">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Loved by teams worldwide
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                See what our customers have to say about their experience
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote: "This tool has completely transformed how our team works. We've cut our content creation time by 60% and the quality is better than ever.",
                  author: "Sarah Chen",
                  role: "Marketing Director",
                  company: "TechScale Inc.",
                  rating: 5,
                },
                {
                  quote: "The automation features are incredible. What used to take hours now takes minutes. It's like having an extra team member.",
                  author: "Marcus Johnson",
                  role: "Product Manager",
                  company: "InnovateLabs",
                  rating: 5,
                },
                {
                  quote: "We evaluated several AI productivity tools and this was by far the best. The integration with our existing workflow was seamless.",
                  author: "Emily Rodriguez",
                  role: "Operations Lead",
                  company: "FastTrack Solutions",
                  rating: 5,
                },
                {
                  quote: "The insights we get from the data analysis feature alone are worth the subscription. We've identified so many optimization opportunities.",
                  author: "David Kim",
                  role: "Data Analytics Manager",
                  company: "DataDriven Co.",
                  rating: 5,
                },
                {
                  quote: "Game-changer for our writing team. We're producing more content at higher quality, and our writers are more creative than ever.",
                  author: "Lisa Thompson",
                  role: "Editorial Director",
                  company: "ContentFirst Media",
                  rating: 5,
                },
                {
                  quote: "The security features gave us confidence to adopt AI tools company-wide. The privacy controls are exactly what we needed.",
                  author: "Michael Brown",
                  role: "CTO",
                  company: "SecureTech Systems",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div classNamp="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-700 italic">"{testimonial.quote}"
                  <div className="mt-6">
                    <p className="font-semibold text-slate-900">{testimonial.author}</p>
                    <p className="text-sm text-slate-600">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-indigo-600">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to boost your productivity?
            </h2>
            <p className="mt-4 text-lg text-indigo-100">
              Join thousands of teams already working smarter with AI
            </p>
            <a
              href="#"
              className="mt-8 inline-block rounded-md bg-white px-5 py-3 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50"
            >
              Start your free trial
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
