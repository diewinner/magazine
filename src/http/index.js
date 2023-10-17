import axios from 'axios';

export const API_URL = process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : '?';

const $api = axios.create({
    baseURL: API_URL,
});

$api.interceptors.request.use(
    async req => {
        if (req.url?.includes('auth')) {
            return req;
        }

        const authTokens = localStorage.getItem('authTokens');

        if (authTokens) {
            req.headers = {
                Authorization: `Bearer ${JSON.parse(authTokens).access}`,
            };
        } else {
            req.headers = {};
        }

        return req;
    },

    error => {
        return Promise.reject(error);
    }
);


export default class API {
    static async getAllProducts() {
        return await $api.get(`https://fakestoreapi.com/products`);
    }
    static async getSingleProduct(id) {
        return await $api.get(`'https://fakestoreapi.com/products/${id}`);
    }
    static async getAllCarts() {
        return await $api.get(`https://fakestoreapi.com/carts`);
    }
    static async getSingleCart(id) {
        return await $api.get(`'https://fakestoreapi.com/carts/${id}`);
    }
    static async authLogin(user) {
        return await $api.post(`'https://fakestoreapi.com/auth/login`, user);
    }

}