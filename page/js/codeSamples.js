var velcroDoc = velcroDoc || {};

velcroDoc.codeSamples = (function () {

    function isEmpty(str) {
       return /^\s*$/.test(str);
    }

    function prepareHTML(htmlStr) {
       var inputLines = htmlStr.split("\n"),
           outputLines = [],
           firstNonEmptyLine = 0,
           spacesAtStart,
           c,
           l;
       for (c = 0, l = inputLines.length; c < l; c++) {
           if (!isEmpty(inputLines[c])) {
               firstNonEmptyLine = inputLines[c];
               break;
           }
       }
       spacesAtStart = /^\s+/.exec(firstNonEmptyLine)[0].length;
       for (c = 0, l = inputLines.length; c < l; c++) {
           inputLines[c] = inputLines[c].substring(spacesAtStart);
           inputLines[c] = inputLines[c].replace(/<!--[\s\S]*?-->/g, "");
           if (!isEmpty(inputLines[c])) {
               outputLines.push(inputLines[c]);
           }
       }
       return outputLines.join("\n");
    }

    function showCodeForElements(sel) {
        $(sel).each(function () {
           var sampleEl = $(this),
               sampleHTML = sampleEl[0].innerHTML,
               codeContainerEl = $('<pre class="prettyprint lang-html linenums"></pre>').text(prepareHTML(sampleHTML));
           sampleEl.after(codeContainerEl);
        });
        prettyPrint();
    }

    return {
        showCodeForElements: showCodeForElements
    }

}());