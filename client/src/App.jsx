import { useState } from 'react'
import NavBar from './assets/navbar'
import './App.css'
import Banner from './assets/Banner'
import Developer from './assets/Developer'
import Images from './assets/imageRender'

function App() {
  const [count, setCount] = useState(0)
  const developerProfile = [
      {id:1, avatar: Images.tech_team_1, name:"Kengan Ashura", role:"Front-End Developer"},
      {id:2, avatar: Images.tech_team_3, name:"Uri Uromanave", role:"Front-End Engineer"},
      {id:3, avatar: Images.tech_team_2, name:"Mishima Shimamoto", role:"Back-End Engineer"},
      {id:4, avatar: Images.tech_team_4, name:"Hashiro Nagasake", role:"UI/UX Designer"}
  ]

  return (
    <>
    <NavBar/>
    <Banner/>
    {developerProfile.map(profile=>(
    // the first div is to create a grid for the other divs (profile cards) to hold in
    <div className='grid grid-cols grid-3'> 
      <Developer
        key={profile.id}
        avatar={profile.avatar}
        name={profile.name}
        role={profile.role}
      />
    </div>
    ))}
    </>
  )
}

export default App
