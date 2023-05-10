import Head from 'next/head'
import Header from '../Components/header'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Head>
        <title>Reddit2.0</title>
      </Head>
    <Header />
    </div>
  )
}
