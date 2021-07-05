import React from 'react';
import axios from "axios";
import UserCard from "./UserCard";

class User extends React.Component {

    state ={
      name: [],
    }

    componentDidMount () {
      axios
      .get(`https://api.github.com/users/skraus5628`)
      .then (res => {
        this.setState({
          name: res.data.name,
          img: res.data.avatar_url,
          bio: res.data.bio,
          login: res.data.login,
          pubrepos: res.data.public_repos,
          github: res.data.html_url,
        });
      })
      .catch (error => console.log (error));
    }


    render (){
    return (
      <div>
        <UserCard user={this.state.name} img={this.state.img} bio={this.state.bio} login={this.state.login} pubrepos={this.state.pubrepos} github={this.state.github} />
      </div>
    );
    }
  }

  export default User; 