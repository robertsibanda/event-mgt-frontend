import { useEffect, useState } from "react"
import TopNav from "./TopNav"
import BlogPost, { BlogPostInterface } from "./BlogPost"

const posts = [

    {
        title: "Lorem ipsum",
        summary: "Lorem ipsum Lorem ipsum",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, eaque! Itaque nemo quis qui blanditiis unde provident quisquam labore soluta nesciunt eius corrupti consectetur facere, ipsum sunt maxime doloribus fugiat.",
        date: new Date().toLocaleString(),
        likes: 3,
        reads: 100
    },

    {
        title: "Lorem Lorem",
        summary: "Lorem Lorem",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, eaque! Itaque nemo quis qui blanditiis unde provident quisquam labore soluta nesciunt eius corrupti consectetur facere, ipsum sunt maxime doloribus fugiat.",
        date: new Date().toLocaleString(),
        likes: 13,
        reads: 10
    }

]


function BlogList() {

  document.title = "Blog Posts"

  const [blogPosts, setBlogPosts] = useState<BlogPostInterface[]>([])

   useEffect(() => {
      const fetchBlogs = async () => {
        try {
          const response = await fetch("http://localhost:8080/blog/page/0/l"); // Replace with your API endpoint
          if (!response.ok) {
            console.log(`Error : ${response.body}`)
            throw new Error("Failed to fetch events");
          }
          const data: BlogPostInterface[] = await response.json(); // Assume the API returns a list of events
          setBlogPosts(data);
        } catch (error) {
          console.error("Error fetching events:", error);
        }
      }

      fetchBlogs()

   }, [])

  useEffect(() => {
    setBlogPosts(posts)
  }, [])

  return (
    <>
        <TopNav />
        <div className="blog-posts">
            {blogPosts.map((post, index) => (
                <BlogPost 
                    key={index}
                    title={post.title}
                    summary={post.summary}
                    content={post.content.repeat(10)}
                    date={post.date}
                    likes={post.likes}
                    reads={post.reads}
                />

            ))}
        </div>
       
    </>
  )
}

export default BlogList