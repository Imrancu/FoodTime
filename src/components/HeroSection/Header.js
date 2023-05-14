import React from 'react';
import bgImage from '../../assets/images/bg-image.jpg'
import foodImage from '../../assets/images/food-dish.png'

const Header = () => {
    return (
        <div style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', }}>
            <div className="mx-auto" style={{ maxWidth: 1092 }}>
                <div className="flex justify-between pt-32">
                    <div className='w-7/12'>
                        <h1 className="text-6xl font-bold leading-9" style={{ fontFamily: 'Merienda', color: '#396C03', lineHeight: "85px" }}>Order food online from your favourite local restaurants<span className='text-warning'>.</span></h1>
                        <p className="py-6">Freshly made food delivered to your door.</p>
                        <div style={{ display: 'inline-block' }}>
                            <div className='bg-white flex border rounded-3xl'>
                                <div className='flex items-center'>
                                    <div className='h-9 w-9 ml-1 bg-warning rounded-full'></div>
                                    <input className="py-2 px-2 ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-none focus:border-none" placeholder="Enter your location" />
                                </div>
                                <button className='flex py-2 px-5 text-white bg-primary rounded-3xl'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg> Search</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-5/12 relative" >
                        <div className='bg-white inline-block bg-opacity-50 rounded-lg p-5 absolute -top-6 right-16'>
                            <h4 className='text-4xl font-bold flex items-center text-warning'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                            </svg>
                                200k+</h4>
                            <p className='text-lg font-semibold text-gray-600'>People Delivered</p>
                        </div>
                        <img src={foodImage} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;