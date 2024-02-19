export const cleanPrice = (dirtyPrice, numberOfNum) => {
    const index = dirtyPrice.indexOf('.');
    if (parseInt(dirtyPrice) >= 1) {
        return parseFloat(dirtyPrice).toFixed(numberOfNum).toString();
    }
    else if (parseInt(dirtyPrice) <= 0) {
        return parseFloat(dirtyPrice).toFixed(numberOfNum).toString();
    }
    else if (index !== -1) {
        for (let i = index + 1; i < dirtyPrice.length; i++) {
            const digit = dirtyPrice.charAt(i);
            if (digit !== '0') {
                return parseFloat(dirtyPrice)
                    .toFixed(i - 2 + numberOfNum)
                    .toString();
            }
        }
    }
    else {
        return 'NO DATA';
    }
};
//# sourceMappingURL=cleanPrice.js.map