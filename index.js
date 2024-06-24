import express from 'express';
import path from 'path';
import expressEjsLayouts from 'express-ejs-layouts';
import cookieParser from 'cookie-parser';
import { UserController } from './src/controller/user.controller.js';
import { uploadFiles } from './src/middleware/upload-file.applicant.middleware.js';
import session from 'express-session';// 
import bodyParser from 'body-parser';
import { JobsController } from './src/controller/jobs.controller.js';
import { ApplicantController } from './src/controller/applicants.controller.js';
export const app=express();
app.set('view engine','ejs');
app.use(expressEjsLayouts);//layout.ejs
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static("src/public"));
app.use(express.urlencoded({extended:true}));
app.set('views',path.join(path.resolve(),'src','views'));// src/views
app.get('/',(req,res)=>{
    return res.render('index');
});
app.get('/index',(req,res)=>{
    return res.render('index');
});
app.get('/user/login',(req,res)=>{
    return res.render('userlogin');
});
app.get('/jobs/getJobs',JobsController.showJobs);
// app.get('/jobs/getJobs',(req,res)=>{
// });
// /applicants/signin:jobId=3
app.get('/applicants/signin',ApplicantController.getLogin);
app.get('/job:id',JobsController.showJob);
app.post('/applicants/checkApplicant',ApplicantController.signin)
app.post('/user/checkUser',)// we have to build the user controller and then model first to implement the req,res 
app.get('/applicants/login',ApplicantController.getLogin);
app.get('/applicant/registerApplicant',ApplicantController.getRegister);
app.post('/applicant/registerApplicant',uploadFiles.single('resumePath'),ApplicantController.registerUser); 
app.get('/postJobAuth',UserController.postJobAuth);
app.post('/checkUserDetails', UserController.checkUser)//POST /checkUserDetails POST /checkUserDetails
app.post('/userRegister',UserController.addUser);

// app.get('/users/userPage',(req,res)=>{
//     return res.render('userPage');
// })






app.get('/users/login',(req,res)=>{
    return res.render('signinUser');
});//
app.post('/users/login',UserController.signInUser);//











// res.render('userloginShowJob')
app.get('/userloginShowJob',(req,res)=>{
        // res.redirect('userloginShowJob')
        return res.render('userloginShowJob');
});
app.post('/userloginShowJob',UserController.userLoginShowJob);
app.get('/userShowJobs',UserController.getuserShowJobs);
app.get('/userRegister',(req,res)=>{
    return res.render('userRegister');
});
app.post('/postJob',JobsController.showUpdatedJob);



//  the userPage href's are from here
app.get('/users/postJob',(req,res)=>{return res.render('postJob')});
app.post('/users/postJob');// to be completed 


app.get('/users/deleteJob',UserController.getDeleteJob)
app.post('/users/deleteJob',UserController.postDeleteJob);

app.get('/users/updateJob',UserController.getupdateJob);
app.post('/users/updateJob',UserController.postupdateJob);

app.get('/users/getApplicants',);
app.post('/users/getApplicants',);

// the userPage href's end at here