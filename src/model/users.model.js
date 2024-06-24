export class User {// this class is for recruiters who can add , update,delete, see details of the appied candidates
    constructor(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }
    static users=[
        new User(112,'Vivek Singh','viveksingh14538@gmail.com','Vivek123@'),
        new User(113,'Deepak Rana','deepakrana14538@gmail.com','Deepak123@'),
        new User(114,'Riya Sharma','riyasha14538@gmail.com','riya123@'),
        new User(115,'Divyanshu Arora','divyanshuh14538@gmail.com','divyanshu123@'),
        new User(116,'Pranabh Singh','pranabhsingh14538@gmail.com','pranabh123@'),
    ]
    static getUserByEmail(email){
        const result=User.users.find((ele)=>{
            if(ele.email==email)
            return ele;
        });
        console.log(result);
        return result;
    }
    static signIn(body) {
        const {email,password}=body;
           const user= User.users.find((u)=>{
                if(u.email==email && u.password==password){
                    return u;
                }
            });
          
            if(user){
                console.log(user.email);
                console.log(user.password);
                return true;//handeled at the controller

            }
        else false; //this condition need to be checked in the controller

    }
    static addUser(body) {//req.body need to be passed as a param at this function
        const {id, name, email, password}=body;
        const newUser=new User(id, name, email, password);
        User.users.push(newUser);
        return newUser;// the user/register should render the login page after successfull registering

    }


}