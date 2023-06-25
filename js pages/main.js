
// const getResponse = response => response.json();
// const processJSON = data => {const data = JSON}
var searchInput = document.getElementsByName("search");
var fName = document.querySelector(".fName");
var body = document.getElementById("body");
var infoBox = document.querySelector(".info-box");
var Email = document.querySelector('.Email');
var Phone = document.querySelector('.Phone');
var ID = document.querySelector('.ID');
var Requests = document.getElementById('Requests');
var Complaint = document.querySelector('#Complaint');
var searchButton = document.querySelector('.search-button');
var pic = document.getElementById("profile-pic")
var headName = document.querySelector('.headName')


console.log(searchButton)

async function getData() {
   const url = `https://script.googleusercontent.com/macros/echo?user_content_key=RmImvI_1fBKSBc3BQRgZcd0pMbjoi2WPy7p8Gl-jp1FanUiZpWok-P_1vyqoNtXPIvLoSHB-YR6TuynDKaFmUU3U4gEeuheZm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnGs-e9gwa0Ae-WtYW7QGGv96K2sSkHDFYJixQ8WV4H0jDu1Qf_oSHKRcYFtRYbNxLCfJ3zQRKTiXpDt6znfr0IuyTQ8p70QBO9z9Jw9Md8uu&lib=MQfVKFgVXIr2Rm9shkxeT9DVOmtUjdkhJ`;
   response = await fetch(url);
   data = await response.json();
   // console.log(data[0].Name);
   return data;
}
// var test = getData();
// console.log(test);

async function display(value) {
   var users = await getData();
   //console.log(users);

   users.forEach(element => {
      if (value == element.ID) {
         console.log(element.Name);
         let user = { Name: element.Name, ID: element.ID, Email: element.Email, Phone: element.Phone, img: element["Profile Pic"] }
         fName.innerHTML = `${user.Name}`
         ID.innerHTML = `${user.ID}`
         Email.innerHTML = `${user.Email}`
         Phone.innerHTML = `${user.Phone}`
         headName.innerHTML = `${user.Name.slice(0, 50)}`
         pic.src = `${user.img}`;
         console.log(pic.src);
      }
   });
}



searchButton.addEventListener('click', () => {
   const value = searchInput[0].value;
   display(value);
});




window.onload = function () {
   const sidebar = document.querySelector(".sidebar");
   const closeBtn = document.querySelector("#btn");
   const searchBtn = document.querySelector(".bx-search")

   closeBtn.addEventListener("click", function () {
      sidebar.classList.toggle("open")
      menuBtnChange()
   })

   searchBtn.addEventListener("click", function () {
      sidebar.classList.toggle("open")
      menuBtnChange()
   })

   function menuBtnChange() {
      if (sidebar.classList.contains("open")) {
         closeBtn.classList.replace("bx-menu", "bx-menu-alt-right")
      } else {
         closeBtn.classList.replace("bx-menu-alt-right", "bx-menu")
      }
   }
}




