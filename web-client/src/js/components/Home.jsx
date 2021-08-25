import * as React from 'react';
import {NavigationBar} from "./NavigationBar";


export const Home = () => {
    return (
        <div>
            <NavigationBar />

            <section className="wrapper__home">
                <h1>index</h1>
            </section>
        </div>
    )
}