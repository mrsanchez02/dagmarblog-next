import Head from 'next/head'

const Home = () => (
  <div>
      <Head>
        <title>Home | {process.env.SITE_NAME}</title>
      </Head>
      <main>
        <h1>Dagmar Blog</h1>
        {/* <span>Bienvenidos a Dagmar Blog by Zeros</span> */}
        <span>{process.env.API_BLOG}</span>
      </main>
  </div>
);

export default Home;