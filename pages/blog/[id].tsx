import { getAllPostIds, getPostData } from '../../lib/posts';
import Link from 'next/link';

export default function Post({ postData }: { postData: { id: string; title: string; date: string; content: string; excerpt: string } }) {
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

      {/* Article */}
      <article className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="text-blue-600 font-medium hover:text-blue-700 transition mb-4 inline-block">
            ← Back to Blog
          </Link>
          
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">{postData.title}</h1>
            <time className="text-slate-500">{postData.date}</time>
          </header>

          {/* Content */}
          <div 
            className="prose prose-slate prose-lg max-w-none prose-headings:text-slate-900 prose-a:text-blue-600"
            dangerouslySetInnerHTML={{ __html: postData.content }}
          />

          {/* CTA Section */}
          <div className="mt-12 p-8 bg-blue-50 rounded-2xl border border-blue-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Ready to boost your productivity?</h2>
            <p className="text-slate-600 mb-6">Try AI-powered tools and transform your workflow today.</p>
            <Link href="/" className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Get Started →
            </Link>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-slate-400">
          <p>© 2024 AI Productivity. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}