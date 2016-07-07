import axios from 'axios';

function getRepos(username){
  return axios.get(`https://api.github.com/users/${username}/repos`);
}

function getUserInfo(username){
  return axios.get(`https://api.github.com/users/${username}`);
}

const helpers = {
  getGithubInfo: (username) => {
    return axios.all([getRepos(username), getUserInfo(username)])
      .then(function(arr){
        console.log(arr);
        return {
          repos: arr[0].data,
          bios: arr[1].data
        }
      });
  }
}

export default helpers;
