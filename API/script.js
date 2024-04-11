let userData = document.getElementById('userData')

async function handleApi () {
 let res = await fetch("https://jsonplaceholder.org/users")
 let data =await res.json()
 console.log(data);
 userData.innerHTML = data.map((user)=>
  `<tr>
  <td>${user.firstname}</td>
  <td>${user.email}</td>
  <td>${user.phone}</td>
  <td>${user.website}</td>
  </tr>`
 ).join('')
}
handleApi()