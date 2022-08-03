
fetch('https://randomuser.me/api/?results=50')
.then(res => res.json())
.then(data =>{
    let output="";
        
    for (const ele of data.results) {

        output+=`
        <table>
        <tr>
            <th>Full Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>Phone Number</th>
            <th>Country</th>
        </tr>
        
        <tr>
            <th>${(ele.name.first)}</th>
            <th>${ele.gender}</th>
            <th>${ele.age}</th>
            <th>${ele.email}</th>
            <th>${ele.cell}</th>
            <th>${ele.phone}</th>
            <th>${ele.country}</th>
        </tr>
        </table>
        `;

        console.log(`${(ele.name.first)}`)
    }
    document.querySelector(".main-container").innerHTML =output;
})
