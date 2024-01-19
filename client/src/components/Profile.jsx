
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

            <div className='bg-indigo-400 sm:h-48 h-40'>
                {/* banner */}
            </div>
            <div className='absolute  -translate-x-1/2 -translate-y-1/2 rounded-full left-1/2 w-32 h-32 sm:w-36 sm:h-36 z-10'>
                <img className='rounded-full sm:w-36 sm:h-36 w-32 h-32' src={pimage} alt="" />
            </div>

            <div className='text-end mt-2 mr-2'>
                <button className='bg-pink-600 p-2 rounded-full px-4 text-white shadow-lg text-lg'>Follow</button>
            </div>

            <div className='sm:mt-10 mt-6 text-2xl text-center'>Soumya Ranjan</div>

            {/* about section */}
            <div className='pt-3 flex justify-center text-zinc-700 sm:text-lg text-base'>
                <div className='max-w-md text-center'>
                Life is a lie. Don't trust it
                </div>
            </div>

            <div className='flex bg-gray-100 mt-12 py-4 sm:text-xl text-lg'>
                <div className='flex-grow flex flex-col justify-center items-center'>
                    <p>1.9K</p>
                    <p>FOLLOWERS</p>
                    
                </div>
                <div className='flex-grow flex flex-col justify-center items-center'>
                    <p>9.8K</p>
                    <p>FOLLOWING</p>
                </div>
                <div className='flex-grow flex flex-col justify-center items-center'>
                    <p>53.9K</p>
                    <p>VIEWS</p>
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