import React, {useState, useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useParams,
  useRouteMatch
} from "react-router-dom";

import Header from '../Header'
import Footer from '../Footer'
import Product from "../Home/Component/Product";
import {getBookId} from '../../services/home.services'

function ProductDetail(){

    let { url } = useRouteMatch();
    let { id } = useParams();

    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    
    useEffect(()=>{
        console.log("okela")
        if(product===null){
            getBookId(id)
            .then((response)=>{
              setProduct(response.data)
                console.log(response.data)
            })
            .catch(()=>{
            console.log('error!!');
            })
        } 
        
    })

    const onChangeQuantity = (e) =>{
        const val = Number(e.target.value)
        setQuantity(val);
        console.log("change ", val)
    }

    return(
        <>
            <Header></Header>
                <div className="clearfix" />
                <div className="content">
                    <div className="item-container">
                        <div class="image-item active">
                            <div class="single-prd-item">
                                <img class="img-fluid" src="https://assets.entrepreneur.com/content/3x2/2000/20191219170611-GettyImages-1152794789.jpeg" alt=""/>
                            </div>
                        </div>
                        <div class="col-lg-5 offset-lg-1">
                            <div class="s_product_text">
                                <h3>{product.ten}</h3>
                                <h2>{product.gia} VND</h2>
                                    <ul class="list">
                                        <li>
                                            <a class="active" href="#">
                                                <span>Thể Loại</span> : Sách khoa học
                                            </a>
                                        </li>
                                        <li>
                                            <a class="active" href="#">
                                                <span>Tình trạng</span> : {(product.tinhTrangHang==null)?"Hết hàng":"Còn Hàng"}
                                            </a>
                                        </li>
                                        <li>
                                            <a class="active" href="#">
                                                <span>Nhà xuất bản</span> : {product.nhaXuatBan}
                                            </a>
                                        </li>
                                    </ul>
                                    <hr/>
                                    <h3>Mô tả</h3>
                                    <p>{product.moTa}</p>
                                    <hr/>
                                    <div className="quantity-cart">
                                        <div class="product_count">
                                            <label for="qty">Số lượng:</label>
                                            <input className="input-quantity" type="number" id="quantity" defaultValue="1" name="quantity" min="1" max="100" 
                                                onChange={onChangeQuantity}
                                            ></input>
                                        </div>
                                        <div class="card_area d-flex align-items-center">
                                            <button class="btn-add-to-cart" id="add-to-cart" onclick={()=>{}}>Thêm vào giỏ
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
          <Footer></Footer>
            <Switch>
            <Route path={`${url}/:id`}>
            <ProductDetail />
            </Route>
        </Switch>
        </>
        
    )
}

export default ProductDetail;