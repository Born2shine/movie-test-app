import React, { useEffect } from 'react'
import { useGlobalContext } from '../../provider/context'


import Movies from "../Movies"
import Search from '../Search'

const Home = () => {
  return (
    <section className='main-wrapper'>
        <header>
            <div className='logo'><span className='special-text'>MyTestApp</span></div>
        </header>
        <div className='hero'>
            <div className='content'>
                Watch something incredible.    
            </div>
        </div>
        <main className='main-content'>
            <Search/>
            <Movies/>
        </main>
    </section>
  )
}

export default Home