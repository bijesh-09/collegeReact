let First = ({fullName, age, address}) => { //here destructuring props object
    console.log("First component props: ", fullName, age, address); //just needed the keys of the props object to access their values
    return(//jsx always return only one compnent
        <div>
            <h1>First Component</h1>
        </div>
    )
}
// let First = (props) => { //here props is an object
//     console.log("First component props: ", props.fullName, props.age, props.address); //this will return empty object: '{}' cuz rn we havent passed any args to the parameter
//     return(
//         <div>
//             <h1>First Component</h1>
//         </div>
//     )
// }
export default First;