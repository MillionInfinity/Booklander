                     "use strict";
         console.log("Alarm! wake up early");



        //     var alarmSound = new Audio();
        //     alarmSound.src='alarm.mp3';
        //      var alarmTimer='';




        // function setAlarm (button){
        //         var ms=document.getElementById("alarmTime").valueAsNumber;
        //         if(isNaN(ms)){
        //             alert('Invalid Date');
        //             return;
        // }
        //         var alarm=new Date(ms);
        //         var alarmTime = new Date(alarm.getUTCFullYear(),alarm.getUTCMonth(), alarm.getUTCDate(), alarm.getUTCHours(), alarm.getUTCMinutes, alarm.getUTCSeconds());
        //         var differenceInMs = alarmTime.getTime()- (new Date ()).getTime();

        // if(differenceInMs<0){
        //     return;
        // }
        // alarmTimer= setTimeout(initAlarm, differenceInMs);

        // button.innerText = 'cancel Alarm';
        // button.setattribute('onclick', 'cancelAlarm(this)');
        // }



        // function cancelAlert(button){
        //     button.innerText='Set Alert';
        //     button.setattribute('onclick', 'setAlarm(this);');
        //     clearTimeout(alarmTimer);
        // }


        //     function initAlarm(){
        //     alarmSound.play();
        //     document.getElementById('alarmOptions').style.display='';
        // }

        // function stopAlarm(){
        //     alarmSound.pause();
        //     alarmSound.currentTime =0;
        // document.getElementById('alarmOptions').style.display='none';
        // cancelAlert(document.getElementById('alarmButton'));
        // }

        // function snooze(){
        //     stopAlarm();
        //     setTimeout(initAlarm,36000);
        // }