/* eslint-disable no-unused-vars */



import React from 'react';
import { useState, useEffect } from 'react';
import './Homepage.css'

const Homepage = () => {
    const [navbarData, setnavbarData] = useState(['swiggy carporate', 'partner with us', 'get the app', 'profile']);
    return (
        <div className='home-page'>
            <div className='home-page-content'>
                <div className='navbar'>
                    {
                        navbarData && navbarData.map((item, index) => {
                            return (
                                <div key={index} className='navbar-item'>
                                    {
                                        item === 'partner with us' || item === 'profile' ? (<button>{item}</button>) : (<p>{item}</p>)
                                    }
                                </div>
                            )
                        })
                    }

                </div>

                <div className='home-page-content'>
                    {/* //want it center of page */}
                    <h1>Order food & groceries. Discover best restaurants. Swiggy it!</h1>
                </div>

                <div>
                    {/* want in row and center of page  */}
                    <input placeholder='enter your current location'/>
                    <input placeholder='Search for restaurant, item or more'/>
                </div>
            </div>

        </div>
    )
};

export default Homepage;