// Code your solution in this file!
function distanceFromHqInBlocks(pickup){
    let Hq = 42;
    if (pickup >Hq) {
        return (pickup - Hq);
    };
    if (pickup < Hq) {
        return (Hq - pickup);
    };
    
}
function distanceFromHqInFeet(variable){
let Hq= 42;
 if(variable>Hq){
     return((variable-Hq)*264);
 };
     if (variable < Hq) {
         return ((Hq-variable)*264);

     };
 
}
function distanceTravelledInFeet(start,end){
 if(start>end){
     return((start-end)*264);
 };
     if (start < end) {
         return ((end-start)*264);

     };

}
function calculatesFarePrice(start, destination){
   const distance = distanceTravelledInFeet(start,destination);
   
        if (distance <= 400){
            return 0;
          }
          if (distance>400 && distance<=2000){
            return (distance-400)*0.02;
          }
          if (distance>2000&& distance<=2500){
            return 25;
          }
          if (distance>2500){
              return 'cannot travel that far';
          }
        }



