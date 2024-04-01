import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Header } from '../components/Header'
import { useEffect, useState } from 'react'
import { data } from 'autoprefixer'
import { Api } from '@/components/Api'
import { About } from '@/components/About'
import { Blog } from '@/components/Blog'
import { Footer } from '@/components/Footer'
import { Trending } from '@/components/Trending'

import Link from 'next/link'
import { useContext } from 'react'
import { SearchContextValue } from '../../context/SearchContext'
import SearchProvider from '../../context/SearchContext'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ articles }) {

  return (
    <main className='flex flex-col gap-[100px]'>
      <Header />
      <About />
      {/* <Trending /> */}
      <Blog />
      <Footer />
    </main>
  )
}

