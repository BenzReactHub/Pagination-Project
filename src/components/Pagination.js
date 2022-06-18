import React from 'react'

export const Pagination = ({ postsPerPage, totalPosts, setCurrentPage }) => {
    const pageNumbers = [];

    //向上取整數
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    const handleClick = (currentPage) => {
        setCurrentPage(currentPage)
    }
    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map((pageNumber, index) => {
                    return <li key={index} className='page-item'><a href='!#' className='page-link' onClick={() => { handleClick(pageNumber) }}>{pageNumber}</a></li>
                })}
            </ul>
        </nav>
    )
}
