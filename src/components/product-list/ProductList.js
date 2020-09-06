import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { actionGetProducts } from '../../_redux/actions/Products';

const Index = (props) => {

    useEffect(()=>{
        props.fetchProducts();
    },[]);

    return (
        <div>
            {props.products.data.map(product=>(
                <div key={product.sku}>
                    <p>{product.name} <span style={{fontWeight:500}}>${product.unitPrice}</span></p>
                </div>
            ))}
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