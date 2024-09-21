// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

let submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", submit);

function submit() {
  document.getElementById("contact-page").innerHTML = "";
  const para = document.createElement("p");
  const node = document.createTextNode("Thank you for your message!");
  para.appendChild(node);
  message = document.getElementById("contact-page");
  message.appendChild(para);
  message.style.fontSize = "24px";
}
