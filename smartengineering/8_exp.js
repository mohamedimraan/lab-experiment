function gcd(m,n)
{
  return n>0 ? gcd(n,m%n):m;
}
console.log(gcd(92,16));