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
    async copyTextToClipboard(data: string )  {
        const type = "text/plain";
        const blob = new Blob([data], { type });
        alert(blob)
        const items = [new ClipboardItem({ [type]: blob })];
        alert(items)


        navigator.clipboard.write(items).then(
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