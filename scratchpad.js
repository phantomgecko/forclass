

function fibonacci(n){
  if(n==0) return 0;
  if(n==1) return 1;
  return fibonacci(n-1)+fibonacci(n-2);
}

function pell(n){
  if(n==0) return 0;
  if(n==1) return 1;
  return 2*pell(n-1) + pell(n-2);
}

function tribo(n){
  if(n==0) return 0;
  if(n==1) return 0;
  if(n==2) return 1;
  return tribo(n-1)+tribo(n-2)+tribo(n-3);
}

var fibo = document.createElement("P");                       // Create a <p> element                                        // Append the text to <p>
document.body.appendChild(para);

document.write("The 11th number of the Fibonacci sequence: ");
document.getElementById("fibo").innerHTML = fibonacci(11);
//document.write(fibonacci(11));

document.write("\rThe 11th number of the Pell sequence: ");
document.write(pell(11));

document.write("\rThe 11th number of the Tribonacci sequence: ");
document.write(tribo(11));
