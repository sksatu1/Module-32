// JavaScript Object Notation 
// JSON
const user = { id: 120, name: "amir", job: "actor" };
const stringified = JSON.stringify(user);
/* console.log('user = ', user);
console.log('stringified = ', stringified); */

const shop = {
    name: 'alia_shop',
    address: 'ranvir road',
    product: ['laptop', 'mobile', 'tab'],
    profit: 15000,
    owner: {
        name: 'alia bhat',
        proffession: 'actor'
    },
    isExpensive: false
}

const shopStringified = JSON.stringify(shop);
console.log(shopStringified);

const converted = JSON.parse(shopStringified);
console.log(converted);