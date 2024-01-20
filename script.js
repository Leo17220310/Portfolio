
function showScreenshot(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "flex";
}

function hideScreenshot(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}




function toggleCode(codeId) {
    var codeContainer = document.getElementById(codeId);
    if (codeContainer.style.display === "none") {
        codeContainer.style.display = "block";
    } else {
        codeContainer.style.display = "none";
    }
}
