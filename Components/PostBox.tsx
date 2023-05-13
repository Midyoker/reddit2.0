import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import Avatar from './Avatar';
import { LinkIcon, PhotographIcon } from '@heroicons/react/outline';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { ADD_POST, ADD_SUBREDDIT } from '../graphql/mutations';
import client from '../apollo-client';
import { GET_SUBREDDIT_BY_TOPIC } from '../graphql/queries';
import { toast } from 'react-hot-toast';
import { GET_ALL_POSTS } from '../graphql/queries';
import { type } from 'os';

type FormData = {
  postTitle: string;
  postBody: string;
  postImage: string;
  subreddit: string;
};

type Props = {
  subreddit?: string;
}

function PostBox({ subreddit }: Props) {
  const { data: session } = useSession();
  const [addPost] = useMutation(ADD_POST ,{
    refetchQueries: [GET_ALL_POSTS,'getPostlist'],
  })
  const [addSubreddit] = useMutation(ADD_SUBREDDIT)

  const [imageBoxOpen, setImageBoxOpen] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,

  } = useForm<FormData>();

  const onSubmit = handleSubmit(async (formData) => {
    console.log(formData);
    const notification =toast.loading('Creating  new post...')

    try {
      //subreddit query
      const {
        data: { getSubredditListByTopic },
      } = await client.query({
        query: GET_SUBREDDIT_BY_TOPIC,
        variables: {
          topic: subreddit || formData.subreddit,
        },
      });
      const subredditExists = getSubredditListByTopic.length > 0;
      if (!subredditExists) {
        console.log("Subreddit is new -> creating new subreddit")

        const { data: { insertSubreddit: newSubreddit } } = await addSubreddit({
          variables: {
            topic: formData.subreddit,
          },
        });

        console.log("creating post.", formData)
        const image = formData.postImage || ''
        const { data: { insertPost: newPost }
        } = await addPost({
          variables: {
            body: formData.postBody,
            image: image,
            subreddit_id: newSubreddit.id,
            title: formData.postTitle,
            username: session?.user?.name,
          },
        });
        console.log("new post", newPost)

      }
      else {
        //use existing subreddit
        console.log("using existing subreddit")
        console.log("getSubredditListByTopic")

        const image = formData.postImage || ''

        const { data: { insertPost: newPost }, } = await addPost({
          variables: {
            body: formData.postBody,
            image: image,
            subreddit_id: getSubredditListByTopic[0].id,
            title: formData.postTitle,
            username: session?.user?.name,
          },
        });
        console.log("new post added:", newPost)
      }

      //After the post has been added
      setValue('postBody', '')
      setValue('postTitle', '')
      setValue('postImage', '')
      setValue('subreddit', '')

      toast.success('Post created!', { 
        id: notification,
       })

    } catch (error) {
      console.log(error)
      toast.error('Whoops!! something went wrong', { 
        id: notification,
       })
    }
  });

  return (
    <form className="sticky top-16 z-50 bg-white border rounded-md border-gray-300 p-2" onSubmit={onSubmit}>
      <div className="flex items-center space-x-3">
        <Avatar />
        <input
          {...register('postTitle', { required: true })}
          disabled={!session}
          className="flex-1 rounded-md bg-gray-50 p-2 pl-5 outline-none"
          type="text"
          placeholder={session ? `Create a post in r/${subreddit}`:'Create a post by entering the title! ' : 'Sign in to post'}
        />
        <PhotographIcon
          onClick={() => setImageBoxOpen(!imageBoxOpen)}
          className={`h-6 text-gray-500 cursor-pointer ${imageBoxOpen ? 'text-blue-500' : ''}`}
        />
        <LinkIcon className="h-6 text-gray-500" />
      </div>

      {watch('postTitle') && (
        <div className="flex flex-col py-2">
          <div className="flex items-center px-2">
            <p className="min-w-[90px]">Body</p>
            <input
              className="m-2 flex-1 bg-blue-50 p-2 outline-none"
              {...register('postBody')}
              type="text"
              placeholder="Text (optional)"
            />
          </div>
          <div className="flex items-center px-2">
            <p className="min-w-[90px]">Subreddit</p>
            <input
              className="m-2 flex-1 bg-blue-50 p-2 outline-none"
              {...register('subreddit', { required: true })}
              type="text"
              placeholder="i.e r/MohMaya"
            />
          </div>
          {imageBoxOpen && (
            <div className="flex items-center px-2">
              <p className="min-w-[90px]">Image URL</p>
              <input
                className="m-2 flex-1 bg-blue-50 p-2 outline-none"
                {...register('postImage')}
                type="text"
                placeholder="optional..."
              />
            </div>
          )}
          {Object.keys(errors).length > 0 && (
            <div className="space-y-2 p-2 text-red-500">
              {errors.postTitle?.type === 'required' && <p>Title is required</p>}
              {errors.subreddit?.type === 'required' && <p>Subreddit is required</p>}
            </div>
          )}

          {!!watch('postTitle') && (
            <button type="submit" className="w-full h-10 rounded-full bg-blue-400 text-white">
              Create post
            </button>
          )}
        </div>
      )}
    </form>
  );
}

export default PostBox;
