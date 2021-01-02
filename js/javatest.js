var users = [
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' },
    { username: 'user3', password: 'pass3' }
];
var admin = [
    { username: 'admin1', password: 'adm1'},
    { username: 'admin2', password: 'adm2'}
];

var button = document.getElementById('login');

button.onclick = function() {
   var username = document.getElementById('username').value;
   var password = document.getElementById('password').value; 

   for (var i = 0; i < users.length; i++) {
      if(username == users[i].username && password == users[i].password) {
         window.location.href = 'dashboard.html';
         alert('Anda berhasil login')
         return;
      }
         
  }for (var i = 0; i < admin.length; i++) {
      if(username == admin[i].username && password == admin[i].password) {
         window.location.href = 'dashboard2.html';
         alert('Anda berhasil login')
         return;
      }
         
  }
    alert('periksa kembali username dan password anda');
  }   