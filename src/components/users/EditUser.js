import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getUserById } from '../services/ApiService'


const EditUser = () => {

const {userId} = useParams() // param id user


const [userByID, setUserByID] = useState('')

useEffect(() => {
    const getUserID = async () => {
        const getUser = await getUserById(userId);
        console.log(getUser)
        setUserByID(getUser)
    }

    getUserID()
}, [userId])

    return (
        <div className = 'container' >
            <div className = 'py-4 d-flex' >
                    <h1>Edit User</h1>

                    <div className = "d-flex ml-auto p-2" >
                        <Link 
                            type="submit" 
                            className = "btn btn-warning  pull-right"
                            to = '/Aplication'
                        >
                            Back to aplication 
                        </Link>
                    </div>
            </div>
            
          
                {/* <ul className = "list-group" >
                    <li className="list-group-item text-info">User name: {userByID.name}</li>
                    <li className="list-group-item text-info">{userByID.username}</li>
                    <li className="list-group-item text-info">{userByID.email}</li>
                    <li className="list-group-item text-info">{userByID.phone}</li>
                </ul> */}

               

        </div>
    )
}

export default EditUser
