const btnrouge = document.querySelector(".rouge")
const btnvert = document.querySelector(".vert")
const btnbleu = document.querySelector(".bleu")
const btnjaune = document.querySelector(".jaune")
const btnguess = document.querySelector(".guess")
const newgame = document.querySelector(".newgame")

const listessaie = document.querySelector(".listessaie")

const allbtncolors = document.querySelectorAll(".colors button")

const divCj = document.querySelector(".choixjoueur")

const essaietxt = document.querySelector(".essaie")

const temp = document.querySelector(".timer")


const colors = ["rouge", "vert", "bleu", "jaune"]

let randomcolors = []
let choixjoueur = []
let timer = null;

essaie = 0


// lancertimer()



function gameover() {
    alert("fin de partie")
    btnclose()
}



//  fin de partie si il atteint 10 en nombre d'essaie
function endGame() {
    if (essaie == 10) {
        alert("fin du jeu max d'essaie atteint")
        btnguess.disabled = true
    }
}




function couleurRandom() {
    for (let i = 0; i < 4; i++) {
        // tant que la longeur du tableau randomcolors n'est pas egale a 4 tu continue de me push une couleurs random 
        const random = Math.floor(Math.random() * colors.length)
        randomcolors.push(colors[random])
    }
    console.log(randomcolors);
}

couleurRandom()
// ça prend une couleur random et sa la push 4 fois PROBLEME 
// resolu fallait mettre la const random dans la boucle

function btnopen() {
    btnrouge.disabled = false
    btnvert.disabled = false
    btnbleu.disabled = false
    btnjaune.disabled = false
}

function btnclose() {
    btnrouge.disabled = true
    btnvert.disabled = true
    btnbleu.disabled = true
    btnjaune.disabled = true
    // btnguess.disabled = true
}


function disabledbtncolors() {
    if (choixjoueur.length === 3) {
        // alert("tableau plein")
        btnclose()

    }
}



function guessauto() {
    if (essaie === 10) {
        btnbleu.disabled = true
        btnrouge.disabled = true
        btnvert.disabled = true
        btnjaune.disabled = true
    }


    if (choixjoueur.length == 4) {
        compare()
        if (timer != null)
            clearInterval(timer)
        console.log(choixjoueur);
    }

    

}

function compare() {
    indice()

    if (JSON.stringify(randomcolors) === JSON.stringify(choixjoueur)) {
        alert(" FIN DE LA PARTIEvous avez trouver la combinaison était :           " + choixjoueur);
        disabledbtncolors()
        btnguess.disabled = true
        divCj.textContent = choixjoueur


    } else {
        console.log("rater mauvaise combinaison");
        // alert("rater rater rater" )
    }
}


// allbtncolors.addEventListener("click", function () {

// })

function resetChoix() {
    choixjoueur = []
    affichechoixdujoueur()
}


newGame()

btnrouge.addEventListener("click", function () {
    disabledbtncolors()
    choixjoueur.push("rouge")
    affichechoixdujoueur()
    guessauto()
})


btnvert.addEventListener("click", function () {
    disabledbtncolors()
    choixjoueur.push("vert")
    affichechoixdujoueur()
    guessauto()
})

btnbleu.addEventListener("click", function () {
    disabledbtncolors()
    choixjoueur.push("bleu")
    affichechoixdujoueur()
    guessauto()
})

btnjaune.addEventListener("click", function () {
    disabledbtncolors()
    choixjoueur.push("jaune")
    affichechoixdujoueur()
    guessauto()
})


function essaiejoueur() {
    const trys = document.createElement('p')
    console.log(trys);
    trys.textContent = `essaie n°${essaie} ${choixjoueur}`
    listessaie.appendChild(trys)
}


btnguess.addEventListener("click", function () {
    essaie++
    // if (timer != null)
    //         clearInterval(timer)
    //     console.log(choixjoueur);
    divCj.textContent = ""
    lancertimer()
    // compare()
    essaiejoueur()
    endGame()
    resetChoix()
    btnopen()
})

// lancertimer()

function test() {
    console.log("normalement apres 20s j'apparait");
}



function lancertimer() {
    let secondes = 20
    timer = setInterval(() => {
        console.log(secondes)
        secondes--
        if (secondes < 0) {
            console.log("fin du temps");
            console.log(choixjoueur);
            
            compare()
            clearInterval(timer)
        }
        temp.textContent = secondes
    }, 1000)
}

function newGame() {
    newgame.addEventListener("click", function () {
        location.reload();
    })
}


function affichechoixdujoueur() {
    divCj.textContent = ""
    const colorjoueur = document.createElement('p')
    colorjoueur.textContent = `Votre choix: ${choixjoueur} `
    divCj.appendChild(colorjoueur)
    // for (let j = 0; j < 10; j++) {
    // }
}




function indice() {
    let bonneplace = 0
    let bonnecouleur = 0

    // if (choixjoueur[0] == randomcolors[0] ||
    //     choixjoueur[1] == randomcolors[1] ||
    //     choixjoueur[2] == randomcolors[2] ||
    //     choixjoueur[3] == randomcolors[3]) {
    //     bonnecouleur++, console.log("element a la bonne place");
    // }

    if (choixjoueur.find((element) => element == "rouge" && randomcolors.find((element) => element == "rouge"))) {
        bonnecouleur++
        console.log(`il y a ${bonnecouleur} couleur de bonne `);
    } else if (choixjoueur.find((element) => element == "vert" && randomcolors.find((element) => element == "vert"))) {
        bonnecouleur++
        console.log(`il y a ${bonnecouleur} couleur de bonne `);

    } else if (choixjoueur.find((element) => element == "bleu" && randomcolors.find((element) => element == "bleu"))) {
        bonnecouleur++
        console.log(`il y a ${bonnecouleur} couleur de bonne `);

    } else if (choixjoueur.find((element) => element == "jaune" && randomcolors.find((element) => element == "jaune"))) {
        bonnecouleur++
        console.log(`il y a ${bonnecouleur} couleur de bonne `);
    }




}








// reste a faire pour que le jeu BASIQUE FONCTIONNE

//  push 4 couleur de maniere random dans le tableau  FAIT
// comparer les Deux tableau choix du joueur et randomcolors pour savoir si il a gagner ou pas  FAIT


// apres chaque essaie le tableau se vide pour que le joueur puisse re faire un guess FAIT


// tant que le nombre d'essaie est inferieur a 10 tu cree une div ou tu affiche les choixdujoueur  FAIT 

//  INDICE J4AI LE DEBUT MAIS  BCP DE MAL A METTRE EN PLACE



