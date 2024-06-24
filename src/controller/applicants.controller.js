import { Applicant } from "../model/applicants.model.js";
export class ApplicantController {
    //show applicant is used to display the profile 
    static showProfile(req, res) {// url- get-localhost/applicants/showProfile:id
        const { id } = req.body;
        const applicant = Applicant.getApplicantById(id);
        return res.render('sdfsfsgdg', { applicant: applicant });//again here if the applicant is undefined then we have to take care of that at the ejs level 
    }
        static applyJob(req, res) {//url- post-localhost/applicants/applyJob?appId=123&jobId=123 
        const appid = req.query.appId;
        const jobid = req.query.jobId;
        const result = Applicant.applyJob(appid, jobid);
        return res.render('sdfsfsd', { applyresult: result });//the string message should be displayed as notification or warning
    }
    static getRegister(req,res){
        return res.render('registerApp');
    }
    //'sdfsfsd' this ejs should be the same both in case of applyJob and registerUser and most probably the page where multiple jobs are to be displayed
    static registerUser(req,res){ // url- post-/applicants/register
        //here the cookie whether the user is logged in or not is checked here 
 console.log('heelo world ')
        //else register is returned from here 
        console.log(req);
        const{appId,name,email,contact,resumePath}=req.params;
        console.log(appId);
        console.log(email);
        console.log(contact);
        console.log(resumePath);
        console.log(appId);
        const result=Applicant.createApplicant(appId,name,email,contact,resumePath);
        const msg='your profile is successfully created now you can easily apply for the following jobs';
        return res.render('jobs');//this message is to be printed on the screen when the applicnant is successfully registered 
    }
    static signin(req,res){//this shoudl be envoked only when the mehtos is post
        const result=Applicant.checkApplicant(req.body);
        if(result){
          
            //we will create cookie here for preventing authentication everytime the user send
          res.redirect('/jobs/getJobs');
        }else{
        res.redirect('/applicant/registerApplicant');
        }
    }
    static getLogin(req,res){///applicants/login-get
        return res.render('applicantLogin');
    }

}