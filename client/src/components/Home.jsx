import pimage from '../assets/profile.jpeg'
import profile2 from '../assets/profile2.jpeg'
import profile3 from '../assets/profile3.jpg'
import bb from '../assets/bb.jpg'
import { BiDislike, BiLike } from "react-icons/bi";
import { FaRegComment, FaShare } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";

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
    {
        profile: bb,
        name: 'Vibek Bindra',
        username: 'Vindra10',
        content: `Me and sandeep maheswari are really good friends. He helped me multiple times to grow in my life when ever i had any difficult situation.`
    },
]

const Post = ({ profile, content, name, username }) => {
    return (

        <div className="p-4 border-b-2 border-zinc-300 hover:bg-slate-50 cursor-pointer flex">
            <div className='bg-ered-200 '>
                <div className='rounded-full w-16 h-16'>
                    <img src={profile} className='rounded-full  h-16 w-16 cursor-pointer ' alt="nehi he bhi" />
                </div>
            </div>
            <div className='pl-3 py-1'>
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

const Home = () => {
    return (
        <div className="border-r-2 border-l-2 border-t-2 rounded-t-md  border-b-2 rounded-b-md border-zinc-300 max-w-3xl mx-auto">



            {
                data.map(e => <Post name={e.name} username={e.username} content={e.content} profile={e.profile} />)
            }

        </div>
    )
}
export default Home;