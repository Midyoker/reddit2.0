import React from 'react'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client';
import { GET_POST_BY_POST_ID } from '../../graphql/queries';
import Post from '../../Components/Post';
import { useSession } from 'next-auth/react';

function PostPage() {
    const router = useRouter()
    const {data: session} = useSession()
    const { data } = useQuery(GET_POST_BY_POST_ID, {
        variables: {
            postId: router.query.postId,
        },
    });

    const post: Post = data?.getPostListByPostId;
    
  return (
    <div className='mx-auto my-7 max-w-5xl'>
        <Post post={post} />

        <div className='-mt-1 rounded-b-md border border-t-0 border-gray-300 bg-white p-5 pl-16'>
            <p className='text-sm'>
                Comment as <span>{session?.user?.name}</span>
            </p>
        </div>
      
    </div>
  )
}

export default PostPage