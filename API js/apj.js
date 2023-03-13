const items= document.querySelector(".items");
const searchInput= document.querySelector("#sreach")
let users =[]

const getItem =()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>{res.json()
        .then(res=>{
            users=res;
            viewResults(users)
         })
         .catch(err=>{
            console.log("error from backend");
         }) 
    })
    
}


searchInput.addEventListener("input", (e)=>{
    const element = e.target.value.toLowerCase()
    console.log(element);
    const sreachFunc =users
    .filter(user =>user.name
        .toLowerCase()
        .includes(element)
        
        )
      viewResults(sreachFunc)
    
})

const viewResults =(arr)=>{
    let output  =''
    arr.forEach(({name, username}) =>
       output +=`
       <tr>
        <td>
            <div class="results">
                <div>
                    <h1>${name}</h1>
                </div>
            </div>
            <div class="results">
                <div>
                    <p>${username}</p>
                </div>
            </div>
        </td>
    </tr>
       `    
    );
    items.innerHTML =output
}

document.addEventListener("DOMContentLoaded", getItem)
