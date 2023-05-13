import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_ALL_POSTS } from '../graphql/queries'
import Post from './Post'

function Feed() {
  const { data, error } = useQuery(GET_ALL_POSTS)
  const posts: Post[] = data?.getAllPosts;

  return (
    <div className='mt-5 space-y-4'>

      {posts?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
   }

export default Feed
