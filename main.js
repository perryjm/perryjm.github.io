"use strict";
(async () => {
  // fill in Quotes section
  let response;
  response = await fetch("quotes.json");
  response = await response.json();
  const quote = response[0].quote;
  const quoteSpan = document.getElementById("quoteSpan");
  quoteSpan.textContent = `${quote}`;
})();
