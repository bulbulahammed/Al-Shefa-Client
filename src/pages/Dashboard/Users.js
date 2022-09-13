import React, { useEffect, useState } from 'react';

const Users = () => {
    const [users, setUsers] = useState([]);

    // const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
    //     method: 'GET',
    //     headers:{
    //         authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //     }
    // }).then(res => res.json()));
    // if (isLoading) {
    //     return <Loading></Loading>
    // }

    useEffect(() => {
        fetch('http://localhost:5000/user',{
            method: 'GET',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])


    return (
        <div>
            <h2 className="text-2xl">All Users: {users.length}</h2>
        </div>
    );
};

export default Users;