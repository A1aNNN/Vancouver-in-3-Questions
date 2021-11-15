function makeAnswers() {

    var totalScore = 0;

    var choices = document.getElementsByTagName('input');

    for (i=0; i<choices.length; i++) {

        if (choices[i].checked) {
            
            if (choices[i].value == 'a1') {
                totalScore = totalScore + 0.5;
            }
            if (choices[i].value == 'a2') {
                totalScore = totalScore + 0;
            }
            if (choices[i].value == 'b1') {
                totalScore = totalScore + 100;
            }
            if (choices[i].value == 'b2') {
                totalScore = totalScore + 0;
            }
            if (choices[i].value == 'c1') {
                totalScore = totalScore + 1;
            }
            if (choices[i].value == 'c2') {
                totalScore = totalScore + 2;
            }
            if (choices[i].value == 'c3') {
                totalScore = totalScore + 3;
            }
        }
    }

    var answerbox = document.getElementById('answer');
    if (totalScore == 1) { //something outdoors, under $100, grabbing food and drinks
        answerbox.innerHTML = "Vancouver Christmas Market. More information can be found here: https://www.vancouverchristmasmarket.com/";
    } else if (totalScore == 2) { //something outdoors, under $100, sight-seeing
        answerbox.innerHTML = "Capilano Suspension Bridge. More information can be found here: https://www.capbridge.com/";
    } else if (totalScore == 3) { //something outdoors, under $100, outdoor sports
        answerbox.innerHTML = "Snowshoeing at Mount Seymour. More information can be found here: https://mtseymour.ca/";
    } else if (totalScore == 1.5) { //something festive/to do with friends, under $100, grabbing food and drinks
        answerbox.innerHTML = "Happy hour. More information can be found here: https://www.ultimatehappyhours.com/location/vancouver-late-night/#hotel_id_2930";
    } else if (totalScore == 2.5) { //something festive/to do with friends, under $100, sight-seeing
        answerbox.innerHTML = "Gondola at Grouse Mountain. More information can be found here: https://www.grousemountain.com/";
    } else if (totalScore == 3.5) { //something festive/to do with friends, under $100, outdoor sports
        answerbox.innerHTML = "Skiing/snowboarding at Mount Seymour. More information can be found here: https://mtseymour.ca/";
    } else if (totalScore == 101) { //something outdoors, over $100, grabbing food and drinks
        answerbox.innerHTML = "Whistler trip. More information can be found here: https://www.whistlerblackcomb.com/";
    } else if (totalScore == 102) { //something outdoors, over $100, sight-seeing
        answerbox.innerHTML = "Half-day Vancouver whale watching. More information can be found here: https://princeofwhales.com/whale-watching-adventure-tour/vancouver/half-day-whale-watching-vancouver/";
    } else if (totalScore == 103) { //something outdoors, over $100, outdoor sports
        answerbox.innerHTML = "Snowmobile tour. More information can be found here: https://www.whistler.com/activities/snowmobiling/?gclid=Cj0KCQiAhMOMBhDhARIsAPVml-E7Ab7R50VCHX8uNW--9sDXD6YFxBwZHL4Bvt45dKO4Tyj4MBvzMA8aAkRIEALw_wcB&gclsrc=aw.ds";
    } else if (totalScore == 101.5) { //something festive/to do with friends, over $100, grabbing food and drinks
        answerbox.innerHTML = "Dinner at Le Crocodile. More information can be found here: https://www.lecrocodilerestaurant.com/";
    } else if (totalScore == 102.5) { //something festive/to do with friends, over $100, sight-seeing
        answerbox.innerHTML = "Whistler trip. More information can be found here: https://www.whistlerblackcomb.com/";
    } else if (totalScore == 103.5) { //something festive/to do with friends, over $100, outdoor sports
        answerbox.innerHTML = "Helicopter tour at Grouse Mountain. More information can be found here: https://www.grousemountain.com/";
    }
}



function textToAudio() {
    let msg = document.getElementById("text-to-speech").innerHTML;
   
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
   
    speech.text = msg;
    speech.volume = 0.2;
    speech.rate = 1;
    speech.pitch = 1;
   
    window.speechSynthesis.speak(speech);
 }
  
 function textToAudio1() {
    let msg = document.getElementById("text-to-speech1").innerHTML;
   
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
   
    speech.text = msg;
    speech.volume = 0.2;
    speech.rate = 1;
    speech.pitch = 1;
   
    window.speechSynthesis.speak(speech);
 }

 function textToAudio2() {
    let msg = document.getElementById("text-to-speech2").innerHTML;
   
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
   
    speech.text = msg;
    speech.volume = 0.2;
    speech.rate = 1;
    speech.pitch = 1;
   
    window.speechSynthesis.speak(speech);
 }

 function textToAudio3() {
    let msg = document.getElementById("text-to-speech3").innerHTML;
   
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
   
    speech.text = msg;
    speech.volume = 0.2;
    speech.rate = 1;
    speech.pitch = 1;
   
    window.speechSynthesis.speak(speech);
 }