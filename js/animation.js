
let button = document.querySelector(".btn"),
    blackbox = document.querySelector(".blackbox"),
    giftbox = document.querySelector(".giftbox"),
    hallway = document.querySelector(".hallway"),
    room = document.querySelector(".empty-room"),
    whitebox = document.querySelector(".whitebox");


let blackText = document.querySelectorAll(".bb-text"), 
    giftText = document.querySelectorAll(".gift-text"), 
    hallText = document.querySelectorAll(".hall-text"), 
    roomText = document.querySelectorAll(".room-text"); 


let frames = document.querySelectorAll(".frame"), 
    msg = document.querySelector(".text-frame p");

let light = document.querySelector(".switch-aud"),
    blast = document.querySelector(".blast-aud"),
    door = document.querySelector(".door-aud"),
    haunt = document.querySelector(".haunt-aud"),
    music = document.querySelector(".hbd-aud");


let readMsg = (text) => {

    for(let i = 0; i < text.length; i++) {  
        setTimeout(() => {  
            
            text[i].classList.add("read");    
            if(i === text.length - 1){            
                button.style.display = "inline-block";
                document.querySelector(".btn-ref").style.display = "block";
            }
    
        },5000*i);
        
    }
};


let transition = (currentScene) => {
    currentScene.classList.add("fade-in");
    currentScene.style.opacity = "0";
    button.style.display = "none";
    document.querySelector(".btn-ref").style.display = "none";       
};

document.querySelector(".btn-ref p").innerHTML = "Click the Light Bulb.";

readMsg(blackText);

button.addEventListener("click",function(){
    
    if(button.classList.contains("switch")) {
        light.play();
        transition(blackbox);
        document.querySelector(".btn-ref p").innerHTML = "Click the Door";
        setTimeout(function() {
            button.classList.add("door-out");
            button.classList.remove("switch");
            blackbox.style.display = "none";
            readMsg(roomText); 
        },4000);
    }

    else if(button.classList.contains("door-out")) {

        door.play();
        transition(room);
        setTimeout(function() {
            haunt.play();
            haunt.loop = true;
            button.classList.add("door-in");
            button.classList.remove("door-out");
            room.style.display = "none";
            readMsg(hallText); 
        },4000);
    }

    else if(button.classList.contains("door-in")) {

        door.play();
        transition(hallway);
        document.querySelector(".btn-ref p").innerHTML = "Click the Gift";
        setTimeout(function() {
            button.classList.add("gift");
            button.classList.remove("door-in");
            hallway.style.display = "none";
            readMsg(giftText);
        },4000);
    }

    else if(button.classList.contains("gift")) {

        haunt.pause();
        blast.play();
        giftbox.style.display = "none";
        transition(whitebox);
       
        music.loop = true;
        music.play();

        frames[1].style.display = "block";

        setTimeout(() => {
            frames[1].classList.add("appear");
            frames[1].style.opacity = "1";
            msg.classList.add("move-up");
        },1500);

        setTimeout(() => {
            msg.style.transform = "translateY(-100%)";
            whitebox.style.display = "none";
        },5000);

        setTimeout(() => {
            document.querySelector(".text-frame").classList.add("fade-in");
            document.querySelector(".text-frame").style.opacity = '0';
        },88000);

        setTimeout(() => {
            frames[1].style.display = "none";
            frames[0].style.display = "block";
            frames[0].classList.add("appear");
            frames[0].style.opacity = "1";
        },91000);

    }

});