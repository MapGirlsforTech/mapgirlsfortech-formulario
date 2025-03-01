// To break out of iframe and access the parent window

// Make the replacement
document.addEventListener("DOMContentLoaded", function (event) {
    const streamlitDoc = window.parent.document;
    console.log("DOM LOADED", streamlitDoc)
    streamlitDoc.getElementsByTagName("footer")[0].innerHTML = "Provided by <a href='https://yourwebsite.com' target='_blank' class='css-z3au9t egzxvld2'>Your Link Display Text Here</a>";
});

// document.querySelectorAll('[class^="akordeon-item"]')