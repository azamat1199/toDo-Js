// const colors = ["green", "yellow", "pink", "navy", "blue", "red", "black"];
// const icons = ["😂", "✅", "😎", "🥸", "🤯", "🤯", "🤯", "🤯"];
// function addDivBox() {
//   const index = Math.floor(Math.random() * colors.length);
//   const data = document.getElementById("data");
//   data.innerHTML += `<div onclick="removeElement(event)" onmouseleave="hoverLeft(event)" onmouseover="hoverBox(event)" style="background: ${colors[index]}" class="box-item"><span>${icons[index]}</span></div>`;
// }

// function removeElement(event) {
//   event.target.remove();
//   console.log(event);
// }

// function hoverBox(event) {
//   const span = event.target.querySelector("span");
//   span.style.cssText = "transform: scale(4); transition: 1s;";
// }

// function hoverLeft(event) {
//   const span = event.target.querySelector("span");
//   span.style.cssText = "transform: scale(1); transition: 1s;";
// }

// var button = document.querySelector("button");

// button.onclick = function clickEvent(event) {
//   console.log("Clicked");
//   console.log(event);
// };

// function dblClickEvent(event) {
//   // console.log("DBL Clicked");
//   // console.log(event);
// }

// button.addEventListener("mouseover", function () {
//   // console.log("Hovering");
//   // console.log(Event);
// });

// var form = document.querySelector("form");
// form.onsubmit = function (event) {
//   console.log(event);
//   event.preventDefaut();
// };

////////////////////////////123

// function parentDiv(event) {
//   console.log("parent", event);
// }

// function childDiv(event) {
//   console.log("child", event);
// }

// const child = document.getElementById("child");
// const parent = document.getElementById("parent");

// child.addEventListener(
//   "mousemove",
//   function () {
//     console.log("child");
//   },
//   true
// );
// parent.addEventListener(
//   "click",
//   function () {
//     console.log("parent");
//   },
//   true
// );

// var li = document.querySelector("ul li button");

// li.forEach(function (item) {
//   item.addEventListener("click", function (event) {
//     var el = event.target;
//     var parentEl = el.parentElement;
//     parentEl.remove();
//   });
// });

// var join = document.getElementById("email");
// var inp = document.getElementById("test1");
// inp.addEventListener("keyup", function (event) {
//   var result = event.target.value;
//   join.innerText = result;
// });

// var join1 = document.getElementById("b-phone");

// inp.addEventListener("keyup", function (event) {
//   var result = event.target.value;
//   join1.innerText = result;

// var input1 = document.getElementById("test3");
// var mobile = document.getElementById("m-phone");
// input1.addEventListener("keyup", function (event) {
//   var result = input1.event.target;
//   mobile.innerText = result;
// });

// var name = document.getElementById('job');

if (!localStorage.data) {
  localStorage.data = "[]";
}
var toDos = JSON.parse(localStorage.data);
toDos.forEach((e) => {
  let toDo = `<div class="box__item d-flex">
  <div class="box__item-date">
    <h3 class="dateStyle"> <span id="dateBox" class="">${e.icon}</span></h3>
    <h4 id="timesUp">${e.timesUp}</h4>
  </div>
  <div class="box__item-info">
    <h3><i class="fab fa-free-code-camp " style="background: #FFCE31;
      border-radius: 15px;"></i><span id="graden">${e.descrption}</span></h3>
    <h4 id="descrpInfo">${e.priority}</h4>
  </div>
  <div class="box__item-button d-flex">
    <img src="img/emojione_person-running-light-skin-tone.svg" alt="">
    <button onclick="" class="start" style="color: #0092FC; background: rgba(186, 226, 255, 0.24);
    ">Started</button>
  </div>
  <div class="delete">
       <span class="check"><a href="#"><img src="img/Vector (2).svg" alt=""></a> </span>
       <span class="edit"><a href="#"><img src="img/Group (8).svg" alt=""></a></span>
       <span id='' class="clear"><a href="#"><img src="img/bx_bx-trash.svg" ></a></span>
   </div>
</div>`;

  document.getElementById("inner").innerHTML += toDo;
});
///date and time
var todoNameItem = document.getElementById("todoName");
var iconItem = document.getElementById("iconOpt");
var priorityItem = document.getElementById("priority");
var descrpItem = document.getElementById("descrp");
var dateItem = document.getElementById("date");
var statusItem = document.getElementById("status");
let form = document.getElementById("inputItem");

///category and description
var innerItem = document.getElementById("inner");

