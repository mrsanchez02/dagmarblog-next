import Head from 'next/head'

const About = () => (
  <div>
      <Head>
        <title>About | {process.env.SITE_NAME}</title>
      </Head>
      <main>
        <h1>About us</h1>
        <span>Lorem ipsum ...</span>
      </main>
  </div>
);

export default About;