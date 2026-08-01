// =========================
// COUNTDOWN
// =========================

const weddingDate = new Date("August 26, 2026 15:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    if (distance <= 0) {
        daysElement.textContent = "00";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    daysElement.textContent = days;
    hoursElement.textContent = hours.toString().padStart(2, "0");
    minutesElement.textContent = minutes.toString().padStart(2, "0");
    secondsElement.textContent = seconds.toString().padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);


// =========================
// OPEN INVITATION
// =========================

const openButton = document.getElementById("open-button");
const cover = document.getElementById("cover");
const invitationContent = document.getElementById("invitation-content");

openButton.addEventListener("click", function () {
    gsap.to("#cover", {

        opacity: 0,

        scale: 0.95,

        duration: 0.8,

        ease: "power2.inOut",

        onComplete: function () {

            cover.style.display = "none";

            invitationContent.style.display = "block";

            window.scrollTo(0, 0);

            gsap.from("#invitation-content", {

                opacity: 0,

                y: 80,

                duration: 1,

                ease: "power3.out"

            });

        }

    });

});

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});