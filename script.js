// ================= PAGE SWITCHING =================
function showPage(pageId) {
    document.querySelectorAll(".page").forEach(page => {
        page.style.display = "none";
    });
    document.getElementById(pageId).style.display = "block";
}

// ================= DOWNLOAD BUTTON LOGIC =================
const downloadButtons = document.querySelectorAll(".game-card button");
const libraryList = document.getElementById("libraryList");

downloadButtons.forEach(button => {
    button.addEventListener("click", () => {

        const gameName = button.parentElement.querySelector("h3").innerText;
        const confirmDownload = confirm(`Do you want to download "${gameName}"?`);

        if (confirmDownload) {
            alert(`Your download for "${gameName}" has started! 🎮`);

            // Add game to Library
            if (libraryList) {
                const gameItem = document.createElement("p");
                gameItem.innerText = "🎮 " + gameName;
                libraryList.appendChild(gameItem);
            }
        }
    });
});

// ================= SEARCH BAR FUNCTIONALITY =================
const searchInput = document.getElementById("searchInput");
const gameCards = document.querySelectorAll(".game-card");

if (searchInput) {
    searchInput.addEventListener("keyup", () => {
        const searchValue = searchInput.value.toLowerCase();

        gameCards.forEach(card => {
            const gameName = card.querySelector("h3").innerText.toLowerCase();

            if (gameName.includes(searchValue)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
}

// ================= DEFAULT PAGE =================
showPage("home");