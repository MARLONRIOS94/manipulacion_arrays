const words = ['spray', 'limit', 'elite', 'exuberant'];

const newArray = [];
for (let index = 0; index < words.length; index++) {
    const item = words [index];
    if (item.length >= 6) {
        newArray.push(item);
    }
}

console.log('newArray', newArray);
console.log('original', words);

const rta = words.filter(item => item.length >= 6)
console.log('rta', rta);
console.log('original', words);


const orders = [
    {
        customername: 'nicolas',
        total: 60,
        delivered: true,
    },
    {
        customername:'zulema',
        total: 120,
        delivered: false,
    },
    {
        customername: 'santiago',
        total: 180,
        delivered: true,
    },
    {
        customername: 'valentina',
        total: 240,
        delivered: true,
    },
    {
        customername: 'nicolas',
        total: 232,
        delivered: false,
    },
];

const rta3 = orders.filter(item => item.delivered && item.total >= 100)
console.log('rta3', rta3);

const search = (query) => {
    return orders.filter(item => {
        return item.customername.includes(query);
    })
}

console.log(search('nico'));