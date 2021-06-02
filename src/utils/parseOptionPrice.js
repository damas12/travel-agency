export const parseOptionPrice = price => {
    price = price.replace('$', '').replace(',', '');
    return parseFloat(price);
};