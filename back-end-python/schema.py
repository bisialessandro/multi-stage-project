from flask import jsonify

def generic_response(status, message,extraData):

        schemaResp = jsonify({
                "status":status ,
                "message":message ,
         });

        return schemaResp;
