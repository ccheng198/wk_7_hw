var config = {
    apiKey: "AIzaSyA0-zyhzh_snSucnbO6ZafO0qhW34OMYPA",
    authDomain: "november4hw.firebaseapp.com",
    databaseURL: "https://november4hw.firebaseio.com",
    projectId: "november4hw",
    storageBucket: "november4hw.appspot.com",
    messagingSenderId: "1038864507040"
};

firebase.initializeApp(config);

var database = firebase.database();
var ref = database.ref();

var empName = "";
var empRole = "";
var empStartDate;
var empRate;
  
		
		
$(document).ready(function(){

	ref.on("value", function(snapshot) {

		// var dbObjects = snapshot.child();
		
		var arr;

		var temp = snapshot.val();
		console.log(temp);
		console.log(Object.keys(temp));

		// console.log(dbObjects);

		var currentName = "";
		var currentRole = snapshot.val().empRole;
		var currentStartDate = snapshot.val().empStartDate;
		var currentMonths = ""; //how to get months from start date
		var currentRate = snapshot.val().empRate;
		var currentCost = "";

		for (i=0; i<temp.length; i++) {
			console.log(temp.empName);
		}

		console.log(snapshot.val());
		console.log(snapshot.val().empName);
		console.log(currentName);

  		if (snapshot.child("empName").exists()) {
  			$(".table.tr.th").val(ref.empName);
			$(".table.tr.th").val(ref.empRole);
			$(".table.tr.th").val(ref.empStartDate);
			// $(".table.tr.th").val()
			$(".table.tr.th").val(ref.empRate);
			// $(".table.tr.th")
		};

  //   // Set the local variables for highBidder equal to the stored values in firebase.
  //   highBidder = snapshot.val().highBidder;
  //   highPrice = parseInt(snapshot.val().highPrice);

  //   // change the HTML to reflect the newly updated local values (most recent information from firebase)
  //   $("#highest-bidder").text(snapshot.val().highBidder);
  //   $("#highest-price").text("$" + snapshot.val().highPrice);

  //   // Print the local data to the console.
  //   console.log(snapshot.val().highBidder);
  //   console.log(snapshot.val().highPrice);
  // }

	$("#submitButton").on("click", function(){
		
		event.preventDefault();
		empName = $("#empName").val().trim();
		empRole = $("#empRole").val().trim();
		empStartDate = parseInt($("#empStartDate").val().trim());
		empRate = parseInt($("#empRate").val().trim());

		database.ref().push({
			empName: empName,
			empRole: empRole,
			empStartDate: parseInt(empStartDate),
			empRate: parseInt(empRate)
		});
		$("#empName").val("");
		$("#empRole").val("");
		$("#empStartDate").val("");
		$("#empRate").val("");
		
	});

	ref.on("value", function(snapshot){
		
		
	});
	});
});



// database.ref().on("child_added", function(snapshot){
        
// var emp = snapshot.val();
// console.log(emp.empName);     
// $("#yoMomma").html(emp.empName);

//<tbody id="tabelBody">
//	<tr>
// 		<td id="yoMomma"></td>
//	</tr>
//</tbody>