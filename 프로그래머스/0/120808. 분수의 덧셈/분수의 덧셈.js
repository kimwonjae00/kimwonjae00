function solution(numer1, denom1, numer2, denom2) {
    // 1. 분수 더하기
    let numer = numer1 * denom2 + numer2 * denom1;  // 분자
    let denom = denom1 * denom2;  // 분모
    
    // 2. 최대공약수 구하기
    function gcd(a, b) {
        return b ? gcd(b, a % b) : a;
    }
    
    // 3. 기약분수 만들기
    let g = gcd(numer, denom);
    
    return [numer / g, denom / g];
}