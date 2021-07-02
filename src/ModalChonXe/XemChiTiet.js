import React, { Component } from 'react'
import SanPham from './SanPham';

export default class XemChiTiet extends Component {

    products = [
        { id: 1, name: 'black car', img: './images/products/black-car.jpg', price: 1000 },
        { id: 2, name: 'red car', img: './images/products/red-car.jpg', price: 2000 },
        { id: 3, name: 'silver car', img: './images/products/silver-car.jpg', price: 3000 },
        { id: 3, name: 'Steel car', img: './images/products/steel-car.jpg', price: 4000 }
    ];

    state = {
        sanPhamChiTiet: {id: 3, name: 'silver car', img: './images/products/silver-car.jpg', price: 3000},
    }


    renderSanPham = () => {
        return this.products.map((sanPham , index) => {
            return <div className = "col-3" key={index}>
                <SanPham sp={sanPham} xemChiTiet={this.xemChiTiet}></SanPham>
            </div>
        })
    }
    
    xemChiTiet = (sanPhamDuocClick) => {
        console.log('sanPhamDuocClick',sanPhamDuocClick)
        this.setState({
            sanPhamChiTiet: sanPhamDuocClick
        })
    }
    render() {
        let {sanPhamChiTiet} = this.state
        return (
            <div className="container">
                <h2>Danh sách xe</h2>
                <div className="row">
                    {this.renderSanPham()}
                </div>
                
                <div>
                    
                    {/* Modal */}
                    <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">{sanPhamChiTiet.name}</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <img src={sanPhamChiTiet.img} className="w-100"></img>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
