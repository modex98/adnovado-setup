import { Product } from "~/features/listings";
import styles from "~/assets/scss/modules/listings.module.scss";

const products = [
    {
        name: "some product name",
        price: 136,
    },

    {
        name: "some new prod",
        price: 136,
    },

    {
        name: "some product name",
        price: 136,
    },

    {
        name: "some product name",
        price: 136,
    },

    {
        name: "some product name",
        price: 136,
    },
];

const Index = () => {
    return (
        <div className={styles.container}>
            {products.map(({ name, price }) => (
                <Product name={name} price={price} />
            ))}
        </div>
    );
};

export default Index;
