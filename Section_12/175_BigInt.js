console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);
console.log(2 ** 53 + 5);
console.log(Number.MAX_SAFE_INTEGER)

console.log(4n ** 33n)
console.log(222222223444444443333333222221n)
console.log(BigInt(33223222111334456677))

const Long = 232234556677787766n;
const num = 23344566778883333333332n;
console.log(Long+num)

// Exception
console.log(20n >15)
console.log(20n === 20)
console.log(20n ==20)
console.log(20n =="20")

// Division
console.log(10n / 2n)