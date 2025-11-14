import React, { useEffect } from 'react'
import {useLoaderData} from 'react-router-dom'

function Github() {
    const data=useLoaderData();
    // const [data,setData]=React.useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Manojkhanavalkar')
    //     .then((response)=>response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data);
    //    })
    // })
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        Github followers:{data.followers}
        <img src={data.avatar_url} width={300} alt="" />
        <p>
            Bio : {data.bio}
        </p>
    </div>
  )
}

export default Github

export const githubInfoLoader=async ()=>{
    const response=await fetch('https://api.github.com/users/Manojkhanavalkar')
    return response.json();
}