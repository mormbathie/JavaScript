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


class Admin extends Utilisateur{
    constructor(nom, prenom, email, ami, role){
        super(nom, prenom, email, ami);
        this.role = role;
    }

    deleteUser(user){
        console.log("L'administrateur " + this.prenom + " " + this.nom + " a supprimé l'utilisateur " + user.prenom + " " + user.nom + ".");
    }
}


var user1 = new Utilisateur("Dupont", "Jean", "jean.dupont@example.com", false);
var user2 = new Utilisateur("Martin", "Sophie", "sophie.martin@example.com", true);
var admin1 = new Admin("Durand", "Alice", "alice.durand@example.com", false, "super-admin");


console.log(user1);
user1.login();
user1.logout();
console.log(user2);
user2.login();
user2.logout();
console.log(admin1);
admin1.login();
admin1.deleteUser(user1);