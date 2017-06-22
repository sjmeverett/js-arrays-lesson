/**
 * This lesson will teach you about arrays.
 * 
 * If you want, you can read a lot more about them here:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 */


// make an array to hold a list of students
// TASK 1: put some student's names in here to start with
var students = [];

// this function will be called when showing the list
// TASK 2: complete the function to return the student at position i in the list
function getStudent(i) {
  
}

// TASK 3: change the function to get the real number of students
function getNumberOfStudents() {
  return 0;
}

// this function will be called when the "Add" button is clicked
// TASK 4: complete the function to add the student to our array above
// TASK 5: change the function to add the student to the beginning of the array
function addStudent(name) {
  
}

// this function will be called when the "Sort" button is clicked
// TASK 6: complete the function to sort the students array
function sortStudents() {
  
}


////////////////////////////////////////////////////////////////
// don't worry about the code below this line, it deals with
// wiring up the buttons and so on
// but, in 16 weeks you'll understand all of it!
var nameInput, studentList, studentCount;

window.addEventListener('load', function () {
  var form = document.getElementById('addStudentForm');
  form.addEventListener('submit', addFormSubmit);

  var sortButton = document.getElementById('sortButton');
  sortButton.addEventListener('click', sortButtonClick);

  nameInput = document.getElementById('nameInput');
  studentList = document.getElementById('studentList');
  studentCount = document.getElementById('studentCount');
  updateList();
});


function addFormSubmit(e) {
  addStudent(nameInput.value);
  nameInput.value = '';
  updateList();
  e.preventDefault();
}


function sortButtonClick() {
  sortStudents();
  updateList();
}

function updateList() {
  var length = getNumberOfStudents();
  var plural = length !== 1;
  studentCount.innerText = `There ${plural ? 'are' : 'is'} ${length} student${plural ? 's' : ''}.`;

  studentList.innerHTML = '';

  for (var i in students) {
    var child = document.createElement('li');
    child.className = 'list-group-item';
    child.innerText = getStudent(i);

    studentList.appendChild(child);
  }
}
