                     "use strict";
         console.log("Alarm! wake up early");
let $ = require('jquery');

           
// var date = new Date();
// document.getElementById("footer-date").innerHTML = date.toString();
// console.log("footer date working");





                    // var x = new Date();
                    // x.setFullYear(2018,4, 30);
                    // var today = new Date();

                    // if (x < today) {
                    //     alert("You missed the day.");
                    // }
                    // else if (x > today) {
                    //     alert("you have 5 more days");
                    // }
                    // else {
                    //     alert("This is the day");
                    // }



// $("#TextBox1").datepicker({
//     minDate: 0,
//     maxDate: '+1Y+6M',
//     onSelect: function (dateStr) {
//         var min = $(this).datepicker('getDate'); // Get selected date
//         $("#TextBox2").datepicker('option', 'minDate', min || '0'); // Set other min, default to today
//     }
// });

// $("#TextBox2").datepicker({
//     minDate: '0',
//     maxDate: '+1Y+6M',
//     onSelect: function (dateStr) {
//         var max = $(this).datepicker('getDate'); // Get selected date
//         $('#datepicker').datepicker('option', 'maxDate', max || '+1Y+6M'); // Set other max, default to +18 months
//         var start = $("#TextBox1").datepicker("getDate");
//         var end = $("#TextBox2").datepicker("getDate");
//         var days = (end - start) / (1000 * 60 * 60 * 24);
//         $("#TextBox3").val(days);
//     }
// });