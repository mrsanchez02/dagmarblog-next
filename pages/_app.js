import '../styles/globals.css'
import '../styles/MainMenu.css'
import Header from '../components/sections/Header'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Header/>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
