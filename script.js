const filterButtons = document.querySelectorAll('.filter-btn');
const godCards = document.querySelectorAll('.god-card');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedCategory = button.dataset.filter;

    filterButtons.forEach((btn) => btn.classList.toggle('active', btn === button));

    godCards.forEach((card) => {
      const category = card.dataset.category;
      const shouldShow = selectedCategory === 'all' || category === selectedCategory;
      card.classList.toggle('hidden', !shouldShow);
    });
  });
});
