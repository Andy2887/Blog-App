export default function Post(){
    return(
        <div className = "post">
        <div className = "img">
          <img src="https://via.placeholder.com/150" alt=""/>
        </div>
        <div className = "texts">
          <h2>Blog Title</h2>
          <p className = "info">
            <a className = "author">Liheng Yuan</a>
            <time>2024-10-14 15:15</time>
          </p>
          <p className="summary">Brief introduction of the post</p>
        </div>
      </div>
    );
}