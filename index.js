// Code your solutions in this file

const names = []
function writeCards(name, event) {
    for ( let i = 0; i < name.length; i++ ) {
        names.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    };
    return names;
};
writeCards();


function countDown(num) {

    while (num > -1) {
        console.log(num);
        num--
    };

}
countDown();

