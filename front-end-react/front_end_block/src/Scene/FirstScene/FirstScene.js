import React from "react";
import FluidProperties from "./Properties/FluidProperties";
import PipelineProperties from "./Properties/PipelineProperties";
import { Column, Row } from 'simple-flexbox';
import {ButtonProperties} from "./Properties/Components/ButtonProperties/ButtonPropreties";
import {tables,valueTables,loc} from "../../Const/Const";
import {Spinner} from "../../Component/Spinner/Spinner";
import ResultScene from "../ResultScene/ResultScene";

class FirstScene extends React.Component{

    constructor(props){
        super(props);


        this.state = {

            prova : 12.3,

            editFluidProps : {
                fluidProp: 909.59,
                ρ1Prop: 909.59,
                μ1Prop: 0.17,
                P1Prop: 45.013,
                T1Prop: 160,
                PSProp: 6.181,
                PCProp: 221.2,
                ρ2Prop: 900.9,
                μ2Prop: 0.169,
                P2Prop: 27.013,
                QmProp: 30000,
                VdProp: 25,
                βProp: 0.2861
            },

            editPipeProps : {
                selectedOptionTables: tables[0].value,
                selectedOption: valueTables[0].value,
                dnProp: '3\"',
                ratingProp:300,
                schProp:40,
                thkProp:0,
                αdProp:0.000017
            },

            loading : false

        };


    }

    onClick(){

        this.setState({

           loading : true
        });

        var myHeaders = new Headers();


        var form = new FormData({pipeProps:this.state.editPipeProps,fluidProps:this.state.editFluidProps});

        var myInit = { method: 'GET',
            headers: myHeaders,
            mode: 'cors',

            cache: 'default' };

        // console.log("fluidProp"+ this.state.editFluidProps.P2Prop.toString());
        /*  ì

         */

        fetch(loc.url+'/test?'
            +'&selectedOptionTables='+this.state.editPipeProps.selectedOptionTables.toString()
            +'&selectedOption='+this.state.editPipeProps.selectedOption.toString()
            +'&dnProp='+this.state.editPipeProps.dnProp.toString()
            +'&ratingProp='+this.state.editPipeProps.ratingProp.toString()
            +'&schProp='+this.state.editPipeProps.schProp.toString()
            +'&thkProp='+this.state.editPipeProps.thkProp.toString()
            +'&αdProp='+this.state.editPipeProps.αdProp.toString()
            +'&fluidProps='+this.state.editFluidProps.fluidProp.toString()
            +'&ρ1Prop='+this.state.editFluidProps.ρ1Prop.toString()
            +'&μ1Prop='+this.state.editFluidProps.μ1Prop.toString()
            +'&P1Prop='+this.state.editFluidProps.P1Prop.toString()
            +'&T1Prop='+this.state.editFluidProps.T1Prop.toString()
            +'&PSProp='+this.state.editFluidProps.PSProp.toString()
            +'&PCProp='+this.state.editFluidProps.PCProp.toString()
            +'&ρ2Prop='+this.state.editFluidProps.ρ2Prop.toString()
            +'&μ2Prop='+this.state.editFluidProps.μ2Prop.toString()
            +'&P2Prop='+this.state.editFluidProps.P2Prop.toString()
            +'&QmProp='+this.state.editFluidProps.QmProp.toString()
            +'&VdProp='+this.state.editFluidProps.VdProp.toString()
            +'&βProp='+this.state.editFluidProps.βProp

            ,myInit)
            .then((result) => {
                // Get the result
                // If we want text, call result.text()
                if(result.ok) {
                    return result.json();
                }

                alert("Error");

            }).then((jsonResult) => {
                 this.setState({

                  loading: false
                 });

             // Do something with the result
              if(jsonResult.status==false){

                 alert(jsonResult.message)
              }else {

                alert(jsonResult.message);
            }
        })


    }

    showAlert(result){

        alert(result);
    }

    changeValueFluid(e){

        let name = e.target.name;
        let value = e.target.value;

        this.setState(prevState => ({
                editFluidProps: {
                ...prevState.editFluidProps,
                [name] : value
            }}));



    }

    changeValuePipe(e){

        let name = e.target.name ;
        let value = e.target.value;

        this.setState(prevState => ({

                editPipeProps : {

                    ...prevState.editPipeProps,
                    [name] : value
                }
            })
        );

    }

    changeValueSelect(e,name){

        let value = e.value;

          console.log(`try enter :`, value);
        console.log(`try enter :`, name);

        this.setState(prevState => ({

            editPipeProps : {
                ...prevState.editPipeProps ,
                [name] :value
            }
        }))
    }



    render(){

        return <div>

            <Column flexGrow={1}>
                <Row horizontal='center'>
                    <h1>Multistage Liquid</h1>
                </Row>
                <Row vertical='center'>
                    <Column flexGrow={1} horizontal='center'>
                        <FluidProperties  updateValue={(e) => this.changeValueFluid(e)} editFluidProps={this.state.editFluidProps} />
                    </Column>
                    <Column flexGrow={1} horizontal='center'>
                        <ButtonProperties textButton={"Calculate"} onClick={() => {this.onClick()}}/>
                        <Spinner loading={this.state.loading}/>

                    </Column>
                    <Column flexGrow={1} horizontal='center'>

                        <PipelineProperties changeValueSelect={(e,name)=> this.changeValueSelect(e,name)} changeValuePipe={(e) => this.changeValuePipe(e)} editPipeProps={this.state.editPipeProps}/>
                    </Column>
                </Row>

            </Column>


        </div>;
    }
}

export default FirstScene;