import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCard from './UserCard.jsx'
import TimeCard from './TimeCard.jsx'

function App() {

  return (
    <div>
      <div className='d-flex container'>

        <div className="row">
          <div className="col">
            <UserCard />
          </div>

          <div className="col">
            <div className="col">
              <TimeCard color = "color" activity ="Work"  hrs = "32hrs" last = "Last-week - 36hrs"/>
            </div>

            <div className="col mt-3">
              <TimeCard color = "color1" activity ="Exercise"  hrs = "4hrs" last = "Last-week - 5hrs"/>
            </div>
            
          </div>

          <div className="col">
            <div className="col">
              <TimeCard color = "color2" activity ="Play"  hrs = "10hrs" last = "Last-week - 8hrs" />
            </div>

            <div className="col mt-3">
              <TimeCard color = "color3" activity ="Social"  hrs = "5hrs" last = "Last-week - 10hrs" />
            </div>

          </div>
          <div className="col">
            <div className="col">
              <TimeCard color = "color4" activity ="Study"  hrs = "4hrs" last = "Last-week - 7hrs" />
            </div>

            <div className="col mt-3">
              <TimeCard color = "color5" activity ="Self Care"  hrs = "2hrs" last = "Last-week - 2hrs" />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
