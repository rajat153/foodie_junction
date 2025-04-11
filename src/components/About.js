import React from 'react'
class About extends React.Component{

  constructor (props) {
    super(props);
  }


  render(){
    return (
      <>
        <div className="flex items-center justify-center min-h-screen px-4">
          <div className="max-w-2xl text-center p-4 bg-white rounded-2xl shadow-md">
            <h1 className="text-3xl font-bold mb-4 text-orange-500">🍽️ Foodie Junction</h1>
            <p className="text-gray-700 text-lg mb-2">
              Welcome to <strong>Foodie Junction</strong> — your one-stop destination to satisfy your cravings! 
              Our platform allows users to browse a variety of restaurants, explore top-rated dishes, 
              and order food straight to their doorstep with just a few clicks.
            </p>
            <p className="text-gray-700 text-lg mb-2">
              With an intuitive UI and seamless navigation, Foodie Junction ensures a delightful food ordering experience.
              You can filter by cuisine, ratings, or location — whatever suits your appetite!
            </p>
            <p className="text-gray-700 text-lg mb-4">
              <strong>Upcoming Features:</strong> 
              🔍 Location-based search, 💳 Secure payment integration, and 🎉 Real-time pop-up alerts for deals and order updates.
              secure <strong>Login/Logout</strong> system, allowing users to save their preferences, view past orders, and enjoy a personalized experience. 
            </p>
            <p className="text-sm text-gray-400">Stay hungry, stay happy! 😋</p>
          </div>
        </div>
      </>
    )
  }
}

export default About