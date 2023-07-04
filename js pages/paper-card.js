// const cardText1 = document.querySelector('.text1');
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
const seeMore5 = document.querySelector('.seeMore5')




async function getPaper() {
    const url = `https://script.google.com/macros/s/AKfycbxvOaxJZa4sqVK66ng6FHlsOgZO34ZwG9RuKaU6zqEW7Bx9y1cDL2mnb15s2agPEMiV0g/exec`;
    response = await fetch(url);
    data = await response.json();
    // console.log(data[0].Name);
    return data;
}


async function showPaper(id) {
    const students = await getPaper();
    const filteredStudents = students.filter(student => student.ID === id);

    let donePaperCount = 0;
    let paperCount = 0;

    for (let i = 0; i < filteredStudents.length; i++) {
        const student = filteredStudents[i];
        for (const key in student) {
            if (key !== "ID" && key !== "Personal id" && student[key]) {
                paperCount++;
                if (student[key]) {
                    donePaperCount++;
                }
            }
        }
    }

    console.log("done papers: " + donePaperCount);
    console.log("total papers: " + paperCount);

    const numPapers = document.querySelector('.num-Papers');
    const footer5 = document.querySelector('.footer5');

    if (donePaperCount === paperCount) {
        numPapers.textContent = `${donePaperCount} / ${paperCount}`;
        footer5.textContent = "No More Of paper";
    } else {
        numPapers.textContent = `${donePaperCount} / ${paperCount}`;
        footer5.textContent = `${paperCount - donePaperCount} paper(s) remaining`;
    }
}

// // Update the footer based on the next module deadline
// const filteredModules = students.filter(student => {
//   const date = new Date(student[`g${i} date`]);
//   return date >= new Date();
// });
// const nextModule = filteredModules.sort((a, b) => new Date(a[`g${i} date`]) - new Date(b[`g${i} date`]))[0];
// if (nextModule) {
//   const formattedDueDate = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(nextModule[`g${i} date`]));
//   footer4.textContent = `Next Module: ${formattedDueDate}`;
// } else {
//   footer4.textContent = 'No upcoming Module';
// }
// let moduleUrl = `Group.html?id=${id}`;
// seeMore4.href = moduleUrl;
// let module = await fetch(moduleUrl);
// let moduleData = await module.json();
// localStorage.setItem('moduleData', JSON.stringify(moduleData));
// window.open(moduleUrl);




// async function showPaper(value) {
//     var students = await getPaper();
//     const numPapers = document.querySelector('.num-Papers');
//     const footer5 = document.querySelector('.footer5');
//     let filteredPapers = students.filter(student => student.ID == value);
//     let paperCount = filteredPapers.length;
//     console.log("paper :" + paperCount);

//     const student = {
//     "Personal id": true,
//     "Certificate": true,
//     "HR Letter": true
//     };

//     const personalIdKey = "Personal id";
//     const certificateKey = "Certificate";
//     const hrLetterKey = "HR Letter";

//     const donePaperCount = personalIdKey == certificateKey == hrLetterKey;
// const notDonePaperCount = donePaperCount.length - donePaperCount;



//     console.log(donePaperCount);

//     if (donePaperCount) {
//     numPapers.textContent = `${donePaperCount} / ${paperCount}`;
//     } else {
//     numPapers.textContent = `${notDonePaperCount} / ${paperCount}`;
//     }



















searchButton.addEventListener('click', () => {
    const value = searchInput[0].value;
    showPaper(value)
});
