import React from 'react';
import styled from 'styled-components';
import Branch from './Branch'
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
      </Switch>
    </Container>
  );
};

export default App;

const Container = styled.div`
  .branches {
    // font-family: 'Balsamiq Sans', cursive;
    // font-family: 'Roboto', sans-serif;
    font-family: 'Lobster', cursive;
    color:#34394B;
    max-width:100%;
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
          }
          .measures{
            margin-bottom:15px;
            display:flex;
            justify-content:flex-end;
            font-family:Roboto;
            .measure{
              font-weight:300;
              min-width:50px;
              max-width:50px;
              margin-left:15px;
              padding:0px 0px;
              text-align:center;
              background:#34394B;
              color:white;
            }
          }
          .lists{
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
          }
        }
      }
      @media only screen and (max-width: 600px) {
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
                max-width:40px;
                min-width:40px;
                margin-left:5px;
              }
            }
            .lists{
              .list{
                font-size:20px;
                .name{
                }
                .variants{
                  .variant{
                    max-width:40px;
                    min-width:40px;
                    margin-left:5px;
                  }
                }
              }
            }
          }
        }
      }
  }
`