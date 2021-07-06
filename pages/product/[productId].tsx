import { Fragment } from "react"
import Head from 'next/head'
import ProductDetails from "../../components/ProductDetails"

const HomePage = () => {
    return (
        <Fragment>
            <Head>
                <title>Products</title>
            </Head>
            <ProductDetails />
        </Fragment>
    );
}

export default HomePage