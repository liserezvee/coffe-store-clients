import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleDelete = (id) => {
    //make sure is confirmed to delete
    fetch(`https://coffee-store-server-10vv25fdp-liserezvees-projects.vercel.app/user/${id}`,{
        method: "DELETE"
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount > 0){
            console.log('deleted successfully');
            Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success"
              });
            //remove the user from UI
            const remainingUsers = users.filter(user => user._id !== id)
            setUsers(remainingUsers)
        }
    })
  };
  return (
    <div>
      <h2>All users: {loadedUsers.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Creation Time</th>
              <th>Last logged in</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user) => (
              <tr key={user._id}>
                <th></th>
                <td>Email: {user.email}</td>
                <td>Creation time: {user.createdAt}</td>
                <td>Last logging : </td>
                <td>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn bg-orange-500"
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
