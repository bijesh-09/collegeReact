let ListRendering = () => {
    let numbers = [64, 34, 25, 12, 22, 11, 90];
    let student = ["hari", "shyam", "gita", "sita"];
    let person = [
        {name: "Ram", age: 23, address: "Kathmandu"},
        {name: "Shyam", age: 25, address: "Dehli"},
        {name: "Gita", age: 22, address: "Pokhara"}
    ]
    let studentObject = [
        {
            fullName:  "Bibek Shresta",
        marks: {
            c: 98,
            english: 56,
            math: 45
        },
        address: ["Kathmandu", "Lalitpur", "Bhaktapur"]
        }
    ]
    return(
        <div>
            <h1>List Rendering</h1>
            {//curly bracket required to write JS inside JSX

            numbers.map(
                (element, index) => {
                    return (
                        // key prop is used to give unique identity to each element when list is rendered
                        <div key={index}>
                            <b> Index: {index} , element: {element}</b>
                        </div>
                    )
                }
            )
            }
            {/* another exprnession block needs another curly bracket */}
            {
                student.map(
                    (names, idx)=>{
                        return (
                            <div key={`${names}-${idx}`}>
                                <i> Roll no.: {idx+1} Student Name: {names} </i>
                            </div>
                        )
                    }
                )
            }
            <ol>{
                person.map(
                    ({name,age,address},idx)=>{
                        return(
                            <li key={idx}>
                                <p>  Name: {name} | Age: {age} | Address: {address} </p>
                            </li>
                        )
                    }
                )
            }
            </ol>
            {
                studentObject.map(
                    ({fullName,marks,address},idx)=>{
                        return(
                            <div key={idx}>
                                <p> Full Name: {fullName} | Address: {address.join(", ")} </p>
                                <p>Marks: C: {marks.c}, English: {marks.english}, Math: {marks.math} |</p>
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}
export default ListRendering;