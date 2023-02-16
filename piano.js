// nob = number of buttons
var nob = document.querySelectorAll(".tile").length;
for (var i = 0; i < nob; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonplays = this.textContent;
        console.log("got clicked")
        let ding0 = new Audio('./sounds/1.mp3');
        let ding1 = new Audio('./sounds/2.mp3');
        let ding2 = new Audio('./sounds/3.mp3');
        let ding3 = new Audio('./sounds/4.mp3');
        let ding4 = new Audio('./sounds/5.mp3');
        let ding5 = new Audio('./sounds/1.mp3');
        let ding6 = new Audio('./sounds/2.mp3');
        let ding7 = new Audio('./sounds/3.mp3');
        let ding8 = new Audio('./sounds/4.mp3');

        switch (buttonplays) {
            case 'a':
                ding0.play();
                console.log("got clicked");

                break;
            case 's':
                ding1.play();

                break;
            case 'd':
                ding2.play();

                break;
            case 'f':
                ding3.play();

                break;
            case 'g':
                ding4.play();

                break;
            case 'h':
                ding5.play();

                break;
            case 'j':
                ding6.play();

                break;
            case 'k':
                ding7.play();

                break;
            case 'l':
                ding8.play();

        }

    })
}
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------


var nob = document.querySelectorAll(".tile").length;
for (var i = 0; i < nob; i++) {
    document.querySelectorAll(".tile")[i].addEventListener('keypress', function(event) {

        var keypressed = event.key;
        console.log(keypressed)




        switch (keypressed) {
            case 'a':
                var audio = new Audio('./sounds/1.mp3');
                audio.play();
                console.log("got clicked");
                break;
            case 's':
                var audio = new Audio('./sounds/2.mp3');
                audio.play();
                break;
            case 'd':
                var audio = new Audio('./sounds/3.mp3');
                audio.play();
                break;
            case 'f':
                var audio = new Audio('./sounds/4.mp3');
                audio.play();
                break;
            case 'g':
                var audio = new Audio('./sounds/5.mp3');
                audio.play();
                break;
            case 'h':
                var audio = new Audio('./sounds/1.mp3');
                audio.play();
                break;
            case 'j':
                var audio = new Audio('./sounds/2.mp3');
                audio.play();
                break;
            case 'k':
                var audio = new Audio('./sounds/3.mp3');
                audio.play();
                break;
            case 'l':
                var audio = new Audio('./sounds/4.mp3');
                audio.play();
        }

    })
}