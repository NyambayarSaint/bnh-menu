import styled from 'styled-components';
import React from 'react';
import { populateProducts, transform, returnParents, fooderize } from './helper'
import Particles from 'react-particles-js';

const Food = (prop) => {

    const [menu, setMenu] = React.useState({})
    const [loaded, setLoaded] = React.useState(false)

    React.useEffect(() => {
        goFetch()
    }, [])

    const goFetch = async () => {
        const res = await fetch('http://localhost:5000', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: prop.id })
        })
        const json = await res.json()
        const parents = returnParents(json)
        const products = populateProducts(parents, json)
        const test = transform(products)
        const food = fooderize(test)
        setMenu(food)
        // setLoaded(true)
    }
    return (
        <>
            {loaded ?
                <div className="branches">
                    <div className="container">
                        
                    </div>
                </div>
                :
                <Loader>
                    <img src="/logo.png" className="logo" />
                    <img src="/loading.gif" className="loader" />
                </Loader>
            }

        </>
    );
};

export default Food;

const Loader = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    height:100vh;
    .loader{
        width:100%;
    }
    .logo{
        opacity:0;
        width:100px;
        position:absolute;
        left:50%;
        margin-left:-50px;
        top:15px;
    }
    .food-branches{

    }
`