// getItem
// setItem
// removeItem
// clear


// function Send() {
//     let value = document.querySelector('#inp').value;
//     localStorage.setItem('username',value);
// }

// let username = localStorage.getItem('username');
// document.getElementById('name').innerHTML = username

// localStorage.setItem('username','Seid')
// localStorage.setItem('groupname','P128')

// function Send() {
//     localStorage.clear();
// }


// if(localStorage.getItem('users') === null) {
//     localStorage.setItem('users',JSON.stringify([]));
// }


// let btn = document.querySelector('#btn_add');
// let btn_delete = document.querySelector('#btn_delete');

// btn.addEventListener('click',function() {
//     let users = JSON.parse(localStorage.getItem('users'));
//     // console.log(users);
//     let username = document.querySelector('#name').value;
//     let email = document.querySelector('#email').value;

//     users.push({
//         name: username,
//         email: email
//     })
//     // console.log(users);

//     localStorage.setItem('users',JSON.stringify(users));
//     AddUsers()
// })


// function AddUsers() {
//     let users = JSON.parse(localStorage.getItem('users'));

//     let div = '';

//     users.forEach(user => {
//         div += `
//         <div class="col-lg-4">
//             <div class="box">
//                 <h3>${user.name}</h3>
//                 <p>${user.email}</p>
//             </div>
//         </div> 
//         `
//     })

//     document.getElementById('list').innerHTML = div;
// }


// AddUsers()

// btn_delete.addEventListener('click',function() {
//     localStorage.setItem('users',JSON.stringify([]))
//     ShowAlert();
// })


// function ShowAlert() {
//     let users = JSON.parse(localStorage.getItem('users'));

//     if(users.length === 0) {

//         let div = '';
//         div = `
//         <div class="alert alert-danger" role="alert">
//         There is no user...!
//         </div>
//         `
//         document.getElementById('alert').innerHTML = div
//     }
// }

// ShowAlert();