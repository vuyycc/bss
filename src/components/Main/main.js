import React,{useState} from 'react';
import Post from './Post/post'
import Pagination from '../Pagination/Pagination'

export default function Main() {

  const [currentPage, changeCurrPage] = useState(1)

  const changeCurrentPage = (numPage) => {
    changeCurrPage(numPage)
  }

  return <div className='main-box'>
      <Post />
      <Post />
      <Post />
      <Post />
    <div>
      <Pagination currentPage={currentPage}
        totalPages={15}
        changeCurrentPage={changeCurrentPage}/>
    </div>
  </div>;
}
