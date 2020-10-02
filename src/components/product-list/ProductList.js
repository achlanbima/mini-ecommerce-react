import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { actionGetProducts } from '../../_redux/actions/Products';

const Index = (props) => {

    const { fetchProducts } = props;

    useEffect(()=>{
        fetchProducts();
    },[fetchProducts]);

    return (
        <div>
            {/* {props.products.data.map(product=>(
                <div key={product.sku}>
                    <p>{product.name} <span style={{fontWeight:500}}>${product.unitPrice}</span></p>
                </div>
            ))} */}
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Unit in Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {props.products.data.map(product=>(
                        <tr key={product.sku}>
                            <td className="align-middle">
                                <img src={`${process.env.PUBLIC_URL}/${product.imageUrl}`} alt={product.image_url} height={50} />
                            </td>
                            <td className="align-middle">{product.name}</td>
                            <td className="align-middle">$ {product.unitPrice}</td>
                            <td className="align-middle">{product.unitsInStock}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = state => {
    return { products: state.products };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      fetchProducts: () => dispatch(actionGetProducts())
    };
  };

const ProductList = connect(mapStateToProps, mapDispatchToProps)(Index);

export default ProductList