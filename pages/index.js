import Head from 'next/head';

// import the Header component
import Header from '../components/Header';

export default function Home() {
  return (
    <div className="">
      
      <Head>
        <title>Instagram 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Feed */}

      {/* Modal */}

    </div>
  )
}
