const btns = document.querySelectorAll(".sidelink button");
const cards = document.querySelectorAll(".card");

// Add event listeners for all filter buttons (except "ALL")
for (let i = 1; i < btns.length; i++) {
    btns[i].addEventListener("click", filterCards);
}

// Function to filter cards based on button clicked
function filterCards(e) {
    const btnType = e.target.dataset.btn; // get button category
    cards.forEach(card => {
        const cardType = card.dataset.info; // get card category
        if (cardType === btnType) {
            card.style.display = "block"; // show matching
        } else {
            card.style.display = "none";  // hide others
        }
    });
}

// "ALL" button → show everything
btns[0].addEventListener("click", () => {
    cards.forEach(card => {
        card.style.display = "block";
    });
});
