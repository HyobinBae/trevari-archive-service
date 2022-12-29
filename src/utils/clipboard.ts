import {useMobileDetect} from "../hooks/useDetectMobile";
import {shareApi} from "../api/share";

interface MyClipboard {
    copyTextToClipboard(data: string): Promise<void>
}

class PcClipboard implements MyClipboard {
    async copyTextToClipboard(data: string) {
        alert("pc")
        shareApi.register(data).then(result => {
            navigator.clipboard.writeText(result)
        });
    }
}

class IosClipboard implements MyClipboard {
    async copyTextToClipboard(data: string )  {
        alert("mo")
        // ClipboardItem 내부에서 Promise 를 받아야 정상 동작
        const clipboardItem = new ClipboardItem({
            'text/plain': shareApi.register(data).then((result) => {
                if (!result) {
                    return new Promise((resolve) => {
                        resolve(new Blob([data]))
                    })
                }
                return new Promise((resolve) => {
                    resolve(new Blob([result]))
                })
            }),
        })
        navigator.clipboard.write([clipboardItem])
    }
}

const isIos = useMobileDetect().isIos();

const myClipboard = isIos ? new IosClipboard() : new PcClipboard()

export const clipboard = myClipboard;