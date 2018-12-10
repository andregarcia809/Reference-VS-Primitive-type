// alert('Psssst....Look in the JS files');
// start with strings, numbers and booleans *Copy
    // let age = 100;
    // let age2 = age;
    // console.log(age, age2); //100, 100
    // age = 200;
    // console.log(age, age2); //200, 100

    // let name = 'Dre';
    // let name2 = name;
    // console.log(name, name2); //Dre, Dre
    // name = 'andre'; 
    // console.log(name, name2); //andre, Dre

    // Let's say we have an array
    const players = ['andre', 'Sarah', 'Ryan', 'Poppy'];

    // and we want to make a copy of it.
    const team = players;

    console.log(players, team);
    // You might think we can just do something like this:
    // team[3] = 'Lux';

    // however what happens when we update that array?

    // now here is the problem!

    // oh no - we have edited the original array too!

    //players(4) ["andre", "Sarah", "Ryan", "Lux"]

    // Why? It's because that is an array *reference, not an array copy. They both point to the same array!

    // So, how do we fix this? We take a copy instead!
    const team2 = players.slice(); //copy one way

    // or create a new array and concat the old one in
    const team3 = [].concat(players); //copy method 2

    // or use the new ES6 Spread
    const team4 = [...players];
    team4[3] = 'heeee hawww'; //copy method 3
    console.log(team4);

    const team5 = Array.from(players); // copy method 4

    // now when we update it, the original one isn't changed

    // team5[0] = 'luis'
    // console.log(team5)
    // console.log(players) //Does not change 

    // The same thing goes for objects, let's say we have a person object

    // with Objects
    const person = {
      name: 'andre Gar',
      age: 80
    };

    // and think we make a copy:
    // const captain = person; wont work beacuse obj is also reference type
    // captain.number = 99;

    // how do we take a copy instead?
    const cap2 = Object.assign({}, person); //cop method 1
    console.log(cap2);

    //Obj Spread: We will hopefully soon see the object ...spread only in ***REACT for now
    // const cap3 = {...person}; copy method 2

    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a ***cloneDeep method, but you should think twice before using it.

    const andre = {
      name: 'andre',
      age: 100,
      social: {
        twitter: '@andreGar',
        facebook: 'andreGar.developer'
      }
    };

    // console.clear(); //clears Console in browser
    console.log(andre);

    //Cheat to copy  OBJ from original but not performant.

    const dev = Object.assign({}, andre);
    //dev2.Becomes a sring.And the back into an obj
    const dev2 = JSON.parse(JSON.stringify(andre));

