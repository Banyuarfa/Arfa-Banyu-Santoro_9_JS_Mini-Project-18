function highlightEvenItems() {
  const items = document.querySelectorAll("#itemList li");
  for (let i = 0; i <= items.length; i++) {
    if (i % 2 === 0) items[i].classList.toggle("highlight");
  }
}
