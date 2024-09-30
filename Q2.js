function solution(phone_number) {
    const length = phone_number.length;
    return '*'.repeat(length - 4) + phone_number.slice(-4);
}

console.log(solution('01033334444'));
console.log(solution('027778888'));
