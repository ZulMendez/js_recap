// ### 3. FONCTIONS ( pour cette partie, créer un nouveau fichier et nommer le 'fonction.js'. )
// #### Exercice 1
// - Créé une fonction qui va choisir un nombre au hasard entre 1 et 20. Le joueur a 5 essais pour trouver le nombre.
// - Si le joueur est a 5 unités de plus que la réponse, la fonction doit renvoyer "Froid".
// - Si le joueur est à 5 unités ou moins de la bonne réponse alors la fonction doit renvoyer "tiède".
// - Si le joueur est à 2 unités = "chaud".
// - Si le joueur est à 1 unités = "Burlant".
// - Si le joueur échoue à trouver le nombre au bout de 5essaies, la fonction indique que la partie est terminée.
// - Si le joueur trouve la bonne réponse, la boucle s'arrette et la fonction indique que le joueur a gagné
// let nombreA = Math.round(Math.random() * 20);  
// let essaiePossibles = 5;
// let bonneR = false;
// let num = () => {
//     for (let i = 1; i <= essaiePossibles; i++) {
//     if (bonneR == false) {
//         console.log(`tour numero ${i}`);
//         let essaie = parseInt(prompt('entrez un nombre entre 1 et 20'));
//         if (essaie == nombreA) {
//             alert('tu as gagné');
//             bonneR = true;
//         } else {
//             console.log('dommage!');
//         } if (bonneR > nombreA) {
//             let diff = bonneR - nombreA;
//             if (diff > 5) {
//                 alert('froid');
//             } else if (diff == 1) {
//                 alert('brulant');
//             } else if (diff == 2) {
//                 alert('chaud');
//             } else if (diff <= 5) {
//                 alert('tiède')
//             }
//         }
//     }

// #### Exercice 2
// - Créer un tableau avec différents elements dedans(String,integer,Boolean)
// - Créer une fonction qui :
//   - met la premier lettre des strings en majuscule et le reste en minuscule.(peu importe comment les noms sont ecris)
//   - retourne le carré des integers.
//   - retourne le contraire du boolean.
// let tableau = ['zuLma', 8, false,'dawid', {},'Ayhan' ];
// console.log(tableau);
// function sort(array){
//     for(let i=0; i < array.length; i++){
//         let type = typeof array[i]; 
//         switch (type) {
//             case 'string':
//                 element = array[i].charAt(0).toUpperCase() + array[i].slice(1). toLowerCase(); 
//                 console.log(element);
//             break;
//             case 'number':
//                 console.log(array[i] * array[i]);
//             break; 
//             case 'boolean':
//                 console.log(!array[i]);
//             break;
//             default:
//                 console.log('autres');
//             break;
//         }
//     }
// }

// sort(tableau); 

// let coding15 = ['perSONnne1','peRSonne2', [], {}, true, true, false, 45, 5, false, 'Personne3', 3]; 
// console.log(coding15);
// sort(coding15); 
/// foreach 
// let arrsort = (array) => {
//     array.forEach(element => {
//         //console.log(`type: ${typeof element} ==> ${element} `)
//         switch (typeof element) {
//             case 'string':
//                 element = element.charAt(0).toUpperCase() + element.slice(1). toLowerCase(); 
//                 console.log(element);
//             break;
//             case 'number':
//                 // 500 * 500; 
//                 console.log(element * element);
//             break; 
//             case 'boolean':
//                 console.log(!element);
                /*
                if(element == true){
                    element = false;
                }else{
                    element = true;
                }
                //console.log(element);
                */
                /*
                if(element){
                    element = false;
                }else{
                    element = true; 
                }
                //console.log(element);
                */
                /*
                //element = element == true ? element=false : element=true; 
                //console.log(element);   
                */
                /*
                //element = element ? element=false : element=true;
                //console.log(element);
                */ 
//             break;
//             default:
//                 //console.log('Tout autres elements');
//             break;
//         }
//     });
// }
// console.log('------------');
// arrsort(coding15); 
// console.log('------------');
/*
tableau.forEach(element => {
    //console.log(`type: ${typeof element} ==> ${element} `)
    switch (typeof element) {
        case 'string':
            element = element.charAt(0).toUpperCase() + element.slice(1). toLowerCase(); 
            console.log(element);
        break;
        case 'number':
            // 500 * 500; 
            console.log(element * element);
        break; 
        case 'boolean':
            console.log(!element);
            /*
            if(element == true){
                element = false;
            }else{
                element = true;
            }
            //console.log(element);
            */
            /*
            if(element){
                element = false;
            }else{
                element = true; 
            }
            //console.log(element);
            */
            /*
            //element = element == true ? element=false : element=true; 
            //console.log(element);   
            */
            /*
            //element = element ? element=false : element=true;
            //console.log(element);
            */ 
/*   
        break;
        default:
            //console.log('Tout autres elements');
        break;
    }
});
*/
// #### Exerice 3 
// - Créer une fonction avec deux paramètres (prenom, salaire) qui demande à l'utilisateur de classer différents types de personne en fonction de leurs salaires.
// - Créér trois tableaux :
//     - "moinMoyenne" pour les salaires en dessous de la moyenne(<1600 euro)
//     - "moyenne" pour les salaires dans la moyenne (entre 1600 et 1800 euro)
//     - "plusMoyenne" pour les salaires au-dessus de la moyenne (>1800)
// - Trie les prénoms des personnes en fonction des salaires et affiche les tableaux.
// let moinMoyenne = [];
// let moyenne = [];
// let plusMoyenne = [];

// let employes = (a, b) => {
//     for (let i = 0; i <= 5; i++) {
//         let a = prompt('entrez un prenom');
//         let b = prompt('entrez votre salaire');
//     }
//     if (b < 1600) {
//         moinMoyenne.push(a);
//     } else if (( b >= 1600) || (b <= 1800)) {
//         moyenne.push(a);
//     } else if (b > 1800) {
//         plusMoyenne.push(a)
//     }
// }
// console.log(moinMoyenne, moyenne, plusMoyenne);

// #### Exercice 4
// - Créer une fonction qui va prendre deux paramètres (prenom, age). Pour un concert, vérifie si les personnes, souhaitant participer, sont majeurs. 
// - Si OUi, vous les mettez dans un tableau(vide) du nom de 'concert'. Attention le concert est limité à 7 personnes, cause de covid. :( 
// - Si NON, elle ne rentre pas. 
// - Affichez via une console.log, toutes les personnes présentes au concert avec leur 1er lettre de leurs prénom en majuscule.
// let place = [];
// let mineur = [];

// let concert = (a, b) => {
//     if(place.length < 7) {
//         if (b > 18) {
//             place.push(a)
//             place.forEach(element => {
//                 element = element.substr(0, 1).toUpperCase() + element.substr(1)    
//             });
//             console.log(`Le concert : ${place}`);
//         } else {
//             mineur.push(a)
//             console.log(`Les mineur : ${mineur}`);
//         }
//     } else {
//         console.log(`Plus de place :(`);
//     }
// };

// concert('zulma', 25);
// concert('Thamara', 17);
// concert(' Marie', 20);
// concert(' Anna', 16);