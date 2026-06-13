const log = console.log;
//Palindrome
function Palindrome(inp: number): boolean {
    let x = inp;
    let revNum: number = 0;
    while (x > 0) {
        revNum = revNum * 10 + (x % 10);
        x = Math.floor(x / 10);
    }
    if (revNum === inp) return true;
    else return false;
}

const palin: boolean = Palindrome(122);
log(palin);

//----------------------------------------------------
//Two Sum
//O(n^2)
function twoSum(nums: number[], target: number): number[] {
    for (let i: number = 0; i < nums.length - 1; i++) {
        for (let j: number = i + 1; j < nums.length; j++) {
            let sum: number = nums[i]! + nums[j]!;
            if (sum === target) return [i, j];
        }
    }
    return [];
}

//Using HashMap -> O(n)
function twoSumMap(nums: number[], target: number): number[] {
    const seen = new Map<number, number>(); // value -> index
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]!;
        if (seen.has(complement)) {
            return [seen.get(complement)!, i];
        }
        seen.set(nums[i]!, i);
    }
    return [];
}

const sol_1: number[] = twoSum([2, 7, 11, 15], 9);
log(sol_1);

const sol_2: number[] = twoSumMap([3, 2, 4], 6);
log("TwoSumMap:", sol_2);

const sol_3: number[] = twoSum([3, 2, 9], 6);
log(sol_3);

//------------------------------------------------
//Weighted Word Mapping
// let map = {
//     a: 25, b: 24, c: 23, d: 22, e: 21, f: 20, g: 19, h: 18, i: 17, j: 16, k: 15, l: 14,
//     m: 13, n: 12, o: 11, p: 10, q: 9, r: 8, s: 7, t: 6, u: 5, v: 4, w: 3, x: 2, y: 1, z: 0
// }

function mapWordWeights(words: string[], weights: number[]): string {
    const alphabets: string = 'abcdefghijklmnopqrstuvwxyz';
    return 'a';
};

mapWordWeights(["abcd", "def", "xyz"], [5, 3, 12, 14, 1, 2, 3, 2, 10, 6, 6, 9, 7, 8, 7, 10, 8, 9, 6, 9, 9, 8, 3, 7, 7, 2])

