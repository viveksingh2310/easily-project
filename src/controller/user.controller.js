import { User } from "../model/users.model.js";
import { Jobs } from "../model/jobs.model.js";
export class UserController{
    static addUser(req,res){
        const result=User.addUser(req.body);
        // console.log(req.body);
        res.redirect('userloginShowJob')
    }
    static userLoginShowJob(req,res){//userLoginShowJob
        if(User.signIn(req.body)){
          return res.render('userShowJobs',{jobs:Jobs.jobs});
        }else{
// app.post('/userRegister',UserController.addUser);
res.redirect('/userRegister',{jobs:Jobs.jobs});
        }
    }
    static postJobAuth(req,res){
        return res.render('userlogin');
    }
    static checkUser(req,res){
        const result=User.signIn(req.body);
      if(result)
      return res.render('postJob');
      else
      return res.redirect('userRegister');
    }
    static signInUser(req,res){
        const result=User.signIn(req.body);
        if(result){ 
            console.log(req.body.email);
            return res.render('userPage',{user:User.getUserByEmail(req.body.email)});}
    else return res.render('index');
    
    }
    static getuserShowJobs(req,res){
        return res.render('userShowJobs',{jobs:Jobs.jobs});
    }
    static getDeleteJob(req,res){
        return res.render('deleteJob');
    }
    static postDeleteJob(req,res){
        const {id}=req.body;
        const rslt=Jobs.deleteJob(id);
        return res.render('jobs',{jobs:rslt,jobArray:null});
    }
    static getupdateJob(req,res){
        return res.render('updateJob');
    }
    static postupdateJob(req,res){
        const result=Jobs.updateJob(req.body);
       if(result)
       return res.render('jobs',{jobs:result,jobArray:null});
    else return res.render('errorPage');//or you coul return to index


    }
}