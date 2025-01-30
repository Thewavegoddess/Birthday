document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("fireworks");
    const fireworks = new Fireworks.default(container, {
        autoresize: true,
        opacity: 0.5,
        acceleration: 1.05,
        friction: 0.97,
        gravity: 1.5,
        particles: 50,
        trace: 3,
        explosion: 5,
        intensity: 20,
        lineStyle: 'round',
    });
    fireworks.start();

    const floatingMessagesContainer = document.getElementById("floating-messages");

    if (floatingMessagesContainer) {
        // 💬 Floating Messages Effect
        const messages = [
            "You are my everything! ❤️",
            "I love you forever! 💕",
            "Happy Birthday, my love! 🎂",
            "You make my world complete! 🌎",
            "Every moment with you is special! 🥰",
        ];

        function createFloatingMessage() {
            const message = document.createElement("div");
            message.classList.add("floating-message");
            message.innerHTML = messages[Math.floor(Math.random() * messages.length)];

            message.style.left = Math.random() * 80 + "vw";
            message.style.top = "90vh";
            message.style.animationDuration = Math.random() * 6 + 4 + "s";

            floatingMessagesContainer.appendChild(message);

            setTimeout(() => {
                message.remove();
            }, 6000);
        }

        setInterval(createFloatingMessage, 2000);
    } else {
        console.error("No element with id 'floating-messages' found!");
    }

    // ❤️ Falling Hearts Effect
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 3 + "s";

        const heartsContainer = document.getElementById("hearts-container");
        if (heartsContainer) {
            heartsContainer.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 5000);
        } else {
            console.error("No element with id 'hearts-container' found!");
        }
    }

    setInterval(createHeart, 500);
});
