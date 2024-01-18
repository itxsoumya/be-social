
import Post from './Post'
import pimage from '../assets/profile.jpeg'
import profile2 from '../assets/profile2.jpeg'
import profile3 from '../assets/profile3.jpg'

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

const Profile = () => {
    return (
        <div className=" sm:border-2 border-zincc-300 max-w-3xl mx-auto bg-red--50 ">

            <div className='bg-indigo-400 h-48'>
                {/* banner */}
            </div>
            <div className='absolute  -translate-x-1/2 -translate-y-1/2 rounded-full left-1/2 w-36 h-36 z-10'>
                <img className='rounded-full w-36 h-36' src={pimage} alt="" />
            </div>

            <div className='text-end mt-2 mr-2'>
                <button className='bg-pink-600 p-2 rounded-full px-4 text-white shadow-lg'>Follow</button>
            </div>

            <div className='mt-10 text-2xl text-center'>Soumya Ranjan</div>

            {/* about section */}
            <div className='pt-3 flex justify-center text-zinc-700'>
                Life is a lie. And dont't trust it at any cost
            </div>

            <div className='flex bg-gray-100 mt-12 py-4'>
                <div className='flex-grow flex flex-col justify-center items-center'>
                    <p>FOLLOWERS</p>
                    <p>1.9K</p>
                    
                </div>
                <div className='flex-grow flex flex-col justify-center items-center'>
                    <p>FOLLOWING</p>
                    <p>9.8K</p>
                </div>
                <div className='flex-grow flex flex-col justify-center items-center'>
                    <p>VIEWS</p>
                    <p>53.9K</p>
                </div>
            </div>

            <div className='p-2 border-b-2'>
                All Posts
            </div>

            {
                data.map(e => <Post name={e.name} username={e.username} content={e.content} profile={e.profile} />)
            }
            {
                data.map(e => <Post name={e.name} username={e.username} content={e.content} profile={e.profile} />)
            }


        </div>
    )
}

export default Profile