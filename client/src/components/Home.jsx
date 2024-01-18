import { useState } from 'react';
import pimage from '../assets/profile.jpeg'
import profile2 from '../assets/profile2.jpeg'
import profile3 from '../assets/profile3.jpg'

import { BiDislike, BiLike } from "react-icons/bi";
import { FaRegComment, FaShare } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";


const data = [
    {
        profile: pimage,
        name: 'John Doe',
        username: 'johndoe89',
        content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aliquid sed
        adipisci omnis ipsa odit delectus magnam. Odit laboriosam beatae earum vitae,
        ducimus molestiae ratione quibusdam error nulla velit facere!`
    },

    {
        profile: profile3,
        name: 'Jonny Bhaoo',
        username: 'jonny_a2z',
        content: 'Life is a gift. Just enjoy it like i do 😊'
    },
    {
        profile: profile2,
        name: 'Samu',
        username: 'samu75',
        content: `i think i am the only intelligent person out there 😁`
    },

]

const Post = ({ profile, content, name, username }) => {
    return (

        <div className="p-4 border-b-2 border-zinc-300 hover:bg-slate-100 cursor-pointer flex sm:text-xl text-base">
            <div className='bg-ered-200'>
                <div className='rounded-full sm:w-16 sm:h-16 h-12 w-12'>
                    <img src={profile} className='rounded-full  sm:h-16 sm:w-16 h-12 w-12 cursor-pointer ' alt="nehi he bhi" />
                </div>
            </div>

            <div className='pl-3 py-1  w-full'>
                <b>{name}</b>
                <span className='text-zinc-500'> @{username}</span>
                <div>
                    {content}
                </div>
                {/* leaving this space to render images also */}
                <div className='flex gap-2 pt-4'>
                    <div className='flex-grow text-2xl'><BiLike />
                    </div>
                    <div className='flex-grow text-2xl'><BiDislike /></div>
                    <div className='flex-grow text-2xl'><FaRegComment />
                    </div>
                    <div className='flex-grow text-2xl'><FiShare2 />
                    </div>
                </div>
            </div>

        </div>
    )
}

const MakePostCard = ({ profile, name }) => {
    return (

        <div className="p-4 border-b-2 border-zinc-300 hover:bbg-slate-100 cursor-pointer flex sm:text-xl text-lg ">
            <div className='bg-ered-200'>
                <div className='rounded-full sm:w-16 sm:h-16 h-12 w-12'>
                    <img src={profile} className='rounded-full  sm:h-16 sm:w-16 h-12 w-12 cursor-pointer ' alt="nehi he bhi" />
                </div>
            </div>

            <div className='pl-3 py-1 w-full'>
                {/* <b>{name}</b> */}
                {/* <br /> */}

                <textarea placeholder='What Happened?' className='w-full p-5 border-2 rounded-md focus:shadow-lg focus:outline-none focus:border-zinc-400 text-base'></textarea>



                <div className='flex justify-end'>
                    <button className='bg-teal-600 sm:px-9 sm:p-3 px-8 p-2 rounded-md text-white shadow-lg'>Post</button>
                </div>
                {/* <div className='flex gap-2 pt-4'>
                    <div className='flex-grow text-2xl'><BiLike />
                    </div>
                    <div className='flex-grow text-2xl'><BiDislike /></div>
                    <div className='flex-grow text-2xl'><FaRegComment />
                    </div>
                    <div className='flex-grow text-2xl'><FiShare2 />
                    </div>
                </div> */}
            </div>

        </div>
    )
}

const AlertCard = () => {
    const [visible, setVisible] = useState('')
    return (
        <div className={'bg-green-400 fixed top-16 w-full max-w-3xl p-4 rounded-xl flex shadow-md ' + visible}>
            <div className='flex-grow '>
                Successfully Created
            </div>
            <div className='flex justify-center items-center text-2xl cursor-pointer' onClick={() => setVisible('invisible')}><RxCross2 />
            </div>
        </div>
    )
}

const Home = () => {
    return (
        <div className="sm:border-r-2 sm:border-l-2 sm:border-t-2 sm:rounded-t-md sm:rounded-b-md border-zinc-300 max-w-3xl mx-auto">

            <MakePostCard profile={profile3} name={'ded'} />

            {
                data.map(e => <Post name={e.name} username={e.username} content={e.content} profile={e.profile} />)
            }
            {
                data.map(e => <Post name={e.name} username={e.username} content={e.content} profile={e.profile} />)
            }
            {
                data.map(e => <Post name={e.name} username={e.username} content={e.content} profile={e.profile} />)
            }


            <AlertCard />


        </div>
    )
}
export default Home;