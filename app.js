const titreSpans = document.querySelectorAll('h1 span');
const btns = document.querySelectorAll('.btn-first');
const logo = document.querySelector('.logo');
const medias = document.querySelectorAll('.bulle');
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');
const l3 = document.querySelector('.l3');

window.addEventListener('load', () => {

    const TL = gsap.timeline({paused: true});
    
    TL
    .staggerFrom(titreSpans, 1.5, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
    .staggerFrom(btns, 1, {left: -200,opacity: 0, ease: "power2.out"}, -0.5, '-=1') 
    .from(l1, 1, {width: 0, ease: "power2.out"}, '-=2')
    .from(l2, 1, {width: 0, ease: "power2.out"}, '-=2')
    .from(l3, 1, {width: 0, ease: "power2.out"}, '-=2')
    .from(logo, 1, {transform: "scale(0)", ease: "power2.out"}, '-=2')
    .staggerFrom(medias, 1, {right: -200, ease: "power2.out"}, 0.3, '-=1');


    TL.play();
})

/*

window.addEventListener('load', () => {faute écrire ici !})  --> commence quand l'utilisateur a chargé


staggerfrom --> tous les éléments 
btns --> nom de l'objet animé (définit ds le const avant)
1 --> durée de l'animation
{animations des trucs du css (ça part de -200px pour arriver au truc dans le css)}
ease: "power2.out" pour que le mouvements ralentisse a la fin 
-0.5 durée entre l'animation du premier élément et celui d'après (quand il y en a plusieurs donc avec staggerfrom) -0.5 pour mettre le dernier element en premier 
'-=1' durée entre le lancement de l'animation d'avant et elle
TL.play() car on l'a mit sur pause avant ( const TL = gsap.timeline({paused: true}); )

const titreSpans = document.querySelectorAll('h1 span');
nom const          l'autre file       tous les élements pck y en a plusieurs     h1 span pck c ça : <h1><span>Welcome </span><span>on </span><span>the </span><span>web</span></h1>

const l1 = document.querySelector('.l1');
un seul element donc querySelector 


<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></script>   nom du module pour animer 
<script src="app.js"></script>   pour relier au css & html 
*/ 