import Head from 'next/head'
import fetch from 'node-fetch'
import Post from '../components/blog/Post';

const Home = ({ posts }) => (
  <div>
      <Head>
        <title>Home | {process.env.SITE_NAME}</title>
      </Head>
      <main>
        <h1>Dagmar Blog</h1>
        <div>
          {
            posts.map(p => <Post key={p.id} post={p} />)
          }
        </div>
      </main>
  </div>
);

export const  getStaticProps = async () => {
  
  const resp = await fetch(`${process.env.API_BLOG}/posts`);
  const posts = await resp.json()

  return{
    props: {
      posts
    }
  }
}

export default Home;