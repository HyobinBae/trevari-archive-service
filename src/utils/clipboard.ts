import {useMobileDetect} from "../hooks/useDetectMobile";
import {shareApi} from "../api/share";

interface MyClipboard {
    copyTextToClipboard(data: string): Promise<void>
}

class PcClipboard implements MyClipboard {
    async copyTextToClipboard(data: string) {
        const result = await shareApi.register(data);
        await navigator.clipboard.writeText(result)
    }
}

class MobileClipboard implements MyClipboard {
    async copyTextToClipboard(data: string )  {
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
        await navigator.clipboard.write([clipboardItem])
    }
}

const isApp = useMobileDetect().isMobile();

const myClipboard = isApp ? new MobileClipboard() : new PcClipboard()

export const clipboard = myClipboard;