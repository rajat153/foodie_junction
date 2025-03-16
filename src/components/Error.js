import React from 'react';
import { useRouteError , Link} from 'react-router-dom';
import error from  '../../images/error.jpg'
function Error() {
    const err = useRouteError();

  return (
    <div className='w-full h-screen flex items-center flex-col justify-center m-auto translate-10 border-2 border-cyan-500 gap-4'>
      <img className='w-40' src={error}/>
      <div className='text-center'>
        <h1 className="text-2xl font-bold mb-4">opps Something went wrong</h1>
        <p className='mb-4'>Uh-oh! Looks like the page you are trying to access, doesn't exist. Please start afresh.</p>
        <h2 className='mb-4'>{err.status + ": " + err.statusText}</h2>
        <button className='border-2 border-orange-500 bg-orange-500 text-white px-4 py-2 rounded'><Link to='/'>Go To Home</Link></button>
      </div>
    </div>
  )
}

export default Error