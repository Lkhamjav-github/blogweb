import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Header } from '../components/Header'
import { useEffect, useState } from 'react'
import { data } from 'autoprefixer'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='flex flex-col gap-[100px]'>
      <Header />
    </main>
  )
}
