// var searchInput = document.getElementsByName("search");
// var fName = document.querySelector(".fName");
// var body = document.getElementById("body");
// var infoBox = document.getElementsByClassName("info-box")
// var Email = document.querySelector('.Email');
// var Phone = document.querySelector('.Phone');
// var ID = document.querySelector('.ID');
// var Requests = document.getElementById('Requests');
// var Complaint = document.getElementById('Complaint');
// var searchButton = document.querySelector('.search-button');
// var pic = document.getElementById("profile-pic")
// var headName = document.querySelector('.headName') 




async function getInfoDeadlines() {
    const url = `https://script.googleusercontent.com/macros/echo?user_content_key=0R8d1iqm90C-GGTz99LLcABq6JENQdCw-rur0yb31njY0Wc0L5n0bzMAIKEfTYonYZRQLHNd2lFhE3ySk3SBTral3hsVvRwZm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnLvWzkbjjR_fgiUtTLMvhDvPsd6Ah7bMHYDZ2SfFYsGe49N88IBzLFHYettXQhUz1lKKK7_QllFkpCW2Mbqx36uCwy8sBRNeetz9Jw9Md8uu&lib=MQfVKFgVXIr2Rm9shkxeT9DVOmtUjdkhJ`;
    response = await fetch(url);
    data = await response.json();
    // console.log(data[0].Name);
    return data;
}




async function showDeadlines(value) {
    var students = await getInfoDeadlines();
    // console.log(students);
    const body = document.querySelector('body')
    const tableBody = document.querySelector('.tbody1');
    // Remove all existing rows from the table
    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    }

    // Create spinner element
    const spinner = document.createElement('div');
    spinner.classList.add('spinner');
    document.body.appendChild(spinner);

    // for (let i = 1; i <= 12; i++) {
    // }
    students.forEach(element => {
        if (value == element.ID) {
            let student = { DueDate: element[`Due Date`], Amount: element.Amount, Status: element.Status }
            console.log(student);
            const newRow = document.createElement('tr');
            const DueDateCell = document.createElement('td');
            const AmountCell = document.createElement('td');
            const StatusCell = document.createElement('td');
            newRow.appendChild(DueDateCell);
            newRow.appendChild(AmountCell);
            newRow.appendChild(StatusCell);
            DueDateCell.innerHTML = student.DueDate;
            AmountCell.innerHTML = student.Amount;

            // Create and append img element based on student.Status
            const img = document.createElement('img');
            if (student.Status === "paid") {
                img.src = "./imgs/download.png";
                img.alt = "paid";
                img.style.width = "7%";
            } else if (student.Status === "unpaid") {
                img.src = "./imgs/png-transparent-computer-icons-ok-miscellaneous-trademark-cross.png";
                img.alt = "unpaid";
                img.style.width = "7%";
            }
            StatusCell.appendChild(img);
            tableBody.appendChild(newRow);
        }
    });


    // Hide spinner element
    document.body.removeChild(spinner);
}






// page.addEventListener('click', (event) => {
//     if (event.target !== searchInput) {
//         const tableBody = document.querySelector('.divTableBody');
//         tableBody.innerHTML = ""; // حذف جميع الصفوف في الجدول
//     }
// });

searchButton.addEventListener('click', () => {
    const value = searchInput[0].value;
    showDeadlines(value);
});
