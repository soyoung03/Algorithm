const factorial = (n) => {
   if (n <= 1) {
       return BigInt(1);
  } else {
       return BigInt(n) * factorial(BigInt(n) - BigInt(1));
  }
}

const solution = (balls, share) => factorial(balls) / (factorial(balls - share) *factorial(share));