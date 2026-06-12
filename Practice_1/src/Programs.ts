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


