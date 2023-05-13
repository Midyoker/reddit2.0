import {
    ArrowDownIcon,
    ArrowUpIcon,
    ChatAltIcon,
    ShareIcon,
    ThumbUpIcon,
    ThumbDownIcon,
    DotsHorizontalIcon,
    ExclamationIcon,
    FlagIcon,
    BookmarkIcon,
    GiftIcon,
} from '@heroicons/react/solid'
import { type } from 'os'
import React from 'react'
import Avatar from './Avatar'
import { Post } from './Feed'
import TimeAgo from 'react-timeago'

type Props = {
    post: Post
}

function Post({ post }: Props) {
    return (
        <div className=' flex cursor-pointer border border-gray-300
        bg-white shadow-sm hover:border hover:border-gray-600'>
            <div className='flex flex-col items-center justify-start space-y-1 rounded-l-md bg-gray-50 p-4 text-gray-400'>
                <ArrowUpIcon className='voteButtons hover:text-red-400' />
                <p className='text-xs font-bold text-black'> 1</p>
                <ArrowDownIcon className='voteButtons hover:text-blue-400' />
            </div>
            <div className='p-3 pb-1 '>
                <div className='flex items-center space-x-2'>
                    <Avatar seed={post.subreddit[0].topic} />
                    <p className='text-xs text-gray-400'>
                        <span className='font-bold text-black hover:text-blue-400 hover:underline'>r/{post.subreddit[0]?.topic}</span>
                        . Posted by u/{post.username} <TimeAgo date={post.createdAt} />
                    </p>
                </div>
                <div className='py-4'>
                    <h2 className='text-xl font-semibold'>{post.title}</h2>
                    <p className='mt-2 text-sm font-light'>{post.body}</p>
                </div>
                <img src={post.image} className='w-full ' />
                <div className='flex space-x-2 text-gray-400'>
                    <div className='posButtons'>
                        <ChatAltIcon className='h-6 w-6' />
                        <p className=''>{post.comments.length} Comments</p>
                    </div>
                    <div className='posButtons'>
                        <GiftIcon className='h-6 w-6' />
                        <p className='hidden sm:inline'> Awards</p>
                    </div>
                    <div className='posButtons'>
                        <ShareIcon className='h-6 w-6' />
                        <p className='hidden sm:inline'> Share</p>
                    </div>
                   
                    <div className='posButtons'>
                        <BookmarkIcon className='h-6 w-6' />
                        <p className='hidden sm:inline'> Save</p>
                    </div>
                    <div className='posButtons'>
                        <DotsHorizontalIcon className='h-6 w-6' />
                        <p className='hidden sm:inline'></p>
                    </div>

                </div>
            </div>
            
        </div>
    )

}
export default Post
