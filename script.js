const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");
const searchInput = document.querySelector("[data-search-input]");

let documentFragment = document.createDocumentFragment();
const cards = userCardContainer.children;
console.log(cards)

searchInput.addEventListener("input", e => {
   const value = e.target.value.toLowerCase();

   for (const card of cards) {
      const header = card.querySelector("[data-header]");
      const body = card.querySelector("[data-body]");
      const isVisible =
         header.textContent.toLowerCase().includes(value) ||
         body.textContent.toLowerCase().includes(value);

      console.log(header.textContent, body.textContent, isVisible,card.classList);
      card.classList.toggle("hide", !isVisible);
      
   }
})



fetch("https://jsonplaceholder.typicode.com/users")
   .then(res => res.json())
   .then(data => {
      users = data.map(user => {
         const card = userCardTemplate.content.cloneNode(true).children[0];
         const header = card.querySelector("[data-header]");
         const body = card.querySelector("[data-body]");
         header.textContent = user.name;
         body.textContent = user.email;
         documentFragment.append(card);
         return {
            user: user.name,
            email: user.email,
            element: card
         }
         // console.log(user)
         // console.log(documentFragment)
      });
      userCardContainer.append(documentFragment);

   })