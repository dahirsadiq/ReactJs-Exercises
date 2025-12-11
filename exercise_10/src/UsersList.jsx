
const UsersList=({users})=>{
    

return(
    <div>
      {
        users.length > 0 ?(
            <ul>

        {
            users.map(user => (
                <li key={user.id}> {user.name}  ({user.email}) </li>
            ))
            
        }
      </ul>
        ):<h3> Users Not Found</h3>
      }

    </div>
)

}



export default UsersList;