const container = document.querySelector("#container");
const content = document.createElement("div");
    content.classList.add("content");
    content.textContent = "This is the glorious text-content!";
container.appendChild(content);


const redPara = document.createElement("p");
    redPara.classList.add("redPara");
    redPara.textContent = `Hey I'm red!`;
    redPara.style.color =`red`;
container.appendChild(redPara);

const blueHeading3 = document.createElement('h3');
    blueHeading3.textContent = `I'm a blue h3!`;
    blueHeading3.style.color = `blue`;
container.appendChild(blueHeading3);

const containerDiv = document.createElement('div');
    containerDiv.style.backgroundColor = `pink`;
    containerDiv.style.border = `1px black solid`;
container.appendChild(containerDiv);

const headingOneDiv = document.createElement(`h1`);
    headingOneDiv.textContent = `I'm in a div`;
    containerDiv.appendChild(headingOneDiv);
const paraDiv = document.createElement(`p`);
    paraDiv.textContent = `ME TOO!`;
    containerDiv.appendChild(paraDiv);

// the JavaScript file
btn.addEventListener("click", function (e) {
  console.log(e.target);
});
btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});


// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
