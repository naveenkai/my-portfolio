import { Routes, Route, Link, useParams } from 'react-router-dom';
import { blogPosts } from './data/blogData';

function BlogList() {
  const sorted = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="portfolio blog-page">
      <nav className="blog-nav">
        <Link to="/">← Naveen K</Link>
      </nav>
      <section className="section">
        <h1 className="section-heading">blogs</h1>
        <ul className="blog-list">
          {sorted.map((post) => (
            <li key={post.slug}>
              <Link to={`/blogs/${post.slug}`} className="blog-list-item">
                <span className="blog-date">{formatDate(post.date)}</span>
                <span className="blog-title">{post.title}</span>
              </Link>
              <p className="blog-excerpt">{post.excerpt}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="portfolio blog-page">
        <nav className="blog-nav">
          <Link to="/">← Naveen K</Link>
        </nav>
        <section className="section">
          <p>Post not found.</p>
          <Link to="/blogs">Back to blogs</Link>
        </section>
      </div>
    );
  }

  const paragraphs = post.content.split('\n\n').filter(Boolean);

  return (
    <article className="portfolio blog-page">
      <nav className="blog-nav">
        <Link to="/blogs">← blogs</Link>
      </nav>
      <section className="section">
        <header className="blog-post-header">
          <time className="blog-date">{formatDate(post.date)}</time>
          <h1 className="blog-post-title">{post.title}</h1>
        </header>
        <div className="blog-post-content">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>
    </article>
  );
}

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export default function Blogs() {
  return (
    <Routes>
      <Route index element={<BlogList />} />
      <Route path=":slug" element={<BlogPost />} />
    </Routes>
  );
}
