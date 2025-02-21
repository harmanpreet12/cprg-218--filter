document.addEventListener("DOMContentLoaded", function () {

    const videoThumbnail = document.querySelector(".thumbnail-wrapper");
    const videoURL = "https://www.youtube.com/embed/YoHD9XEInc0?autoplay=1";

    // Video thumbnail 
    videoThumbnail.addEventListener("click", function () {
        videoThumbnail.innerHTML = `<iframe width="1000" height="500" src="${videoURL}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    });
});
