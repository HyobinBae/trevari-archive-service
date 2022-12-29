import {useMobileDetect} from "../hooks/useDetectMobile";

interface MyClipboard {
    copyTextToClipboard(data: string): Promise<void>
}

class PcClipboard implements MyClipboard {
    async copyTextToClipboard(data: string) {
        await navigator.clipboard.writeText(data)
    }
}

class MobileClipboard implements MyClipboard {
    async copyTextToClipboard(data: string)  {
        const clipboardItem = new ClipboardItem({
            'text/plain': new Promise((resolve) => {
                resolve(new Blob([data]))
            })
        })
        navigator.clipboard.write([clipboardItem])
    }
}

const isApp = useMobileDetect().isMobile();

const myClipboard = isApp ? new MobileClipboard() : new PcClipboard()

export const clipboard = myClipboard;