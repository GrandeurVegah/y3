export default function fmpOptions(path, ticker) {
    let options = {
        hostname: process.env.REACT_APP_fmp_host_name,
        port: 443,
        path: path + ticker + "?apikey=" + process.env.REACT_APP_fmp_key,
        method: 'GET'
    }
    return options
    // path: 'https://financialmodelingprep.com/api/v3/quote-short/AAPL?apikey=YOUR_API_KEY',
}  