import smile from "../img/smile.png"

export interface BlogPostInterface {
    title: string,
    summary: string,
    content: string,
    date: string,
    likes: number,
    reads: number;

}

const BlogPost = ({title, summary, content, date, likes, reads} 
    : BlogPostInterface) => {
  return (
    <div className="blog-container">
        <div className="blog-post">
            <div className="blog-header">
                <h3>{title} read by {reads} people</h3>
                <p>Date Posted : {date}</p>
            </div>
            <div className="blog-content">
                <h5>{summary}</h5>
                <p>{content}</p>
            </div>
        </div>
        <div className="blog-footer">
        </div>

    </div>
   
  )
}

export default BlogPost;