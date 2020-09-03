import * as Sqlite from "expo-sqlite";
import { createConnection } from "typeorm/browser";
import { Product } from "../database/entities/Product";

const connect = createConnection({
    type: 'expo',
    database: 'sqlite',
    driver: Sqlite,
    synchronize: true,
    entities: [Product],
});

export default connect;