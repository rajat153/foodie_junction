import React from 'react'

function Contact() {
  return (
    <div>
      <h1 className='font-bold text-3xl'>Contact us Page</h1>
      <form action="" className='flex flex-col p-2'>
        <div>
        <label htmlFor="name" className=''>Name : </label>
        <input type="text" to ="name" className='border-2 m-2' placeholder='name'/>
        </div>
        <div>
        <label htmlFor="mobile">Mobile : </label>
        <input type="number" to ="name" className='border-2 m-2'/>
        </div>
        <div>
          <label htmlFor="remarks">Message : </label>
        <textarea name="remarks" id="" cols="30" rows="10"  className='border-2'placeholder='Enter yout Message'></textarea>
        </div>
       

        <button className='bg-sky-700 rounded-full w-20'>Submit</button>
      </form>
    </div>
  )
}

export default Contact