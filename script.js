const commonNum = document.getElementsByClassName("common-num-class");
const showResult = document.getElementById("result");
const table = document.getElementById("table-body");

const errormsg = document.getElementById("error-message");

const btnGenerate = document.getElementById("generate");

const ERROR_BORDER = "border-red-900";

// input validation
function validateInput() {
  // "commonNum" getElementsByClassName acting an array of elements.

  for (let i = 0; i < commonNum.length; i++) {
    // checks each input field is filled up or not Also checks each mark has to be between 0 to 100
    commonNum[i].classList.remove(ERROR_BORDER);
    const valNum = parseFloat(commonNum[i].value);
    if (!valNum || valNum < 0 || valNum > 100) {
      commonNum[i].classList.add(ERROR_BORDER);
      if (valNum < 0 || valNum > 100) {
        baseError("Marks must be between 0-100");
      } else {
        baseError("Please fill up all the mark fields");
      }
      return false;
    }
  }

  return true;
}

// error indicator function
function baseError(message) {
  errormsg.classList.remove("hidden");
  errormsg.innerText = message;
}

// remove error indicator function

function clearError() {
  errormsg.innerText = "";
}

// removing grade after one operation

function clearGrade() {
  showResult.innerText = "";
}

// clears table after one operation
function clearTable() {
  table.innerText = "";
}

// calculating grade

function gradeCalculate() {
  let sum = 0;

  for (let i = 0; i < commonNum.length; i++) {
    const valNum = parseFloat(commonNum[i].value);
    sum = sum + valNum;
  }

  let avg = sum / 5;

  console.log(avg);

  if (avg >= 90) {
    return "A+";
  } else if (avg >= 80) {
    return "A";
  } else if (avg >= 70) {
    return "B+";
  } else if (avg >= 60) {
    return "B+";
  } else if (avg >= 50) {
    return "c";
  } else if (avg >= 40) {
    return "D";
  } else return "F";
}

btnGenerate.addEventListener("click", function () {
  clearTable();
  clearGrade();

  if (!validateInput()) {
    return;
  }
  clearError();

  showResult.innerText = gradeCalculate();
  generateTable();
});

//////////////////////////  TABLE DISPLAY  ////////////////////

function generateTable() {
  // table header
  const cells = [];
  header = ["COURSE NAME", "MARK"];

  for (let i = 0; i < header.length; i++) {
    const cell = document.createElement("th");
    cell.innerText = header[i];
    cells.push(cell);
  }
  const row = document.createElement("tr");
  // all cells create the row
  row.append(...cells);
  table.appendChild(row);

  // table rows
  for (let rowNum = 0; rowNum < commonNum.length; rowNum++) {
    const cells = [];
    courseName = ["DSA", "OOP", "DBMS", "SDLC", "OS"];
    rowData = [courseName[rowNum], commonNum[rowNum].value];

    for (i = 0; i < rowData.length; i++) {
      const cell = document.createElement("td");
      cell.innerText = rowData[i];
      cells.push(cell);
    }

    const row = document.createElement("tr");
    row.append(...cells);
    table.appendChild(row);
  }
}
