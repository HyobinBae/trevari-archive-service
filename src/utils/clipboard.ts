import {useMobileDetect} from "../hooks/useDetectMobile";

interface MyClipboard {
    copyTextToClipboard(data: string): Promise<void>
}

class PcClipboard implements MyClipboard {
    async copyTextToClipboard(data: string) {
        await navigator.clipboard.writeText(data)
    }
}

class ChannigClipboard implements MyClipboard {
    async copyTextToClipboard( data: string)  {
        const clipboardItem = new ClipboardItem({
            'text/plain': data
        })

        navigator.clipboard.write([clipboardItem])
    }
}

const isApp = useMobileDetect().isMobile();

const myClipboard = isApp ? new ChannigClipboard() : new PcClipboard()

export const clipboard = myClipboard;