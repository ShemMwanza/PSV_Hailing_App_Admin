const edit_modal = document.getElementById('edit_modal');
const driver_edit_modal = document.getElementById('driver_edit_modal');
const trip_edit_modal = document.getElementById('trip_edit_modal');
//const edit_modal_driver = document.getElementById('edit_modal_driver');
const add_modal = document.getElementById('add_modal');
const trip_add_modal = document.getElementById('trip_add_modal');
const stop_edit_modal = document.getElementById('stop_edit_modal');
const disable_modal = document.getElementById('disable_user_modal');
const enable_modal = document.getElementById('enable_user_modal');
const driver_disable_modal = document.getElementById('driver_disable_user_modal');
const driver_enable_modal = document.getElementById('driver_enable_user_modal');
// const disable_btn = document.getElementById('disable_btn');
// const enable_btn = document.getElementById('enable_btn');
const disable_success_msg = document.getElementById('disable_success_message');
const enable_success_msg = document.getElementById('enable_success_message');
const driver_disable_success_msg = document.getElementById('driver_disable_success_message');
const driver_enable_success_msg = document.getElementById('driver_enable_success_message');

function userEditModal(userID){
    let xmlhttp= new XMLHttpRequest();
    xmlhttp.onreadystatechange= function() {
        if (this.readyState==4 && this.status==200) {
            //console.log("Ndio hii: " + this.responseText);
            let userObject = JSON.parse(this.responseText);
            document.querySelector("#edit_name").value = userObject.fullName;
            document.querySelector("#edit_phone_number").value = userObject.number;
            document.querySelector("#edit_email").value = userObject.email;
            document.querySelector("#user_id").value = userID;
            edit_modal.classList.remove('hidden');
			edit_modal.classList.add('flex');
        }
    };
    xmlhttp.open("POST","Logic.php",true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    let data = "user_id=" + userID + "&type=getUserData";
    xmlhttp.send(data);
	//console.log(userID);
	
}
function driverEditModal(userID){
    let xmlhttp= new XMLHttpRequest();
    xmlhttp.onreadystatechange= function() {
        if (this.readyState==4 && this.status==200) {
            //console.log("Ndio hii: " + this.responseText);
            let userObject = JSON.parse(this.responseText);
            // let driverObject = JSON.parse(this.responseText);
            // document.querySelector("#driver_edit_name").value = driverObject.fullName;
            // document.querySelector("#driver_edit_phone_number").value = driverObject.number;
            // document.querySelector("#driver_edit_email").value = driverObject.email;
            document.querySelector("#driver_edit_licence").value = userObject.licenceNo;
            document.querySelector("#driver_edit_seat").value = userObject.seats;
            document.querySelector("#driver_edit_plate").value = userObject.matatuPlate;
            document.querySelector("#driver_edit_routes").value = userObject.routes;
            
            document.querySelector("#user_id").value = userID;
            driver_edit_modal.classList.remove('hidden');
			driver_edit_modal.classList.add('flex');
        }
    };
    xmlhttp.open("POST","Logic.php",true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    let data = "user_id=" + userID + "&type=getDriverData";
    xmlhttp.send(data);
	//console.log(userID);
	
}
function tripEditModal(tripID){
    let xmlhttp= new XMLHttpRequest();
    xmlhttp.onreadystatechange= function() {
        if (this.readyState==4 && this.status==200) {
            //console.log("Ndio hii: " + this.responseText);
            let tripObject = JSON.parse(this.responseText);
            // document.querySelector("#trip_date").value = tripObject.date;
            // document.querySelector("#trip_time").value = tripObject.time;
            document.querySelector("#trip_source").value = tripObject.source;
            document.querySelector("#trip_destination").value = tripObject.destination;
            document.querySelector("#trip_status").value = tripObject.status;
            
            document.querySelector("#trip_id").value = tripID;
            trip_edit_modal.classList.remove('hidden');
			trip_edit_modal.classList.add('flex');
        }
    };
    xmlhttp.open("POST","Logic.php",true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    let data = "trip_id=" + tripID + "&type=getTripData";
    xmlhttp.send(data);
	//console.log(userID);
	
}
function disableUser(userID){
    let xmlhttp1= new XMLHttpRequest();
    xmlhttp1.onreadystatechange= function() {
        if (this.readyState==4 && this.status==200) {
            document.querySelector("#user_id").value = userID;
            disable_modal.classList.remove('hidden');
			disable_modal.classList.add('flex');
            disable_success_msg.classList.remove('hidden');
        }
    };
    xmlhttp1.open("POST","Logic.php",true);
    xmlhttp1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    let data1 = "user_id=" + userID + "&type=disableUserData";
    xmlhttp1.send(data1);
	//console.log(userID);
	
}
function disableDriver(userID){
    let xmlhttp1= new XMLHttpRequest();
    xmlhttp1.onreadystatechange= function() {
        if (this.readyState==4 && this.status==200) {
            document.querySelector("#user_id").value = userID;
            driver_disable_modal.classList.remove('hidden');
			driver_disable_modal.classList.add('flex');
            driver_disable_success_msg.classList.remove('hidden');
        }
    };
    xmlhttp1.open("POST","Logic.php",true);
    xmlhttp1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    let data1 = "user_id=" + userID + "&type=disableDriver";
    xmlhttp1.send(data1);
	//console.log(userID);
	
}
// function disableUserConfirm(userID){
//     let xmlhttp1= new XMLHttpRequest();
//     xmlhttp1.onreadystatechange= function() {
//         if (this.readyState==4 && this.status==200) {
//             document.querySelector("#user_id").value = userID;
//             alert(userID);
//             disable_success_msg.classList.remove('hidden');
//             enable_btn.classList.remove('hidden');
//             disable_btn.classList.add('hidden');
//             // disable_success_msg.classList.add('hidden');
//         }
//     };
//     xmlhttp1.open("POST","Logic.php",true);
//     xmlhttp1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//     let data1 = "user_id=" + userID + "&type=disableUser";
//     xmlhttp1.send(data1);
// 	//console.log(userID);
	
// }
function enableUser(userID){
    let xmlhttp1= new XMLHttpRequest();
    xmlhttp1.onreadystatechange= function() {
        if (this.readyState==4 && this.status==200) {
            document.querySelector("#user_id").value = userID;
            enable_modal.classList.remove('hidden');
			enable_modal.classList.add('flex');
            enable_success_msg.classList.remove('hidden');
        }
    };
    xmlhttp1.open("POST","Logic.php",true);
    xmlhttp1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    let data1 = "user_id=" + userID + "&type=enableUser";
    xmlhttp1.send(data1);
	//console.log(userID);
	
}
function enableDriver(userID){
    let xmlhttp1= new XMLHttpRequest();
    xmlhttp1.onreadystatechange= function() {
        if (this.readyState==4 && this.status==200) {
            document.querySelector("#user_id").value = userID;
            driver_enable_modal.classList.remove('hidden');
			driver_enable_modal.classList.add('flex');
            driver_enable_success_msg.classList.remove('hidden');
        }
    };
    xmlhttp1.open("POST","Logic.php",true);
    xmlhttp1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    let data1 = "user_id=" + userID + "&type=enableDriver";
    xmlhttp1.send(data1);
	//console.log(userID);
	
}
// function enableUserConfirm(userID){
//     let xmlhttp1= new XMLHttpRequest();
//     xmlhttp1.onreadystatechange= function() {
//         if (this.readyState==4 && this.status==200) {
//             document.querySelector("#user_id").value = userID;
//             enable_success_msg.classList.remove('hidden');
//             enable_btn.classList.add('hidden');
//             disable_btn.classList.remove('hidden');
//             enable_success_msg.classList.add('hidden');
//         }
//     };
//     xmlhttp1.open("POST","Logic.php",true);
//     xmlhttp1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//     let data1 = "user_id=" + userID + "&type=enableUser";
//     xmlhttp1.send(data1);
// 	//console.log(userID);
	
// }
function addModal() {
    add_modal.classList.remove('hidden');
	add_modal.classList.add('flex'); 
}

function closeAddModal(){
	add_modal.classList.remove('flex');
	add_modal.classList.add('hidden');
}
function trip_addModal() {
    trip_add_modal.classList.remove('hidden');
	trip_add_modal.classList.add('flex'); 
}
function addStopModal(routeID){
    let xmlhttp1= new XMLHttpRequest();
    xmlhttp1.onreadystatechange= function() {
        if (this.readyState==4 && this.status==200) {
             let routeObject = JSON.parse(this.responseText);
             
        for (let key of Object.keys(routeObject)) { 
        console.log(`${key}`);
            document.querySelector("#route_id").value = routeID;
            document.querySelector("#stops").value = `${key}`;
            stop_edit_modal.classList.remove('hidden');
			stop_edit_modal.classList.add('flex');
        }
            // driver_enable_success_msg.classList.remove('hidden');
        }
    };
    xmlhttp1.open("POST","Logic.php",true);
    xmlhttp1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    let data1 = "route_id=" + routeID + "&type=getRouteStop";
    xmlhttp1.send(data1);
    // stop_edit_modal.classList.remove('hidden');
	// stop_edit_modal.classList.add('flex'); 
}
function closeTripAddModal(){
	trip_add_modal.classList.remove('flex');
	trip_add_modal.classList.add('hidden');
}
function closeStopModal() {
    stop_edit_modal.classList.add('hidden'); 
    stop_edit_modal.classList.remove('flex');
}

function closeEditModal(){
	edit_modal.classList.remove('flex');
	edit_modal.classList.add('hidden');
}
function closeDisableModal(){
	disable_modal.classList.remove('flex');
	disable_modal.classList.add('hidden');
    disable_success_msg.classList.add('hidden');
    location.reload();
}
function closeEnableModal(){
	enable_modal.classList.remove('flex');
	enable_modal.classList.add('hidden');
    disable_success_msg.classList.add('hidden');
    location.reload();
}
function closeDriverDisableModal(){
	driver_disable_modal.classList.remove('flex');
	driver_disable_modal.classList.add('hidden');
    driver_disable_success_msg.classList.add('hidden');
    location.reload();
}
function closeDriverEnableModal(){
	driver_enable_modal.classList.remove('flex');
	driver_enable_modal.classList.add('hidden');
    driver_disable_success_msg.classList.add('hidden');
    location.reload();
}
function closeDriverEditModal(){
	driver_edit_modal.classList.remove('flex');
	driver_edit_modal.classList.add('hidden');
}
function closeTripEditModal(){
	trip_edit_modal.classList.remove('flex');
	trip_edit_modal.classList.add('hidden');
}
function reset() {
    location.href = "Reset.php";
}

$(document).ready(function(){
    $('#userEdit').submit(function(event){
        event.preventDefault();
        //clearMessageField();
        let formData = new FormData($(this)[0]);
        console.log(formData);
        formData.append("type","updateUser");
        let formEmpty = false;
        for(var value of formData.entries()){
            formEmpty = (value[1] == "")? true:false;
        }
        if (!formEmpty) {
        	//console.log("All fields present");
            $.ajax({
                url:'Logic.php',
                enctype:'multipart/form-data',
                data: formData,
                processData: false,
                contentType: false,
                type: 'POST',
                success: function(data){
                	$("#userEdit_success").text("Update Successful");
                    location.reload();
                	//setTimeout(function(){ location.reload(); }, 1400);
                    // if (data=="Successful") {
                    // 	console.log("Successful");
                    //     // setTimeout(function(){ location.reload(); }, 1400);
                    //     // $("#eventEdit_success").text("Event Updated Successfully");
                    // } else {
                    //     // $("#eventEdit_error").text(data);
                    //     console.log("Unsuccessful");
                    // }
                },
                error: function (e) {
                    alert(e.responseText);
                    console.log("ERROR : ", e);
                }     
            });
        }else{
            // $(".error").text("All fields are required");
            console.log("All fields are required");
        }
    });
});

//Driver Edit
$(document).ready(function(){
    $('#driverEdit').submit(function(event){
        event.preventDefault();
        //clearMessageField();
        let formData = new FormData($(this)[0]);
        console.log(formData);
        formData.append("type","updateDriver");
        let formEmpty = false;
        for(var value of formData.entries()){
            formEmpty = (value[1] == "")? true:false;
        }
        if (!formEmpty) {
        	//console.log("All fields present");
            $.ajax({
                url:'Logic.php',
                enctype:'multipart/form-data',
                data: formData,
                processData: false,
                contentType: false,
                type: 'POST',
                success: function(data){
                	$("#driver_edit_success").text("Update Successful");
                    location.reload();
                	//setTimeout(function(){ location.reload(); }, 1400);
                    // if (data=="Successful") {
                    // 	console.log("Successful");
                    //     // setTimeout(function(){ location.reload(); }, 1400);
                    //     // $("#eventEdit_success").text("Event Updated Successfully");
                    // } else {
                    //     // $("#eventEdit_error").text(data);
                    //     console.log("Unsuccessful");
                    // }
                },
                error: function (e) {
                    alert(e.responseText);
                    console.log("ERROR : ", e);
                }     
            });
        }else{
            // $(".error").text("All fields are required");
            console.log("All fields are required");
        }
    });
});


$(document).ready(function(){
    $('#tripEdit').submit(function(event){
        event.preventDefault();
        //clearMessageField();
        let formData = new FormData($(this)[0]);
        console.log(formData);
        formData.append("type","updateTrip");
        let formEmpty = false;
        for(var value of formData.entries()){
            formEmpty = (value[1] == "")? true:false;
        }
        if (!formEmpty) {
        	//console.log("All fields present");
            $.ajax({
                url:'Logic.php',
                enctype:'multipart/form-data',
                data: formData,
                processData: false,
                contentType: false,
                type: 'POST',
                success: function(data){
                	$("#trip_edit_success").text("Update Successful");
                    location.reload();
                },
                error: function (e) {
                    alert(e.responseText);
                    console.log("ERROR : ", e);
                }     
            });
        }else{
            // $(".error").text("All fields are required");
            console.log("All fields are required");
        }
    });
});

$(document).ready(function () {
    $('#userAdd').submit(function (event1) {
        event1.preventDefault();
        //clearMessageField();
        let formData1 = new FormData($(this)[0]);
        console.log(formData1);
        formData1.append("type","createUser");
        let formEmpty1 = false;
        for(var value1 of formData1.entries()){
            formEmpty1 = (value1[1] == "")? true:false;
        }
        if(!formEmpty1){
            $.ajax({
                url:'Logic.php',
                enctype:'multipart/form-data',
                data:formData1,
                processData: false,
                contentType: false,
                type: 'POST',
                success:function (values) {
                    $("#userAdd_success").text("User Created Successfully!");
                    location.reload();
                },
                error: function (e) {
                    alert(e.responseText);
                    console.log("ERROR : ", e);
                }     
            });
        }else{
            // $(".error").text("All fields are required");
            console.log("All fields are required");
        }
        
    });
    
});


//Driver
$(document).ready(function () {
    $('#driverAdd').submit(function (eventDriver) {
        eventDriver.preventDefault();
        //clearMessageField();
        let formDataDriver = new FormData($(this)[0]);
        console.log(formDataDriver);
        formDataDriver.append("type","createDriver");
        let formEmptyDriver = false;
        for(var valueDriver of formDataDriver.entries()){
            formEmptyDriver = (valueDriver[1] == "")? true:false;
        }
        if(!formEmptyDriver){
            $.ajax({
                url:'Logic.php',
                enctype:'multipart/form-data',
                data:formDataDriver,
                processData: false,
                contentType: false,
                type: 'POST',
                success:function (values) {
                    $("#driver_add_success").text("Driver Created Successfully!");
                    location.reload();
                },
                error: function (e) {
                    alert(e.responseText);
                    console.log("ERROR : ", e);
                }     
            });
        }else{
            // $(".error").text("All fields are required");
            console.log("All fields are required");
        }
        
    });
    
});

//Trip
$(document).ready(function () {
    $('#tripAdd').submit(function (eventDriver) {
        eventDriver.preventDefault();
        //clearMessageField();
        let formDataTrip = new FormData($(this)[0]);
        console.log(formDataTrip);
        formDataTrip.append("type","addTrip");
        let formEmptyTrip = false;
        for(var valueTrip of formDataTrip.entries()){
            formEmptyTrip = (valueTrip[1] == "")? true:false;
        }
        if(!formEmptyTrip){
            $.ajax({
                url:'Logic.php',
                enctype:'multipart/form-data',
                data:formDataTrip,
                processData: false,
                contentType: false,
                type: 'POST',
                success:function (values) {
                    $("#trip_add_success").text("Trip Added Successfully!");
                    location.reload();
                },
                error: function (e) {
                    alert(e.responseText);
                    console.log("ERROR : ", e);
                }     
            });
        }else{
            // $(".error").text("All fields are required");
            console.log("All fields are required");
        }
        
    });
    
});

//Stop
//Trip
$(document).ready(function () {
    $('#stopAdd').submit(function (eventStop) {
        eventStop.preventDefault();
        //clearMessageField();
        let formDataStop = new FormData($(this)[0]);
        console.log(formDataStop);
        formDataStop.append("type","addStop");
        let formEmptyStop = false;
        for(var valueStop of formDataStop.entries()){
            formEmptyStop = (valueStop[1] == "")? true:false;
        }
        if(!formEmptyStop){
            $.ajax({
                url:'Logic.php',
                enctype:'multipart/form-data',
                data:formDataStop,
                processData: false,
                contentType: false,
                type: 'POST',
                success:function (values) {
                    $("#stop_add_success").text("Stop Added Successfully!");
                    location.reload();
                },
                error: function (e) {
                    alert(e.responseText);
                    console.log("ERROR : ", e);
                }     
            });
        }else{
            // $(".error").text("All fields are required");
            console.log("All fields are required");
        }
        
    });
    
});

//admin Profile
$(document).ready(function () {
$("#uploadImageDiv").click(function (){
  $("#uploadImage").click();
});  
});

$(document).ready(function () {
    $('#adminProfile').submit(function (event1) {
        event1.preventDefault();
        //clearMessageField();
        let formData1 = new FormData($(this)[0]);
        console.log(formData1);
        formData1.append("type","updateAdmin");
        let formEmpty1 = false;
        for(var value1 of formData1.entries()){
            formEmpty1 = (value1[1] == "")? true:false;
        }
        if(!formEmpty1){
            $.ajax({
                url:'Logic.php',
                enctype:'multipart/form-data',
                data:formData1,
                processData: false,
                contentType: false,
                type: 'POST',
                success:function (values) {
                    $("#update_success").text("Updated Created Successfully!");
                    location.reload();
                },
                error: function (e) {
                    alert(e.responseText);
                    console.log("ERROR : ", e);
                }     
            });
        }else{
            // $(".error").text("All fields are required");
            console.log("All fields are required");
        }
        
    });
    
});

$(document).ready(function () {
    $('#adminChangePassword').submit(function (event1) {
        event1.preventDefault();
        //clearMessageField();
        let formData1 = new FormData($(this)[0]);
        console.log(formData1);
        formData1.append("type","changePassword");
        let formEmpty1 = false;
        for(var value1 of formData1.entries()){
            formEmpty1 = (value1[1] == "")? true:false;
        }
        if(!formEmpty1){
            $.ajax({
                url:'Logic.php',
                enctype:'multipart/form-data',
                data:formData1,
                processData: false,
                contentType: false,
                type: 'POST',
                success:function (values) {
                    $("#success").text("Password Updated Successfully!");
                    location.reload();
                },
                error: function (e) {
                    $("#error").text("Password Update Failed!");
                    console.log("ERROR : ", e);
                }     
            });
        }else{
            // $(".error").text("All fields are required");
            console.log("All fields are required");
        }
        
    });
    
});

//admin reset password form
$(document).ready(function(){
    $('#resetPassword').submit(function(event){
        event.preventDefault();
        //clearMessageField();
        let formData = new FormData($(this)[0]);
        console.log(formData);
        formData.append("type","resetAdmin");
        let formEmpty = false;
        for(var value of formData.entries()){
            formEmpty = (value[1] == "")? true:false;
        }
        if (!formEmpty) {
        	//console.log("All fields present");
            $.ajax({
                url:'Logic.php',
                enctype:'multipart/form-data',
                data: formData,
                processData: false,
                contentType: false,
                type: 'POST',
                success: function(data){
                	$("#reset_success").text("Reset link sent to your email!");
                     setTimeout(function(){ window.location.href= 'Login.php';}, 1500);
                },
                error: function (e) {
                    alert(e.responseText);
                    console.log("ERROR : ", e);
                }     
            });
        }else{
            // $(".error").text("All fields are required");
            console.log("All fields are required");
        }
    });
});


// $(document).ready(function () {
//     $("#adminChangePassword").submit(function (event) {
//         event.preventDefault();
//         var password = $("input[id = 'new_password']").val();
//         var conf_password = $("input[id = 'confirm_new_password']").val();
//         var type = "changePassword";
//         $.post("Logic.php", {
//             password: password,
//             conf_password: conf_password,
//             type: type
//         },
//         function (data, status) {
//             if (data=="Successful") {
//                 window.location.href="dashboard.php";
//                 $("#success").text(data);
//             } else {
//                 $("#error").text(data);
//             }
//         });
//     });
// });

// //register admin
// $(document).ready(function () {
//     $('#adminRegister').submit(function (e) {
//         e.preventDefault();
//         //clearMessageField();
//         let formDataAdmin = new FormData($(this)[0]);
//         console.log(formDataAdmin);
//         formDataAdmin.append("type","createAdmin");
//         let formEmptyAdmin = false;
//         for(var valueAdmin of formDataAdmin.entries()){
//             formEmptyAdmin = (valueAdmin[1] == "")? true:false;
//         }
//         if(!formEmptyAdmin){
//             $.ajax({
//                 url:'Logic.php',
//                 enctype:'multipart/form-data',
//                 data:formDataAdmin,
//                 processData: false,
//                 contentType: false,
//                 type: 'POST',
//                 success:function (values) {
                   
//                 },
//                 error: function (e) {
//                     alert(e.responseText);
//                     console.log("ERROR : ", e);
//                 }     
//             });
//         }else{
//             // $(".error").text("All fields are required");
//             console.log("All fields are required");
//         }
        
//     });
    
// });

//check password input
var check = function() {
    if(document.getElementById('n_password').value != null && 
    document.getElementById('c_password').value  != null){
        if (document.getElementById('n_password').value ==
            document.getElementById('c_password').value) {
            document.getElementById('message').style.color = 'green';
            document.getElementById('message').innerHTML = 'Passwords match';
        }
        else {
            document.getElementById('message').style.color = 'red';
            document.getElementById('message').innerHTML = 'Passwords do not match!!';
        }
    }
}
//filter users
function filterUsers() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("search_users");
  filter = input.value.toUpperCase();
  table = document.getElementById("users_table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

//filter drivers
function filterDrivers() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("search_drivers");
  filter = input.value.toUpperCase();
  table = document.getElementById("drivers_table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

//filter trips
function filterTrips() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("search_trips");
  filter = input.value.toUpperCase();
  table = document.getElementById("trips_table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
function toggleDD(myDropMenu) {
    document.getElementById(myDropMenu).classList.toggle("invisible");
}
 window.onclick = function(event) {
    if (!event.target.matches('.drop-button') && !event.target.matches('.drop-search')) {
         var dropdowns = document.getElementsByClassName("dropdownlist");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (!openDropdown.classList.contains('invisible')) {
                 openDropdown.classList.add('invisible');
            }
        }
    }
}

//date picker for adding trip

$(function(){
  var pickerOpts1 = 
  {
      dateFormat: "dd MM yy",
      onSelect: function(dateText, inst) {
        var date = $(this).datepicker('getDate');
        $('#add_trip_day').val($.datepicker.formatDate('DD', date));
      }
  };
  $("#add_trip_date").datepicker(pickerOpts1);
});

//date picker for editing trip
$(function(){
  var pickerOpts2 = 
  {
      dateFormat: "dd MM yy",
      onSelect: function(dateText, inst) {
        var date = $(this).datepicker('getDate');
        $('#trip_day').val($.datepicker.formatDate('DD', date));
      }
  };
  $("#trip_date").datepicker(pickerOpts2);
});
google.maps.event.addDomListener(window, 'load', initialize);
 
function initialize() {
    var input = document.getElementById('trip_destination');
    var input2 = document.getElementById('trip_source');
    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.addListener('place_changed', function() {
        var place = autocomplete.getPlace();

    });
}
function initialize() {
var input2 = document.getElementById('trip_source');
    var autocomplete = new google.maps.places.Autocomplete(input2);
    autocomplete.addListener('place_changed', function() {
        var place = autocomplete.getPlace();

    });
}