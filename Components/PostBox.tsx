import React from 'react'
import { useSession } from 'next-auth/react'
import Avatar from './Avatar';
import {LinkIcon, PhotographIcon} from '@heroicons/react/outline'

function PostBox() {
    const {data: session} = useSession();
  return (
  <form className='sticky top-16 z-50 bg-white border rounded-md border-gray-300 p-2' >
    <div className='flex items-center space-x-3'>
        <Avatar  />
        <input
        disabled={!session}
        className=' flex-1 rounded-md bg-gray-50 p-2 pl-5 outline-none' 
        type="text" 
        placeholder={session ? 'Create a post' : 'Sign in to post'} 
        />
        <PhotographIcon className={'h-6 text-gray-500  cursor-pointer'} />
        <LinkIcon className="h-6 text-gray-500"/>
    </div>
  </form>
  )
}

export default PostBox
