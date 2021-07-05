import classes from './Layout.module.css';
import { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer'

const Layout: React.FC = (props) => {
    return (
        <Fragment>
            <Header />

            <main className={classes.container}>
                {props.children}
            </main>

            <Footer />
        </Fragment>
    );
}

export default Layout;