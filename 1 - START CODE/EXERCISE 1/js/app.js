let container1 = document.getElementById("container1");
let container2 = document.getElementById("container2");
let container3 = document.getElementById("container3");

//  1- Move the item 3 to the second container
// YOUR CODE !!
const items = document.querySelectorAll(".item");
container2.appendChild(items[2]);

//  2- Remove item 4
// YOUR CODE !!
container2.removeChild(items[3]);
   
// 3- Create a new item 10 and add it to container 3
// YOUR CODE !!
const item10 = document.createElement("div");
item10.className = "item";
item10.innerText = "10";
container3.appendChild(item10);


//  4- Set all items located in a blue container to red
// YOUR CODE !!
const blueContainer = document.querySelectorAll(".containerBlue");
blueContainer.forEach(container => {
    for(child of container.children){
        child.style.color = "Red";
    }
});
