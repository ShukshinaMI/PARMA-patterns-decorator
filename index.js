import './style.css';

const User = function (name) {
  this.name = name;

  this.say = function () {
    console.log('User: ' + this.name);
  };
};

const DecoratedUser = function (user, street, city) {
  this.user = user;
  this.name = user.name;
  this.street = street;
  this.city = city;

  this.say = function () {
    console.log(
      'Decorated User: ' + this.name + ', ' + this.street + ', ' + this.city
    );
  };
};

function acquaintance() {
  const user = new User('Kelly');
  user.say();

  const decorated = new DecoratedUser(user, 'Broadway', 'New York');
  decorated.say();
}

acquaintance();
