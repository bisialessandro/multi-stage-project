import constant
import json
import math

def getValueAsmeB31_1_2016(x , y ):


    asmeB31_1_2016_x = constant.asmeB31_1_2016_x();
    asmeB31_1_2016_y = constant.asmeB31_1_2016_y();


    return (str(asmeB31_1_2016_x[x] ) +" "+ str(asmeB31_1_2016_y[y]) );


def getListOfTables():
    return constant.tables();

def averageDensity_ρm(ρ1 ,ρ2 ):

    return (ρ1 + ρ2 )/2;

def averageDensityViscosity_μm(μ1, μ2):

    return (μ1+μ2)/2;

def differentialPressure(p1, p2):

    return (p1-p2)*1000;

def pipelineThickness(dn,sch):
    jsonArray = json.loads(open('./scriptFile/files/json/TabellaAnsi.json').read())

    jsonResult = {}

    for jsonObject in jsonArray:
    #    print(jsonObject["DN"])
        if(jsonObject["DN"]==dn+sch):
            jsonResult = jsonObject
            break;

    return jsonResult["Spessore"];

def getOutsidePipelineDiameter(dn):
        jsonArray = json.loads(open('./scriptFile/files/json/PipelineDiameterTable.json').read())

        jsonResult = {}

        for jsonObject in jsonArray:
        #    print(jsonObject["Key"])
            if(jsonObject["Key"]==dn):
                jsonResult = jsonObject
                break;

        return jsonResult["Diameter"];

def getInternalPipelineDiameter(dn,sch,thkCal,thk):
        jsonArray = json.loads(open('./scriptFile/files/json/TabellaAnsi.json').read())

        jsonResult = {}
        print(dn+str(int(sch))+"provone")
        if(dn+str(sch)=="NOT STD"):
            return (thkCal-thk)*2;
        else:
            for jsonObject in jsonArray:
                #print(jsonObject["DN"])
                if(jsonObject["DN"]==dn+str(int(sch))):
                    jsonResult = jsonObject
                    break;

        return jsonResult["DiametroInterno"];



def getPipelineFluidVelocity(n2,qm,ρ1,d):
        return  (n2*qm)/(p1*D**2);

def getMinimumBeta(Vd,vd):
    return math.sqrt(Vd/vd);

def getPipelineReynoldsNumber(n2,qm,D,μm):
    return (n2*qm)/(D*μm);

def rationBeetwenDiameters(qm,N1,c,e,y,d,Fa,Fg,pm,deltap,In):
    return pow((qm/(N1*c*e*y*pow(d,2)*Fa*Fg*math.sqrt(pm)*math.sqrt((deltap/In)))),0.5);

def yIncomprensibleFluid():
    return 1;

def velocityFactor(β1):
    return 1/(math.sqrt(1-pow(β1,4)));

def dischargeCoefficient(c0,β1,ReDf):
    return c0+(91.71*pow(β1,2.5)/pow(ReDf,0.75));

def c0(β1):
    return 0.5959+(0.462*pow(β1,2.1))+(0.48*pow(β1,4)/(pow(1-β1,4)));

def holesReynoldsNumber(n2,Qm,D,μm,nf):
    return n2*Qm/(D*μm*pow(nf,0.5));

def numberOfHoles(β1,D):
    df=7
    returnValue = 0;

    if pow(( β1 *D )/df,2) < 1:
                returnValue = returnValue+1;

    if pow(( β1 *D )/df,2) >1 and pow(( β1 *D )/df,2) <=5:
                returnValue = returnValue+3;

    if pow(( β1 *D )/df,2) > 5 and pow(( β1 *D )/df,2) <= 13  :
                returnValue = returnValue+7;

    if pow(( β1 *D )/df,2) >13 and pow(( β1 *D )/df,2) <=28 :
                returnValue  = returnValue+19;

    if pow(( β1 *D )/df,2) > 28 and pow(( β1 *D )/df,2)<=49 :
                returnValue = returnValue+37;

    if pow(( β1 *D )/df,2) > 49 and pow(( β1 *D )/df,2) <= 76:
                returnValue = returnValue = returnValue+61;

    if pow(( β1 *D )/df,2) > 76 and pow(( β1 *D )/df,2) <= 109 :
                returnValue = returnValue+91;

    if pow(( β1 *D )/df,2) > 109 and pow(( β1 *D )/df,2) <=157 :
                returnValue =returnValue+127;

    if pow(( β1 *D )/df,2) > 157 and pow(( β1 *D )/df,2) <=187:
                returnValue =returnValue+187;


    return returnValue;

def faNumberOfStep(αd,t1):
    return pow((1+(αd*(t1-20))),2);

#TO-DO tabella
def fgBetaCalculation(fg2,fg3,fg6):
    return fg2*fg3*fg6;
#TO-DO tabella
def shapeCorrectiveFactor():
    return 1.020;
#TO-DO tabella
def frictionCorrectiveFactor():
    return 0.9964;

def holesCorrectiveFactor():
    return 1.0041;

def N1():
    return 0.0399859;

def N2():
    return 353.67765;

def numberOfStep(n1,c,e,d,beta,fa,ρ1,deltaρ,qm):
    return pow((n1*c*e*pow(d,2)*pow(beta,2)*fa*math.sqrt(ρ1)*math.sqrt(deltaρ))/qm,2);
