import React from 'react'
import Header from './components/Header'
import Card from './components/Card'
import About from './components/About'
import Contact from './components/Contact'
import bulba from './assets/bulba.svg'

import './App.css'
import Particles from 'react-particles-js'

export default function App() {
  return (
    <div className="App">
      <Particles 
        className='particles'
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 250
              }
            },
            line_linked: {
              color: '#fff'
          }
          }
        }}
      />
      <div className="pa3 stickyNav bg-near-white shadow-3 tc" >
        <div>
          <a href='#bulba' className='flex justify-start grow absolute w-10'>
            <img src={bulba} alt='id' />
          </a>
            <a href='#focus' className="f3-l justify-center resize grow-large no-underline purple inline-flex items-center pa2 ph4 mr3" title="About">About</a>
            <a href='#projects' className="f3-l justify-center resize grow-large no-underline purple inline-flex items-center pa2 ph4 mr3" title="About">Projects</a>
            <a href='#coffee' className="f3-l justify-center resize grow-large no-underline purple inline-flex items-center pa2 ph4 mr3" title="Contact">Contact</a>
        </div>
      </div>
      <div id='bulba'></div>
      <Header />
      <div id='focus' className='mb4'></div>
      <About />
      <div id='projects'></div>
      <Card />
      <div id='coffee'></div>
      <Contact />
    </div>
  );
}