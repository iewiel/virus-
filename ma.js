/* =========================
   SCREEN CHANGING
========================= */

function nextScreen(current) {

    // Find the current screen
    const currentScreen =
        document.getElementById("screen" + current);

    // Hide it
    currentScreen.classList.add("hidden");


    // Find the next screen
    const next =
        current + 1;


    // Special case:
    // Screen 3 is the loading screen

    if (next === 3) {

        const loadingScreen =
            document.getElementById("screen3");

        loadingScreen.classList.remove("hidden");


        startLoading();

        return;
    }


    // Show the next screen

    const nextScreenElement =
        document.getElementById("screen" + next);


    if (nextScreenElement) {

        nextScreenElement.classList.remove("hidden");

    }


    // If the next screen doesn't exist,
    // show the final screen

    else {

        document
            .getElementById("final")
            .classList.remove("hidden");

        createHearts();

    }

}


/* =========================
   LOADING ANIMATION
========================= */

function startLoading() {

    const bar =
        document.getElementById("loadingBar");

    const text =
        document.getElementById("loadingText");


    let progress = 0;


    const loading =
        setInterval(() => {

            progress += 1;

            bar.style.width =
                progress + "%";


            if (progress < 30) {

                text.innerText =
                    "Searching for evidence...";

            }

            else if (progress < 60) {

                text.innerText =
                    "Checking Mika's crimes...";

            }

            else if (progress < 90) {

                text.innerText =
                    "This is actually concerning...";

            }

            else {

                text.innerText =
                    "Evidence found 💀";

            }


            if (progress >= 100) {

                clearInterval(loading);


                setTimeout(() => {

                    document
                        .getElementById("screen3")
                        .classList.add("hidden");


                    document
                        .getElementById("screen4")
                        .classList.remove("hidden");


                }, 800);

            }

        }, 30);

}


/* =========================
   FLOATING HEARTS
========================= */

function createHearts() {

    for (let i = 0; i < 10; i++) {

        const heart =
            document.createElement("div");


        heart.innerHTML = "💙";


        heart.style.position =
            "fixed";


        heart.style.left =
            Math.random() * 100 + "vw";


        heart.style.bottom =
            "-30px";


        heart.style.fontSize =
            Math.random() * 20 + 15 + "px";


        heart.style.transition =
            "transform 4s linear, opacity 4s";


        heart.style.zIndex =
            "999";


        document.body.appendChild(heart);


        setTimeout(() => {

            heart.style.transform =
                "translateY(-100vh)";


            heart.style.opacity =
                "0";

        }, 100);


        setTimeout(() => {

            heart.remove();

        }, 4500);

    }

}