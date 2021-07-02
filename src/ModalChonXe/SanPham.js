import React, { Component } from 'react'

export default class SanPham extends Component {
    render() {
        let {sp} = this.props;
        let {xemChiTiet} = this.props;
        return (
            <div>
                <div className="card">
                    <img src={sp.img} alt="..." height={300} ></img>
                    <div className="card-body">
                        <h4>{sp.name}</h4>
                        <p>{sp.price}</p>
                        <button onClick={()=>{
                            {xemChiTiet(sp)}
                        }} className="btn btn-success mt-2" data-toggle ="modal" data-target="#modelId">Xem chi tiết</button>
                    </div>
                </div>
            </div>
        )
    }
}
