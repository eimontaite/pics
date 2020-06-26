import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID EMqmTFAQuLGTaEIr3aC0jSHo2V1gPifJcMSNQg1J95I'
    }
})