import {useMobileDetect} from "../hooks/useDetectMobile";
import {shareApi} from "../api/share";

interface MyClipboard {
    copyTextToClipboard(data: string): Promise<void>
}

class PcClipboard implements MyClipboard {
    async copyTextToClipboard(data: string) {
        await navigator.clipboard.writeText(data)
    }
}

class ChannigClipboard implements MyClipboard {
    async copyTextToClipboard(data: string )  {
        const res = await shareApi.register(data)
        const clipboardItem = new ClipboardItem({
            'text/plain': new Promise((resolve) => {
                resolve(new Blob([res]))
            })
        })
        navigator.clipboard.write([clipboardItem])

        // const type = "text/plain";
        // const blob = new Blob([data], { type });
        // const items = [new ClipboardItem({ [type]: blob })];
        //
        // await navigator.clipboard.write(items);
    }
}

const isApp = useMobileDetect().isMobile();

const myClipboard = isApp ? new ChannigClipboard() : new PcClipboard()

export const clipboard = myClipboard;