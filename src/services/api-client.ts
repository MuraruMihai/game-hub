import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '7b669cbba91942fc88d933b73d5a15ab'
    }
})