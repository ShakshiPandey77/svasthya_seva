import React from 'react';
// import section header
import SectionHeader from './partials/SectionHeader';
// import sections
import HeroFull from './HeroFull02';

import Team from './Team';
import GenericSection from './GenericSection';
import Roadmap from './Roadmap';
import Cta from './Cta';
// import some required elements
import Image from '../elements/Image';
import Input from '../elements/Input';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Modal from '../elements/Modal';
import Accordion from '../elements/Accordion';
import AccordionItem from '../elements/AccordionItem';
import Timeline from '../elements/Timeline';
import TimelineItem from '../elements/TimelineItem';
import CardForFlowchart from './CardForFlowchart';
import {Redirect} from 'react-router-dom';

class primary extends React.Component {

  state = {
    demoModalActive: false,
    c1:false,
    c2:false,
    c3:false,
    c4:false,
    c5:false,
    c6:false,
    c7:false,
    c8:false,
    c9:false,
    c10:false
  }

  /*openModal = (e) => {
    e.preventDefault();
    this.setState({ demoModalActive: true });
  }

  closeModal = (e) => {
    e.preventDefault();
    this.setState({ demoModalActive: false });
  }*/


  handler = (e) => {
    e.preventDefault();
    if(e.target.id==="1")
    {
      this.setState({ c1: !this.state.c1 });
      if(this.state.c2)
          this.setState({c2: !this.state.c2});
      if(this.state.c3)
          this.setState({c3: !this.state.c3});
      if(this.state.c4)
          this.setState({c4: !this.state.c4});
      if(this.state.c5)
          this.setState({c5: !this.state.c5});
      if(this.state.c6)
          this.setState({c6: !this.state.c6});
      if(this.state.c7)
          this.setState({c7: !this.state.c7});
      if(this.state.c8)
          this.setState({c8: !this.state.c8});
      if(this.state.c9)
          this.setState({c9: !this.state.c9});
      if(this.state.c10)
          this.setState({c10: !this.state.c10});
    }


    if(e.target.id==="2")
    {
        this.setState({c2: !this.state.c2});
      if(this.state.c3)
          this.setState({c3: !this.state.c3});
      if(this.state.c4)
          this.setState({c4: !this.state.c4});
      if(this.state.c5)
          this.setState({c5: !this.state.c5});
      if(this.state.c6)
          this.setState({c6: !this.state.c6});
      if(this.state.c7)
          this.setState({c7: !this.state.c7});
      if(this.state.c8)
          this.setState({c8: !this.state.c8});
      if(this.state.c9)
          this.setState({c9: !this.state.c9});
      if(this.state.c10)
          this.setState({c10: !this.state.c10});

    }

    if(e.target.id==="3")
      {
        this.setState({c3: !this.state.c3});
        if(this.state.c2)
          this.setState({c2: !this.state.c2});
        if(this.state.c4)
          this.setState({c4: !this.state.c4});
        if(this.state.c5)
          this.setState({c5: !this.state.c5});
        if(this.state.c6)
          this.setState({c6: !this.state.c6});
        if(this.state.c7)
          this.setState({c7: !this.state.c7});
      if(this.state.c8)
          this.setState({c8: !this.state.c8});
      if(this.state.c9)
          this.setState({c9: !this.state.c9});
      if(this.state.c10)
          this.setState({c10: !this.state.c10});

      }
      if(e.target.id==="4")
      {
        this.setState({c4: !this.state.c4});
        if(this.state.c2)
          this.setState({c2: !this.state.c2});
        if(this.state.c3)
          this.setState({c3: !this.state.c3});
        if(this.state.c5)
          this.setState({c5: !this.state.c5});
        if(this.state.c6)
          this.setState({c6: !this.state.c6});
        if(this.state.c7)
          this.setState({c7: !this.state.c7});
      if(this.state.c8)
          this.setState({c8: !this.state.c8});
      if(this.state.c9)
          this.setState({c9: !this.state.c9});
      if(this.state.c10)
          this.setState({c10: !this.state.c10});

      }
      if(e.target.id==="5")
      {
        this.setState({c5: !this.state.c5});
        if(this.state.c6)
          this.setState({c6: !this.state.c6});
        if(this.state.c7)
          this.setState({c7: !this.state.c7});
      if(this.state.c8)
          this.setState({c8: !this.state.c8});
      if(this.state.c9)
          this.setState({c9: !this.state.c9});
      if(this.state.c10)
          this.setState({c10: !this.state.c10});

      }
      if(e.target.id==="6")
      {
        this.setState({c6: !this.state.c6});
        if(this.state.c5)
          this.setState({c5: !this.state.c5});
        if(this.state.c7)
          this.setState({c7: !this.state.c7});
      if(this.state.c8)
          this.setState({c8: !this.state.c8});
      if(this.state.c9)
          this.setState({c9: !this.state.c9});
      if(this.state.c10)
          this.setState({c10: !this.state.c10});

      }
      if(e.target.id==="7")
      {
        this.setState({c7: !this.state.c7});
        if(this.state.c5)
          this.setState({c5: !this.state.c5});
        if(this.state.c6)
          this.setState({c6: !this.state.c6});
      if(this.state.c8)
          this.setState({c8: !this.state.c8});
      if(this.state.c9)
          this.setState({c9: !this.state.c9});
      if(this.state.c10)
          this.setState({c10: !this.state.c10});

      }
      if(e.target.id==="8")
      {
        this.setState({c8: !this.state.c8});

      if(this.state.c9)
          this.setState({c9: !this.state.c9});
      if(this.state.c10)
          this.setState({c10: !this.state.c10});

      }
      if(e.target.id==="9")
      {
        this.setState({c9: !this.state.c9});

      if(this.state.c8)
          this.setState({c8: !this.state.c8});
      if(this.state.c10)
          this.setState({c10: !this.state.c10});

      }
      if(e.target.id==="10")
      {
        this.setState({c10: !this.state.c10});

      if(this.state.c8)
          this.setState({c8: !this.state.c8});
      if(this.state.c9)
          this.setState({c9: !this.state.c9});

      }




  }

