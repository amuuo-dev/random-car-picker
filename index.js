// create function picking random choice
function pickingRandomChoice(){
    // get reference to the text area
    const textAreaInput=document.querySelector("#choices")
    //get reference to the textAreaInput value and add a split() method
    const choices=textAreaInput.value.split(",")

    // remove spaces unnecessary spaces from the choices
    const trimmedchoices=choices.map((choice)=>{
       return choice.trim()
    })
    //if else statement to check whether the text area field is empty or one choice is provided
    if(trimmedchoices.length===0 || (trimmedchoices.length===1 && trimmedchoices[0]==="")){
        //get reference to result id
        const resultEl=document.querySelector("#result")
        resultEl.textContent= "Please Enter Your Choices"
    }
    else{
        //pick random index
        const randomIndex=Math.floor(Math.random()*choices.length)
         //get reference to result id
         const resultEl=document.querySelector("#result")
        // displaying the random index
        resultEl.textContent="Today, you should drive: " + trimmedchoices[randomIndex]

        // clear the text area field value
        textAreaInput.value = "";
    }
}
// getting reference to the pick random choice button
const pickBtnEl=document.querySelector("#pickBtn")
// Attach click event to the "Pick Random choice" button and call the function  pickingRandomChoice()
pickBtnEl.addEventListener("click", pickingRandomChoice)
