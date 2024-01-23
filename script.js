let employees = [
  {
    id: "1",
    name: "krish",
    email: "krish@gmail.com",
  },
  {
    id: "2",
    name: "bharath",
    email: "bharath@yahoo.com",
  },
  {
    id: "3",
    name: "jenny",
    email: "Jenny@yahoo.com",
  },
  {
    id: "4",
    name: "Lenny",
    email: "lenny@yahoo.com",
  },
  {
    id: "5",
    name: "bharathi",
    email: "bharathi@gmail.com",
  },
  {
    id: "6",
    name: "sivam",
    email: "sivam@yahoo.com",
  },
  {
    id: "7",
    name: "sankar",
    email: "sankar@gmail.com",
  },
  {
    id: "8",
    name: "umadevi",
    email: "uma34@gmail.com",
  },
  {
    id: "9",
    name: "Shanmugam",
    email: "shan@gmail.com",
  },
  {
    id: "10",
    name: "Melvin",
    email: "melvin67@gmail.com",
  },
  {
    id: "11",
    name: "lawerence",
    email: "lawerence@gmail.com",
  },
  {
    id: "12",
    name: "Harish",
    email: "harish37@yahoo.com",
  },
  {
    id: "13",
    name: "gowtham",
    email: "gowtham1@gmail.com",
  },
  {
    id: "14",
    name: "vishal",
    email: "vishal@yahoo.com",
  },
  {
    id: "15",
    name: "nazriya",
    email: "Dino83@gmail.com",
  },
  {
    id: "16",
    name: "golden",
    email: "golden@gmail.com",
  },
  {
    id: "17",
    name: "Ramya",
    email: "ramya@yahoo.com",
  },
  {
    id: "18",
    name: "Marvin",
    email: "marvin62@yahoo.com",
  },
  {
    id: "19",
    name: "geo",
    email: "geo98@gmail.com",
  },
  {
    id: "20",
    name: "gopinath",
    email: "gopi10@yahoo.com",
  },
  {
    id: "21",
    name: "beer mohamad",
    email: "mohamad@yahoo.com",
  },
  {
    id: "22",
    name: "cathrine",
    email: "cathrine@yahoo.com",
  },
  {
    id: "23",
    name: "Ms. Gabriella",
    email: "gabi@hotmail.com",
  },
  {
    id: "24",
    name: "Gerald",
    email: "Konopelski@gmail.com",
  },
  {
    id: "25",
    name: "selvam",
    email: "selvamm90@gmail.com",
  },
];
//---------------------------------------------------------------------------------------------

const firstBtn = document.querySelector(".firstBtn");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const lastBtn = document.querySelector(".lastBtn");

const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");

//to set value for page
let page = document.getElementsByClassName("changes")[0];

//set starging item position with 0
let currentItem = 0;
let curPage = 0 / 5 + 1;

//Try to load the data for first page when page load
window.addEventListener("DOMContentLoaded", () => {
  displayEmployees(currentItem);
  page.innerHTML = currentItem / 5 + 1;
});

//Logic for previous user when user click on button
prevBtn.addEventListener("click", () => {
  //decreament current postion to 5.
  if (0 < currentItem) {
    currentItem -= 5;
    page.innerHTML = currentItem / 5 + 1;
    displayEmployees(currentItem);
  } else {
    alert("You are already in first page.");
  }
});

//Logic for next page when user click on next button
nextBtn.addEventListener("click", () => {
  //increase current position to 5.
  if (employees.length - 10 > currentItem) {
    currentItem += 5;
    page.innerHTML = currentItem / 5 + 1;
    displayEmployees(currentItem);
  } else {
    alert("You are already in last page");
  }
});

//logic for first button
firstBtn.addEventListener("click", () => {
  if (currentItem > 0) {
    currentItem = 0;
    page.innerHTML = currentItem / 5 + 1;
    displayEmployees(currentItem);
  } else {
    alert("You are alread in First page");
  }
});

//logic for last button
lastBtn.addEventListener("click", () => {
  if (currentItem < employees.length - 5) {
    currentItem = employees.length - 5;
    page.innerHTML = currentItem / 5 + 1;
    displayEmployees(currentItem);
  } else {
    alert("You are already in last page");
  }
});

//button from 1 to 5 code are below:
btn1.addEventListener("click", () => {
  currentItem = 0;
  page.innerHTML = currentItem / 5 + 1;
  displayEmployees(currentItem);
});
btn2.addEventListener("click", () => {
  currentItem = 5;
  page.innerHTML = currentItem / 5 + 1;
  displayEmployees(currentItem);
});
btn3.addEventListener("click", () => {
  currentItem = 10;
  page.innerHTML = currentItem / 5 + 1;
  displayEmployees(currentItem);
});
btn4.addEventListener("click", () => {
  currentItem = 15;
  page.innerHTML = currentItem / 5 + 1;
  displayEmployees(currentItem);
});
btn5.addEventListener("click", () => {
  currentItem = 20;
  page.innerHTML = currentItem / 5 + 1;
  displayEmployees(currentItem);
});

function displayEmployees(start) {
  let addTo = document.querySelector(".table-responsive");

  let dum = "";
  for (let i = start; i < start + 5; i++) {
    dum += `
    <div id="k">
    <div >
       <label>Id:</lable>
       <p id="para">${employees[i].id}</p>
    </div>
    <div>
       <label>Name:</lable>
       <p id="name">${employees[i].name}</p>
    </div>
    <div>
       <label >email:</lable>
       <p id="email">${employees[i].email}</p>
    </div>
    </div >
  `;
    addTo.innerHTML = dum;
  }
}
