function reverseArray<T>(arr: T[]): T[] {
    return arr.reverse();
}

let num = reverseArray([1, 2, 3, 4]);
console.log(num);

let str = reverseArray(["A", "B", "C"]);
console.log(str);