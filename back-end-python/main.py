import function_mat
import schema
import os
from flask import Flask, jsonify, make_response, request, current_app
import json
from flask_cors import CORS
import json

API_VERSION = 'v1'

app = Flask(__name__)
CORS(app)

# Note: A secret key is included in the sample so that it works.
# If you use this code in your application, replace this with a truly secret
@app.route('/')
def index():
  return "{\"c\":\"prova\"}";


@app.route('/test',methods = ['GET'] )
def test_api_request():
    getValueAsmeB31_1_2016 =  "";
    selectedOptionTables = request.args.get('selectedOptionTables','')
    selectedOption = request.args.get('selectedOption','')
    dnProp = request.args.get('dnProp','')
    ratingProp = float(request.args.get('ratingProp',''))
    schProp = float(request.args.get('schProp',''))
    thkProp = float(request.args.get('thkProp',''))
    αdProp = float(request.args.get('αdProp',''))
    fluidProp = request.args.get('fluidProp','')
    ρ1Prop = float(request.args.get('ρ1Prop',''))
    μ1Prop = float(request.args.get('μ1Prop',''))
    P1Prop = float(request.args.get('P1Prop',''))
    T1Prop = float(request.args.get('T1Prop',''))
    PSProp = float(request.args.get('PSProp',''))
    PCProp = float(request.args.get('PCProp',''))
    ρ2Prop = float(request.args.get('ρ2Prop',''))
    μ2Prop = float(request.args.get('μ2Prop',''))
    P2Prop = float(request.args.get('P2Prop',''))
    QmProp = float(request.args.get('QmProp',''))
    VdProp = float(request.args.get('VdProp',''))
    βProp = float(request.args.get('βProp',''))
    N1 = function_mat.N1()
    N2 = function_mat.N2()
#def rationBeetwenDiameters(qm,N1,c,e,y,d,Fa,Fg,pm,deltap,In):

    c0 = function_mat.c0(βProp);

    de = function_mat.getOutsidePipelineDiameter(dnProp)

    d = function_mat.getInternalPipelineDiameter(dnProp,schProp,de,0);

    nf = function_mat.numberOfHoles(βProp,d);

    μm = function_mat.averageDensityViscosity_μm(μ1Prop,μ2Prop);


    reDf =  function_mat.holesReynoldsNumber(N2,QmProp,d,μm,nf);

    c =  function_mat.dischargeCoefficient(c0,βProp,reDf,);

    e = function_mat.velocityFactor(βProp);

    fa = function_mat.faNumberOfStep(αdProp,T1Prop);
    #print("eccocive",str(αdProp)+" "+str(T1Prop)+" "+str(fa));
    fg2 = function_mat.shapeCorrectiveFactor();
    fg3 = function_mat.frictionCorrectiveFactor();
    fg6 = function_mat.holesCorrectiveFactor();
    fg = function_mat.fgBetaCalculation(fg2,fg3,fg6);

    ρm = function_mat.averageDensity_ρm(ρ1Prop,ρ2Prop);
    deltap = function_mat.differentialPressure(P1Prop,P2Prop);
    #numberOfStep(n1,c,e,d,beta,fa,ρ1,deltaρ,qm):

    #c appena diverso , e = ok ,
    ns = int(function_mat.numberOfStep(N1,c,e,d,βProp,fa,ρ1Prop,deltap,QmProp));
    #(qm,N1,c,e,y,d,Fa,Fg,pm,deltap,In):
    print("eccocive",str(QmProp)+" "+str(N1)+" "+str(c)+" "+str(e)+" "+str(d)+" "+str(fa)+" "+str(fg)+" "+str(schProp) +" "+str(ρm)+" "+str(deltap)+" "+str(ns) )
    beta_final = function_mat.rationBeetwenDiameters(QmProp,N1,c,e,1,d,fa,fg,ρm,deltap,ns);


    #print(function_mat.pipelineThickness("3\"","40"))

    #print(function_mat.getOutsidePipelineDiameter("3\""))

    #print(function_mat.getInternalPipelineDiameter("3\"","40",0,0))

    try:
     getValueAsmeB31_1_2016 = function_mat.getValueAsmeB31_1_2016( pipeProps, fluidProps)
    except Exception:
        print("Somenthing went wrong")
        #return schema.generic_response("false","Somenthing went wrong","");
    else:
        print("ok")

    return schema.generic_response("true",str(beta_final),"");

@app.route('/tables')
def tablesList():

    x = function_mat.getListOfTables();

    json_x =  json.dumps(x);

    return  json_x ;




if __name__ == '__main__':
  # When running locally, disable OAuthlib's HTTPs verification.
  # ACTION ITEM for developers:
  #     When running in production *do not* leave this option enabled.
  #os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = '1'

  # Specify a hostname and port that are set as a valid redirect URI
  # for your API project in the Google API Console.
  app.run('localhost', 8080, debug=True)
