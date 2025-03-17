document.addEventListener("DOMContentLoaded", function () {
    const videoThumbnail = document.querySelector(".thumbnail-wrapper");
    const modal = document.getElementById("videoModal");
    const videoIframe = document.getElementById("videoIframe");
    const closeModal = document.querySelector(".close");

    if (!videoThumbnail) {
        // for error checking purpose
        console.error("Thumbnail element not found.");
        return;
    }
    const videoURL = "https://www.youtube-nocookie.com/embed/YoHD9XEInc0?autoplay=1";
    // Open modal event listener
    videoThumbnail.addEventListener("click", function () {
        videoIframe.src = videoURL;
        modal.classList.add("active");
    });
    // Close modal event listener
    closeModal.addEventListener("click", function () {
        videoIframe.src = "";
        modal.classList.remove("active");
    });
    // Closing the modal when clicking outside 
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            videoIframe.src = "";
            modal.classList.remove("active");
        }
    });
});
