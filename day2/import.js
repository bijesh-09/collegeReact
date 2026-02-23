import calculateAreaOfCircle, { calculateDiameter, calculatePerimeter, PI } from "./export.js" // automatic import when tryna import variable from another file in the same dir

// import calculateAreaOfCircle, {PI, calculateDiameter, calculatePerimeter} from "./export.js" //default is never imported using curly braces, and note we can also write only "import calc" instead of "import calculateAreaOfCircle" as calculateAreaOfCircle is a default export in export.js
console.log("value of pi:", PI)
console.log("area:", calculateAreaOfCircle(12) )
console.log("perimeter:", calculatePerimeter(12) )
console.log("diameter:", calculateDiameter(12) ) 

