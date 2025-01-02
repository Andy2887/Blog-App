import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Create(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [content, setContent] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();


    const createPost = async (ev) => {
        ev.preventDefault();
        try {
            const response = await fetch('http://localhost:4000/create-post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include', // Important to include cookies
                body: JSON.stringify({
                    title,
                    description,
                    content
                })
            });
    
            if (response.ok) {
                // Redirect to home page or show success message
                navigate('/');
            } else {
                // Handle error response
                const data = await response.json();
                setError(data.message || 'Failed to create post');
            }
        } catch (err) {
            console.error(err);
            setError('Failed to create post');
        }
    }


    return(
        <div className="create-post">
            <form className="post-form" onSubmit={createPost}>
                <h1>Create Post</h1>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" value={title} onChange={ev => setTitle(ev.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" id="description" value={description} onChange={ev => setDescription(ev.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <ReactQuill className="content-editor" value={content} onChange={(newContent) => setContent(newContent)}/>
                </div>
                {error && <div className="error-message">{error}</div>}
                <button className="auth-button">Create Post</button>
            </form>
        </div>
    )
}