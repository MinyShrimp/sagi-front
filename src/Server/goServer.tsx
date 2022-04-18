import axios, { AxiosRequestHeaders, Method } from "axios";
import Config from "./Config";

const goServer = async ( api: string, method: Method, data: object = {}, header: AxiosRequestHeaders = Config.header) => {
    try {
        var res: any = null;
        if( method === 'GET' || method === 'get' || method === 'HEAD' || method === 'head' ) {
            res = await axios({
                baseURL : Config.url,
                url     : api,
                method  : method,
                headers : header,
                params  : data
            });
        } else {
            res = await axios({
                baseURL : Config.url,
                url     : api,
                method  : method,
                headers : header,
                data    : JSON.stringify(data),
            });
        }

        return new Promise((resolve, reject) => {
            if( res.statusText === 'OK' ) {
                resolve(res.data);
            } else {
                reject(res.data);
            }
        });
    } catch(e) {
        console.error(e);
    }
};

export default goServer;