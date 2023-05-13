//1
type UserTuple = [number, string, string, boolean, undefined, string];
const userInfo: UserTuple = [101, 'Ema', 'John', true, , '101'];
//2
function compare(param1: number[], param2: number[]): number[] {
    return param1.filter(item => param2.indexOf(item) > -1);
}
//3
interface IProduct {
    id: number,
    name: string,
    price: number,
    category: string;
}

function filter<T extends string | number>(products: IProduct[], condition: T): IProduct[] {
    if (typeof condition === 'number') {
        return products.filter(item => item.price > 200);
    }
    else if (typeof condition === 'string') {
        return products.filter(item => item.category === condition);
    }
    return products;
}

export { compare };