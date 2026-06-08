 const btnrouge = document.querySelector(".rouge")
 const btnvert = document.querySelector(".vert")
 const btnbleu = document.querySelector(".bleu")
 const btnjaune = document.querySelector(".jaune")
const btnguess = document.querySelector(".guess")
const newgame = document.querySelector(".newgame")

const allbtncolors = document.querySelectorAll(".colors button")

const divCj = document.querySelector(".choixjoueur")

const essaietxt = document.querySelector(".essaie")

 


const colors = ["rouge", "vert", "bleu", "jaune"]

let randomcolors = []
let choixjoueur = []

essaie = 0 










//  fin de partie si il atteint 10 en nombre d'essaie
function endGame() {
    essaie++
    essaietxt.textContent = essaie
    if (essaie == 10 ) {
    alert("FIN DE PARTIE")
    
}
}




function couleurRandom() {
    for (let i = 0; i < 4 ; i++) {
        // tant que la longeur du tableau randomcolors n'est pas egale a 4 tu continue de me push une couleurs random 
        const random = Math.floor(Math.random()*colors.length)
        randomcolors.push(colors[random])
    }
    console.log(randomcolors);
}

couleurRandom() 
// ça prend une couleur random et sa la push 4 fois PROBLEME 
// resolu fallait mettre la const random dans la boucle



function disabledbtncolors() {
     if (choixjoueur.length === 3 ) {
    // alert("tableau plein")
    btnrouge.disabled = true
    btnvert.disabled = true
    btnbleu.disabled = true
    btnjaune.disabled = true
   
}
}

function compare() {
    // if (JSON.stringify(randomcolors) === JSON.stringify(choixjoueur)) {
    //     alert("vous avez trouver la combinaison")
    // } else{
    //     alert("rater rater rater" )
    // }
}


// allbtncolors.addEventListener("click", function () {
    
// })


newGame()

btnrouge.addEventListener("click", function () {
   disabledbtncolors()
    choixjoueur.push("rouge")
    affichechoixdujoueur()
})


btnvert.addEventListener("click", function () {
     disabledbtncolors()
    choixjoueur.push("vert")
    affichechoixdujoueur()
})

btnbleu.addEventListener("click", function () {
     disabledbtncolors()
    choixjoueur.push("bleu")
    affichechoixdujoueur()
})

btnjaune.addEventListener("click", function () {
     disabledbtncolors()
    choixjoueur.push("jaune")
    affichechoixdujoueur()
})


btnguess.addEventListener("click", function () {
    compare()
    endGame()
})


function newGame() {
    newgame.addEventListener("click", function () {
        location.reload();
    })
}


function affichechoixdujoueur() {
    divCj.textContent = ""
    const colorjoueur = document.createElement ('p')
    colorjoueur.textContent = `votre choix : ${choixjoueur} `
    divCj.appendChild(colorjoueur)
}





// reste a faire pour que le jeu BASIQUE FONCTIONNE

//  push 4 couleur de maniere random dans le tableau  FAIT 
// comparer les Deux tableau choix du joueur et randomcolors pour savoir si il a gagner ou pas  FAIT 
// apres chaque essaie le tableau se vide pour que le joueur puisse re faire un guess





