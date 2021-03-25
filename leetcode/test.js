var myPow = function (x, n) {
  const base = x;
  return muti(x, n);
  function muti(x, n) {
    switch (true) {
      case n === 0:
        return 1;
      case n === 1:
        return x;
      case n < 0:
        x = 1 / x;
        n = -n;
        return muti(x, n);
      case n % 2 === 0:
        let a = muti(x * x, n / 2)
        return a * a
      case n % 2 === 1:
        x *= base;
        return muti(x, n - 1)
        break;
    }
  }
}
console.log(myPow(2, 10))