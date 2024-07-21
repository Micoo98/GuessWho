document.addEventListener('DOMContentLoaded', (event) => {

    function toggleImage(image) {
        if(image.getAttribute('data-flipped') === 'false' || image.getAttribute('data-flipped') === null)
        {
            image.setAttribute('original-image', image.src);
            image.src = "./Assets/Flipped.jpg";
            image.setAttribute('data-flipped', true);
        }
        else
        {
            // alert("it did the else");
            image.src = image.getAttribute('original-image');
            image.setAttribute('data-flipped', false);
        }
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