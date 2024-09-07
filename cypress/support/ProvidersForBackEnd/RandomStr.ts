export const randomString = (length: number): string => {
    const alphaNumbericText = '0123456789abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = length; i > 0; --i) {
        result += alphaNumbericText[Math.floor(Math.random() * alphaNumbericText.length)];
    }
    return result;
};