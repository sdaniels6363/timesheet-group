$(document).ready(function () {
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCnptSb-MgdLXf1vSpIhEtP8t-YBSkU8u0",
    authDomain: "timesheet-project-75c75.firebaseapp.com",
    databaseURL: "https://timesheet-project-75c75.firebaseio.com",
    projectId: "timesheet-project-75c75",
    storageBucket: "timesheet-project-75c75.appspot.com",
    messagingSenderId: "309321281437",
    appId: "1:309321281437:web:2dd03bbbbc3e6cbc"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  var database = firebase.database();




  $("#submit").on("click", function (event) {
    event.preventDefault();

    var name = $('#empName').val().trim();
    var role = $('#empRole').val().trim();
    var stDate = $('#empStartDate').val().trim();
    var monthlyRate = $('#monthlyRate').val().trim();

    database.ref().push({
      empName: name,
      empRole: role,
      empStartDate: stDate,
      monthlyRate: monthlyRate
    });

    // Commented out because the child_added listener reloads this    
    // var emptyRow = `
    // <tr>
    //   <td id="empName-display">${name}</td>
    //   <td id="empRole-display">${role}</td>
    //   <td id="empStartDate-display">${stDate}</td>
    //   <td id="empMonthWorked-display"></td>
    //   <td id="monthlyRate-display">${monthlyRate}</td>
    //   <td id="total-display"></td>
    // </tr>
    // `;

    // $(emptyRow).appendTo("tbody");

  });

  // Firebase watcher .on("child_added"
  database.ref().on("child_added", function (snapshot) {
    // storing the snapshot.val() in a variable for convenience
    var sv = snapshot.val();

    // Console.loging the last user's data
    console.log(sv.empName);
    console.log(sv.empRole);
    console.log(sv.empStartDate);
    console.log(sv.monthlyRate);

    var tableEntry = `
    <tr>
    <td id="empName-display">${sv.empName}</td>
    <td id="empRole-display">${sv.empRole}</td>
    <td id="empStartDate-display">${sv.empStartDate}</td>
    <td id="empMonthWorked-display"></td>
    <td id="monthlyRate-display">${sv.monthlyRate}</td>
    <td id="total-display"></td>
  </tr>
    `
    $(tableEntry).appendTo("tbody");

    // Handle the errors
  }, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });

})

