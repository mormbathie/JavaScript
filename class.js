class Utilisateur{
    constructor(nom, prenom, email, ami){
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.ami = ami;
    }

    login(){
        console.log("L'utilisateur " + this.prenom + " " + this.nom + " est connecté.");
    }

    logout(){
        console.log("L'utilisateur " + this.prenom + " " + this.nom + " est déconnecté.");
    }
}



var user1 = new Utilisateur("Dupont", "Jean", "jean.dupont@example.com", false);
console.log(user1);
user1.login();
user1.logout();