import {format} from 'date-fns';

export default function Post({title, summary, cover, content, createdAt}){

    return(
        <div className = "post">
        <div className = "img">
          <img src="https://via.placeholder.com/150" alt=""/>
        </div>
        <div className = "texts">
          <h2>{title}</h2>
          <p className = "info">
            <a className = "author">Liheng Yuan</a>
            <time>{format(new Date(createdAt), 'MMM d, yyyy')}</time>
          </p>
          <p className="summary">{summary}</p>
        </div>
      </div>
    );
}