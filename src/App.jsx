import { useState } from 'react'
import './App.css'
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faGamepad, faStore, faTasks, faVideo } from '@fortawesome/free-solid-svg-icons'
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'

function App() {
  const [active, setActive] = useState("Home")

  const tabs = [
    {
      name: "Home", icon: faHouse
    },
    {
      name: "Video", icon: faVideo
    },
    {
      name: "Store", icon: faStore
    },
    {
      name: "Game", icon: faGamepad
    },
    {
      name: "Task", icon: faTasks
    },
  ]

  const buttons = [
    { name: "message", icon: faFacebookMessenger },
    { name: "notification", icon: faBell }
  ]
  return (
    <>
      <div className='Header flex justify-between h-[56px] gap-[5px] bg-[#242526] w-[100vw]'>
        <div className='Search flex'>
          <div className='flex flex-shrink-0 items-center w-[40px] ml-2'>
            <img className='w-[100%]' src='https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg'></img>
            <search className='ml-2'>
              <form>
                <input className='h-[30px] rounded-2xl bg-[#3a3b3c] pl-4 text-indent-4 text-white' placeholder='Tìm kiếm'></input>
              </form>
            </search>
          </div>
        </div>

        <div className="flex justify-center ">
          {tabs.map(({ name, icon }) => (
            <div key={name} className={`hover:cursor-pointer icon-container ${active == name ? "active" : ""}`} onClick={() => setActive(name)}>
              <FontAwesomeIcon icon={icon} className={`w-[20px] h-[20px] p-[18px] ${active == name ? "text-[#0866ff]" : "text-gray-400"}`} />
            </div>
          ))}
        </div>

        <div className='userbutton mr-2 flex'>
          {buttons.map(({ name, icon }) => (
            <div key={name} className='py-[10px] px-[4px]'>
              <FontAwesomeIcon className='w-[20px] h-[20px] p-2 rounded-full bg-[#3a3b3c] text-[#e4e6eb]' icon={icon} />
            </div>
          ))}

        </div>
      </div>

    </>
  )
}

export default App
