const copyLinkBtn = document.querySelector("#copyLinkBtn");
const copyBtn = document.querySelector("#copyBtn");
const copyModal = document.querySelector("#copyModal");

const SCRIPT_SRC = `<script src="https://kit.fontawesome.com/6478f529f2.js" crossorigin="anonymous"></script>`;
const RESET_CSS_URL = "https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css";

function hideModal() {
    copyModal.style.display = "none";
}

function copyLink() {
    navigator.clipboard.writeText(RESET_CSS_URL);
}

if(copyLinkBtn) {
    copyLinkBtn.addEventListener("click", copyLink);
}
function copyCode() {
    navigator.clipboard.writeText(SCRIPT_SRC);
    copyModal.style.display = "flex";
    setInterval(hideModal, 1500);
}

if(copyBtn) {
    copyBtn.addEventListener("click", copyCode);
}