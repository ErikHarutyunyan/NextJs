import Layout from "../components/Layout"
import "../styles/globals.scss"
function MyApp({ Component, pageProps }) {
  return (
  <Layout>
    <main>
      <Component {...pageProps} />
    </main>
  </Layout>
  )
}

export default MyApp
