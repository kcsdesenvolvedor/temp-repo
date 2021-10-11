import { React } from 'react';
import P from 'prop-types';
import { PostCard } from '../PostCard';
import './style.css';

export const Post = ({ posts = [] }) => (
  <div className="posts">
    {posts.map((post) => (
      <PostCard key={post.id} id={post.id} title={post.title} body={post.body} cover={post.cover} />
    ))}
  </div>
);

Post.defaultProps = {
  posts: [],
};

Post.propTypes = {
  posts: P.array,
};
