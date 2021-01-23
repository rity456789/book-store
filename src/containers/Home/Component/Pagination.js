import React,{useState} from 'react'

export default function Pagination(props){

    const [page1, setPage1] = useState('1');
    const [page2, setPage2] = useState('2');
    const [page3, setPage3] = useState('3');
    const [page4, setPage4] = useState('4');
    const [activePage, setActivePage] = useState('1')

    const classNamePage = (page) =>{
      if(page===activePage){
        return("page-item active")
      }
      else{
        return("page-item")
      }
    }
    
    const onClickPage = (page) =>{
      setActivePage(page);
      props.setPage(page);
      props.setIsloading(true);
    }

    return(
        <div className="pb-3 pb-lg-5">
                  {/* Pagination */}
                  <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center py-3 py-lg-4">
                      <li className="page-item disabled">
                        <button
                          className="page-link page-link-first"
                          onClick={()=>{onClickPage('-1')}}
                          tabIndex={-1}
                          aria-disabled="true"
                        >
                          Prev
                        </button>
                      </li>
                      <li className={classNamePage('1')}>
                        <button className="page-link" onClick={()=>{onClickPage('1')}}>
                          {page1}
                        </button>
                      </li>
                      <li className={classNamePage('2')}>
                        <button className="page-link" onClick={()=>{onClickPage('2')}}>
                          {page2}
                        </button>
                      </li>
                      <li className={classNamePage('3')}>
                        <button className="page-link" onClick={()=>{onClickPage('3')}}>
                          {page3}
                        </button>
                      </li>
                      <li className={classNamePage('4')}>
                        <button className="page-link" onClick={()=>{onClickPage('4')}}>
                          {page4}
                        </button>
                      </li>
                      <li className="page-item ">
                        <button className="page-link" onClick={()=>{onClickPage('+1')}}>
                          Next
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
    )
}