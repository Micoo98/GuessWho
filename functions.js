document.addEventListener('DOMContentLoaded', (event) => {

    function toggleImage(image) {
        image.src = "./Assets/Flipped.jpg";
    }

    const flippables = document.getElementsByClassName('flippable');

    for (let i = 0; i < flippables.length; i++) {
        flippables[i].addEventListener('click', function() {
            toggleImage(this);
        });
    }

    function getRandomElements(elements) {
        const randomIndex = Math.floor(Math.random() * elements.length);
        return elements[randomIndex];
    }

    const randomElement = getRandomElements(flippables);

    const yourCharacter = document.getElementById("YourCharacter");

    yourCharacter.src = randomElement.src;
});