import React from 'react'
import Logo from '../assets/images/logo.png'
import Search_icon from'../assets/images/octicon_search-16.svg'
import Back from '../assets/images/Login back.svg'
import dp from '../assets/images/dp2.jpeg'

import a1 from '../assets/images/a1.jpeg'
import a2 from '../assets/images/a2.jpeg'
import location from '../assets/images/location.svg'
import time from '../assets/images/time.svg'
import rupee from '../assets/images/rupee.svg'
import download from '../assets/images/download.svg'
export default function profile() {
  const eventDivStyle = {
    height: '620px', // adjust height as needed
    overflow: 'auto', // or 'scroll' for always visible scrollbar
  };
  return (
    <div className='font-poppins'>
      <div className='px-7 py-4 flex items-center bg-slate-200 '>
        <div className='pe-6 w-56'>
          <img src={Logo} alt='Logo'></img>
        </div>
        <div className=' max-w-full relative'>
          <form className='flex rounded-full border border-transparent hover:border-red-500 hover:border '>
            <img src={Search_icon} alt='search' className='pl-4 mr-4 absolute bottom-4'></img>
            <input type='text' placeholder='Search' className='max-w-full px-16 py-4 bg-white h-max text-2xl border rounded-full focus-visible:outline-none'></input>
          </form>
        </div>
      </div>
      <div className='px-7 h-full text-red-500'>
        <div className='flex'>
          <div className='border-r-2 flex flex-col justify-between pb-10'>
            <div className=' text-center pt-9'>
              <a href='google.com' className='pl-4 pb-2 flex text-xl font-bold hover:under'>
                <img src={Back} alt='back' className='pr-5'></img>
                User Profile
              </a>
                <div className="pr-7 pt-8">
                  <ul className=' text-left text-xl font-semibold tabs'>
                    <li className='py-3 px-12 mb-3 border border-transparent rounded-full hover:bg-red-500 hover:text-white cursor-pointer active' data-target="#Profile">Profile</li>
                    <li className='py-3 px-12 mb-3 border border-transparent rounded-full hover:bg-red-500 hover:text-white cursor-pointer' data-target="#attended">Attended Event</li>
                  </ul>
                </div>
              </div>
              <div className='pl-7'>
                <button className='py-3 px-12 mb-3 border font-semibold rounded-full hover:bg-red-500 hover:text-white cursor-pointer'>
                  Logout
                </button>
              </div>
          </div>

          <div  className='ml-8 p-8 border-2 mt-28 rounded-xl w-2/6 mb-72 panel' id="Profile">
            <div className='justify-center p-8 '>
                <div className=' justify-between mb-20'>
                  <h3 className='text-2xl font-bold'>Account Details</h3>
                  {/* <button className='text-2xl flex border-b-2 border-b-transparent hover:border-b-2 hover:border-b-red-500'><img src={edit} alt='edit' className='justify-center pr-3 w-10 h-9 '></img>Edit</button> */}
                </div>
                <div>
                  <form>
                  <div className='items-center font-bold py-3 mb-7' >
                    <label for="name" className='text-2xl py-3 w-48'>Name</label>
                    <input type='text' id='name' class='text-red-500 h-10 py-3 border-b text-xl w-full focus-visible:outline-none' placeholder='Komal Mehra' ></input>
                  </div>
                  <div className='items-center font-bold py-3 mb-7' >
                    <label for="Email" className='text-2xl py-3 w-48'>Email</label>
                    <input type='email' id='Email' class='text-red-500 h-10 py-3 border-b text-xl w-full focus-visible:outline-none' placeholder='komal@gmail.com' ></input>
                  </div>
                  <div className='items-center font-bold py-3 mb-7' >
                    <label for="mobile" className='text-2xl py-3 w-48'>Mobile No</label>
                    <input type='number' id='mobile' maxLength="10" class='text-red-500 h-10 py-3 border-b text-xl w-full focus-visible:outline-none' placeholder='635123663' ></input>
                  </div>
                  <div className='text-center mb-13 text-red-500 '>
                    <input type='submit' id='submit' class='py-3 px-7 text-xl font-semibold border-2 rounded-full focus-visible:outline-none  hover:bg-red-500 hover:text-white' value='Save'></input> 
                  </div>
                  </form>
                </div>
            </div>
          </div>
          <div className='text-red-700 ml-8 p-8 mb-72 active' style={eventDivStyle}id="attended">
            <div className='font-semibold text-xl mb-8'>
              <h3>Past 6 months</h3>
            </div>
            <div className='flex mb-6 border p-6 rounded-xl'>
                <div className='w-44 pr-13 me-14'>
                  <img src={a2} alt='post2' className='object-cover h-full'></img>
                </div>
                <div className='text-left'>
                  <h3 className='text-xl font-bold pb-7'>Technical Event</h3>
                  <span className='py-2 mb-2 flex text-lg items-start'><img src={time} alt='time' className='pr-4 items-start'></img>3rd Feb 2024 | 6:00 P.M.
                  </span>
                  <span className='py-2 mb-2 flex text-lg'><img src={location} alt='location' className='pr-4'></img>HK Mall, Naranpura, Ahmedabad
                  </span>
                  <spam className="flex justify-between">
                    <span className='flex py-2 pr-64 mb-2 text-xl'><img src={rupee} alt='rupee' className='pr-4 pl-2'></img>2000</span>
                    <button className="flex rounded-full border-2 items-center py-3 px-4 text-lg">
                    <img src={download} alt="download" className='pr-3'></img>
                      Download Ticket</button>
                  </spam>
                </div>
            </div>
            <div className='flex mb-6 border p-6 rounded-xl'>
                <div className='w-44 pr-13 me-14'>
                  <img src={a2} alt='post2' className='object-cover h-full'></img>
                </div>
                <div className='text-left'>
                  <h3 className='text-xl font-bold pb-7'>Technical Event</h3>
                  <span className='py-2 mb-2 flex text-lg items-start'><img src={time} alt='time' className='pr-4 items-start'></img>3rd Feb 2024 | 6:00 P.M.
                  </span>
                  <span className='py-2 mb-2 flex text-lg'><img src={location} alt='location' className='pr-4'></img>HK Mall, Naranpura, Ahmedabad
                  </span>
                  <spam className="flex justify-between">
                    <span className='flex py-2 pr-64 mb-2 text-xl'><img src={rupee} alt='rupee' className='pr-4 pl-2'></img>2000</span>
                    <button className="flex rounded-full border-2 items-center py-3 px-4 text-lg">
                    <img src={download} alt="download" className='pr-3'></img>
                      Download Ticket</button>
                  </spam>
                </div>
            </div>
            <div className='flex mb-6 border p-6 rounded-xl'>
                <div className='w-44 pr-13 me-14'>
                  <img src={a2} alt='post2' className='object-cover h-full'></img>
                </div>
                <div className='text-left'>
                  <h3 className='text-xl font-bold pb-7'>Technical Event</h3>
                  <span className='py-2 mb-2 flex text-lg items-start'><img src={time} alt='time' className='pr-4 items-start'></img>3rd Feb 2024 | 6:00 P.M.
                  </span>
                  <span className='py-2 mb-2 flex text-lg'><img src={location} alt='location' className='pr-4'></img>HK Mall, Naranpura, Ahmedabad
                  </span>
                  <spam className="flex justify-between">
                    <span className='flex py-2 pr-64 mb-2 text-xl'><img src={rupee} alt='rupee' className='pr-4 pl-2'></img>2000</span>
                    <button className="flex rounded-full border-2 items-center py-3 px-4 text-lg">
                    <img src={download} alt="download" className='pr-3'></img>
                      Download Ticket</button>
                  </spam>
                </div>
            </div>
            <div className='flex mb-6 border p-6 rounded-xl'>
                <div className='w-44 pr-13 me-14'>
                  <img src={a2} alt='post2' className='object-cover h-full'></img>
                </div>
                <div className='text-left'>
                  <h3 className='text-xl font-bold pb-7'>Technical Event</h3>
                  <span className='py-2 mb-2 flex text-lg items-start'><img src={time} alt='time' className='pr-4 items-start'></img>3rd Feb 2024 | 6:00 P.M.
                  </span>
                  <span className='py-2 mb-2 flex text-lg'><img src={location} alt='location' className='pr-4'></img>HK Mall, Naranpura, Ahmedabad
                  </span>
                  <spam className="flex justify-between">
                    <span className='flex py-2 pr-64 mb-2 text-xl'><img src={rupee} alt='rupee' className='pr-4 pl-2'></img>2000</span>
                    <button className="flex rounded-full border-2 items-center py-3 px-4 text-lg">
                    <img src={download} alt="download" className='pr-3'></img>
                      Download Ticket</button>
                  </spam>
                </div>
            </div>
          </div>
        </div>
        </div>
        
      {/* <div className='w-full bg-red-500 text-white flex justify-center py-8 mt-24'>
        <img src={copyright} alt='copyright'></img> <p>Copyright 2024. All Rights Reserved</p>
      </div> */}
    </div>
  )
}
