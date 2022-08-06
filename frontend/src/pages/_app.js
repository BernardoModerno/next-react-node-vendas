import '../../styles/globals.css'
import '../../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';  
import { AuthProvider } from '../contexts/AuthContext'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
       <Component {...pageProps} />
    </AuthProvider>
   )
}

export default MyApp
