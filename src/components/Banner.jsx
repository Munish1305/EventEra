import React from "react";
import Back from '../assets/images/Login back.svg'
import a3 from '../assets/images/a3.jpeg'
import call from '../assets/images/uil_calender.svg'
import clock from '../assets/images/ic_round-access-time.svg'
import location from '../assets/images/location_red.svg'
import rupee from '../assets/images/rupee_red.svg';
import artist from '../assets/images/artist.jpeg'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
function Banner() {
    //const event_location ='<iframe src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d58749.756755111404!2d72.470071!3d23.0289195!3m2!1i1024!2i768!4f13.1!4m8!3e9!4m0!4m5!1s0x395e9d0845742b0f%3A0x7e05407cae921b5a!2sPalladium%20Ahmedabad%2C%20Sarkhej%20-%20Gandhinagar%20Hwy%2C%20Thaltej%2C%20Ahmedabad%2C%20Gujarat%20380054!3m2!1d23.0578048!2d72.520927!5e0!3m2!1sen!2sin!4v1709550844659!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    const [myData,setMyData] = useState([]);
  useEffect(() =>{
    axios
    .get("https://api.theeventera.live/api/events/details/65dae3f5ef21054f00f20c34")
    //.get("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>console.log(res.data));
  }, []);
    myData.map((post)=>{
    const { 
        id,
        artist_description,
        artist_img,
        artist_name,
        banner_img,
        category,
        city,
        description,
        event_name,
        event_time,
        event_date,
        google_map_url,
        number_of_seats,
        poster_img,
        price,
    } = post;
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
                    <img src={banner_img} alt="banner" className="rounded-2xl w-full h-full border-transparent border-r-5 object-cover" style={{height:"486px"}}></img>
                </div>
            </div>

            <div className="p-3 border rounded-2xl mb-8 hover:border-red-500">
                <h5 className="2xl:text-2xl text-xl pb-3 text-red-700 font-semibold">More details: {event_name}</h5>
                <p className="2xl:xl text-lg pb-3 leading-5 font-normal">{description}</p>
                <div className="flex text-sm pb-6 2xl:text-base">
                    <p className="flex 2xl:pr-4 pr-2">
                        <img src={call} alt="calender"></img>
                        <span className="p-2">{event_date}</span>
                    </p>
                    <p className="flex 2xl:pr-4 pr-2">
                        <img src={clock} alt="time"></img>
                        <span className="p-2">{event_time}</span>
                    </p>
                    <p className="flex 2xl:pr-4 pr-2">
                        <img src={location} alt="location"></img>
                        <span className="p-2">{city}</span>
                    </p>
                </div>
                <div className="flex">
                    <p className="flex 2xl:pr-4 pr-2 mr-8 items-center">
                        <img src={rupee} alt="location"></img>
                        <span className="2xl:text-2xl text-xl p-2 font-semibold">{price}</span>
                    </p>
                    <a href="google.com" className="text-base px-6 py-3 border-2 rounded-full font-semibold hover:bg-red-500 hover:text-white">Book Now</a>
                </div>
            </div>
            <div className="p-3 border rounded-2xl mb-8 hover:border-red-500">
                <h5 className="2xl:text-2xl text-xl pb-6 text-red-700 font-semibold">{artist_name}</h5>
                <div className="block lg:flex justify-between p-3">
                    <div className="flex pr-10 lg:mb-3">
                        <div>
                            <img src={artist_img} alt="artist" className="rounded-full max-w-40 h-40"></img>
                        </div>
                        <div className="p-8">
                            <h3 className="2xl:text-4xl font-semibold xl:3xl pb-2">{artist_name}</h3>
                            <h4 className="2xl:text-4xl xl:3xl ">Musician</h4>
                        </div>
                    </div>
                    
                    <div className="w-9/12 my-auto ">
                        <p className="break-words 2xl:text-2xl xl:text-xl">
                        {artist_description}
                        </p>
                    </div>
                </div>
            </div>
            <div className="p-3 border rounded-2xl mb-8 hover:border-red-500">
                <h5 className="2xl:text-2xl text-xl pb-6 text-red-700 font-semibold">Location</h5>
                <div className="block p-3 mx-auto">
                <iframe src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d58749.756755111404!2d72.470071!3d23.0289195!3m2!1i1024!2i768!4f13.1!4m8!3e9!4m0!4m5!1s0x395e9d0845742b0f%3A0x7e05407cae921b5a!2sPalladium%20Ahmedabad%2C%20Sarkhej%20-%20Gandhinagar%20Hwy%2C%20Thaltej%2C%20Ahmedabad%2C%20Gujarat%20380054!3m2!1d23.0578048!2d72.520927!5e0!3m2!1sen!2sin!4v1709550844659!5m2!1sen!2sin" width="100%" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
    });
}
export default Banner;
