// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?


$(function () {

  // this code will allow the written text within the event to be saved even when refreshed.

  let saveButtonEl = $('saveBtn')
  saveButtonEl.addEventListener = ('click', function() {
    // need to add the code to save the written text even when the page is refreshed.
  });


  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  
// this code counts the hour so that the previous to do list colors will be different
//  depending on past, present, and future
  // function calendarColorPast() {
  //   let time = dayjs().format('HH')
  //   console.log(time);
  //   if (time > 1) {
  //     let hour1 = $('#hour-1');
  //     if (hour1.classList.contains('future')) {
  //       hour1.classList.remove('future');
  //       hour1.classList.add('past')
  //     }
  //   }
  // };

  // calendarColorPast();
  // setInterval(calendarColor, 1000)



  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?




  //
  // TODO: Add code to display the current date in the header of the page.

  // this code will put the current date into the html file.
let currentDate = $('#currentDay');

  function displayDate() {
    let today = dayjs().format('MMM D, YYYY');
    currentDate.text(today);

  }

  // this code will activate the date call function.
displayDate();
// this code will make it so that the display date will be refreshed every second.
setInterval(displayDate, 1000);

})
