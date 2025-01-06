let currentSlide = 1;
const slides = document.querySelectorAll('.slides');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    dots[i].classList.remove('active');
    if (i === index - 1) {
      slide.classList.add('active');
      dots[i].classList.add('active');
    }
  });
  currentSlide = index;
}

function changeSlide(direction) {
  let newSlide = currentSlide + direction;
  if (newSlide < 1) newSlide = slides.length;
  if (newSlide > slides.length) newSlide = 1;
  showSlide(newSlide);
}

document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
document.querySelector('.next').addEventListener('click', () => changeSlide(1));

// 自動再生
setInterval(() => changeSlide(1), 5000); // 5秒ごとに次のスライド


