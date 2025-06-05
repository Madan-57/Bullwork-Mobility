import React, { useEffect, useState } from 'react';

const Blogss = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedSlug, setSelectedSlug] = useState(null);
  const [singleBlog, setSingleBlog] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/api/blogs`)
      .then(res => res.json())
      .then(data => setBlogs(data))
      .catch(err => console.error('Error fetching blogs:', err));
  }, [API_URL]);

  const fetchBlogDetail = (slug) => {
    fetch(`${API_URL}/api/blogs/${slug}`)
      .then(res => res.json())
      .then(data => {
        setSingleBlog(data);
        setSelectedSlug(slug);
      })
      .catch(err => console.error('Error fetching blog:', err));
  };

  const handleBack = () => {
    setSelectedSlug(null);
    setSingleBlog(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        <br />
        <br />
        <h1 className="text-3xl font-bold mb-6 text-center">Our Blogs</h1>

        {selectedSlug && singleBlog ? (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <button
              className="text-purple-700 underline mb-4"
              onClick={handleBack}
            >
              ← Back to all blogs
            </button>
            <h2 className="text-2xl font-semibold mb-2">{singleBlog.title}</h2>
            <p className="text-gray-500 text-sm mb-4">
              {new Date(singleBlog.publication_date).toLocaleDateString()} by {singleBlog.author}
            </p>
            {singleBlog.image_url && (
              <img
                src={singleBlog.image_url}
                alt="blog visual"
                className="mb-4 w-full max-h-[300px] object-cover rounded-md"
              />
            )}
            {singleBlog.video_url && (
              <video
                controls
                className="mb-4 w-full max-h-[400px] rounded-md"
                src={singleBlog.video_url}
              />
            )}
            <div className="text-gray-800 leading-relaxed whitespace-pre-wrap">
              {singleBlog.content}
            </div>
            {singleBlog.tags?.length > 0 && (
              <div className="mt-4 text-sm text-gray-600">
                <strong>Tags:</strong> {singleBlog.tags.join(', ')}
              </div>
            )}
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {blogs.map((blog) => (
              <div
                key={blog.slug}
                className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition cursor-pointer"
                onClick={() => fetchBlogDetail(blog.slug)}
              >
                <h2 className="text-xl font-semibold">{blog.title}</h2>
                <p className="text-sm text-gray-500">
                  {new Date(blog.publication_date).toLocaleDateString()} • {blog.author}
                </p>
                {blog.image_url && (
                  <img
                    src={blog.image_url}
                    alt={blog.title}
                    className="mt-3 w-full h-40 object-cover rounded-md"
                  />
                )}
                <p className="mt-3 text-gray-700 line-clamp-3">
                  {blog.content.slice(0, 150)}...
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogss;
