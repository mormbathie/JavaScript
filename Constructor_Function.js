function Utilisateur(nom, prenom, email) {
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.login = function() {
        console.log(`${this.email} est connecté`);
    }
    this.logout = function() {
        console.log(`${this.email} est déconnecté`);
    }
}


const util1 = new Utilisateur("mormbathie", "mohamed", "mormbathie98@gmail.com");

console.log(util1.nom);

util1.login();
