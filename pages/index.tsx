import Head from 'next/head'
import Header from '../Components/Header'
import PostBox from '../Components/PostBox'
import Feed from '../Components/Feed'

export default function Home() {
  return ( 
     <div className="my-7 max-w-5xl mx-auto">
      <Head>
        <title>Reddit2.0</title>
      </Head>
      <PostBox  />
      <div className='flex'>
        <Feed />

      </div>
    </div>
  )
}
