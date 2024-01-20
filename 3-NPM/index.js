// To install a package in a Node.js project, you can use the npm install command.
// Here are the steps:
// 1.Open your terminal or command prompt.
// 2.Navigate to your project directory using the cd command:
// 3.Run the following command to install a package. Replace package-name with the name of the package you want to install:
// ----> npm install package-name

// sillyname package
import generateName from "sillyname";
import superheroes from "superheroes";
let sillyname = generateName();
console.log(`${sillyname} is my friend.`);

// superheroes package
import superHeroName from "superheroes";
console.log(superHeroName.all);
console.log(superHeroName.random());
