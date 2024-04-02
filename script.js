let string = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. quo, quibusdam.'
let arr = string.split(' ')
console.log(arr);
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}
console.log(arr.join(' '));

