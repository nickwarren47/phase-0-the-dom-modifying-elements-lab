const main = document.getElementsByTagName("main")[0];
main.remove();

const newHeader = document.createElement("h1");
// const victory = document.getElementsById("newHeader");
newHeader.textContent = "Nick is the champion";
newHeader.id = "victory";
document.body.append(newHeader);



// Write your code here!