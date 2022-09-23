import React from 'react'
import '../App.css'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from 'react'

const rawData = [
    { name: "Zohaib Ahmad", age: 22, city: "lahore", movie: "Zero" },
    { name: "Sarbaz", age: 32, city: "karachi", movie: "naruto" },
    { name: "Ali", age: 23, city: "lahore", movie: "demon slayer" },
    { name: "Aleem", age: 14, city: "quetta", movie: "slime" },
    { name: "Zain", age: 25, city: "lahore", movie: "day shift" },
]

function Table() {
    const [currentPage, setCurrentPage] = useState(1) //for pagination
    const [data, setData] = useState(rawData)

    console.log("data is", data)
    const postPerPage = 2
    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage
    const currentItems = data.slice(indexOfFirstPost, indexOfLastPost)
    const paginationLength = Math.ceil(data.length / postPerPage)



    const handleChange = (event, value) => {
        setCurrentPage(value)
    };
    return (
        <div>


            <table width='100%'>
                <tr>
                    <th style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }} >Name</th>
                    <th style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>Age</th>
                    <th style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>City</th>
                    <th style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>Movie</th>
                </tr>
                {
                    currentItems.map((value, index) => {
                        return (
                            <tr key={index}>
                                <td style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>
                                    {value.name}
                                </td>
                                <td style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>
                                    {value.age}
                                </td>
                                <td style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>
                                    {value.city}
                                </td>
                                <td style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>
                                    {value.movie}
                                </td>
                            </tr>
                        )
                    })
                }
            </table>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "15px" }}>
                <Stack spacing={2}>
                    <Pagination count={paginationLength} siblingCount={0} onChange={handleChange} variant="outlined" color="success" />
                </Stack>
            </div>
        </div >
    )
}

export default Table