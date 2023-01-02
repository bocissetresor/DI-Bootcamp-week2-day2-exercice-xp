// Exercise 1: Instruction If/Else Simple

let x = 5
let y = 2
if (x > y)
    //si x est superieur a y
    console.log("x is the biggest number")
else
    //si y est superieur a x
    console.log("y is the biggest number")


// Exercise 2: Chihuahua

// 1. Créez une variable appelée newDogdont la valeur est "Chihuahua".
let newDog = "Chihuahua"

// 2. Vérifiez et affichez le nombre de lettres dans newDog
console.log(`Il y a ${newDog.length} letters dans ${newDog}.`)

// 3. Affichez la newDogvariable en majuscule puis en minuscule (pas besoin de créer de nouvelles variables, juste console.log deux fois)
console.log(newDog.toLowerCase())

// 4. Vérifiez si la variable newDogest égale à "Chihuahua"
if (newDog == "Chihuahua")
//si c'est le cas, affichez "J'adore les chihuahuas, c'est ma race de chien préférée"
    console.log("J adore les chihuahuas, c est ma race de chien préférée")
else
//sinon, console.log 'Je m'en fous, je préfère les chats'
    console.log("Je m en fous, je préfère les chats")


// Exercise 3:Pair Ou Impair

// 1. Invitez l'utilisateur à entrer un nombre et enregistrez-le dans une variable
let number = Number(prompt("Veuillez un nombre: "))
// 2. Vérifiez si la variable est paire ou impaire
if (number % 2 == 0)
//S'il est pair, afficher : "x est un nombre pair". Où x est le nombre réel choisi par l'utilisateur
    console.log(`${number} x est un nombre pair`)
else
//S'il est impair, afficher : « x est un nombre impair ». Où x est le nombre réel choisi par l'utilisateur
    console.log(`${number} x est un nombre impair`)


// Exercise 4: Discussion De Groupe

const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"]

// 1. À l'aide du tableau ci-dessus, console.log indique le nombre d'utilisateurs connectés au chat de groupe en fonction des règles suivantes:
// S'il n'y a pas d'utilisateurs (le tableau des utilisateurs est vide), console.log "personne n'est en ligne".
switch (users.length) {
    case 0:
        console.log("personne n'est en ligne")
        break;

    case 1:
        console.log(`${users[0]} est en ligne`)
        break;

    case 2:
        console.log(`${users[0]} et ${users[1]} sont en ligne`)
        break;

    default:
        console.log(`${users[0]}, ${users[1]} et ${users.length - 2} plusieur son en ligne`)
        break;
}

