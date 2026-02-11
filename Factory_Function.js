const Utilisateur = (name, age, email, ...amis) => {
    return{
        name,
        age,
        email,
        amis,
        login(){
            console.log(`${this.email} est deconnecte`);
            
        },
        logout(){
            console.log(`${this.email} est deconnecte`);
        }
    }

}




console.log(Utilisateur("mormbathie", 25, "mormbathie98@gmail.com", "mohamed", "sami", "yassine", "ayoub"));