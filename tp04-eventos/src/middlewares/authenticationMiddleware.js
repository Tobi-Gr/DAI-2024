import AuthService from './../services/auth-service.js'; 

class AutenticationMiddleware {
    removeBearer = (header) => {
        let returnValue = header;
        if(header && header.startsWith('Bearer ')) {
            returnValue = header.slice(7);
        }
        return returnValue;
    }

    AuthMiddleware = async (req, res, next) => {
        let authHeader = req.headers.authorization;
        let payload;
        let authService;
        console.log("Header: ", authHeader);
        if(!authHeader) {
            res.status(401).send('401 Unauthorized, no iniciaste sesión.');
        } else {
            authService = new AuthService();
            payload = await authService.decryptToken(authHeader);
            if(payload != null){
                req.user = payload;
                next();
            } else{
                res.status(401).send('401 Unauthorized, token inválido.');
            }
        }
    }
}

export default AutenticationMiddleware;