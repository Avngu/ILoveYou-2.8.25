document.addEventListener('DOMContentLoaded', () => {
    const container = document.createElement('div');
    container.className = 'container';
    document.body.appendChild(container);

    // Initial gif
    const firstGif = document.createElement('img');
    firstGif.src = './images/first.gif';
    firstGif.className = 'valentine-gif';
    container.appendChild(firstGif);

    // Question text
    const question = document.createElement('h1');
    question.textContent = 'Will you be my Valentine?';
    question.className = 'question';
    container.appendChild(question);

    // Buttons container
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';
    container.appendChild(buttonContainer);

    // Yes button
    const yesButton = document.createElement('button');
    yesButton.textContent = 'Yes';
    yesButton.className = 'button yes-button';
    buttonContainer.appendChild(yesButton);

    // No button
    const noButton = document.createElement('button');
    noButton.textContent = 'No';
    noButton.className = 'button no-button';
    buttonContainer.appendChild(noButton);

    // Keep track of yes button size
    let yesScale = 1;

    // No button click/hover handler
    noButton.addEventListener('click', () => {
        // Random position within viewport
        const maxX = window.innerWidth - noButton.offsetWidth;
        const maxY = window.innerHeight - noButton.offsetHeight;
        
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;
        
        noButton.style.position = 'fixed';
        noButton.style.left = randomX + 'px';
        noButton.style.top = randomY + 'px';
        
        // Increase yes button size
        yesScale += 0.2;
        yesButton.style.transform = `scale(${yesScale})`;
        yesButton.textContent += '!';
    });

    // Yes button click handler
    yesButton.addEventListener('click', () => {
        // Clear container
        container.innerHTML = '';
        
        // Show second gif
        const secondGif = document.createElement('img');
        secondGif.src = './images/second.gif';
        secondGif.className = 'valentine-gif';
        container.appendChild(secondGif);


        const message = document.createElement('h1');
        message.textContent = "I love you 💖";  // Change this text to whatever you want!
        message.className = 'message';
        container.appendChild(message);
    });
});