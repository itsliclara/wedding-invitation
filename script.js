document.addEventListener("DOMContentLoaded", function () {
    // =========================
    // COUNTDOWN
    // =========================
    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    const weddingDate = new Date("2026-08-26T15:00:00").getTime();

    function updatecountdown() {
        if (
            !daysElement ||
            !hoursElement ||
            !minutesElement ||
            !secondsElement
        ) {
            console.error("Elemen countdown tidak ditemukan.");
            return;
        }

        const now = new Date().getTime();
        const distance = weddingDate - now;

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
        hoursElement.textContent = String(hours).padStart(2, "0");
        minutesElement.textContent = String(minutes).padStart(2, "0");
        secondsElement.textContent = String(seconds).padStart(2, "0");
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    // =========================
    // OPEN INVITATION
    // =========================
    const openButton = document.getElementById("open-button");
    const cover = document.getElementById("cover");
    const invitationContent =
        document.getElementById("invitation-content");

    if (openButton && cover && invitationContent) {
        openButton.addEventListener("click", function () {
            cover.style.display = "none";
            invitationContent.style.display = "block";

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    } else {
        console.error("Tombol, cover, atau isi invitation tidak ditemukan.");
    }
});