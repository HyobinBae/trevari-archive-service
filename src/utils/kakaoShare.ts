import {shareApi} from "../api/share";
import {KAKAO_JAVASCRIPT_API_KEY} from "../config";

const METHOD_OF_KAKAO = "KAKAO";

export const kakaoShare = async () => {
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