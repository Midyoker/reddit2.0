import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/solid'
import { type } from 'os'
import React from 'react'

type Props = {
    post: Post

function Post({post}: Props) {
  return (
    <div>
        <ArrowUpIcon className='voteButtons hover:text-red-400' />
        <p>1</p>
        <ArrowDownIcon className='voteButtons hover:text-blue-400'/>
        <div>

        </div>
        <div>
            <div></div>

        </div>
      
    </div>
  )
        
    }
export default Post
