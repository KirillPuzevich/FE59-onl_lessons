const array = [
    {name: 'кукла', position: 1, isFixedPostion: false},
    {name: 'дрель', position: 2, isFixedPostion: true},
    {name: 'сметана', position: 3, isFixedPostion: false},
    {name: 'штаны', position: 4, isFixedPostion: false},
    {name: 'колесо', position: 5, isFixedPostion: false},
];

const addIntoStart = (array, newObject) => {
    array.forEach(item => {
        if (!item.isFixedPostion) {
            item.position += 1;
        }
    });

    array.unshift(newObject);

    return array;
}

console.log(addIntoStart(array, {name: 'торт', position: 1, isFixedPostion: false}));