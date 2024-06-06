interface IUser {
    name: string;
    phone?: string;
    email: string;
    animals?: string[];
    cars?: string[];
    hasChildren: boolean;
    hasEducation: boolean;
  };

  
  const users: IUser[] = [
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
  
  function getNames(users: IUser[]): string {
    return users.map(user => user.name).join(", ");
  }
  
  function getCars(users: IUser[]): number {
    return users.reduce((total, user) => total + (user.cars ? user.cars.length : 0), 0);
  }
  
  function filterEducation(users: IUser[]): IUser[] {
    return users.filter(user => user.hasEducation);
  }
  
  function filterAnimals(users: IUser[]): IUser[] {
    return users.filter(user => user.animals && user.animals.length > 0);
  }

  function getCarsString(users: IUser[]): string {
    const allCars = users.reduce((cars, user) => {
      if (user.cars) {
        cars.push(...user.cars);
      }
      return cars;
    }, [] as string[]);
    return allCars.join(", ");
  }
  
  console.log(getNames(users));
  console.log(getCars(users));
  console.log(filterAnimals(users));
  console.log(filterEducation(users));
  console.log(getCarsString(users));



  class User{
    users: IUser[];
    constructor(users: IUser[]) {
        this.users = users;
      }

    getNames(): string {
        return this.users.map(user => user.name).join(", ");
    } 
 
    getCars(): number {
        return this.users.reduce((total, user) => total + (user.cars ? user.cars.length : 0), 0);
    }

    filterEducation(): IUser[]{
        return this.users.filter(user => user.hasEducation);
    }

    filterAnimals(): IUser[]{
        return this.users.filter(user => user.animals && user.animals.length > 0);
    }

    getCarsString(): string{
        const allCars = this.users.reduce((cars, user) => {
            if (user.cars) {
              cars.push(...user.cars);
            }
            return cars;
          }, [] as string[]);
          return allCars.join(", ");
    }
  }

  const user = new User(users);

  console.log(user.getNames());
  console.log(user.getCars());
  console.log(user.filterAnimals());
  console.log(user.filterEducation());
  console.log(user.getCarsString());


