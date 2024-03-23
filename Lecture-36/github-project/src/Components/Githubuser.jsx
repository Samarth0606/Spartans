import React, { useEffect, useState } from "react";
import axios from "axios";

function Githubuser({ username }) {
  let [user, setUser] = useState({ imgUrl: "", followers: 0, following: 0 });
  //   api call axios

  //   useEffect(() => {
  //     async function apiCall() {
  //       let data = await axios.get(`https://api.github.com/users/${username}`);
  //       console.log(data);
  //     }
  //     apiCall();
  //   }, []);

  // useEffect(() => {
  //   async function apiCall() {
  //     fetch(`https://api.github.com/users/${username}`).then(async (res) => {
  //       let data = await res.json();
  //       let { avatar_url, followers, following } = data;
  //       setUser(() => {
  //         return {
  //           imgUrl: avatar_url,
  //           followers: followers,
  //           following: following,
  //         };
  //       });
  //     });
  //   }
  //   apiCall();
  // }, []);

  useEffect(() => {
    async function apiCall() {
      let res = await fetch(`https://api.github.com/users/${username}`);
      let data = await res.json();
      let { avatar_url, followers, following } = data;
      setUser(() => {
        return {
          imgUrl: avatar_url,
          followers: followers,
          following: following,
        };
      });
    }
    apiCall();
  }, []);

  return (
    <div>
      <figure>
        <img src={user.imgUrl} alt="profile pic" />
        <figcaption>
          <h2>Username:{username} </h2>
          <h3>Followers:{user.followers}</h3>
          <h3>Following:{user.following} </h3>
        </figcaption>
      </figure>
    </div>
  );
}

export default Githubuser;
