import React from 'react'

// Class Based Component

class About extends React.Component{

  constructor (props) {
    super(props);

    // this.state = {
    //   profile :{name:""}
      
    // }
  }

  state = {profile :{}, user_name :""}

  // componentDidMount(){
  //   this.getUserData()
  // }


  getUserData = async() =>{
    const resp = await fetch( "https://api.github.com/users/" + this.state.user_name);
    const data = await resp.json();
    console.log(data)
    this.setState({profile:data})
  }

  handleChange = (key) => (e, data) => {
    this.setState({ [key]: e.target.value });
   
  }

  handleClick = () => {
    this.getUserData()
  }



  render(){

    const {name,location,avatar_url}  =  this.state.profile

    return (
      <>
        <h1>Github User</h1>
        <input type="text" onChange = {this.handleChange("user_name")} value={this.state.user_name} />
        <button onClick={this.handleClick}>Search</button>
        <div>
          <img src={avatar_url} alt="" />
          <h1>Name:{name}</h1>
          <h2>Location: {location}</h2>
        </div>
      </>
    )
  }
   
  
}

export default About