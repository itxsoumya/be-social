import { memo } from "react";
import { BiDislike, BiLike } from "react-icons/bi";
import { FaRegComment, FaShare } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";

const Post = memo(({ profile, content, name, username }) => {
  return (

    <div className="p-4 border-b-2 border-zinc-300 hover:bg-slate-100 cursor-pointer flex sm:text-lg text-base">
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
})

export default Post;
