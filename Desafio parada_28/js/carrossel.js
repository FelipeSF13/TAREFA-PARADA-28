<script>
  const carousel = document.querySelector('.carousel');
  const carouselItems = document.querySelectorAll('.carousel-item');
  let currentIndex = 0;

  function showSlide(index) {
    if (index < 0) {
      index = carouselItems.length - 1;
    } else if (index >= carouselItems.length) {
      index = 0;
    }

    carousel.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;
  }

  setInterval(() => {
    showSlide(currentIndex + 1);
  }, 3000);

  showSlide(currentIndex);
</script>
</body>
</html>