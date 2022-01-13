function createNav() {
  const nav = document.querySelector('nav ul');
  const itemList = document.querySelectorAll(
    'nav li:not(.collapsed-items-container)'
  );
  nav.innerHTML = '';
  const availableSize = window.innerWidth;
  itemList.forEach((item) => {
    nav.appendChild(item);
  });

  if (nav.scrollWidth > availableSize) {
    const moreItem = document.createElement('li');
    moreItem.classList.add('collapsed-items-container');
    const moreTitle = document.createElement('h2');
    moreTitle.innerText = 'More';

    const collapsedList = document.createElement('ul');
    collapsedList.classList.add('hidden');
    moreItem.addEventListener('click', () => {
      collapsedList.classList.toggle('hidden');
    });

    moreItem.append(moreTitle, collapsedList);
    nav.appendChild(moreItem);

    while (nav.scrollWidth > availableSize && nav.children.length >= 2) {
      const child = nav.children.item(nav.children.length - 2);
      nav.removeChild(child);
      collapsedList.prepend(child);
    }
  }
}

window.addEventListener('resize', () => {
  createNav();
});

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav ul');
  nav.classList.remove('hidden');
  createNav();
});
