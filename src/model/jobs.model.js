import { Applicant } from "./applicants.model.js";
export class Jobs {
    constructor(id, cat, designation, location, companyName, salary, applyBy, skillsReq, numOpening, jobPosted, applicants,desc) {
        this.id = id;
        this.cat = cat;//category
        this.designation = designation;
        this.location = location;
        this.companyName = companyName;
        this.salary = salary;
        this.applyBy = applyBy;
        this.skillsReq = skillsReq;//array 
        this.numOpening = numOpening;
        this.jobPosted = jobPosted;
        this.applicants = applicants;//only the id of the aplicant are to be stores in this to reduce the space
        this.desc=desc;
    }
    static jobs = [//if the applicant id not found then 'Applicant Not Found' Should be Returned
        new Jobs(1, 'tech', 'Cloud Engineer', 'Gurugram,India', 'ITC Ltd.', '5.4 LPA', '20/4/2024', ['cloud', 'web', 'node'], 15, '15/03/2024', [1563, 1564, 1566, 1560],'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae quia, nobis aliquid porro mollitia voluptates ut ea ex quas consequuntur beatae placeat quod inventore aliquam facere cupiditate voluptatum non minus provident sed nesciunt! Veniam, perspiciatis reprehenderit numquam nihil in quaerat inventore commodi quae. Molestiae voluptatum, reprehenderit tempore dolor ut illum beatae est porro omnis sapiente deserunt earum, ratione repellat? Veniam repudiandae consequatur optio officiis voluptatibus sunt mollitia.'),
        new Jobs(2, 'non-tech', 'Sales Associate', 'Roorkee,India', 'Forever Ltd.', '8.8 LPA', '15/4/2024', ['sales', 'business developer', 'associate'], 150, '15/03/2024', [1567, 1564, 1525, 1560],'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae quia, nobis aliquid porro mollitia voluptates ut ea ex quas consequuntur beatae placeat quod inventore aliquam facere cupiditate voluptatum non minus provident sed nesciunt! Veniam, perspiciatis reprehenderit numquam nihil in quaerat inventore commodi quae. Molestiae voluptatum, reprehenderit tempore dolor ut illum beatae est porro omnis sapiente deserunt earum, ratione repellat? Veniam repudiandae consequatur optio officiis voluptatibus sunt mollitia.'),
        new Jobs(3, 'tech', 'Cloud Security Manager', 'Dehradun,India', 'Mindtree Ltd.', '10 LPA', '23/4/2024', ['cloud', 'security', 'networking'], 2, '15/03/2024', [1563, 5684, 1566, 1560],'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae quia, nobis aliquid porro mollitia voluptates ut ea ex quas consequuntur beatae placeat quod inventore aliquam facere cupiditate voluptatum non minus provident sed nesciunt! Veniam, perspiciatis reprehenderit numquam nihil in quaerat inventore commodi quae. Molestiae voluptatum, reprehenderit tempore dolor ut illum beatae est porro omnis sapiente deserunt earum, ratione repellat? Veniam repudiandae consequatur optio officiis voluptatibus sunt mollitia.'),
        new Jobs(4, 'tech', 'Cloud Architecture', 'Bangalore,India', 'SpaceX Ltd.', '4.8 LPA', '01/5/2024', ['cloud', 'DSA', 'java'], 50, '15/03/2024', [1563, 1555, 1560],'We are seeking a dynamic and imaginative Creative Content Specialist to join our team at Innovative Marketing Solutions. As a Creative Content Specialist, you will play a crucial role in developing and implementing creative content strategies across various digital platforms to engage our target audience and drive brand awareness. This is an exciting opportunity for someone with a passion for storytelling and a knack for creating compelling content.If you are a creative storyteller with a passion for digital marketing and content creation,we would love to hear from you! Apply now to join our innovative team and make an impact in the world of marketing and communications.'),
        new Jobs(5, 'tech', 'Cloud Architecture', 'Bangalore,India', 'SpaceX Ltd.', '4.8 LPA', '01/5/2024', ['cloud', 'DSA', 'java'], 50, '15/03/2024', [1563, 1555, 1566, 1560],'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae quia, nobis aliquid porro mollitia voluptates ut ea ex quas consequuntur beatae placeat quod inventore aliquam facere cupiditate voluptatum non minus provident sed nesciunt! Veniam, perspiciatis reprehenderit numquam nihil in quaerat inventore commodi quae. Molestiae voluptatum, reprehenderit tempore dolor ut illum beatae est porro omnis sapiente deserunt earum, ratione repellat? Veniam repudiandae consequatur optio officiis voluptatibus sunt mollitia.'),
        new Jobs(6, 'tech', 'Cloud Architecture', 'Bangalore,India', 'SpaceX Ltd.', '4.8 LPA', '01/5/2024', ['cloud', 'DSA', 'java'], 50, '15/03/2024', [1563, 1555, 1566, 1560],'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae quia, nobis aliquid porro mollitia voluptates ut ea ex quas consequuntur beatae placeat quod inventore aliquam facere cupiditate voluptatum non minus provident sed nesciunt! Veniam, perspiciatis reprehenderit numquam nihil in quaerat inventore commodi quae. Molestiae voluptatum, reprehenderit tempore dolor ut illum beatae est porro omnis sapiente deserunt earum, ratione repellat? Veniam repudiandae consequatur optio officiis voluptatibus sunt mollitia.'),
        new Jobs(7, 'tech', 'Cloud Architadsfcture', 'Bangalore,India', 'SpaceX Ltd.', '4.8 LPA', '01/5/2024', ['cloud', 'DSA', 'java'], 50, '15/03/2024', [1563, 1555, 1566, 1560],'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae quia, nobis aliquid porro mollitia voluptates ut ea ex quas consequuntur beatae placeat quod inventore aliquam facere cupiditate voluptatum non minus provident sed nesciunt! Veniam, perspiciatis reprehenderit numquam nihil in quaerat inventore commodi quae. Molestiae voluptatum, reprehenderit tempore dolor ut illum beatae est porro omnis sapiente deserunt earum, ratione repellat? Veniam repudiandae consequatur optio officiis voluptatibus sunt mollitia.'),
        new Jobs(8, 'tech', 'Cloud loora', 'Bangalore,India', 'SpaceX Ltd.', '4.8 LPA', '01/5/2024', ['cloud', 'DSA', 'java'], 50, '15/03/2024', [1563, 1555, 1566, 1560],'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae quia, nobis aliquid porro mollitia voluptates ut ea ex quas consequuntur beatae placeat quod inventore aliquam facere cupiditate voluptatum non minus provident sed nesciunt! Veniam, perspiciatis reprehenderit numquam nihil in quaerat inventore commodi quae. Molestiae voluptatum, reprehenderit tempore dolor ut illum beatae est porro omnis sapiente deserunt earum, ratione repellat? Veniam repudiandae consequatur optio officiis voluptatibus sunt mollitia.'),
        new Jobs(9, 'tech', 'Cloud Archidsfsdecture', 'Bangalore,India', 'SpaceX Ltd.', '4.8 LPA', '01/5/2024', ['cloud', 'DSA', 'java'], 50, '15/03/2024', [1563, 1555, 1566, 1560],'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae quia, nobis aliquid porro mollitia voluptates ut ea ex quas consequuntur beatae placeat quod inventore aliquam facere cupiditate voluptatum non minus provident sed nesciunt! Veniam, perspiciatis reprehenderit numquam nihil in quaerat inventore commodi quae. Molestiae voluptatum, reprehenderit tempore dolor ut illum beatae est porro omnis sapiente deserunt earum, ratione repellat? Veniam repudiandae consequatur optio officiis voluptatibus sunt mollitia.'),
        new Jobs(10, 'tech', 'Cloud Architecture', 'Bangalore,India', 'SpaceX Ltd.', '4.8 LPA', '01/5/2024', ['cloud', 'DSA', 'java'], 50, '15/03/2024', [1563, 1555, 1566, 1560],'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae quia, nobis aliquid porro mollitia voluptates ut ea ex quas consequuntur beatae placeat quod inventore aliquam facere cupiditate voluptatum non minus provident sed nesciunt! Veniam, perspiciatis reprehenderit numquam nihil in quaerat inventore commodi quae. Molestiae voluptatum, reprehenderit tempore dolor ut illum beatae est porro omnis sapiente deserunt earum, ratione repellat? Veniam repudiandae consequatur optio officiis voluptatibus sunt mollitia.'),
    ];
    static getJobs(){
        return Jobs.jobs;
    }
    static getJobById(id){
      const job=Jobs.jobs.find((j)=>{
if(j.id==id)
return j;

        });
        return job;
    }
    static createJob(body) {//req.body
        const { id, cat, designation, location, companyName, salary, applyBy, skillsReq, numOpening, jobPosted, applicants } = body;
        const newJob = new Jobs(id, cat, designation, location, companyName, salary, applyBy, skillsReq, numOpening, jobPosted, applicants);
        Jobs.jobs.push(newJob);
        console.log(Jobs.jobs);
        return newJob;
    }
    static getApplicants(jobid) {//the input should be a number 
        const applcntApplied = Jobs.jobs.find((j) => {
            if (j.id == jobid)
                return j.applicants;
        });
        // let applcntApplied=result.applicants;
        let det = [];
        applcntApplied.foreach((appId) => {//forEach
            let res=Applicant.getApplicantById(appId);
            if (res) {
                let er={
                    name:res.name,
                    email:res.email,
                contact:res.contact,
            resume:res.resumePath
        };
                det.push(er);
            }
            return det;//return the array of applicant that have applied for the particular job id
        })
    }
    static deleteJob(id){
       const jobsShallowCopy= Jobs.jobs.filter((ele)=>{
        return ele.id!=id;
        });
        console.log(jobsShallowCopy);
        return jobsShallowCopy;
    }
    static updateJob(job){  
          const {id}=job;
          const result=Jobs.jobs.filter((ele)=>{
            if(ele.id==id){
                ele=job;
            }
        return ele;
          });
   return result;
    }
}