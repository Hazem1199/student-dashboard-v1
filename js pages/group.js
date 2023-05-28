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




async function getInfoGroup() {
    const url = 'https://script.googleusercontent.com/macros/echo?user_content_key=7BZg2HTM-CuSep6QzuIXJ3Xl0eNPHaiYYOGOgBUn6l15PZzf9xlXSA1BY5261jVtlpaqVCeFPLIx0iuLcybOrW2QVtmWffmym5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNLMoutvLfw7y6bj32pLZwsHISRMuAqqcl6hkcLpv9YAfKs1vDSyaf6TAQ6C8JSO4uPd2WEWpo-umHqw3fOhQROmdRiLKrJvww&lib=MQfVKFgVXIr2Rm9shkxeT9DVOmtUjdkhJ';    response = await fetch(url);
    data = await response.json();
    // console.log(data[0].Name);
    return data;
}




async function showGroup(value) {
    var students = await getInfoGroup();
    // console.log(students);
    const body = document.querySelector('body')
    const tableBody = document.querySelector('.divTableBody');
    // Remove all existing rows from the table
    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    }

    // Create spinner element
    const spinner = document.createElement('div');
    spinner.classList.add('spinner');
    document.body.appendChild(spinner);

    for (let i = 1; i <= 12; i++) {
        students.forEach(element => {
            if (value == element.ID) {
                let student = { Group: element[`g${i}`], Module: element[`g${i} module`] }
                console.log(student);
                const newRow = document.createElement('tr');
                const moduleCell = document.createElement('td');
                const groupCell = document.createElement('td');
                newRow.appendChild(groupCell);
                newRow.appendChild(moduleCell);
                moduleCell.innerHTML = student.Module;
                groupCell.innerHTML = student.Group;
                tableBody.appendChild(newRow);
            }
        });
    }

    // Hide spinner element
    document.body.removeChild(spinner);
}




const page = document.querySelector('body');


page.addEventListener('click', (event) => {
    if (event.target !== searchInput) {
        const tableBody = document.querySelector('.divTableBody');
        tableBody.innerHTML = ""; // حذف جميع الصفوف في الجدول
    }
});

searchButton.addEventListener('click', () => {
    const value = searchInput[0].value;
    showGroup(value);
});

