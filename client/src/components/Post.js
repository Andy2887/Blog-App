export default function Post(){
    return (
        <div className="post">
            <h2>Getting Started with React</h2>
            <div className="post-meta">
                <span className="author">By John Doe</span>
                <span className="date">March 15, 2024</span>
            </div>
            <p className="post-excerpt">
                React is a powerful library for building user interfaces. 
                In this post, we'll explore the fundamental concepts and 
                best practices for creating modern web applications.
            </p>
            <div className="post-footer">
                <button className="read-more">Read More</button>
                <div className="post-stats">
                    <span>❤️ 42 likes</span>
                    <span>💬 12 comments</span>
                </div>
            </div>
        </div>
    )
}