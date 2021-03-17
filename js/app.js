
// immediate invoked function expression

(function() {
  //set up an array of all of our picture names 
  const pictures = [
    "contBcg-0",
    "contBcg-1",
    "contBcg-2",
    "contBcg-3",
    "contBcg-4"
  ];

  //select both left and right button. Add event listeners

  //get all the documents with the class .btn
  const buttons = document.querySelectorAll('.btn')
  //get the FIRST element with the class of .img-container, which this is the only one.
  const imageDIV = document.querySelector('.img-container')
  //setting up a counter
  let counter = 0


  //for each button, have this function with something called button?
  buttons.forEach(function(button){
    //add event listeners for button(s)?
    button.addEventListener('click', function(e){
      //if button contains left button, decrease our counter
      if (button.classList.contains('btn-left')){
        counter--
        //if our counter is less then zero, reset the counter at length of array -1, which is 4, which shoudl be the last item for our array we set up
        if(counter < 0){
          counter = pictures.length -1
        }
        //set our img container to the background url of our array.
        //variable picutre array item counter
        imageDIV.style.backgroundImage = `url('./img/${pictures[counter]}.jpeg')`
      }
      if (button.classList.contains('btn-right')){
        counter++
        //if counter is greater than 4, set to 0. we need todo this beaucse the array is zero indexed
        if(counter > pictures.length -1){
          counter = 0
        }
        imageDIV.style.backgroundImage = `url('./img/${pictures[counter]}.jpeg')`
      }
    })
  })
})();
