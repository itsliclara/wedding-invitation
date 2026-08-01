const weddingDate = new Date("August 26, 2026 00:00:00").getTime();

setInterval(function () {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        /
        1000
    );

    document.getElementById("days").textContent = days;

    document.getElementById("hours").textContent = hours;

    document.getElementById("minutes").textContent = minutes;

    document.getElementById("seconds").textContent = seconds;

},1000);

const openButton = document.getElementById("open-button");
const cover = document.getElementById("cover");
const invitationContent = document.getElementById("invitation-content");

openButton.addEventListener("click", function () {
    cover.style.display = "none";
    invitationContent.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});