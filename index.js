let totalAmount = document.getElementById("totalamount");
let userAmount = document.getElementById("useramount");
const checkAmountButton = document.getElementById("checkamount");
const clearbtn = document.getElementById("clear");
const clearexpense = document.getElementById("clearexpense");
const totalAmountButton = document.getElementById("totalamountbtn");
const productTitle = document.getElementById("producttitle");
const amount = document.getElementById("amount");
const expenditureValue = document.getElementById("expense");
const balanceValue = document.getElementById("balanceamount");
const list = document.getElementById("list");
const ul = document.getElementById("unorder")

let tempAmount = 0;

//Set Budget Part
totalAmountButton.addEventListener("click", () => {
  tempAmount = totalAmount.value;
  //empty or negative input
  if (tempAmount === "" || tempAmount < 0) {
    alert("Provide us with the exctual budget");
  } else {
    //Set Budget
    amount.innerHTML = tempAmount;
    //Set Balance
    balanceValue.innerText = tempAmount - expenditureValue.innerText;
    //Clear Input Box
    totalAmount.value = "";
  }
});

checkAmountButton.addEventListener("click", () => {
  let temp2 = userAmount.value;
  let temp3 = expenditureValue.innerHTML;
  if (temp2 === "" || temp2 < 0) {
    alert("provide the necessary budget");
  }
  else {
    var t4 = Number(temp2) + Number(temp3);
    expenditureValue.innerHTML = t4;
    balanceValue.innerText = amount.innerText - expenditureValue.innerText;

    //adding into expense list
    var li = document.createElement("li");
    var p = document.createElement('p');
    var div = document.createElement("div");
    var span = document.createElement('span');
    var button = document.createElement('button');
    button.classList.add('btn');
    button.style.width = "100px";
    button.innerHTML = 'delete'
    p.innerHTML = productTitle.value;
    span.innerHTML = userAmount.value;
    div.appendChild(p);
    div.appendChild(span);
    div.append(button);
    span.classList.add("hi")
    li.appendChild(div)
    unorder.appendChild(li);
    userAmount.value = "";
    productTitle.value = ""
    //removing the element if found wrong 
    button.addEventListener("click", () => {
      expenditureValue.innerText=expenditureValue.innerText-span.innerText
      unorder.removeChild(li);
      balanceValue.innerText = amount.innerText - expenditureValue.innerText;
      alert("Expense deleted");
      //to be done 
    });
  }
});

clearbtn.addEventListener("click", () => {
  amount.innerText = 0;
  expense.innerText = 0;
  balanceValue.innerText = amount.innerText - expenditureValue.innerText
  unorder.innerHTML = "";
})

clearexpense.addEventListener("click", () => {
  expense.innerText = 0;
  balanceValue.innerText = amount.innerText - expenditureValue.innerText;
  unorder.innerHTML = "";
})


