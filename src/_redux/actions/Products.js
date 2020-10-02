import ecommerceApi from '../../api/ecommerce';

export const actionGetProducts = () => {
  return {
    type: 'GET_PRODUCTS',
    payload: async () => {
      try {
        const res = await ecommerceApi.get('/products');
        console.log('test', res);
        return res.data._embedded.products;
      } catch (error) {
        return error.message;
      }
    },
  };
};
