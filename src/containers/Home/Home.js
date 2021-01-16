import React, {useEffect, useState} from "react";
import background from "../../assets/images/banner-1.jpg";
import LeftSideMenu from './Component/LeftSideMenu'
import Product from './Component/Product'
import {getBook, getCategories} from '../../services/home.services'
import ProductHeader from "./Component/ProductHeader";
import Pagination from "./Component/Pagination";
function Home() {
  
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [page, setPage] = useState(1);
  const [isLoading, setIsloading] = useState(true);

  useEffect(()=>{
    if(isLoading){
      getBook(page,9)
      .then((response)=>{
        setProducts(response.data.data)
      })
      .catch(()=>{
        console.log('error!!');
      })

      getCategories()
      .then((response)=>{
        setCategories(response.data)
      })


      .catch(()=>{
        console.log('error!!');
      })
    }
    setIsloading(false);
    
  })
  return (
    <>
      <div>
        <section
          className="box box-image bg-light text-white"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="container">
            <header className="wow fadeInUp" data-wow-delay=".1s">
              <div className="row justify-content-center pt-5 text-center">
                <div className="col-lg-8">
                  <h1 className="mb-0">Everything you need</h1>
                  <p>
                    Find new Book now, to getting strong heart and mindset
                  </p>
                </div>
              </div>
            </header>
          </div>
        </section>
        {/* Products grid */}
        <section className="bg-white p-0 sider sider-left">
          <div className="container">
            <div className="row">
              {/* Left side filters */}
              <LeftSideMenu categories={categories}/>
              {/* Products content */}
              <div className="col-lg-9 bg-white pl-lg-5">
                {/* ProductHeader */}
                <ProductHeader/>
                {/* Products collection */}
                <div className="row gutters-mobile">
                  {products.map(function(product, index){
                    return (<Product product={product}/>)
                  })}
                  
                </div>
                <Pagination/>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
