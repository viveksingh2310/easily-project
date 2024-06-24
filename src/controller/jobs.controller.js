import { Jobs } from "../model/jobs.model.js";
import cookieParser from "cookie-parser";
export class JobsController{
static showApplicant(req,res){ //   url-/jobs/showApplicants/:id id as a parameter
const {id}=req.param;
const applicantArray=Jobs.getApplicants(id);
    return res.render('sjdjsdj',{array:applicantArray});//if the applicantArray is empty then that case should be properly handled at the ejs template of the desired path
}
static showJobs(req,res){// url- get/ after the loginm is completed
return res.render('jobs',{jobs:Jobs.getJobs(),jobArray:null});//dfgdfgg should handle the case when jobs is only one elemented-array
}
static showJob(req,res){// url- get/:id
    const idparam =req.params.id.replace(':','');
    const job=Jobs.getJobById(idparam);
    return res.render('job',{job:job,jobArray:Jobs.jobs});// in this case only one element is in the array and we have to handle this case at the views>whateverejsfile.ejs
}
static showUpdatedJob(req,res){
const data=req.body;
const result=Jobs.createJob(data);
console.log(result);
return res.render('jobs',{jobs:Jobs.getJobs(),jobArray:Jobs.jobs});

}
static postAJob(req,res){
    return res.render('postJob');
}
 }