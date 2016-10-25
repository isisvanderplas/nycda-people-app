
var fs = require('fs');

fs.readFile('people1.json', 'utf8',   (err, data)=> {
    if (err) {
      throw err;
    }

    var people = (JSON.parse(data));
    console.log(people);
  });

fs.readFile('people2.json', 'utf8',  (err, data)=> {
    if (err) {
      throw err;
    }

    var people = (JSON.parse(data));
    console.log(people);
  });



fs.writeFile('peopleComplete.txt', people,  (err, data)=> {
    if (err) {
      throw err;
    }
     people = people.sort();
     people = JSON.stringify(people);
     console.log(people);
  });
