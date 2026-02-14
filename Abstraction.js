function Employee(name,age,sex,salaire){
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.salaire = salaire;
    const allocation = 1000;
    const prime = 500;
    const primeAnnuelle = 2000;
    const calculerSalaire = function (){
        console.log(this.salaire + allocation + prime + primeAnnuelle);
    
    }
    this.infoEmployee = function(){
        console.log(`Nom : ${this.name}`);
        console.log(`Age : ${this.age}`);
        console.log(`Sexe : ${this.sex}`);
        console.log(`Salaire : ${this.salaire}`);
        console.log(`Salaire Total : ${calculerSalaire()}`);
        
    }
}



const emp1 = new Employee("mormbathie", 25, "masculin", 5000);
const emp2 = new Employee("mohamed", 30, "masculin", 6000); 
emp1.infoEmployee();
emp2.infoEmployee();