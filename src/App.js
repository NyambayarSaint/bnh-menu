import React from 'react';
import styled from 'styled-components';
import Branch from './Branch'
import Food from './Food'
import { Route, Switch } from 'react-router';
import Test from './Test'

const App = () => {

  return (
    <Container>
      <Switch>

        <Route path="/test"><Test id="1"/></Route>
        <Route path="/1"><Branch id="1" name="Amure karaoke" /></Route>
        <Route path="/2"><Branch id="2" name="Amure hotel" /></Route>
        <Route path="/3"><Branch id="3" name="Amure bar" /></Route>
        <Route path="/4"><Branch id="4" name="Bers hotel" /></Route>
        <Route path="/5"><Branch id="5" name="Q hotel" /></Route>
        <Route path="/6"><Branch id="6" name="Оффис" /></Route>
        <Route path="/7"><Branch id="7" name="S13 bar" /></Route>
        <Route path="/8"><Branch id="8" name="S13 karaoke" /></Route>
        <Route path="/9"><Branch id="9" name="SQ club" /></Route>
        <Route path="/10"><Branch id="10" name="SQ lounge" /></Route>
        <Route path="/11"><Branch id="11" name="SQ V.I.P LOUNGE" /></Route>
        <Route path="/12"><Branch id="12" name="Secret Garden hotel" /></Route>
        <Route path="/13"><Branch id="13" name="Business Tower hotel" /></Route>
        <Route path="/14"><Branch id="14" name="Venice 28 karaoke" /></Route>
        <Route path="/15"><Branch id="15" name="ТӨВ АГУУЛАХ" /></Route>
        <Route path="/16"><Branch id="16" name="Grand Voice karaoke" /></Route>
        <Route path="/17"><Branch id="17" name="Гоё моторс" /></Route>
        <Route path="/18"><Branch id="18" name="Vox karaoke" /></Route>
        <Route path="/19"><Branch id="19" name="iKaraoke" /></Route>
        <Route path="/20"><Branch id="20" name="Z karaoke" /></Route>
        <Route path="/21"><Branch id="21" name="Q karaoke" /></Route>
        <Route path="/22"><Branch id="22" name="Хүргэлтийн хоол" /></Route>

        <Route path="/food/1"><Food id="1" name="Amure karaoke" /></Route>
        <Route path="/food/2"><Food id="2" name="Amure hotel" /></Route>
        <Route path="/food/3"><Food id="3" name="Amure bar" /></Route>
        <Route path="/food/4"><Food id="4" name="Bers hotel" /></Route>
        <Route path="/food/5"><Food id="5" name="Q hotel" /></Route>
        <Route path="/food/6"><Food id="6" name="Оффис" /></Route>
        <Route path="/food/7"><Food id="7" name="S13 bar" /></Route>
        <Route path="/food/8"><Food id="8" name="S13 karaoke" /></Route>
        <Route path="/food/9"><Food id="9" name="SQ club" /></Route>
        <Route path="/food/10"><Food id="10" name="SQ lounge" /></Route>
        <Route path="/food/11"><Food id="11" name="SQ V.I.P LOUNGE" /></Route>
        <Route path="/food/12"><Food id="12" name="Secret Garden hotel" /></Route>
        <Route path="/food/13"><Food id="13" name="Business Tower hotel" /></Route>
        <Route path="/food/14"><Food id="14" name="Venice 28 karaoke" /></Route>
        <Route path="/food/15"><Food id="15" name="ТӨВ АГУУЛАХ" /></Route>
        <Route path="/food/16"><Food id="16" name="Grand Voice karaoke" /></Route>
        <Route path="/food/17"><Food id="17" name="Гоё моторс" /></Route>
        <Route path="/food/18"><Food id="18" name="Vox karaoke" /></Route>
        <Route path="/food/19"><Food id="19" name="iKaraoke" /></Route>
        <Route path="/food/20"><Food id="20" name="Z karaoke" /></Route>
        <Route path="/food/21"><Food id="21" name="Q karaoke" /></Route>
        <Route path="/food/22"><Food id="22" name="Хүргэлтийн хоол" /></Route>
      </Switch>
    </Container>
  );
};

export default App;

