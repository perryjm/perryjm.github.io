"use strict";
(async () => {
  let response;
  try {
    response = await fetch("quotes.json");
  } catch (e) {
    console.log(e);
    response =
      '[{"quote":"\\"Staying motivated comes down to how we see exercise and what we remember about our last training session. Was it fun? Was the pain tolerable? Was there an instant gratification after? Did we enjoy at least some part of it? If the answer to all these questions is “Yes” more often than “No”, having the motivation to exercise regularly will never again be a problem.\\"\\n\\n-Darebee.com","labels":["motivation","scientific"]}]';
  }
  const quotes = JSON.parse(response);
  const quote = quotes[0].quote;
  const quoteSpan = document.getElementById("quoteSpan");
  quoteSpan.textContent = `${quote}`;
})();
