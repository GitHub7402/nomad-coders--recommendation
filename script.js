const copyBtn = document.querySelector("#copyBtn");
const copyModal = document.querySelector("#copyModal");

const SCRIPT_SRC = `<script src="https://kit.fontawesome.com/6478f529f2.js" crossorigin="anonymous"></script>`;

function hideModal() {
    copyModal.style.display = "none";
}

function copyCode() {
    navigator.clipboard.writeText(SCRIPT_SRC);
    copyModal.style.display = "flex";
    setInterval(hideModal, 1500);
}

if(copyBtn) {
    copyBtn.addEventListener("click", copyCode);
}