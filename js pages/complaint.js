
var searchInput = document.getElementsByName("search");
var fName = document.querySelector(".fName");
var body = document.getElementById("body");
var infoBox = document.getElementsByClassName("info-box")
var Email = document.querySelector('.Email');
var Phone = document.querySelector('.Phone');
var ID = document.querySelector('.ID');
var Requests = document.getElementById('Requests');
var Complaint = document.getElementById('Complaint');
var searchButton = document.querySelector('.search-button');
var pic = document.getElementById("profile-pic")
var headName = document.querySelector('.headName') 




async function getInfoComplaint() {
    const url = `https://script.google.com/macros/s/AKfycbwO4ZvcLywR7K06KqYbDNau2VuVENY_3IAaJHvLlixq1W2ANSQNYnMpB_sdFEphHjMg/exec`;
    response = await fetch(url);
    data = await response.json();
    console.log(data[0]);
    return data;
}




async function showComplaint(value) {
    var Complaint = await getInfoComplaint();
    // console.log(students);
    const body = document.querySelector('body')
    const tableBody = document.querySelector('.divTableBody');
    // Remove all existing rows from the table
    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    }

    // // Create spinner element
    // const spinner = document.createElement('div');
    // spinner.classList.add('spinner');
    // document.body.appendChild(spinner);


    Complaint.forEach(element => {
        if (value == element.ID) {
            let comp = { Date: element.Date, Message: element.Message, exManager: element.exManager, status: element.status, emplyee: element.emplyee , type : element.type }
            console.log(comp);
            const newRow = document.createElement('tr');
            const DateCell = document.createElement('td');
            const ComplaintCell = document.createElement('td');
            const exManagertCell = document.createElement('td');
            const statustCell = document.createElement('td');
            const emplyeeCell = document.createElement('td');
            newRow.appendChild(DateCell);
            newRow.appendChild(ComplaintCell);
            newRow.appendChild(exManagertCell);
            newRow.appendChild(statustCell);
            newRow.appendChild(emplyeeCell);
            DateCell.innerHTML = comp.Date;
            ComplaintCell.innerHTML = comp.Message;
            exManagertCell.innerHTML = comp.exManager;
            statustCell.innerHTML = comp.status;
            emplyeeCell.innerHTML = comp.emplyee;
            tableBody.appendChild(newRow);
        }
    });

    // Hide spinner element
    // document.body.removeChild(spinner);
}






// page.addEventListener('click', (event) => {
//     if (event.target !== searchInput) {
//         const tableBody = document.querySelector('.divTableBody');
//         tableBody.innerHTML = ""; // حذف جميع الصفوف في الجدول
//     }
// });

// searchButton.addEventListener('click', () => {
//     tableBody.remove();
//     if (searchInput.value != "") {
//         show(searchInput.value);
//     }
// });


//popup 


// var openPopupButton = document.getElementById("openPopupButton");
// var closePopupButton = document.getElementById("closePopupButton");
// var popupContainer = document.getElementById("popupContainer");

// openPopupButton.addEventListener("click", function() {
//   console.log(popupContainer)
//   popupContainer.style.display = "block";
// });

// window.onclick = function(event) {
//   if (event.target == popupContainer) {
//     popupContainer.style.display = "none";
//   }
// }



// const form = document.getElementById('myForm');
// const tableBody = document.querySelector('.divTableBody');

// function action(event) {
//   event.preventDefault(); // منع السلوك الافتراضي لنموذج الإرسال

//   // الحصول على قيمة حقل الطلب
//   const requestValue = document.getElementById('Request').value;

//   // الحصول على التاريخ الحالي
//   const today = new Date();
//   const dateValue = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;

//   // إنشاء صف جديد
//   const newRowHtml = `
//     <div class="divTableRow">
//       <div class="divTableCell">${dateValue}</div>
//       <div class="divTableCell">${requestValue}</div>
//     </div>
//   `;

//   // إضافة الصف الجديد إلى جسم الجدول
//   tableBody.insertAdjacentHTML('beforeend', newRowHtml);

//    // إعادة تعيين النموذج
//    form.reset();

//    // إخفاء popup
//    const popupContainer = document.getElementById("popupContainer");
//    popupContainer.style.display = "none";
 
// }

// form.addEventListener('submit', action);



