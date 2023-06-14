import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_POSTS, GET_ALL_POSTS_BY_TOPIC } from '../graphql/queries';
import Post from './Post';

type Props = {
  topic?: string;
};

function Feed({ topic }: Props) {
  const query = topic ? GET_ALL_POSTS_BY_TOPIC : GET_ALL_POSTS;
  const { data, error } = useQuery(query, {
    variables: {
      topic: topic || '',
    },
  });
  const posts: Post[] = data?.getPostList || [];

  return (
    <div className="mt-5 space-y-4">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Feed;
