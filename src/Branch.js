import styled from 'styled-components';
import React from 'react';
import { populateProducts, transform, returnParents } from './helper'
import Particles from 'react-particles-js';

const Branch = (prop) => {

    const [menu, setMenu] = React.useState([])
    const [loaded, setLoaded] = React.useState(false)

    React.useEffect(() => {
        goFetch()
    }, [])

    const goFetch = async () => {
        const res = await fetch('https://bnh-menu-service.herokuapp.com', {
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
        setMenu(test)
        setLoaded(true)
    }
    return (
        <>
            {loaded ?
                <div className="branches">
                    <Particles params={{
                        "particles": {
                            "number": {
                                "value": 30,
                                "density": {
                                    "enable": false
                                }
                            },
                            "color": "#006851",
                            "size": {
                                "value": 3,
                                "random": true,
                                "anim": {
                                    "speed": 10,
                                    "size_min": 0.3
                                }
                            },
                            "line_linked": {
                                "enable": false
                            },
                            "move": {
                                "random": true,
                                "speed": 1,
                                "direction": "top",
                                "out_mode": "out"
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "bubble"
                                },
                                "onclick": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            },
                            "modes": {
                                "bubble": {
                                    "distance": 250,
                                    "duration": 2,
                                    "size": 0,
                                    "opacity": 0
                                },
                                "repulse": {
                                    "distance": 400,
                                    "duration": 4
                                }
                            }
                        }
                    }} />
                    <div className="container">
                        <div className="top">
                            <div className="title">Menu</div>
                            <div className="description">{prop.name}</div>
                        </div>
                        <div className="bottom">
                            {menu.map(instance => (
                                <div className="list-con" key={Math.random()}>
                                    <div className="title">
                                        {instance.CategoryName}
                                    </div>
                                    {instance.qrMenuIsGrammView && <div className="measures">
                                        {instance.measures.map(msr => (
                                            <div className="measure" key={Math.random()}>{msr}</div>
                                        ))}
                                    </div>}
                                    <div className="lists">
                                        {instance.products.map(product => (
                                            <div className="list" key={Math.random()}>
                                                <div className="name">{product.name}</div>
                                                <div className="variants">
                                                    {product.hasVariant && product.variants.map(variant => (
                                                        <div className="variant" key={Math.random()}>{Number(variant.price) / 1000}K</div>
                                                    ))}
                                                    {!product.hasVariant && <div className="variant">{Number(product.price) / 1000}K</div>}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
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

export default Branch;

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
`