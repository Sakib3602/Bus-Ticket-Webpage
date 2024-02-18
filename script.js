function x() {
  let kbd = document.querySelectorAll(".kbd");
  console.log(kbd);
  let arr = [];

  for (let op of kbd) {
    op.addEventListener("click", () => {
      let opp = op.innerText;
      arr.push(opp);
      console.log(opp);
      console.log(arr);
      console.log(arr.length);

      if (arr.length <= 4) {
        op.style.background = "#67f851";
        let four = document.getElementById("four");

        let four1 = four.innerText;

        let minus = four1 - 1;
        four.innerText = minus;

        let zero = document.getElementById("zero")
        let zero1 = parseInt(zero.innerText);

        let sum = zero1 + 1;
        zero.innerText = sum;


        // append child part

        
    
    }
    });
  }
  // minus
}
x();
