document.addEventListener("DOMContentLoaded", function() {
    var galleries = document.querySelectorAll(".gallery");

    // loop through gallery elements
    galleries.forEach(function(gallery) {
        // create file path
        var imgSrc = gallery.getAttribute("data-img");

        // get elements
        var anchor = gallery.querySelector("a");
        var img = gallery.querySelector("img");

        // set href and src
        anchor.href = imgSrc;
        img.src = imgSrc;
    });
});