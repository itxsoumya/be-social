
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

// not sure
const MessageFlotButton = () => {
  return (
    <div className='fixed bottom-14   right-[9%]'>
      M
    </div>
  )
}

const Profile = () => {
  return (
    <div className=" sm:border-2 border-zincc-300 max-w-3xl mx-auto bg-red--50 ">

      <div className='bg-indigo-400 sm:h-48 h-40'>
        {/* banner */}

        <img className='sm:h-48 h-40 w-full' src="https://i.pinimg.com/originals/fb/82/f4/fb82f4512599ffe6de89c3c1704b8de8.jpg" alt="" />
      </div>
      <div className='absolute  -translate-x-1/2 -translate-y-1/2 rounded-full left-1/2 w-32 h-32 sm:w-36 sm:h-36 z-10 shadow-lg'>
        <img className='rounded-full sm:w-36 sm:h-36 w-32 h-32' src="https://pbs.twimg.com/profile_images/1330311226266689540/gJb2FMcr_400x400.jpg" alt="" />
      </div>

      <div className='text-end mt-2 mr-2'>
        <button className='bg-zinc-700 p-2 rounded-full px-4 text-white shadow-lg text-base sm:text-lg'>Follow</button>
      </div>

      <div className='sm:mt-10 mt-6 text-2xl text-center'>Soumya Ranjan</div>

      {/* about section */}
      <div className='pt-3 flex justify-center text-zinc-700 sm:text-lg text-base'>
        <div className='max-w-md text-center'>
          Life is a lie. Don't trust it
        </div>
      </div>

      <div className='flex bg-grayy-100 mt-10 sm:mt-11 py-4 sm:text-xl text-lg'>
        <div className='flex-grow flex flex-col justify-center items-center'>
          <p className='font-semibold'>1.9K</p>
          <p className='text-sm'>FOLLOWERS</p>

        </div>
        <div className='flex-grow flex flex-col justify-center items-center'>
          <p className='font-semibold'>53.9K</p>
          <p className='text-sm'>VIEWS</p>
        </div>
        <div className='flex-grow flex flex-col justify-center items-center'>
          <p className='font-semibold'>9.8K</p>
          <p className='text-sm'>FOLLOWING</p>
        </div>
      </div>

      <div className='p-2 border-b-2 border-t-2 sm:mt-10 mt-7'>
        All Posts
      </div>

      {
        data.map(e => <Post name={e.name} username={e.username} content={e.content} profile={e.profile} />)
      }
      {
        data.map(e => <Post name={e.name} username={e.username} content={e.content} profile={e.profile} />)
      }
      <MessageFlotButton />


    </div>
  )
}

export default Profile
