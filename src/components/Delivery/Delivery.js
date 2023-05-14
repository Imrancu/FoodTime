import React from 'react';
import Rest from '../../assets/images/rest.png'

const Delivery = () => {
    return (
        <div className='py-20' style={{ backgroundColor: "rgba(255,165,0,0.05)" }}>
            <div className="lg:flex justify-between mx-auto" style={{ maxWidth: 1092 }}>
                <div className='lg:w-5/12'>
                    <h2 className="text-5xl font-bold" style={{ fontFamily: 'Merienda', color: '#396C03', lineHeight: "65px" }}>Explore your favourite city’s food.</h2>
                    <p className="py-6">Lorem ipsum dolor sit amet consectetur. Ornare massa nunc nibh tristique. Non ligula tristique ut ut libero sit convallis maecenas. At egestas auctor porta mattis.</p>
                    <button style={{backgroundColor: '#396C03'}} className="btn px-10 rounded-3xl">Explore <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                    </button>
                </div>
                <div className=''>
                    <img src={Rest} />
                </div>
            </div>
        </div>
    );
};

export default Delivery;