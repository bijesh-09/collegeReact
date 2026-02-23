export const PI = 3.1415
const calculateAreaOfCircle = (r)=>PI * r * r
export default calculateAreaOfCircle//always only one variable can be exported as default
const calculatePerimeter = (r)=>2 * PI * r
const calculateDiameter = (r)=>2 * r

export {calculatePerimeter, calculateDiameter}//for exporting multiple variables