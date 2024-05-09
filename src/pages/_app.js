import '@/styles/globals.css'
import SearchProvider from '../../context/SearchContext';
import { useEffect, useState } from 'react';
import { Loading } from '@/components/Loading';
export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])
  return (
    <div>
      {loading ? <Loading /> : <SearchProvider><Component {...pageProps} /></SearchProvider>
      }
    </div>)

}


