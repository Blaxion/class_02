class Lieux {
    constructor(nom) {
        this.nom = nom;
        this.contenu = [];
        this.ingrédients = [];
    }
}
let maison = new Lieux("maison");
let epicerie = new Lieux("epicerie");
let cuisine = new Lieux("cuisine");

class Ingredients {
    constructor(nom, etat, prix) {
        this.nom = nom;
        this.etat = etat;
        this.prix = prix;
    }
}
let poivron = new Ingredients('poivron', 'entier', 1);
let oignon = new Ingredients('oignon', 'entier', 2);
let oeuf = new Ingredients('oeuf','entier', 4);
let epice = new Ingredients('epice','moulu', 3.25);
let paprika = new Ingredients('paprika','moulu', 1.5);
let fromage = new Ingredients('fromage','coupé', 1.6);

class Personne {
    constructor(nom,lieu,argent){
        this.nom = nom;
        this.lieu = lieu;
        this.argent = argent;
        this.panier = [];
    }
    se_déplacer(x){
    };
    payer(x){  
    };
    couper(x,y){  
    };
}

let personne = new Personne("Maxime","Néant",100);