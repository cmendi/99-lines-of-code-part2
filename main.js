// Add event listener to make sure the page has been loaded before the code is ran.
document.addEventListener("DOMContentLoaded", function () {
  // Create a button element
  let btn = document.createElement("button");
  // Create text for the button element
  let btnText = document.createTextNode("Sing!");
  // add text to the button element
  btn.appendChild(btnText);

  // Create event listener to listen for a click
  btn.addEventListener("click", function () {
    // console.log("working");
    // Array of friends
    const friends = ["Valerie:", "Kyle:", "Sean:", "Jack:", "Freddie:"];

    // FUN FACT OF THE DAY: The likelihood of getting bitten by a human in New York is higher than the likelihood of getting bitten by a shark in the sea.

    // Loop to loop through the array and pick a friend
    for (let i = 0; i < friends.length; i++) {
      // Create an h3 element
      let h3 = document.createElement("h3");
      // Create a div element
      let div = document.createElement("div");
      // Create a variable that stores the value of each friend (will be used for H3)
      let friendsHeader = document.createTextNode(friends[i]);
      // Add a class name of friend
      div.className = "friend";

      // Give a h3 header to friends
      h3.appendChild(friendsHeader);
      // Add h3 to the div
      div.appendChild(h3);

      // for loop to count from 99
      for (let j = 99; j > 0; j--) {
        // Create a p element
        let p = document.createElement("p");

        // if statement to add a paragraph if it is greater than two.
        if (j > 2) {
          // add a paragraph with a string
          p.textContent =
            j +
            " lines of code in the file, " +
            j +
            " lines of code; " +
            friends[i] +
            " strikes one out, clears it all out, " +
            (j - 1) +
            " lines of code in the file. ";
          // if statement to add a paragraph if it is egual to two.
        } else if (j === 2) {
          p.textContent =
            j +
            " lines of code in the file, " +
            j +
            " lines of code; " +
            friends[i] +
            " strikes one out, clears it all out, " +
            (j - 1) +
            " line of code in the file.";
          // else add these strings
        } else {
          p.textContent =
            j +
            " line of code in the file, " +
            j +
            " line of code; " +
            friends[i] +
            " strikes one out, clears it all out, no more lines of code in the file.";
        }
        // add paragraph to the div
        div.appendChild(p);
      }
      // add div to the body
      document.body.appendChild(div);
    }
  });
  // add btn to the body
  document.body.appendChild(btn);
});
