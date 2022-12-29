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
    async copyTextToClipboard( text: string)  {
        const type = "text/plain";
        const blob = new Blob([text], { type });
        alert(blob)
        const data = [new ClipboardItem({ [type]: blob })];
        alert(data)


        navigator.clipboard.write(data).then(
            () => {
                alert('')
                /* success */
            },
            (error) => {
                alert(error)
                /* failure */
            }
        );

    }
}

const isApp = useMobileDetect().isMobile();

const myClipboard = isApp ? new ChannigClipboard() : new PcClipboard()

export const clipboard = myClipboard;