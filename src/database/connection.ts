import * as Sqlite from "expo-sqlite";
import { createConnection } from "typeorm/browser";
import { Product } from "../database/entities/Product";

const connect = createConnection({
    database: 'test',
    driver: Sqlite,
    entities: [Product],
    type: 'expo'
});

export default connect;