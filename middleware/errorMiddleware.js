

export const errorMiddleware = (err, req, res, next) => {
    console.log(err.message);
    res.status(err.statuscode || 500).send({
        status : err.statuscode ||  500 ,
        success : false ,
          message: err.message 
        });

}