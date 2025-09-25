import { CreationOptional, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import sequelize from "./sequelize";

class Hotel extends Model<InferAttributes<Hotel>, InferCreationAttributes<Hotel>> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare address: string;
    declare location: string;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
    declare deletedAt: CreationOptional<Date | null>;
    declare rating?: number | null;
    declare rating_count?: number | null;
}

Hotel.init({
    id: {
        type: 'INTEGER',
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: 'VARCHAR(255)',
        allowNull: false
    },
    address: {
        type: 'VARCHAR(255)',
        allowNull: false
    },
    location: {
        type: 'VARCHAR(100)',
        allowNull: false
    },
    createdAt: {
        type: 'DATE',
        defaultValue: new Date(),
    },
    updatedAt: {
        type: 'DATE',
        defaultValue: new Date(),
    },
    deletedAt: {
        type: 'DATE',
        defaultValue: null,
    },
    rating: {
        type: 'DECIMAL(3,2)',
        allowNull: true,
        defaultValue: null
    },
    rating_count: {
        type: 'INT',
        allowNull: true,
        defaultValue: null
    }
}, {
    tableName: 'hotels',
    sequelize: sequelize,
    timestamps: true,
    underscored: true, // createdAt --> created_at
    
});

export default Hotel;