  onSubmit = () => {

        return  <Redirect  to="/hospitals/" />;

 }

  render() {
    let hospitalUrl="/hospitals";
    let hospitallink=<a href={hospitalUrl}>Click to find COVID Hospitals</a>
    let contentrule=<div>1. Strictly isolate yourself at home till
    test result is received<br/> 2.Follow doctor's instructions</div>
    let contentisolation=<div>Home isolation<br/>Hotel isolation(Paid by Patient)<br/>
    Isolation Centers Government(Covid Care centers-CCC)</div>
    return (
      <React.Fragment>



                <div className="container">

                  <div className="center-content">
                    <div>
                      <ButtonGroup>
                        <Button
                          color="primary"
                          aria-controls="demo-modal"
                          onClick={this.handler}
                          id="1">
                          Not feeling well?
                        </Button>
                      </ButtonGroup>
                    </div>

                  <div className="container-xs">
                    {
                      this.state.c1?
                      <div>
                        <br/>

                      <CardForFlowchart content="Consult Doctor Or Visit Fever Clinic"/>
                      <br/>
                      <ButtonGroup>
                        <Button color="primary" id="2" onClick={this.handler} wideMobile>IS Covid Test recommended ?</Button>
                        {/* <Button color="primary" id="3" onClick={this.handler} wideMobile>Visit Fever Clinic</Button> */}

                      </ButtonGroup>
                        <div className="container-xs">
                        {

                        this.state.c2?
                        <ButtonGroup>

                          <Button color="primary" id="3" onClick={this.handler} wideMobile>YES</Button>
                          <Button color="primary" id="4" onClick={this.handler} wideMobile>NO</Button>
                        </ButtonGroup>
                        :
                        null
                      }
                      </div>
                      <br/>
                      </div>
                      :
                      null
                    }
                  </div>

                  {
                  this.state.c3?
                      <div>YES</div>
                  :
                  null}
                  {
                  this.state.c4?
                      <div>NO</div>
                  :
                  null}

                  <div className="container-xs">
                      {

                      this.state.c3?
                      <div>
                      {/* <ButtonGroup>
                        <Button color="primary"  wideMobile></Button>
                        <br/><br/>
                        </ButtonGroup> */}
                        <CardForFlowchart content={contentrule}/>
                        <br/>
                        <ButtonGroup>
                        <Button color="primary" id="5" onClick={this.handler} wideMobile>What is your COVID Test Result ?</Button>

                      </ButtonGroup>

                          <div className="container-xs">
                          {

                          this.state.c5?
                          <ButtonGroup>

                            <Button color="primary" id="6" onClick={this.handler} wideMobile>POSITIVE</Button>
                            <Button color="primary" id="7" onClick={this.handler} wideMobile>NEGATIVE</Button>

                          </ButtonGroup>

                          :
                          null
                          }
                          </div>
                      </div>
                      :
                      null
                    }
                  </div>
                  <div className="container-xs">
                      {

                      this.state.c4?
                      // <ButtonGroup>
                      //   <Button color="primary"  wideMobile>Take Prescribed medicine , follow social distancing</Button>
                      //   <br/>


                      // </ButtonGroup>
                      <CardForFlowchart content="Take prescribed medicine, follow social distancing"/>
                      :
                      null
                    }
                  </div>
                  <br/>
                  {
                  this.state.c6?
                      <div>POSITIVE</div>
                  :
                  null}
                  {
                  this.state.c7?
                      <div>NEGATIVE</div>
                  :
                  null}
                  <div className="container-xs">
                      {

                      this.state.c6?
                      <div>
                        {/* <ButtonGroup>
                        <Button color="primary"  wideMobile>Consult with your Doctor,<br/>follow doctors instructions</Button>
                        <br/>
                        <br/>
                        </ButtonGroup> */}
                        <CardForFlowchart content="Consult with your Doctor, follow doctor's instructions"/>
                        <br/>
                        <ButtonGroup>
                        <Button color="primary" id="8" onClick={this.handler} wideMobile>Is Hospitilisation required ?</Button>

                      </ButtonGroup>

                        <div className="container-xs">
                        {

                        this.state.c8?
                        <ButtonGroup>

                          <Button color="primary" id="9" onClick={this.handler} wideMobile>YES</Button>
                          <Button color="primary" id="10" onClick={this.handler} wideMobile>NO</Button>
                        </ButtonGroup>
                        :
                        null
                        }
                        </div>
                      </div>
                      :
                      null
                    }
                  </div>
                  <div className="container-xs">
                      {

                      this.state.c7?
                      // <ButtonGroup>
                      //   <Button color="primary"  wideMobile>Consult Doctor, follow medication and instructions</Button>
                      //   <br/>


                      // </ButtonGroup>
                      <CardForFlowchart content="Consult with your Doctor, follow medication and instructions"/>
                      :
                      null
                    }
                  </div>
                  <br/>
                  {
                  this.state.c9?
                      <div>YES</div>
                  :
                  null}
                  {
                  this.state.c10?
                      <div>NO</div>
                  :
                  null}
                  <br/>
                  <div className="container-xs">
                    {
                    this.state.c9?
                    <div>

                     <ButtonGroup>
                       <br/>
                        {/* <Button color="primary" onClick={this.onSubmit} wideMobile>click for Govt. Hopspitals</Button>
                        <Button color="primary"  wideMobile >click for Private Hospoitals </Button> */}
                        <Button color="primary" > {hospitallink}</Button>

                      </ButtonGroup>
                    </div>
                    :
                    null
                    }
                  </div>
                  <div className="container-xs">
                    {
                    this.state.c10?
                    <div>

                      <CardForFlowchart content={contentisolation}/>
                    </div>
                    :
                    null
                    }
                  </div>










                  </div>

                </div >

    </React.Fragment>
    );
  }
}

// inline style
const formStyle = {
  maxWidth: '420px',
  margin: '0 auto'
}

export default primary;
