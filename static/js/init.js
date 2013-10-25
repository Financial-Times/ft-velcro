$(document).ready(function () {

    // Stop empty links (in code examples) scrolling the page to the top.
    $(document).on("click", "a[href=#]", function (ev) {
        ev.preventDefault();
    });

    velcroDoc.codeSamples.showCodeForElements(".v-sample");

});