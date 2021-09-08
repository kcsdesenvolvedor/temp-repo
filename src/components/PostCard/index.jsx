import './style.css'

export const PostCard = ({ id, title, body, cover }) => (
  <div className="post">
    <img src={cover} alt={title} />
    <div className="-content">
      <h1>{title}</h1>
      <p>{id}</p>
      <p>{body}</p>
    </div>
  </div>
);