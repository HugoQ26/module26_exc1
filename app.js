const fspromise = require('fs').promises;

const genders = ['M', 'F'];
const maleNames = ['Martin', 'Tom', 'John', 'Adam', 'Hugo', 'Joe'];
const femaleNames = [
  'Jessica',
  'Jeniffer',
  'Jane',
  'Coco',
  'Patrycia',
  'Tiffany',
];

const lastNames = [
  'Bull',
  'Whittaker',
  'Rees',
  'Peters',
  'Goodwin',
  'Rawlings',
  'Butler',
  'Cross',
];

const randChoice = arr => {
  const arrIndex = Math.floor(Math.random() * arr.length);
  return arr[arrIndex];
};

const people = [];

for (let i = 0; i < 20; i++) {
  const gender = randChoice(genders);
  const ageRandom = Math.floor(Math.random() * 60) + 18;
  const firstName =
    gender === 'F' ? randChoice(femaleNames) : randChoice(maleNames);
  const lastName = randChoice(lastNames);

  const person = {
    gender,
    firstName,
    lastName,
    age: ageRandom,
    email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`,
  };

  people.push(person);
}

fspromise
  .writeFile('marcin.txt', JSON.stringify(people))
  .then(data => console.log('Success'))
  .catch(err => console.log('Error', err));
