import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';

const Home: NextPage = () => {
  return (
    <div className=''>
      <Head>
        <title>Home page</title>
      </Head>
      <Header />
    </div>
  )
}

export default Home;
