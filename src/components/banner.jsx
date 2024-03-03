import React from "react";
import Back from '../assets/images/Login back.svg'
import a3 from '../assets/images/a3.jpeg'
import call from '../assets/images/uil_calender.svg'
import clock from '../assets/images/ic_round-access-time.svg'
import location from '../assets/images/location_red.svg'
import rupee from '../assets/images/rupee_red.svg';
import artist from '../assets/images/artist.jpeg'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
export default function banner(){
    return(
        <div className="mx-8 text-red-500">
            <div className="mb-8">
                <a href='google.com' className='flex text-xl font-bold'>
                    <img src={Back} alt='back' className="pr-4 w-6"></img>
                    Back
                </a>
            </div>
            <div className="mb-8">
                <div className="content-center">
                    <img src={a3} alt="banner" className="rounded-2xl w-full h-full border-transparent border-r-5 object-cover" style={{height:"486px"}}></img>
                </div>
            </div>

            <div className="p-3 border rounded-2xl mb-8 hover:border-red-500">
                <h5 className="2xl:text-2xl text-xl pb-3 text-red-700 font-semibold">More details: Music Event</h5>
                <p className="2xl:xl text-lg pb-3 leading-5 font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                <div className="flex text-sm pb-6 2xl:text-base">
                    <p className="flex 2xl:pr-4 pr-2">
                        <img src={call} alt="calender"></img>
                        <span className="p-2">3rd of feb 2024</span>
                    </p>
                    <p className="flex 2xl:pr-4 pr-2">
                        <img src={clock} alt="time"></img>
                        <span className="p-2">6:00pm</span>
                    </p>
                    <p className="flex 2xl:pr-4 pr-2">
                        <img src={location} alt="location"></img>
                        <span className="p-2">Ahmedabad</span>
                    </p>
                </div>
                <div className="flex">
                    <p className="flex 2xl:pr-4 pr-2 mr-8 items-center">
                        <img src={rupee} alt="location"></img>
                        <span className="2xl:text-2xl text-xl p-2 font-semibold">2000</span>
                    </p>
                    <a href="google.com" className="text-base px-6 py-3 border-2 rounded-full font-semibold hover:bg-red-500 hover:text-white">Book Now</a>
                </div>
            </div>
            <div className="p-3 border rounded-2xl mb-8 hover:border-red-500">
                <h5 className="2xl:text-2xl text-xl pb-6 text-red-700 font-semibold">Artist</h5>
                <div className="block lg:flex justify-between p-3">
                    <div className="flex pr-10 lg:mb-3">
                        <div>
                            <img src={artist} alt="artist" className="rounded-full max-w-40 h-40"></img>
                        </div>
                        <div className="p-8">
                            <h3 className="2xl:text-4xl font-semibold xl:3xl pb-2">John Smith</h3>
                            <h4 className="2xl:text-4xl xl:3xl ">Musician</h4>
                        </div>
                    </div>
                    
                    <div className="w-9/12 my-auto ">
                        <p className="break-words 2xl:text-2xl xl:text-xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        </p>
                    </div>
                </div>
            </div>
            <div className="p-3 border rounded-2xl mb-8 hover:border-red-500">
                <h5 className="2xl:text-2xl text-xl pb-6 text-red-700 font-semibold">Location</h5>
                <div className="block p-3 mx-auto">
                <Map google={this.props.google} zoom={14}>
                
                    <Marker onClick={this.onMarkerClick}
                            name={'Current location'} />

                    <InfoWindow onClose={this.onInfoWindowClose}>
                        <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                        </div>
                    </InfoWindow>
                    </Map>
                </div>
            </div>
        </div>
    )
}
