// ### 2. BOUCLE ( pour cette partie, créer un nouveau fichier et nommer le 'boucle.js'. )
// #### Exercice 1 (for & foreach)
// ``let leTableau = [4,"true",true,"bonjour",511,"coding school",{},2020,1 ,"maryam",false,[],13,["salut",13,false],"les tartines c'est délicieux","true et false",1070,478,"hello","top",4000,99,"codeur",45,"javascript",399,"autodidacte","oui",1000,1001,"brainstorming","lol];``
// **Attention ce tableau reste toujours rempli, on ne le vide pas pour les exercices ci-dessous**
// let leTableau = [4,"true",true,"bonjour",511,"coding school",{},2020,1 ,"maryam",false,[],13,["salut",13,false],"les tartines c'est délicieux","true et false",1070,478,"hello","top",4000,99,"codeur",45,"javascript",399,"autodidacte","oui",1000,1001,"brainstorming","lol"];
// - (ps: chaque tiret ci-dessous est un mini exercice à travailler à part sur le tableau ci-dessus)

// - Créer un programme qui va afficher le type de chaque élément du tableau avec une phrase telle que : l'element ... est de type ...
// let type;

// for (let i = 0; i < leTableau.length; i++) {
//     type = typeof leTableau[i];
//     console.log(`l'élément ${leTableau[i]} est de type: ${type} `);
// }

// - Créer trois tableaux "lesIntegers", "lesStrings", "lesAutres" dans les quels vous allez stocker grace a une boucle forEach chaque élément du tableau, afffichez le contenu de chaque tableau avec un console.log
// let lesIntegers = [];
// let lesStrings = [];
// let lesAutres = [];

// leTableau.forEach((element, i) => {
//     if (typeof element == 'number') {
//         lesIntegers.push(element);
//         console.log(`${lesIntegers}`);
//     } else if (typeof element == 'string') {
//         lesStrings.push(element);
//         console.log(`${lesStrings}`);
//     } else {
//         lesAutres.push(element);
//         console.log(`${lesAutres}`);
//     } 
// });

// console.log(leTableau);

// - Créer quatre tableaux "lesGrandsIntegers", "lesPetitsIntegers" ,"lesPetitsStrings", "lesGrandsString" dans les quels vous allez ranger les éléments du tableau "leTableau", pour lesPetitsIntegers ce sont ceux plus petits que 100 et lesGrandsIntegers ce sont ceux plus grand que 100, pour lesPetitsStrings ce sont les mots plus petits que 6 lettres et pour lesGrandsString ce sont ceux qui sont plus grand que 6 lettres

// if (typeof leTableau < 100) {
    //     lesPetitsIntegers.push()
    //     console.log(`${lesPetitsIntegers}`);
    // } else if ('number' > 100) {
    //     lesGrandsIntegers.push()
    // } else if (leTableau.length < 6) {
    //     lesPetitsStrings.push();
    //     console.log(lesPetitsStrings);
    // } else if (leTableau.length > 6) {
    //     lesGrandsString.push();
    //     console.log(lesGrandsString);
    // }

// let lesGrandsIntegers = [];
// let lesPetitsIntegers = [];
// let lesPetitsStrings = [];
// let lesGrandsString = [];

// leTableau.forEach((element, i) => {
//     if (typeof element == 'string') {
//         console.log(`c'est un string ${element.length}`);
//         if (element.length < 6) {
//             lesPetitsStrings.push(element);
//         } else if (element.length > 6){
//             lesGrandsString.push(element);
//         }
//     } else if (typeof element == 'number') {
//         console.log(`c'est un number ${element}`);
//         if (element < 100) {
//             lesPetitsIntegers.push(element);
//         } else if (element > 100) {
//             lesGrandsIntegers.push(element);
//         }
//     }
// });
// - Créer un programme qui permet a l'utilisateur de stocker des 11 nombres dans deux pots différents, si le nombre est inférieur/égal a 100 il va dans le premier pot et si c'est supérieur à 100 il va dans le second pot, si l'utilisateur rentre des nombres à virgule ils doivent devenir des nombres entier et si le nombre entier est inférieur à 0 alors il recoit une annonce pour lui dire que son chiffre est trop petit et qu'il doit en entrer un autre.
// let pot1 = [];
// let pot2 = [];

// for (let i = 0; i <= 11; i++) {
//     let nombre = prompt(`entrez un nombre ${i}`);
//     nombre = parseInt(nombre)
//     if ( (nombre <= 100) && (nombre > 0) ) {
//         pot1.push(nombre);
//     } else if (nombre > 100){
//         pot2.push(nombre);
//     } else {
//         console.log(`votre chiffre ${nombre} est trop petit`);
//     }
// }
// console.log(pot1, pot2);

// #### Exercice 2 
// - Via une boucle while, demandez à l'utilisateur d'entrer la signification de l'abréviation HTML via un prompt. 
// - Si l'utilisateur donne la bonne réponse, vous le féliciter. Sinon vous lui reposez la question avec avec le nombre d'essais restants.
// - Attention, vous avez droit à trois essaies. Après trois essaies vous arretez la boucle. 
// let rep = 'HyperText Markup Language'
// let quest;
// let x = 0;
// do {
//     quest = prompt(`entrez la signification de l'abréviation HTML`);
//     if (quest == rep) {
//         alert('félicitations!')
//     } else if (x == 2) {
//         alert('tu as eu 3 tentatives :(')
//     } else {
//         alert('dommage')
//     }
//     x++
// } while (x <= 2 && quest != rep);


// #### Exercice 3
// - Créer un tableau avec plusieurs prénom au choix.  
// - Via un forEach, affiche les éléments à l'indice pair et si le prénom est plus long que 4 caractères avec uniquement leur premiere lettre en majuscule (il n'y aura qu'une lettre en majuscule par mot)

// let coding = ['bene', 'mohamed', 'daviw', 'ayhan', 'abdellah', 'zakaria', 'alex']

// coding.forEach((element, i) => {
//     if ( (i % 2 == 0) && (element.length > 4) ){
//         element = element.charAt(0).toUpperCase() + element.substring(1);
//         console.log(element);
//     } 
// });