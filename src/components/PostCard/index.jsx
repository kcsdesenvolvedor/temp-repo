import { React } from 'react';
import P from 'prop-types';
import './style.css';

export const PostCard = ({ id, title, body, cover }) => (
  <div className="post">
    <img src={cover} alt={title} />
    <div className="-content">
      <h2>
        {title} {id}
      </h2>
      <p>{body}</p>
      <p>Oi</p>
    </div>
  </div>
);

PostCard.propTypes = {
  id: P.number.isRequired,
  title: P.string.isRequired,
  body: P.string.isRequired,
  cover: P.string.isRequired,
};
