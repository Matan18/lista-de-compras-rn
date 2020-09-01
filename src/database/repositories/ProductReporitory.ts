import { Repository, getRepository } from "typeorm";
import { Product } from "../entities/Product";

interface IProductDTO {
    name: string;
    quantity?: number;
    price?: number;
    checked?: boolean;
}
interface IUpdateDTO {
    quantity?: number;
    price?: number;
    checked?: boolean;
}

class ProductRepository {
    private ormRepository: Repository<Product>;

    constructor() {
        this.ormRepository = getRepository(Product);
    }
    async create({ name, quantity = 1, price = 0, checked = false }: IProductDTO): Promise<Product> {
        const checkProductExist = await this.ormRepository.findOne({ where: { name } });
        if (checkProductExist) {
            return checkProductExist;
        }
        const newProduct = new Product();
        newProduct.name = name;
        newProduct.quantity = quantity;
        newProduct.price = price;
        newProduct.checked = checked;
        
        const product = await this.ormRepository.save(newProduct);
        return product
    }

    async findAll(): Promise<Product[]> {
        const list = await this.ormRepository.find();
        return list;
    }
    async delete(id: string): Promise<void> {
        const checkProductExist = await this.ormRepository.findOne({ where: { id } });
        if (!checkProductExist) {
            throw Error('Id not found');
        }
        await this.ormRepository.delete(id);
    }
    async update({ id, price, checked, quantity }: Product): Promise<Product> {
        const product = await this.ormRepository.findOne(id);
        if (!product) {
            throw Error('Id not found');
        }
        product.price = price || product.price;
        product.checked = checked || product.checked;
        product.quantity = quantity || product.quantity;
        await this.ormRepository.save(product);
        return product;
    }
    async findOne(id: string): Promise<Product> {
        const product = await this.ormRepository.findOne(id);
        if (!product) {
            throw Error('Id not found');
        }
        return product;
    }

    async clearList(): Promise<void> {
        await this.ormRepository.clear();
    }

}

export default ProductRepository;