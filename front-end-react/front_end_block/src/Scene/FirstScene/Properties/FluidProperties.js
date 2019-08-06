import React from "react";
import {Button} from "../../../Component/Button/Button";
import {EditText } from "../../../Component/EditText/EditText";
import ReactTooltip from 'react-tooltip';
import { Row, Col } from 'react-simple-flex-grid';
import {TextTooltip} from "./Components/TextTooltip/TextTooltip";



class FluidProperties extends React.Component{

    constructor(props){
        super(props);
        this.customOnClick = this.customOnClick.bind(this);
        this.onChange = this.onChange.bind(this);


        this.state = {
            valueTextDefault : "",




        };

    }

    customOnClick(){
        console.log("nic");
        alert("nick");
    }

    onChange = (e )=> {
        this.setState({

            [e.target.name] : e.target.value
        });

        this.props.updateValueFluid(e);

    }



    onMouseOver = (e) => {



    }

    infoOnClick =  (e) => {

        alert("vai");
    }

    render(){

        return <div>
            <p ref='foo' data-tip='tooltip'></p>
            <Col flexGrow={1}>
                <Button customText="FluidProperties:">
                </Button>
            </Col>

            <Col gutter={40}>


                <Row span={4}>
                    <TextTooltip customTextTooltip="[Fluid Type]" customText="Fluid" data-tip='tooltip'
                                 onMouseOver={(e) => this.onMouseOver(e)}/>
                    <EditText name="fluidProp" inputValue={this.props.editFluidProps.fluidProp}  info=" Kg/m³" customOnChange={(e) => this.props.updateValue(e)} />
                </Row>
                <Row span={4}>
                    <TextTooltip customTextTooltip="[Upstream Density @ P and T]" customText="ρ1 " onMouseOver={(e) => this.onMouseOver(e)}
                                 onClick={(e) => this.infoOnClick(e)}/>
                    <EditText name="ρ1Prop" info="cP³" inputValue={this.props.editFluidProps.ρ1Prop} customOnChange={(e) => this.props.updateValue(e)}/>

                </Row>
                <Row  span={4}>
                    <TextTooltip customTextTooltip="[Upstream Dynamic Viscosity @ P and T]" customText="μ1" onMouserOver={(e) => this.onMouseOver(e)}/>
                    <EditText name="μ1Prop" inputValue={this.props.editFluidProps.μ1Prop}  info="Bar a"  customOnChange={(e) => this.props.updateValue(e)}/>

                </Row>
                <Row span={4}>
                    <TextTooltip    customTextTooltip="[Upstream Pressure]" customText="P1" onMouserOver={(e) => this.onMouseOver(e)}/>
                    <EditText name="P1Prop" info="°C" inputValue={this.props.editFluidProps.P1Prop} customOnChange={(e) => this.props.updateValue(e)}/>
                </Row>
                <Row span={4}>
                    <TextTooltip   customTextTooltip="[Upstream Pressure]" customText="T1 " onMouserOver={(e) => this.onMouseOver(e)}/>
                    <EditText  name="T1Prop" info="Bar a" inputValue={this.props.editFluidProps.T1Prop} customOnChange={(e) => this.props.updateValue(e)}/>
                </Row>
                <Row span={4}>
                    <TextTooltip  customTextTooltip="[Vapour Pressure]" customText="PS " onMouserOver={(e) => this.onMouseOver(e)}/>
                    <EditText  name="PSProp"  inputValue={this.props.editFluidProps.PSProp}  info="Bar a" customOnChange={(e) => this.props.updateValue(e)}/>
                </Row>
                <Row span={4}>
                    <TextTooltip   customTextTooltip="[Critical Pressure]" customText="PC " onMouserOver={(e) => this.onMouseOver(e)}/>
                    <EditText name="PCProp"  inputValue={this.props.editFluidProps.PCProp} info="Kg/m³" customOnChange={(e) => this.props.updateValue(e)}/>
                </Row>
                <Row span={4}>
                    <TextTooltip  customTextTooltip="[Downstream Density @ P and T]"
                                   customText="ρ2 " onMouserOver={(e) => this.onMouseOver(e)}/>
                    <EditText  name="ρ2Prop"  inputValue={this.props.editFluidProps.ρ2Prop} info="cP" customOnChange={(e) => this.props.updateValue(e)}/>
                </Row>
                <Row span={4}>
                    <TextTooltip    customTextTooltip="[Downstream Dynamic Viscosity @ P and T]" customText="μ2" onMouserOver={(e) => this.onMouseOver(e)}/>
                    <EditText  name="μ2Prop"  inputValue={this.props.editFluidProps.μ2Prop} info="Bar a" customOnChange={(e) => this.props.updateValue(e)}/>
                </Row>
                <Row span={4}>
                    <TextTooltip     customTextTooltip="[Downstream Pressure]"
                   customText="P2 " onMouserOver={(e) => this.onMouseOver(e)}/>
                    <EditText  name="P2Prop"  inputValue={this.props.editFluidProps.P2Prop} info="kg/h" customOnChange={(e) =>this.props.updateValue(e)}/>
                </Row>
                <Row span={4}>
                    <TextTooltip   customTextTooltip="[Massic Flow Rate]"
                                      customText="Qm " onMouserOver={(e) => this.onMouseOver(e)}/>
                    <EditText  name="QmProp"   inputValue={this.props.editFluidProps.QmProp} info="m/sec" customOnChange={(e) => this.props.updateValue(e)}/>
                </Row>
                <Row span={4}>
                    <TextTooltip  customTextTooltip="[Fluid Velocity through the holes]]"
                                 customText="Vd" onMouserOver={(e) => this.onMouseOver(e)}/>
                    <EditText  name="VdProp"   inputValue={this.props.editFluidProps.VdProp} info="Kg/m³"    customOnChange={(e) => this.props.updateValue(e)}/>
                </Row>
                <Row span={4}>
                    <TextTooltip  customTextTooltip=""
                                  customText="β'" onMouserOver={(e) => this.onMouseOver(e)}/>
                    <EditText   name="βProp"  inputValue={this.props.editFluidProps.βProp} info="Dimensionless"    customOnChange={(e) => this.props.updateValue(e)}/>
                </Row>


            </Col>
            <ReactTooltip/>


        </div>;
    }
}

export default FluidProperties;