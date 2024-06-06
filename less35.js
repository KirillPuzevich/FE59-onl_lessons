const users = [
    {
      name: "Harry Felton",
      phone: "(09) 897 33 33",
      email: "felton@gmail.com",
      animals: ["cat"],
      cars: ["bmw"],
      hasChildren: false,
      hasEducation: true
    },
    {
      name: "May Sender",
      phone: "(09) 117 33 33",
      email: "sender22@gmail.com",
      hasChildren: true,
      hasEducation: true
    },
    {
      name: "Henry Ford",
      phone: "(09) 999 93 23",
      email: "ford0@gmail.com",
      cars: ["bmw", "audi"],
      hasChildren: true,
      hasEducation: false
    }
  ];
  
  function getUsersNames(users) {
    return users.map(user => user.name).join(", ");
  }
  
  function getTotalCars(users) {
    return users.reduce((total, user) => total + (user.cars ? user.cars.length : 0), 0);
  }
  

  function filterByEducation(users) {
    return users.filter(user => user.hasEducation);
  }
  
  function filterByAnimals(users) {
    return users.filter(user => user.animals && user.animals.length > 0);
  }
  
  function getCarsList(users) {
    const allCars = users.reduce((cars, user) => {
      if (user.cars) {
        cars.push(...user.cars);
      }
      return cars;
    }, []);
    return allCars.join(", ");
  }

console.log(getUsersNames(users));
console.log(getTotalCars(users));
console.log(filterByEducation(users));
console.log(filterByAnimals(users));
console.log(getCarsList(users));


class User{
    constructor(users) {
        this.users = users;
      }

    getNames() {
        return this.users.map(user => user.name).join(", ");
    } 
 
    getCars(){
        return this.users.reduce((total, user) => total + (user.cars ? user.cars.length : 0), 0);
    }

    filterEducation(){
        return this.users.filter(user => user.hasEducation);
    }

    filterAnimals(){
        return this.users.filter(user => user.animals && user.animals.length > 0);
    }

    getCarsString(){
        const allCars = this.users.reduce((cars, user) => {
            if (user.cars) {
              cars.push(...user.cars);
            }
            return cars;
          }, []);
          return allCars.join(", ");
    }
  }

  const user = new User(users);

  console.log(user.getNames());
  console.log(user.getCars());
  console.log(user.filterAnimals());
  console.log(user.filterEducation());
  console.log(user.getCarsString());