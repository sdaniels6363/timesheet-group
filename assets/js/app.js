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
    var monthWrk = $('#empMonthWorked').val().trim();

    database.ref().push({
      empName: name,
      empRole: role,
      empStartDate: stDate,
      empMonthWorked: monthWrk
    });

  });
})

