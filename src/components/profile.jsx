import React from 'react'
import Logo from '../assets/images/logo.png'
import Search_icon from'../assets/images/octicon_search-16.svg'
import Back from '../assets/images/Login back.svg'
import dp from '../assets/images/dp2.jpeg'
import edit from '../assets/images/tdesign_edit.svg'
import copyright from '../assets/images/Group.svg'
import a1 from '../assets/images/a1.jpeg'
import a2 from '../assets/images/a2.jpeg'
import location from '../assets/images/location.svg'
import time from '../assets/images/time.svg'
import rupee from '../assets/images/rupee.svg'
export default function profile() {
  return (
    <div className='font-poppins'>
      <div className='px-7 py-4 flex items-center bg-slate-200 '>
        <div className='pe-6 w-56'>
          <img src={Logo} alt='Logo'></img>
        </div>
        <div className=' max-w-full relative'>
          <form className='flex rounded-full border border-transparent   hover:border-red-500 hover:border '>
            <img src={Search_icon} alt='search' className='pl-4 mr-4 absolute bottom-4'></img>
            <input type='text' placeholder='Search' className='max-w-full px-16 py-4 bg-white h-max text-2xl border rounded-full focus-visible:outline-none'></input>
          </form>
        </div>
      </div>
      <div className='px-7 py-9  text-red-500'>
        <div>
          <div>
            <a href='google.com' className='flex text-4xl font-bold'>
              <img src={Back} alt='back' className='pr-8'></img>
               User Profile
            </a>
          </div>
        </div>
        <div className='flex'>
          <div className='border-r-2 pr-3 mt-9 pb-96'>
              <div className="text-center p-6">
                <ul className='pb text-left text-xl font-semibold tabs'>
                  <li className='p-3 mb-3 border border-transparent hover:bg-red-500 hover:text-white cursor-pointer active' data-target="#dashboard">DashBoard</li>
                  <li className='p-3 mb-3 border border-transparent hover:bg-red-500 hover:text-white cursor-pointer' data-target="#attended">Attended Event</li>
                  <li className='p-3 mb-3 border border-transparent hover:bg-red-500 hover:text-white cursor-pointer' data-target="#logout">Log Out</li>
                </ul>
              </div>
            </div>
            <div  className='mx-auto px-14 shadow-2xl panel' id="dashboard">
            <div className='justify-center px-18 py-20 '>
                <div className='flex mb-10'>
                  <div className='pr-17 mr-16 object-cover w-40'>
                    <img src={dp} alt='dp'className='rounded-full'></img>
                  </div>
                  <div className='py-11'>
                    <h3 className='text-4xl font-semibold pb-3'>Komal Mehra</h3>
                    <p className='text-2xl'id="user-type">User</p>
                  </div>
                </div>
                <div className='flex justify-between mb-20 px-3 '>
                  <h3 className='text-3xl font-semibold'>Account Details</h3>
                  <button className='text-2xl flex border-b-2 border-b-transparent hover:border-b-2 hover:border-b-red-500'><img src={edit} alt='edit' className='justify-center pr-3 w-10 h-9 '></img>Edit</button>
                </div>
                <div>
                  <form>
                  <div className='flex items-center border-b py-3 mb-3' >
                      <label for='fullname' className='text-3xl font-semibold w-48'>Name :</label>
                      <input type='text' id='name' class='text-red-500 h-10 text-2xl w-full focus-visible:outline-none' placeholder='Komal Mehra' ></input>
                    </div>
                    <div className='flex items-center border-b py-3 mb-3' >
                      <label for='username' className='text-3xl font-semibold w-48'>Email :</label>
                      <input type='email' id='username' class='text-red-500 h-10 text-2xl w-full focus-visible:outline-none' placeholder='komal01405@gmail.com' ></input>
                    </div>
                    <div className='flex items-center border-b py-3 mb-7'>
                      <label for='username' className='text-3xl font-semibold w-48'>Mobile :</label>
                      <input type='number' id='username' class='text-red-500 h-10 text-2xl w-full focus-visible:outline-none' placeholder='6351123663' ></input> 
                    </div>
                    <div className='flex items-center py-3 mb-13 text-red-500 border border-transparent hover:bg-red-500 px-3 hover:text-white'>
                      <input type='submit' id='submit' class=' h-10 text-xl font-semibold w-full focus-visible:outline-none' value='Submit'></input> 
                    </div>
                  </form>
                </div>
            </div>
          </div>
          <div className='mx-auto items-center panel active' id="attended">
            <div className='text-red-500 font-semibold text-3xl mb-16'>
              <h3>Past 6 months</h3>
            </div>
            <div className='flex mb-8 border p-6 rounded-xl'>
                <div className='w-52 pr-13 me-14'>
                  <img src={a2} alt='post2' className='object-center'></img>
                </div>
                <div className='text-left'>
                  <h3 className='text-4xl font-semibold pb-7'>Technical Event</h3>
                  <span className='py-2 mb-2 flex text-xl items-start'><img src={time} alt='time' className='pr-4 items-start'></img>3rd Feb 2024 | 6:00 P.M. to 9:00 P.M.
                  </span>
                  <span className='py-2 mb-2 flex text-xl'><img src={location} alt='location' className='pr-4'></img>HK Mall, Naranpura, Ahmedabad
                  </span>
                  <span className='flex py-2 mb-2 text-2xl'><img src={rupee} alt='rupee' className='pr-4 pl-2'></img>2000</span>
                  <spam><a href='javascript:void(0)'>Download Ticket</a></spam>
                </div>
            </div>
          </div>
        </div>
        </div>
        
      <div className='w-full bg-red-500 text-white flex justify-center py-8 mt-24'>
        <img src={copyright} alt='copyright'></img> <p>Copyright 2024. All Rights Reserved</p>
      </div>
    </div>
  )
}
