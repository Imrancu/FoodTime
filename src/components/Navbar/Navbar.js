import React from 'react';

const Navbar = () => {
    const menuItems = <>
        <li className='tracking-wide ml-2'><a>Home</a></li>
        <li className='tracking-wide ml-2'><a>Blog</a></li>
        <li className='tracking-wide ml-2'><a>About us</a></li>
        <li className='tracking-wide ml-2' tabIndex={0}>
            <a>
                EN
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </a>
            <ul>
                <li><a>Bengali</a></li>
                <li><a>Arabic</a></li>
            </ul>
        </li>
    </>

    return (
        <div className='border-b-2 bg-green-50'>
            <div className="navbar mx-auto" style={{ maxWidth: 1092 }}>
                    <a className="normal-case text-3xl font-bold cursor-pointer" style={{ fontFamily: 'Merienda', color: '#396C03' }}>Food<span>Time</span></a>
                <div className="navbar-end">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact text-gray-600 text-lg leading-9 font-semibold dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                </div>
                <div className="navbar-end hidden w-full lg:flex">
                    <ul className="menu menu-horizontal text-gray-600 px-1 text-lg leading-9 font-semibold">
                        {menuItems}
                    </ul>
                    <button style={{ backgroundColor: '#396C03' }} className='btn text-lg rounded-3xl px-10'>Login</button>
                    <div className="indicator">
                        <span style={{ backgroundColor: '#FF8B00' }} className="indicator-item p-1 badge border-0 text-white">2</span>
                        <div style={{ backgroundColor: '#396C03' }} className="p-3 ml-5 text-white rounded-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;