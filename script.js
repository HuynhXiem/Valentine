document.addEventListener("DOMContentLoaded", function () {
    const loadingScreen = document.getElementById("loading-screen");
    const progressBar = document.getElementById("progress");
    const progressText = document.getElementById("progress-text");
    const questionPopup = document.getElementById("question-popup");
    const mainContent = document.getElementById("main-content");
    const submitQuestion = document.getElementById("submit-question");

    const giftBox = document.getElementById("gift-box");
    const questionBox = document.getElementById("question-box");
    const messageBox = document.getElementById("message-box");
    const answerInput = document.getElementById("answer");
    const submitAnswer = document.getElementById("submit-answer");

    const showExtraAnswerBtn = document.getElementById("show-extra-answer");
    const extraAnswer = document.getElementById("extra-answer");

    const music = document.getElementById("bg-music");
    const musicBtn = document.getElementById("music-btn");

    // Loading tiến trình
    let progress = 0;
    let loadingInterval = setInterval(() => {
        if (progress < 99) {
            progress++;
            progressBar.style.width = progress + "%";
            progressText.textContent = progress + "%";
        } else {
            clearInterval(loadingInterval);
            setTimeout(() => {
                loadingScreen.style.display = "none"; // Ẩn loading
                questionPopup.classList.remove("hidden"); // Hiện popup câu hỏi
            }, 500); // Đợi một chút sau khi đạt 99%
        }
    }, 50);

    // Hiển thị đáp án E khi nhấn vào nút
    showExtraAnswerBtn.addEventListener("click", function () {
        extraAnswer.classList.remove("hidden");
        showExtraAnswerBtn.classList.add("hidden"); // Ẩn nút sau khi bấm
    });

    // Kiểm tra câu trả lời (chọn đáp án nào cũng đúng)
    submitQuestion.addEventListener("click", function () {
        let selectedAnswer = document.querySelector("input[name='valentine-question']:checked");
        if (selectedAnswer) {
            questionPopup.style.display = "none"; // Ẩn popup
            mainContent.classList.remove("hidden"); // Hiện nội dung chính
        } else {
            alert("Chọn đi rồi muốn đi đâu thì đi cô ơi =)))");
        }
    });

    // Nhạc nền
    music.volume = 0.5;
    music.play().catch(() => console.log("Tự động phát nhạc bị chặn!"));
    musicBtn.addEventListener("click", function () {
        if (music.paused) {
            music.play();
            musicBtn.textContent = "🎶 Tắt Nhạc";
        } else {
            music.pause();
            musicBtn.textContent = "🎶 Bật Nhạc";
        }
    });

    // Khi nhấn vào hộp quà
    giftBox.addEventListener("click", function () {
        giftBox.style.display = "none"; // Ẩn hộp quà
        questionBox.classList.remove("hidden"); // Hiện câu hỏi
    });

    // Trả lời câu hỏi trong hộp quà
    submitAnswer.addEventListener("click", function () {
        if (answerInput.value.toLowerCase().trim() === "01/10/2024") {
            questionBox.classList.add("hidden");
            messageBox.classList.remove("hidden");

            startFireworks();
        } else {
            alert("Sai rồi, xem lại định dạng thử coi! 😊");
        }
    });

    function startFireworks() {
        var duration = 3 * 1000; // 3 giây
        var animationEnd = Date.now() + duration;
        var colors = ["#ff0000", "#ff4000", "#ff8000", "#ffbf00", "#ffff00"];

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        (function frame() {
            confetti({
                particleCount: 5,
                angle: randomInRange(55, 125),
                spread: 70,
                startVelocity: 40,
                colors: colors,
                origin: { y: 0.6 }
            });

            if (Date.now() < animationEnd) {
                requestAnimationFrame(frame);
            }
        })();
    }

});
