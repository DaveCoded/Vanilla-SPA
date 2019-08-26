const axios = require('axios');

const conversionKey = process.env.CONVERT_API_KEY;

const api = axios.create({
  baseURL: 'https://free.currencyconverterapi.com/api/v5',
  timeout: process.env.TIMEOUT || 5000
});

module.exports = {
  convertCurrency: async (from, to) => {
    const response = await api.get(
      `/convert?q=${from}_${to}&compact=y&apiKey=${conversionKey}`
    );
    const key = Object.keys(response.data)[0];
    const { val } = response.data[key];
    return { rate: val };
  }
};
