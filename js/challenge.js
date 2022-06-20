// INITIALIZE THE VALUES
let counterr = document.getElementById("counter");
let intervals = setInterval(counter, 1000);
let counterrValue = parseInt(counterr.innerHTML);
let likes = document.querySelector(".likes");
let comment = document.getElementById("list");
let submit = document.getElementById("submit");

// counter
function counter() {
    counterrValue += 1;
    counterr.innerText = counterrValue;
}


let plus = document.getElementById("plus");
plus.addEventListener("click", ()=> {
  return (counterr.innerHTML = counterrValue++);
});

let minus = document.getElementById("minus");
minus.addEventListener("click", () => {
  return counterr.innerHTML = counterrValue--;
});

let heartlike = document.getElementById("heart");
heartlike.addEventListener("click", () => {
  li = document.createElement("li");
    let c = counterrValue++
    let heart = heartlike.innerHTML;
  li.innerHTML = c + " has been liked "+ heart + " 1 times";
  likes.appendChild(li);
});


let form = document.getElementById("comment-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  commentArea = document.createElement("p");
  commentArea.textContent = `${e.target.comment.value}`;
  comment.appendChild(commentArea);
});



// pause
let pause = document.getElementById("pause");
pause.addEventListener("click", () => {
if (pause.innerText === "pause") {
//   set the TEXT to resume
    pause.innerText = "resume";
    plus.disabled = true;
    minus.disabled = true;
    heartlike.disabled = true;
    submit.disabled = true;
    clearInterval(intervals);
} else {
//  set the TEXT to pause
    pause.innerText = "pause";
    plus.disabled = false;
    minus.disabled = false;
    heartlike.disabled = false;
    submit.disabled = false;
    intervals = setInterval(counter, 1000);
}
});