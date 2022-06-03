const mongoose = require('mongoose');
const Cat = require('./models/Cat');
const Dog = require('./models/Dog');
require('dotenv').config();

const cats = [
  { 
    name: 'Garfield',
    age: 15,
    color: 'orange'
  },
  {
    name: 'Matilda',
    age: 3,
    color: 'gray'
  },
  {
    name: ' Hobbes ',
    age: 7,
    color: 'white'
  },
  {
    name: 'Princess',
    age: 9,
    color: 'white'
  },
]

mongoose.connect(process.env.MONGO_URL)
  .then(x => console.log(`Connected to ${x.connection.name}`))
  .then(() => {
    return Cat.create({ name: 'Kitty', age: 'five', color: true, sickness: false })
  })
  .then((cat) => {
    console.log('Created:', cat);
  })
  .then(() => {
    return Cat.insertMany(cats)
  })
  .then((cats) => {
    console.log(cats)
  })
  .then(() => {
    const cat = Cat.findOne({ name: 'Hobbes' });
    return cat;
  })
  .then((cat) => {
    return Cat.findByIdAndUpdate(cat._id, { age: 45 }, { new: true })
  })
  .then(cat => {
    return Cat.findByIdAndDelete(cat._id)
  })
  .then(cat => {
    console.log(cat)
  })
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    mongoose.connection.close();
  })

