const waitMiddleware = (req, res, next) =>{
    setTimeout(() => {res.redirect('/final')},1000)
}

export const middlewares = {waitMiddleware}