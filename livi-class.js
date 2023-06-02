class Statistics { 
    constructor(X, Y){ 
        this.X = X;
        this.Y = Y;
    }
 getsumXY() { 
   let sumXY = [];
    for (let i = 0 ; i < this.X.length; i++){
    sumXY.push(this.X[i] + this.Y[i]);
   }
    return sumXY;
 }

 getprodXY() { 
   let prodXY =[];
    for (let i = 0 ; i < this.X.length; i++){ 
   prodXY.push(this.X[i] * this.Y[i]);
    }
   return prodXY;

}
 getsumX() {  
   let sumX = 0;
   for(let x of this.X){ sumX += x;}
   return sumX;
 } 

 getsumY() { 
   let sumY = 0;
   for(let y of this.Y){ sumY += y;}
   return sumY
}
}
const X = [1, 2, 3, 4, 5];
const Y = [6, 7, 8, 9, 10];
const stats = new Statistics(X, Y);
stats.getprodXY(X, Y);
stats.getsumX(X);
stats.getsumY(Y);
stats.getsumXY();
console.log(stats.getsumXY());
console.log(stats.getsumX());
console.log(stats.getsumY());
console.log(stats.getprodXY());  