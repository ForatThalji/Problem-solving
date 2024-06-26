// let array = [1,2,3];
// let stc=[];

// for(let i=0;i<array.length;i++){
//     // console.log(array[i]+" ");
// }

// class stack{
//     constructor(){
//         this.items = [];

//     }

//     push(element){
//         this.items.push(element);
//     }

//     printStack() {
//         return this.items.join(" ");
//     }

//     pop(){
//         if (this.isEmpty()) {
//             return "Stack is empty"; // أو يمكن إرجاع null أو إلقاء خطأ
//         }
//       return this.items.pop();
//     }
//     isEmpty() {
//         return this.items.length === 0;
//     }

// }
// const sstack = new stack();
// const ssstack = new stack();

// for(let i= 0;i<array.length;i++){
//     sstack.push(array[i]);
// }

// for(let i= 0;i<array.length;i++){
//     const r = sstack.pop();
//     ssstack.push(r);

// }


// console.log(ssstack.printStack());

let array = [1, 2, 3];

// Stack class definition
class Stack {
    constructor() {
        this.items = [];
        this.firstStack = [];
        this.secondStack = [];
    }

    // Push an element onto the stack
    push(element) {
        this.items.push(element);
    }

    // Pop an element from the stack
    pop() {
        if (this.isEmpty()) {
            return null; // Return null if the stack is empty
        }
        return this.items.pop();
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Print stack elements as a string
    printStack() {
        return this.items.join(" ");
    }
}

// Create instances of Stack
const originalStack = new Stack();
const reversedStack = new Stack();
const firstStack = new Stack();

// Push elements from the array into the original stack
for (let i = 0; i < array.length; i++) {
    originalStack.push(array[i]);
}

// Pop elements from the original stack and push them into the reversed stack
for (let i = 0; i < array.length; i++) {
    const element = originalStack.pop();
    reversedStack.push(element);
}

// Print the elements of the reversed stack
console.log(reversedStack.printStack());
// 
// إذا قمنا بالتقييم بناءً على مقياس من 1 إلى 10:
// 8 / 10
// الوظيفة: 10/10
// القابلية للقراءة: 7/10
// التنظيم: 7/10
// إدارة الأخطاء: 8/10
// التسمية: 7/10



// ex2:

// let secondStack = [];
// firstStack.push(4);firstStack.push(5);firstStack.push(6);
// for (let i = 0; i < array.length; i++) {
// const secondStack2 = firstStack.pop();
// secondStack.push(secondStack2);
// console.log(secondStack2);
// }



// ex3:
// function arraySum(arr) {
//     // Base case: if array is empty, return 0
//     if (arr.length === 0) {
//         return 0;
//     } else {
//         // Recursive case: return first element plus sum of rest of array
//         return arr[0] + arraySum(arr.slice(1));
//     }
// }

// // Example usage:
// let arr = [1, 2, 3, 4, 5];
// console.log("Sum of array:", arraySum(arr)); // Output: Sum of array: 15
