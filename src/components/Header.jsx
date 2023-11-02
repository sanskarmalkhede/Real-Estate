import React from 'react'
import { GrSearch } from 'react-icons/gr';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className='bg-slate-200 shadow-md'>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
                <Link to={'/'}>
                <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                    <span className='text-slate-500'>Real</span>
                    <span className='text-slate-700'>Estate</span>
                </h1>
                </Link>
                <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
                    <input
                        type='text'
                        placeholder='Search for houses'
                        className='bg-transparent text-slate-500 placeholder-slate-500 focus:outline-none w-24 sm:w-64'
                    />
                    <GrSearch className='text-slate-500' />
                </form>
                <ul className='flex gap-4'>
                    <Link to={'/'}><li className='hidden sm:inline text-slate-700 font-bold hover:text-violet-600'>Home</li></Link>
                    <Link to={'about'}><li className='hidden sm:inline text-slate-700 font-bold hover:text-violet-600'>About</li></Link>
                    <Link to={'signin'}><li className='text-slate-700 font-bold hover:text-violet-600'>Sign In</li></Link>
                </ul>
            </div>
        </header>
    )
}
