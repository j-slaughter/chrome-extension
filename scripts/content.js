// Select for h1 element on webpage
const heading = document.querySelector("h1");

if (heading) {
    // Generate MattBucks
    const mattbucks = Math.floor(Math.random() * 1000000000).toLocaleString();
    // Create MattBucks popup
    const popup = document.createElement('div');
    const text = document.createElement('p');
    const mattface = document.createElement('img');
    // Add message
    text.textContent = `💸 💸 You earned $${mattbucks} MattBucks! 💸 💸`;
    // Add image of Matt's face
    mattface.setAttribute('src', '/Users/jslaughter/chrome-extension/images/matt.jpeg');
    mattface.setAttribute('alt', "Matt's face");
    //mattface.setAttribute('style', 'float: left');
    // Append text and image to popup
    popup.appendChild(text);
    popup.appendChild(mattface);
    // Append the popup under the webpage heading
    heading.insertAdjacentElement('afterend', popup);


};