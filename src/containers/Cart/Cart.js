import React from 'react'

function Cart(){
    return(
        <div class="container">
            <div class="cart_inner">
                <div class="table-responsive">
                    <form action="#" method="POST">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Sách</th>
                                    <th scope="col">Giá</th>
                                    <th scope="col">Số lượng</th>
                                    <th scope="col">Tổng tiền</th>
                                    <th scope="col">Tuỳ chọn</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="media"><div class="d-flex"><img src="img/product/p-a4.jpg" alt="" width="128px"/></div>
                                        <div class="media-body">
                                            <p>S.tan Smith Triple White</p>
                                        </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h5>-100</h5>
                                    </td>
                                        <td>
                                            <div class="product_count">
                                                <input class="form-control input-text qty" id="5e1553b9cb0e2e056ec0e0b0" type="text" name="qtys" maxlength="12" value="2" title="Quantity:">
                                                    <button class="increase items-count" type="button">
                                                        <i class="lnr lnr-chevron-up"></i>
                                                    </button>
                                                    <button class="reduced items-count" type="button">
                                                        <i class="lnr lnr-chevron-down"></i></button>
                                                </input>
                                            </div>
                                        </td>
                                        <td>
                                            <h5>-200</h5>
                                        </td>
                                        <td>
                                            <a class="primary-btn" class="bottom_button">
                                                <td>
                                                    <button class="gray_btn" type="submit" value="submit">Cập nhật giỏ hàng</button>
                                                </td>
                                            </a>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <h5>Tổng phụ</h5>
                                    </td>
                                    <td>
                                        <h5>-200</h5>
                                    </td>
                                </tr>
                                <tr class="out_button_area">
                                    <td></td><td></td><td></td><td></td>
                                    <td>
                                        <div class="checkout_btn_inner d-flex align-items-center">
                                            <a class="gray_btn" href="home.html">Tiếp tục mua sắm</a>
                                            <a class="primary-btn" href="checkout.html">Thanh toán</a>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
        </div>    
    )
}

export default Cart