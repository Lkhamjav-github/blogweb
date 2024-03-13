import '@/styles/globals.css'
import SearchProvider from '../../context/SearchContext';
import { AppProps } from 'next/app';
export default function App({ Component, pageProps }) {
  return (
    <SearchProvider>
      <Component {...pageProps} />
    </SearchProvider>
  )
}

