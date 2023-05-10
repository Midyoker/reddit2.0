import Head from 'next/head'
import Header from '../Components/Header'
import PostBox from '../Components/PostBox'

export default function Home() {
  return ( 
     <div className="">
      <Head>
        <title>Reddit2.0</title>
      </Head>
      <PostBox  />
      <div>

      </div>
    </div>
  )
}
