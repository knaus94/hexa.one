import axios, { AxiosInstance } from 'axios';
import { GetAccountResponse, GetItemsResponse, GetPricesResponse } from './types';

export default class HexaWebApi {
    private readonly hexa: AxiosInstance;

    constructor(key: string) {
        this.hexa = axios.create({
            baseURL: 'https://hexa.one/api/v1',
            method: 'get',
            headers: {
                'X-API-Key': key,
                'Accept-Encoding': 'utf8',
            },
            responseType: 'json',
            timeout: 60000,
        });
    }

    protected async prices(appId: number) {
        return new Promise((resolve: (value: GetPricesResponse) => void, reject: () => void) => {
            try {
                this.hexa
                    .request({
                        url: `market/prices/${appId}`,
                    })
                    .then(({ data }: { data: GetPricesResponse }) => {
                        return resolve(data);
                    })
                    .catch((e) => {
                        return reject();
                    });
            } catch (e) {
                return reject();
            }
        });
    }

    protected async items(appId: number) {
        return new Promise((resolve: (value: GetItemsResponse) => void, reject: () => void) => {
            try {
                this.hexa
                    .request({
                        url: `market/items/${appId}`,
                    })
                    .then(({ data }: { data: GetItemsResponse }) => {
                        return resolve(data);
                    })
                    .catch((e) => {
                        return reject();
                    });
            } catch (e) {
                return reject();
            }
        });
    }

    protected async account() {
        return new Promise((resolve: (value: GetAccountResponse) => void, reject: () => void) => {
            try {
                this.hexa
                    .request({
                        url: `api/account`,
                    })
                    .then(({ data }: { data: GetAccountResponse }) => {
                        return resolve(data);
                    })
                    .catch((e) => {
                        return reject();
                    });
            } catch (e) {
                return reject();
            }
        });
    }
}
