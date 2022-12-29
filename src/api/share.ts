import {endpoints} from "../config";

interface ResponseShareUrl {
    originUrl: string,
    tag: string,
    providerId: number,
}

interface RequestShareUrl {
    url: string,
}

export const shareApi = {
    registerShareUrl(url: string) {
        return registerShareUrl(url)
    }
}

const endpoint: string = endpoints.share_endpoint;

const registerShareUrl = async (url: string): Promise<string> => {
    const request : RequestShareUrl = {url};
    try {
        const API_URL = `${endpoint}/apis/v1/shorten-urls`;
        const apt = {
            body: JSON.stringify(request),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const response = await fetch(API_URL, apt);

        if (response.status >= 400) {
            throw Error("response is 400+ \n" + response);
        }

        if (response.status >= 500) {
            throw Error("response is 500+ \n" + response);
        }

        const result: ResponseShareUrl = await response.json();
        return `${endpoint}/${result.tag}`;
    } catch(error) {
        return url;
    }
}