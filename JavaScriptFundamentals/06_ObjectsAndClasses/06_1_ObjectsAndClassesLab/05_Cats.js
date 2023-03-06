function solve(arr) {
    let cats = [];

    class Cat {
        constructor(catName, age) {
            this.catName = catName,
            this.age = age
        }

        saysMeow() {
            console.log(`${this.catName}, age ${this.age} says Meow`);
        }
    }

    for (let i = 0; i < arr.length; i++) {
        let catInfo = arr[i].split(' ');
        let name, age;
        [name, age] = [catInfo[0], catInfo[1]];
        cats.push(new Cat(name, age));
    }

    cats.map(cat => cat.saysMeow());
}

solve(['Candy 1', 'Poppy 3', 'Nyx 2']);
