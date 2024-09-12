let audio = document.getElementById("myAudio");
window.addEventListener('click', function() {
  audio.play();
});


let currentPage = 1;
const totalPages = 14;

document.getElementById("next").addEventListener("click", function() {
  if (currentPage < totalPages) {
    document.getElementById("page" + currentPage).classList.add("flipped");
    currentPage++;
    updateButtons();
  }
});

document.getElementById("prev").addEventListener("click", function() {
  if (currentPage > 1) {
    currentPage--;
    document.getElementById("page" + currentPage).classList.remove("flipped");
    updateButtons();
  }
});

function updateButtons() {
  document.getElementById("prev").disabled = currentPage === 1;
  document.getElementById("next").disabled = currentPage === totalPages;
}

updateButtons();




// const prevButton = document.getElementById('prev');
// const nextButton = document.getElementById('next');

// let currentPage = 1;

// prevButton.addEventListener('click', () => {
//   if (currentPage > 1) {
//     currentPage--;
//     window.location.href = `page${currentPage}.html`;
//   }
// });

// nextButton.addEventListener('click', () => {
//   if (currentPage < 13) {
//     currentPage++;
//     window.location.href = `page${currentPage}.html`;
//   }
// });