let first;
let second;
let matchCounter = 0;

boxes.forEach(function(box) {
    box.addEventListener('click', function() {
        if (!first && !second) {
            first = box;
            box.classList.add('show');
        } else if (first && !second) {
            second = box;
            box.classList.add('show');
            if (first.innerHTML === second.innerHTML) {
                first.style.pointerEvents = 'none';
                second.style.pointerEvents = 'none';
                first = null;
                second = null;
                matchCounter++;
                if (matchCounter >= 6) setTimeout(() => alert('Game done! Refresh page to replay.'), 2000 );
            } else {
                first.classList.add('hide');
                second.classList.add('hide');
                setTimeout(() => {
                    first.classList.remove('show');
                    second.classList.remove('show');
                    first.classList.remove('hide');
                    second.classList.remove('hide');
                    first = null;
                    second = null;
                }, 2000);
            }
        }

    })
});