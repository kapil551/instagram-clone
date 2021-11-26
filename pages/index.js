import Head from 'next/head';

// import the Header component
import Header from '../components/Header';

export default function Home() {
  return (
    <div className="">
      
      <Head>
        <title>Instagram 2.0</title>
        {/* Add a Instagram Favicon Icon */}
        <link rel="icon" href="https://cdn.icon-icons.com/icons2/836/PNG/512/Instagram_icon-icons.com_66804.png" />
      </Head>

      {/* Header */}
      <Header />

      {/* Feed */}

      {/* Modal */}

    </div>
  )
}
