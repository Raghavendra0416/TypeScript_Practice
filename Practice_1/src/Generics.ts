const log = console.log;
function getFirst<T>(arr: T[]): T | undefined {
    return arr[0];
}

getFirst([1, 2, 3]);       // returns number
getFirst(["a", "b"]);      // returns string
getFirst([true, false]);   // returns boolean

//----------------------------------------------------------------

//Generic Interfaces
interface ApiResponse<T> {
    data: T;
    status: number;
    message: string;
}

// Reuse with different shapes:
type UserResponse = ApiResponse<{ id: number; name: string }>;        //Object
type PostsResponse = ApiResponse<{ id: number; title: string }[]>;    //Array

const exampleUserResponse_1: UserResponse = {
    data: { id: 1, name: "Alice" },
    status: 200,
    message: "OK"
};

const exampleUserResponse_2: PostsResponse = {
    data: [{ id: 12, title: "BoB" }],
    status: 200,
    message: "OK"
};

log(exampleUserResponse_1);
log(exampleUserResponse_2);

//-----------------------------------------------------------

//Generic Classes
class Stack<T> {
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }
}

const numStack = new Stack<number>();
numStack.push(1);
//numStack.push("hello"); // ❌ Error — string not assignable to number

const numStack_1 = new Stack<string>();
numStack_1.push('hello')

type respose<T> = {
    readonly id: number,
    name: string,
}

const res: respose<number> = {
    id: 1,
    name: 'ram'
}
log(res);
