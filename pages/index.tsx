import type { NextPage } from 'next'
import Header from '../components/Header'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Header />
      <Hero />
    </div>
  )
}

export default Home
