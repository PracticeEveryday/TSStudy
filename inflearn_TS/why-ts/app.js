// api url
var url = "https://jsonplaceholder.typicode.com/users/1";

// dom
var username = document.querySelector("#username");
var email = document.querySelector("#email");
var address = document.querySelector("#address");

// user data
var user = {};

/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */

/**
 *
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */
/**
 * 제네릭!!
 * @returns {Promise<User>}
 */

const fetchUser = () => {
  return axios.get(url);
};
fetchUser().then((response) => {
  response.address.city;
});

function startApp() {
  fetchUser()
    .then(function (response) {
      //console.log(response);
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
      username.innerHTML = user.name;
      email.innerHTML = user.email;
      address.innerHTML = user.address;
      // 존재하지 않는 값 보여줌..
      // [object][boject] 나옴
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
