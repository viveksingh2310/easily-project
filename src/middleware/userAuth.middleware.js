export function userauth(req,res,next){
const a= req.cookies('email');
if(a){
    next();
}else{
    return res.render(/* the register page*/)
}
// const b=req.cookie('')
}