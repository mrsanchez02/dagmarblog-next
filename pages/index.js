import fetch from 'node-fetch'
import Post from '../components/blog/Post';
import {NextSeo} from "next-seo";

const Home = ({ posts }) => (
  <div>
      <NextSeo
        title="Bienvenido a DagmarBlog"
        description="DagmarBlog es una creacion de JSanchez para fines didacticos."
        openGraph={{
          url: "https://dagmartech.com/blog",
          title: "Bienvenido a DagmarBlog",
          description:"DagmarBlog es una creacion de JSanchez para fines didacticos.",
          images:[
            {
              url:"https://dagmartech.com/images/something1.jpg",
              width: 1280,
              height: 720,
              alt:"Foto de perfil de DagmarBlog"
            },
            {
              url:"https://dagmartech.com/images/something2.jpg",
              width: 1280,
              height: 720,
              alt:"Foto de perfil de DagmarBlog"
            }
          ],
          site_name:"DagmarBlog"
        }}
        twitter={{
          handle: "@dagmartech",
          site: "@dagmartech",
          cardType: "sumary_large_image"
        }}
      />
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