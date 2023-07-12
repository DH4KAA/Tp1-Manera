interface Product {
    id: number,
    title: string,
    description: string,
    price: number,
    thumbnail: string,
    code: string,
    stock: number
}

class Product implements Product {
    constructor() {
    }
}

class ProductManager {
    products: Product[];

    constructor() {

    }

    AddProduct(product: Product) {
        if (this.ValidateProduct(product)) {

            let max = Math.max(...this.products.map(o => o.id))
            product.id = max + 1;
            this.products.push(product)
        }
        else {
            console.log('There was an error adding the product.')
        }
    }

    ValidateProduct(product: any) {
        const validProperties = Object.keys(new Product);

        const result = this.products.filter(x => x.code === product.code);
        if (result.length > 0) return false;

        if (Object.keys(product) != validProperties) return false;

        const valuesResult = Object.values(product).filter(x => x == undefined || x == null)

        if (valuesResult.length > 1) return false;

        return true;
    }

    GetProducts() {
        return this.products;
    }

    GetProductById(id: number) {
        return this.products.find(x => x.id === id);
    }
}

