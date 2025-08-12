import React from 'react'
import { MdArrowRightAlt } from 'react-icons/md'

const Emails = () => {
  return (
<>
<div className="flex flex-col gap-3 items-center justify-center text-center mx-auto ">
    <h1 className='text-4xl'>Subscribe to our emails</h1>
    <p className='flex text-gray-400 gap-2'>Be the first to know about new collections and exclusive offers.

</p>
<div className="flex items-center  bg-white border border-gray-300 rounded-xl shadow-md px-3 py-2 w-64">
     <input
        type="email"
        placeholder="Email"
        className="flex-1 border-none outline-none text-sm placeholder-gray-500"
      />
      <MdArrowRightAlt />
        
</div>
</div>
</>  )
}

export default Emails