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

const seeMore3 = document.querySelector('.seeMore3')



async function getInfoDeadlines() {
    const url = `https://script.googleusercontent.com/macros/echo?user_content_key=0R8d1iqm90C-GGTz99LLcABq6JENQdCw-rur0yb31njY0Wc0L5n0bzMAIKEfTYonYZRQLHNd2lFhE3ySk3SBTral3hsVvRwZm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnLvWzkbjjR_fgiUtTLMvhDvPsd6Ah7bMHYDZ2SfFYsGe49N88IBzLFHYettXQhUz1lKKK7_QllFkpCW2Mbqx36uCwy8sBRNeetz9Jw9Md8uu&lib=MQfVKFgVXIr2Rm9shkxeT9DVOmtUjdkhJ`;
    response = await fetch(url);
    data = await response.json();
    // console.log(data[0].Name);
    return data;
}




async function showDeadlines(value) {
    var students = await getInfoDeadlines();
    const numDeadline = document.querySelector('.num-deadline');
    const footer3 = document.querySelector('.footer3');
    let filteredDeadlines = students.filter(student => student.ID == value);
    let deadlineCount = filteredDeadlines.length;
    console.log(deadlineCount);
    const numberOfPaidDeadlines = filteredDeadlines.filter(student => student.Status === "paid").length;
    // const numberOfUnpaidDeadlines = filteredDeadlines.filter(student => student.Status === "unpaid").length;
    console.log(numberOfPaidDeadlines);
    const deadlines = filteredDeadlines.sort((a, b) => new Date(a["Due Date"]) - new Date(b["Due Date"]));
    const now = new Date();
    const nextDeadline = deadlines.find(deadline => new Date(deadline["Due Date"]) > now);
    if (numberOfPaidDeadlines === deadlineCount) {
        const numberOfUnpaidDeadlines = deadlineCount
        numDeadline.textContent = `${numberOfUnpaidDeadlines} / ${deadlineCount}`;
        footer3.textContent = "No upcoming deadlines";
    } else {
        // const numberOfUnpaidDeadlines = deadlineCount - numberOfPaidDeadlines;
        numDeadline.textContent = `${numberOfPaidDeadlines} / ${deadlineCount}`;
        const formattedDueDate = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(nextDeadline["Due Date"]));
        footer3.textContent = `Next deadline: ${formattedDueDate}`;
    }

    let deadlineUrl = `Deadlines.html?id=${value}`;
    seeMore3.href = deadlineUrl;
    let deadline = await fetch(deadlineUrl);
    let deadlineData = await deadline.json();
    localStorage.setItem('deadlineData', JSON.stringify(deadlineData));
    window.open = deadlineUrl;



    // console.log(students);
    // const body = document.querySelector('body')
    // const tableBody = document.querySelector('.tbody1');
    // // Remove all existing rows from the table
    // while (tableBody.firstChild) {
    //     tableBody.removeChild(tableBody.firstChild);
    // }

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
            // tableBody.appendChild(newRow);
        }
    });


// Hide spinner element
document.body.removeChild(spinner);


    // const filteredDeadlines = students.filter(student => student.ID === value);

    // const numberOfDeadlines = filteredDeadlines.length;
    // console.log(numberOfDeadlines);

    // const numberOfPaidDeadlines = filteredDeadlines.filter(student => student.Status === "paid").length;
    // console.log(numberOfPaidDeadlines);

    // const numberOfUnpaidDeadlines = numberOfDeadlines - numberOfPaidDeadlines;

    // const numDeadline = document.querySelector('.num-deadline');
    // numDeadline.textContent = `${numberOfPaidDeadlines} paid / ${numberOfUnpaidDeadlines} unpaid`;
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
