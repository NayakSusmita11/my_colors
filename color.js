
/* Select all the color options */
const colorOptions = document.querySelectorAll('.color');

/* Add click event listener to each color option */
colorOptions.forEach(option => {
  option.addEventListener('click', function () {
    /* Get the background color of the clicked element */
    const selectedColor = window.getComputedStyle(option).backgroundColor;
    
    /* Change the body's background color to the selected color */
    document.body.style.backgroundColor = selectedColor;
  });
});
