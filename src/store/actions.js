import axios from "axios";
// https://fakestoreapi.com/products'

export const getAllProducts = ({commit}) => {
    axios.get('https://fakestoreapi.com/products')
        .then(response => {
            commit('SET_PRODUCTS', response.data)
        })
}
