import React from "react";
import {Button} from "../../../Component/Button/Button";
import {EditText } from "../../../Component/EditText/EditText";
import { Row, Col } from 'react-simple-flex-grid';
import ReactTooltip from 'react-tooltip'
import {TextTooltip} from "./Components/TextTooltip/TextTooltip";
import Select from 'react-select';
import {tables,valueTables} from "../../../Const/Const";


class PipelineProperties extends React.Component{

    constructor(props){
        super(props);
        this.customOnClick = this.customOnClick.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {valueTextDefault : "" ,

        };



    }

    customOnClick(){
        console.log("nic");
        alert("nick");
    }

    onChange = (e)=> {

        this.setState( {
            valueTextDefault :  e.target.value
        });

    }

    onMouseOver = (e) => {



    }


    handleChange = (selectedOption) => {

        this.props.changeValueSelect(selectedOption,"selectedOption")
        console.log(`Option selected:`, selectedOption);
    }

    handleChangeTables = (selectedOptionTables) => {

        this.props.changeValueSelect(selectedOptionTables,"selectedOptionTables")
        console.log(`Option selected:`, selectedOptionTables);
    }


    infoOnClick =  (e) => {

        alert("vai");
    }

    render(){

        return <div>
            <p ref='foo' data-tip='tooltip'></p>
            <Col gutter={40}>
                <div >
                    <Select

                        value={this.state.selectedOptionTables}
                        onChange={(e)=> this.handleChangeTables(e)}
                        options={tables}
                    />
                </div>
                <div>
                    <Select

                        value={this.state.selectedOption}
                        onChange={(e) => this.handleChange(e)}
                        options={valueTables}
                    />
                </div>
                <Button customText="Pipeline Properties:">
                </Button>
            </Col>

            <Col gutter={40}>


                <Row span={4}>
                    <TextTooltip ref="foo" customText="DN" data-tip='tooltip'
                                 onMouseOver={(e) => this.onMouseOver(e)}/>

                    <EditText name="dnProp" inputValue={this.props.editPipeProps.dnProp}  info=" Inches" customOnChange={(e) => this.props.changeValuePipe(e)}/>

                </Row>
                <Row span={4}>
                    <TextTooltip customTextTooltip="Dettagli" customText="Rating " onMouseOver={(e) => this.onMouseOver(e)}
                                 onClick={(e) => this.infoOnClick(e)}/>
                    <EditText   name="ratingProp" inputValue={this.props.editPipeProps.ratingProp}   customOnChange={(e) => this.props.changeValuePipe(e)}/>

                </Row>
                <Row span={4}>
                    <TextTooltip customText="Sch." onMouserOver={(e) => this.onMouseOver(e)}/>
                    <EditText  name="schProp" inputValue={this.props.editPipeProps.schProp}  info=" Kg/m³" customOnChange={(e) => this.props.changeValuePipe(e)}/>
                </Row>
                <Row span={4}>
                    <TextTooltip customText="Thk." onMouserOver={(e) => this.onMouseOver(e)}/>
                    <EditText name="thkProp"  inputValue={this.props.editPipeProps.thkProp}  info=" mm³" customOnChange={(e) => this.props.changeValuePipe(e)}/>
                </Row>
                <Row span={4}>
                    <TextTooltip customText="αd" onMouserOver={(e) => this.onMouseOver(e)}/>
                    <EditText  name="αdProp" inputValue={this.props.editPipeProps.αdProp}  info=" mm/mm°C" customOnChange={(e) => this.props.changeValuePipe(e)}/>
                </Row>



            </Col>
            <ReactTooltip/>


        </div>;
    }
}
export default PipelineProperties;