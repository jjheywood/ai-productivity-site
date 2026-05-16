import Link from 'next/link';
import { getSortedPostsData } from '../../lib/posts';

export default function Blog({ posts }: { posts: { id: string; title: string; date: string; excerpt: string }[] }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-slate-800">
              AI Productivity
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="/" className="text-slate-600 hover:text-slate-900 transition">Home</Link>
              <Link href="/blog" className="text-blue-600 font-medium">Blog</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Blog
          </h1>
          <p className="text-xl text-slate-600">
            Insights on AI tools, productivity tips, and workflow optimization
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <time className="text-sm text-slate-500 mb-2 block">{post.date}</time>
                  <h2 className="text-xl font-semibold text-slate-900 mb-2">
                    <Link href={`/blog/${post.id}`} className="hover:text-blue-600 transition">{post.title}</Link>
                  </h2>
                  <p className="text-slate-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <Link 
                    href={`/blog/${post.id}`}
                    className="text-blue-600 font-medium hover:text-blue-700 transition"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-slate-400">
          <p>© 2024 AI Productivity. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const posts = getSortedPostsData();
  return {
    props: {
      posts,
    },
  };
}