const Container = styled.div`
  .branches {
    // font-family: 'Balsamiq Sans', cursive;
    // font-family: 'Roboto', sans-serif;
    // font-family: 'Lobster', cursive;
    font-family: 'Montserrat', sans-serif;
    color:#34394B;
    color:white;
    max-width:100%;
    background-image: url(https://t4.ftcdn.net/jpg/01/28/77/55/360_F_128775518_Oe4y5IAIrVxhN12IFOU1pYoR91zkOj5d.jpg);
    .background-opacity{
      background-image: url(https://media.istockphoto.com/vectors/seamless-patterns-with-red-wine-set-cask-barrel-wineglass-grape-and-vector-id1152221169?k=20&m=1152221169&s=612x612&w=0&h=ZCjXcFuCli4FfO-_vafYFjm74MUo4wgU6nxzAvT1N6g=);
      position:fixed;
      left:0px;
      right:0px;
      bottom:0px;
      top:0px;
      // background-size:100%;
      opacity:0.2;
    }
    #tsparticles{
      position:fixed;
      left:0px;
      right:0px;
      bottom:0px;
      top:0px;
    }
      .top{
        margin-bottom:30px;
        margin-top:30px;
        text-align:center;
        .title{
          font-size:32px;
          margin-bottom:0px;
        }
      }
      .bottom{
        margin-left:-15px;
        margin-right:-15px;
        display:flex;
        flex-wrap:wrap;
        .list-con{
          max-width:50%;
          min-width:50%;
          padding-left:15px;
          padding-right:15px;
          margin-bottom:30px;
          .title{
            font-size:40px;
            color:#b12c4a;
            color:white;
            opacity:0.7;
          }
          .measures{
            margin-bottom:15px;
            display:flex;
            justify-content:flex-end;
            font-family:Roboto;
            .measure{
              font-weight:bold;
              min-width:50px;
              max-width:50px;
              margin-left:15px;
              padding:0px 0px;
              text-align:center;
              background:#34394B;
              background:white;
              color:white;
              color:#444343;
              
            }
          }
          .lists{
            .list-wrap{
              .img-wrap{
                position:relative;
                z-index:1;
                border:2px solid #EDEDED;
                img{
                  width:100%;
                }
              }
              .list{
                display:flex;
                justify-content:space-between;
                .name{
                  white-space:nowrap;
                  width:0px;
                }
                .variants{
                  display:flex;
                  margin-left:auto;
                  .variant{
                    max-width:50px;
                    min-width:50px;
                    margin-left:15px;
                    text-align:right;
                  }
                }
              } 
              &.food{
                margin-bottom:30px;
                .list{
                  margin-top:-10px;
                  display:block;
                  .name{
                    width:auto;
                    text-align:center;
                  }
                  .description{
                    border-bottom:2px dotted white;
                    padding-bottom:10px;
                    text-align:center;
                    font-size: 16px;
                    margin-top:5px;
                    font-family:Roboto;
                    &:before{
                      content:"(";
                    }
                    &:after{
                      content:")";
                    }
                  }
                  .variants{
                    display:none;
                  }
                }
              }
              &:nth-child(odd){
                .img-wrap{
                  transform:scale(0.8);
                  &:before{
                    display:block;
                    content:"";
                    width:100px;
                    height:20px;
                    background:white;
                    position:absolute;
                    left:-27px;
                    top:15px;
                    transform:rotate(-41deg);
                    opacity:0.6;
                  }
                  &:after{
                    display:block;
                    content:"";
                    width:80px;
                    height:20px;
                    background:white;
                    position:absolute;
                    right:-27px;
                    bottom:15px;
                    transform:rotate(-41deg);
                    opacity:0.6;
                  }
                }
              }
              &:nth-child(even){
                .img-wrap{
                  transform:scale(0.8);
                  &:before{
                    display:block;
                    content:"";
                    width:100px;
                    height:20px;
                    background:white;
                    position:absolute;
                    right:-27px;
                    top:15px;
                    transform:rotate(41deg);
                    opacity:0.6;
                  }
                  &:after{
                    display:block;
                    content:"";
                    width:80px;
                    height:20px;
                    background:white;
                    position:absolute;
                    left:-27px;
                    bottom:15px;
                    transform:rotate(41deg);
                    opacity:0.6;
                  }
                }
              }
            }
          }
        }
      }
      @media only screen and (max-width: 600px) {
        .background-opacity{
          background-size: 100%;
        }
        .bottom{
          .list-con{
            max-width:100%;
            min-width:100%;
            .title{
              font-size:25px;
              margin-bottom:10px;
            }
            .measures{
              .measure{
                max-width:60px;
                min-width:60px;
                margin-left:5px;
              }
            }
            .lists{
              .list-wrap{
                .img-wrap{

                }
                .list{
                  font-size:20px;
                  .name{
                  }
                  .description{
                  }
                  .variants{
                    .variant{
                      max-width:60px;
                      min-width:60px;
                      margin-left:5px;
                    }
                  }
                }
              }
            }
          }
        }
      }
  }
`