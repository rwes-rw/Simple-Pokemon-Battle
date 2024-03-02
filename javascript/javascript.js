/* Create a Pokemon battle 
Pikachu vs Geodude with two moves 

Pikachu moveset: thundershock, quick attack, 
Geodude moveset: rockthrow, Tackle
Critical hits will be generated using random number generator */

function getComputerChoice () {
    let geodudeMovePool = ['rockthrow' , 'tackle'];
    return  geodudeMovePool[Math.floor(Math.random() * geodudeMovePool.length)];
}

let pikachuHp = 600
let geodudeHp = 450

function computerSelection () {
    const geodudeMove = getComputerChoice ();
    if (geodudeMove === 'rockthrow') {
        pikachuHp -= 55
        console.log ('Geodude used Rock Throw! The move is super effective! Pikachu HP: ' + pikachuHp)
    } else if (geodudeMove === 'tackle') {
        pikachuHp -= 20
        console.log ('Geodude used Tackle! Pikachu HP: ' + pikachuHp)
       
    } 
}

function pikaQuick (){
const quickAttack = document.getElementById("quick");
quickAttack.addEventListener("click", function(e) {
    const compMove = computerSelection();
    geodudeHp -=50
    console.log ('Pikachu used Quick Attack! Geodude Hp: ' + geodudeHp);
})
}
function pikaThunder () {
    const thunderShock = document.getElementById("thunder");
    thunderShock.addEventListener("click", function (e) {
        const compMove = computerSelection();
        geodudeHp -=30
        console.log("Pikachu used Thunder Shock! It's not very effective! Geodude Hp: " + geodudeHp); 
    })
}

function pikaMoves () {
    const pikachuQuickAttack = pikaQuick ();
    const pikachuThunderShock = pikaThunder ();
}

function pokemonBattle () {
    for (let i = 0; i <= 25; i ++) {
        const playerSelection = pikaMoves ();
        const compMove = computerSelection ();
        if (pikachuHp <= 0 ) {
            console.log ("You Lose!")
            break;
        } else if (geodudeHp <= 0 ) {
            console.log ("You Win!")
            break;
        } else if (pikachuHp <= 0 && geodudeHp <= 0 ) {
            console.log ("It's a tie!")
            break;
        }
    }
}

pokemonBattle ()