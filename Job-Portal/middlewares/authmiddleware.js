import JWT from 'jsonwebtoken';

const userAuth = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer")) {
        next('Auth Failed')
    }
    //const token = req.headers["authorization"]
    const token = authHeader.split(" ")[1];
    //const token = req.headers.authorization.split(' ')[1];
    try {
        const payload = JWT.verify(token, process.env.JWT_SECRET);
        req.user = { userId: payload.userId };
        //req.user = payload;
        next();
    } catch (error) {
        next('Auth Failed');
    }
}
export default userAuth; 