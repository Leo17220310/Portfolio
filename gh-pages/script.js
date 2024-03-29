//SCRENSHOTS SEHEM
function showScreenshot(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "flex";
}
// SCREENSHOTS SEHEN
function hideScreenshot(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// DARK UND WHITE MODE
function toggleMode() {
    var body = document.body;
    var button = document.querySelector('.toggle-mode-button');

    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        button.textContent = "Dark Mode";
    } else {
        body.classList.add("dark-mode");
        button.textContent = "White Mode"; 
    }
}

//BUTTONS REAGIEREN
function toggleCode(codeId, buttonId) {
    var codeContainer = document.getElementById(codeId);
    var button = document.getElementById(buttonId);

    // Überprüfen, ob der codeContainer sichtbar ist oder nicht
    var isCodeVisible = window.getComputedStyle(codeContainer).display !== "none";

    // Umkehren des Zustands und Aktualisieren des Button-Textes entsprechend
    if (isCodeVisible) {
        codeContainer.style.display = "none";
        button.textContent = "Anzeigen";
    } else {
        codeContainer.style.display = "block";
        button.textContent = "Verbergen";
    }
}



// VIDEO SEHEN
function showVideo() {
    var videoContainer = document.getElementById("video-container");
    if (videoContainer.style.display === "none") {
        videoContainer.style.display = "block";
    } else {
        videoContainer.style.display = "none";
    }
}

      // Function to toggle the game video
      function toggleGameVideo() {
        var videoElement = document.getElementById('gameVideo');
        var videoContainer = document.getElementById('gameVideoContainer');

        if (videoElement.style.display === 'none' || videoElement.style.display === '') {
            videoElement.src = 'VideoSpiel.mp4';
            videoElement.style.display = 'block';
            videoContainer.style.display = 'block';
        } else {
            videoElement.style.display = 'none';
            videoContainer.style.display = 'none';
            videoElement.pause();
        }
    }


