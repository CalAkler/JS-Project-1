// document ready
$(document).ready(() => {

   // create an array that contains 12 items with the properties of title and type(spell or weed)
    const quizNames = [
        {
            title: "Goodberry",
            type: "spell",
        },
        {
            title: "Snowcap",
            type: "weed",
        },
        {
            title: "Hallow",
            type: "spell",
        },
        {
            title: "Soul Cage",
            type: "spell",
        },
        {
            title: "Amnesia",
            type: "weed",
        },
        {
            title: "Permafrost",
            type: "weed",
        },
        {
            title: "Reincarnate",
            type: "spell",
        },
        {
            title: "Mind Spike",
            type: "spell",
        },
        {
            title: "Sour Tsunami",
            type: "weed",
        },
        {
            title: "Enervation",
            type: "spell",
        },
        {
            title: "Weird",
            type: "spell",
        },
        {
            title: "Double Dream",
            type: "weed"
        },
        // placeholder -- need something to happen on final item
        {
            title: "",
            type: ""
        }
    ]; 
  
    // define a variable to keep track of score
    let score = 0;

    // define a variable to count number of times user clicks start/next button to cycle through quizNames
    let clickCounter = -1;

    // cache jQuery selectors
    const $h3 = $("h3");
    const $startButton = $(".startButton");
    const $spellButton = $(".spellButton");
    const $weedButton = $(".weedButton");
    const $result = $(".result");
    const $answer = $(".answer");


    // define a function to display a final message to the user based on their score
    function finalMessage() {
        if (score === 12) {
            $result.html(`<p>Absolute perfection! You are a weed and D&D connoisseur. There is no greater calling.</p>`)
        } else if (score >= 7 && score < 12) {
            $result.html(`<p>Amazing! you must play a lot of D&D and smoke a lot of weed. Or you're just good at guessing.</p>`)
        } else if (score >= 4 && score < 7) {
            $result.html(`<p>Hmm. That's really not very good, is it? You can do better. Try again!</p>`)
        } else {
            $result.html(`<p>Yikes. You should probably try this again when you aren't stoned.</p>`)
        }
    }; 
    
    // define a function to check if there are any items left in quizNames, and if not, end the quiz and display result 
    function quizEnd() {
        if (clickCounter <= 11) {
        } else {
            $h3.text(`Score: ${score} / 12`);
            // call finalMessage function
            finalMessage(); 
        }
    }; 

    // define a click event listener on the Start button 
    $startButton.on("click", function() {
        // when button is clicked, change h3 text to equal next item in quizNames array
        clickCounter = (clickCounter + 1);
        $h3.text(quizNames[clickCounter].title);
        // call the quizEnd function
        quizEnd ();
        // clear p.answer text
        $answer.text("");
        // update text of startButton to "Next" 
        $startButton.text("Next");
        // change colour of startButton  
        $startButton.css({"color": "blue", "background-color": "lightblue"});
    });
    

    // define a function that checks if type of currently displayed name is "spell"
    function spellChecker() {
        if (quizNames[clickCounter].type === "spell") {
            //display result to user and style it
            $answer.text("Correct!").css("color", "limegreen");
            //increase score by +1
            score = score + 1;
            console.log(`Score: ${score}`);
        } else {
            $answer.text("Wrong!").css("color", "red");
        }
    };


    // define a function that checks if type of currently displayed name is "weed"
    function weedChecker() {
        if (quizNames[clickCounter].type === "weed") {
            //display result to user and style it
            $answer.text("Correct!").css("color", "limegreen");
            //increase score by +1
            score = score + 1;
            console.log(`Score: ${score}`);
        } else {
            $answer.text("Wrong!").css("color", "red");
        }
    };
    

    // define a click event listener on Spell button and run spellChecker function
    $spellButton.on("click", function() {
         spellChecker();
    });

    // define a click event listener on Weed button and run weedChecker function
    $weedButton.on("click", function() {
        weedChecker();
   });

});