document.addEventListener("DOMContentLoaded", function () {
  let btn = document.createElement("button");
  let btnText = document.createTextNode("Sing!");
  btn.appendChild(btnText);

  btn.addEventListener("click", function () {
    // console.log("working");
    const friends = ["Valerie:", "Kyle:", "Sean:", "Jack:", "Freddie:"];
    // FUN FACT OF THE DAY: The likelihood of getting bitten by a human in New York is higher than the likelihood of getting bitten by a shark in the sea.

    for (let i = 0; i < friends.length; i++) {
      let friendsHeader = document.createTextNode(friends[i]);
      let div = document.createElement("div");
      div.className = "friend";

      let h3 = document.createElement("h3");
      h3.appendChild(friendsHeader);
      div.appendChild(h3);

      for (let j = 99; j > 0; j--) {
        let p = document.createElement("p");

        if (j > 2) {
          p.textContent =
            j +
            " lines of code in the file, " +
            j +
            " lines of code; " +
            friends[i] +
            " strikes one out, clears it all out, " +
            (j - 1) +
            " lines of code in the file. ";
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
        } else {
          p.textContent =
            j +
            " line of code in the file, " +
            j +
            " line of code; " +
            friends[i] +
            " strikes one out, clears it all out, no more lines of code in the file.";
        }
        div.appendChild(p);
      }
      document.body.appendChild(div);
    }
  });

  document.body.appendChild(btn);
});