let toDoData = JSON.parse(localStorage.data);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let title = todoNameItem.value;
  let iconItem1 = iconItem.value;
  let priorityItem1 = priorityItem.value;
  let descrpItem1 = descrpItem.value;

  let statusItem1 = statusItem.value;
  let dateItem1 = dateItem.value;

  let toDo = `<div class="box__item d-flex">
  <div class="box__item-date">
    <h3 class="dateStyle"> <span id="dateBox" class="">${title}</span></h3>
    <h4 id="timesUp">${iconItem}</h4>
  </div>
  <div class="box__item-info">
    <h3><i class="fab fa-free-code-camp " style="background: #FFCE31;
      border-radius: 15px;"></i><span id="graden">${descrpItem1}</span></h3>
    <h4 id="descrpInfo">${priorityItem1}</h4>
  </div>
  <div class="box__item-button d-flex">
    <img src="img/emojione_person-running-light-skin-tone.svg" alt="">
    <button onclick="" class="start" style="color: #0092FC; background: rgba(186, 226, 255, 0.24);
    ">Started</button>
  </div>
  <div class="delete">
       <span class="check"><a href="#"><img src="img/Vector (2).svg" alt=""></a> </span>
       <span class="edit"><a href="#"><img src="img/Group (8).svg" alt=""></a></span>
       <span id='' class="clear"><a href="#"><img src="img/bx_bx-trash.svg" ></a></span>
   </div>
</div>`;

  document.getElementById("inner").innerHTML += toDo;

  let obj = {
    id: Date.now(),
    date: todoNameItem,
    todoItem: dateItem,
    timesUp: statusItem,
    priority: priorityItem,
    icon: iconItem1,
    descrption: descrpItem,
  };

  toDoData.push(obj);

  localStorage.setItem("data", JSON.stringify(toDoData));
});

// document.addEventListener("DOMContentLoaded", () => {
//   console.log("Loaded");
//   let str = "";
//   toDoData.forEach((i) => {
//     str += `<div class="box__item d-flex">
//     <div class="box__item-date">
//       <h3 class="dateStyle"> <span id="dateBox" class="">${dateBox1}</span></h3>
//       <h4 id="timesUp">${timesUp1}</h4>
//     </div>
//     <div class="box__item-info">
//       <h3><i class="fab fa-free-code-camp " style="background: #FFCE31;
//         border-radius: 15px;"></i><span id="graden">${graden1}</span></h3>
//       <h4 id="descrpInfo">${descrpInfo1}</h4>
//     </div>
//     <div class="box__item-button d-flex">
//       <img src="img/emojione_person-running-light-skin-tone.svg" alt="">
//       <button onclick="" class="start" style="color: #0092FC; background: rgba(186, 226, 255, 0.24);
//       ">Started</button>
//     </div>
//    </div>`;
//     console.log(str);
//   });

//   document.querySelector("#toDo").innerHTML = str;
// });

function updateInfo() {
  const headName = document.getElementById("todoName");
  const dateInput = document.getElementById("date");

  const timeInp = document.getElementById("status");
  console.log(dateInput);
  const gradenInp = document.getElementById("iconOpt");
  const descrpInp = document.getElementById("descrp");

  // const todoNameItem = document.getElementById('dateBox')
  // const iconItem = document.getElementById('')

  let toDo = `<div class="box__item d-flex">
          <div class="box__item-date" >
            <h3 class="dateStyle"> <span id="dateBox" class="">${dateItem.value}</span></h3>
            <h4 id="timesUp">${statusItem.value}</h4>
          </div>
          <div class="box__item-info">
            <h3><i class="fab fa-free-code-camp " style="background: #FFCE31;
              border-radius: 15px;"></i><span id="graden">${descrpItem.value}</span></h3>
            <h4 id="descrpInfo">${priorityItem.value}</h4>
          </div>
          <div class="box__item-button d-flex">
            <img src="img/emojione_person-running-light-skin-tone.svg" alt="">
            <button onclick="" class="start" style="color: #0092FC; background: rgba(186, 226, 255, 0.24);
            ">Started</button>
          </div>
          <div class="delete">
               <span class="check"><a href="#"><img src="img/Vector (2).svg" alt=""></a> </span>
               <span class="edit"><a href="#"><img src="img/Group (8).svg" alt=""></a></span>
               <span id='' class="clear" onclick= "clearBtn(this)"><a href="#"><img src="img/bx_bx-trash.svg" ></a></span>
           </div>
        </div>`;

  // todoItem.innerHTML = headName.value;

  inner.innerHTML += toDo;

  timesUp.innerText = timeInp.value;
  graden.innerHTML = gradenInp.value;
  descrpInfo.innerHTML = descrpInp.value;

  const defaultItem = (dateInput.value = "");
  timeInp.value = "";
  graden.value = "";
  descrpInp.value = "";
}

inputItem.addEventListener("submit", function (event) {
  event.preventDefault();
});

let clearBtn = [...document.getElementsByClassName("clear")];
console.log(clearBtn);
clearBtn.forEach((item) => {
  item.addEventListener("click", () => {
    item.parentElement.parentElement.remove();
    var toDos = JSON.parse(localStorage.data);
    let fas = toDos.filter((i) => {
      return i.id !== +item.id;
    });
    localStorage.data = JSON.stringify(fas);
  });
});

function deleteBtn(e) {
  e.parentElement.parentElement.remove();
}

// create tugmasi bosganda hamma input value olsin
// bitta bo'sh string yaratsin
// bo'shtringga biz yaratgan template string ni qo'shsin (qiymatlari mos ravihda qo'yilib chiqiladi)
