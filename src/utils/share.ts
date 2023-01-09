import {shareApi} from "../api/share";
import {KAKAO_JAVASCRIPT_API_KEY} from "../config";

const METHOD_OF_KAKAO = "KAKAO";

const kakaoShare = (): void => {
    const originUrl = window.location.href
    shareApi.register(originUrl, METHOD_OF_KAKAO)
        .then((res) => {
            if (!window.Kakao.isInitialized()) {
                window.Kakao.init(KAKAO_JAVASCRIPT_API_KEY);
            }
            window.Kakao.Share.sendScrap({
                requestUrl: res,
                installTalk: true
            })
        })
        .catch(e => e);
}

const linkShare = () : void => {
    const originUrl = window.location.href;
    const clipboardItem = new ClipboardItem({
        'text/plain': shareApi.register(originUrl)
            .then((result) => {
                return new Promise((resolve) => {
                    resolve(new Blob([result], {type: 'text/plain'}))
                })
            })
            .catch(() => {
                return new Promise((resolve) => {
                    resolve(new Blob([originUrl], {type: 'text/plain'}))
                })
            })
    });
    navigator.clipboard.write([clipboardItem]);
}

export const share = {
    kakao() {
        return kakaoShare();
    },
    link() {
        return linkShare();
    }
}