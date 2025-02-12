document.addEventListener("DOMContentLoaded", function() {
    
    // get all scroll containers in the file
    const containers = document.querySelectorAll(".scroll-container");

    // iterate over the contaiers
    containers.forEach(function(container) {

        // store that contaiers folder src
        const folderSrc = container.getAttribute("data-folder");

        // get all galleries under the contaier
        const galleries = container.querySelectorAll(".gallery");

        // loop through gallery elements
        galleries.forEach(function(gallery) {
            // create file path
            const imgSrc = gallery.getAttribute("data-img");

            // get elements
            const anchor = gallery.querySelector("a");
            const img = gallery.querySelector("img");

            // set href and src
            anchor.href = folderSrc + "/" + imgSrc;
            img.src = folderSrc + "/" + imgSrc;
        });
    });
});