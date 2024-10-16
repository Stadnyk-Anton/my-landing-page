let firstNum = ""
let secondNum = ""
let mathSymb = ""

let sum

function changeMathSymb(symb) {
  mathSymb = symb
  secondNum = ""
  document.getElementById("second-num").innerHTML = secondNum

  return (document.getElementById("math-symbol").innerHTML = mathSymb)
}

const controlMathSymb = () => {
  switch (mathSymb) {
    case "+":
      document.getElementById("sum").innerHTML =
        Number(firstNum) + Number(secondNum)
      break
    case "-":
      document.getElementById("sum").innerHTML =
        Number(firstNum) - Number(secondNum)
      break
    case "x":
      document.getElementById("sum").innerHTML =
        Number(firstNum) * Number(secondNum)
      break
    case "÷":
      document.getElementById("sum").innerHTML =
        Number(firstNum) / Number(secondNum)
      break
  }
}

function changeNum(num) {
  if (mathSymb) {
    secondNum = secondNum + num
    controlMathSymb()
    return (document.getElementById("second-num").innerHTML = secondNum)
  } else {
    firstNum = firstNum + num

    return (document.getElementById("first-num").innerHTML = firstNum)
  }
}

function equally() {
  if (mathSymb == "+") {
    sum = Number(firstNum) + Number(secondNum)
  }
  if (mathSymb == "-") {
    sum = Number(firstNum) - Number(secondNum)
  }
  if (mathSymb == "x") {
    sum = Number(firstNum) * Number(secondNum)
  }
  if (mathSymb == "÷") {
    sum = Number(firstNum) / Number(secondNum)
  }
  firstNum = sum
  secondNum = ""
  mathSymb = ""
  document.getElementById("first-num").innerHTML = firstNum
  document.getElementById("second-num").innerHTML = secondNum
  document.getElementById("math-symbol").innerHTML = mathSymb

  return (document.getElementById("sum").innerHTML = sum)
}

// document.getElementById("one").onclick = myFunc

function clean() {
  firstNum = ""
  secondNum = ""
  mathSymb = ""
  sum = ""
  document.getElementById("first-num").innerHTML = "0"
  document.getElementById("second-num").innerHTML = secondNum
  document.getElementById("math-symbol").innerHTML = mathSymb

  return (document.getElementById("sum").innerHTML = sum)
}

function del() {
  if (secondNum) {
    secondNum = secondNum.slice(0, -1)
    return (document.getElementById("second-num").innerHTML = secondNum)
  }
  if (!secondNum && mathSymb) {
    mathSymb = ""
    return (document.getElementById("math-symbol").innerHTML = mathSymb)
  }
  if (!secondNum && !mathSymb && firstNum) {
    firstNum = firstNum.slice(0, -1)
    return (document.getElementById("first-num").innerHTML = firstNum)
  }
}

const precent = () => {
  if (secondNum) {
    secondNum = String((Number(firstNum) / 100) * Number(secondNum))
    document.getElementById("second-num").innerHTML = secondNum

    return controlMathSymb()
  }
  console.log(secondNum)
}


