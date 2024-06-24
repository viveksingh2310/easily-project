import { Jobs } from "./jobs.model.js";
export class Applicant{
    constructor(appId,name,email,contact,resumePath){
        this.appId=appId;
        this.name=name;
        this.email=email;
        this.contact=contact;
        this.resumePath=resumePath;
    }
    static applicants=[
new Applicant("1563","Deepak Rana",'deepakran123@gmail.com','6985741957',"src/public/resume/deepakresume.docx"),
new Applicant("1564","Jyoti Rawat",'jyoti123@gmail.com','9584345715',"src/public/resume/jyotiresume.docx"),
new Applicant("1565","Kunal Sharma",'kunalsha123@gmail.com','4578442215',"src/public/resume/kunalresume.docx"),
new Applicant("1566","Prakash Reshawat",'prakash122@gmail.com','4123475947',"src/public/resume/prakashresume.docx"),
new Applicant("1567","Rahul Sharma",'rahulshrma123@gmail.com','1234567890',"src/public/resume/rahulresume.docx"),
];
static getApplicantByEmail(body){//the body should have the email of the applicant whose content is to be viewed
    const {email}=body;//req.body
    const result=Applicant.applicants.find((app)=>{
        if(app.email==email)
        return app;
    }
);
return result;
}
static getApplicantById(id){//this should be used to retrieve the candidate details when the show applicant method is called at Jobs Model
    const result=Applicant.applicants.find((app)=>{
        if(app.id==id){
            return app;
        }
    });
   return result;//undefined is returned if the demanded element is not found. So we have to take care of that case as well to display the content as Applicant not found 
}
static applyJob(applicantID,jobID){//this applicantID would be provide with the help of cookies
    const job=Jobs.getJobById(jobID);
    let err;
    let iferr=false;
    job.applicants.forEach((appID)=> {
    if(appID==applicantID){
      iferr=true;
    }
    });
    if(iferr){
        err='you have already applied for this job';
    }else{
        job.applicants.push(applicantID);
        err='You have successfully applied for this job.';
    }
    return err;
        }
static createApplicant(appId,name,email,contact,resumePath){
    // const {appId,name,email,contact,resumePath}=body;
    const newApplicant=new Applicant(appId,name,email,contact,resumePath);
    Applicant.applicants.push(newApplicant);
    return newApplicant;//with status 201 as put
        }
static checkApplicant(body){//would be of post method
    const {appId,email}=body;
   const result= Applicant.applicants.find((user)=>{
    if(user.appId==appId && user.email==email){
        return user;
    }
    });
    return result;// if undefined then redirect to register
}
// static updateApplicant{ // url - post localhost/applicants/update the data would be on body

// }
}