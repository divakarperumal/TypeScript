let autoIncrementIdNumber=1000;
let autoIncrementTicketNumber= 100;

let CurrentUserId: number;
let CurrentUserName: string;
let serviceId: string;

 let tempObj:userdetails;




class userdetails
{
    userId: number;
    userName: string;
    userAge: number;
    userPhoneNumber: number;

    courseJoiningArray: Array<courseJoining> = new Array<courseJoining>();

    constructor(UserName: string,UserAge: number,UserPhoneNumber: number)
    {
        autoIncrementIdNumber++;

        this.userId =autoIncrementIdNumber;
        this.userName =UserName;
        this.userAge =UserAge;
        this.userPhoneNumber =UserPhoneNumber;

    }
}

enum Course
{
    Csharp = 1,HTML,CSS,JavaScript,TypeScript
}

class courseJoining
{
    userId: number;
    // userName: string;
    requiredDays: number;
    userPhoneNumber: number;
    course: string;

    constructor(UserId: number,Course: string, RequiredDays: number)
    {
        autoIncrementTicketNumber++;

        this.userId =UserId;

        this.requiredDays =RequiredDays;

        this.course =Course;

    }

}

// let courseJoiningArray: Array<courseJoining> = new Array<courseJoining>();

let userDetailsArray: Array<userdetails> = new Array<userdetails>();



function sregisteration()
{
    let existingUserPage = document.getElementById('service') as HTMLDivElement;
    let newUserPage = document.getElementById('RegisterationProcess') as HTMLDivElement;

    existingUserPage.style.display = "none";
    newUserPage.style.display = "block";
   
}

function eregisteration()
{
    let existingUserPage = document.getElementById('RegisterationProcess') as HTMLDivElement;
    let newUserPage = document.getElementById('service') as HTMLDivElement;

    existingUserPage.style.display = "none";
    newUserPage.style.display = "block";

}

function registeration()
{
    var userName =(document.getElementById("uname")as HTMLInputElement).value;
    var userAge =(document.getElementById("age")as HTMLInputElement).value;
    var userPhoneNumber =(document.getElementById("phonenumber")as HTMLInputElement).value;

    userDetailsArray.push(new userdetails(userName, +userAge, +userPhoneNumber));

    eregisteration();

}

function slogin()
{
    let existingUserPage = document.getElementById('service') as HTMLDivElement;
    let newUserPage = document.getElementById('loginpage') as HTMLDivElement;
    let availableUser = document.getElementById('availableUser') as HTMLLabelElement;

    existingUserPage.style.display = "none";
    newUserPage.style.display = "block";

    availableUser.innerHTML = "<h2>Available User</h2>";


    userDetailsArray.forEach(element => {
        availableUser.innerHTML += `User Name : ${element.userName} | User Id : ${element.userId}<br>`;
        
     }); 
    
    // (let i = 0; i < userDetailsArray.length+1; i++) 
}

function elogin()
{
    let existingUserPage = document.getElementById('loginpage') as HTMLDivElement;
    let newUserPage = document.getElementById('service') as HTMLDivElement;

    existingUserPage.style.display = "none";
    newUserPage.style.display = "block";
}

function login()
{
    serviceId=(document.getElementById("serviceId")as HTMLInputElement).value;

    let IdChecker: boolean = false;


        for (let i = 0; i < userDetailsArray.length; i++) 
        {
            if (userDetailsArray[i].userId == parseInt(serviceId)) 
            {
                tempObj=userDetailsArray[i];

                CurrentUserId = userDetailsArray[i].userId;
                CurrentUserName = userDetailsArray[i].userName;

                sservivePage();

                return;
            }
            else 
            {
                IdChecker = true;
            }
        }

        if (IdChecker) {
            alert("Enter Valid User Id");
        }
    
}

function sservivePage()
{
    let existingUserPage = document.getElementById('loginpage') as HTMLDivElement;
    let newUserPage = document.getElementById('servicePage') as HTMLDivElement;

    existingUserPage.style.display = "none";
    newUserPage.style.display = "block";

}

function savilableCourses()
{
    let existingUserPage = document.getElementById('servicePage') as HTMLDivElement;
    let newUserPage = document.getElementById('coursedetails') as HTMLDivElement;

    existingUserPage.style.display = "none";
    newUserPage.style.display = "block";

}

function avilableCourses()
{
    let choice = document.getElementById("course") as HTMLSelectElement;
    let days = (document.getElementById("daysrequired") as HTMLInputElement).value;

    if (days == "")
    {
        alert(`please specify the number days to complete the course`);
    }
    else
    {
        let userObject = new courseJoining(CurrentUserId, choice.value, +parseInt(days));
        tempObj.courseJoiningArray.push(userObject);
        console.log(userObject.course);
        console.log(userObject.requiredDays);      

        senrolledCourses();       
    }
}

function eavilableCourses()
{
    let existingUserPage = document.getElementById('coursedetails') as HTMLDivElement;
    let newUserPage = document.getElementById('service') as HTMLDivElement;

    existingUserPage.style.display = "none";
    newUserPage.style.display = "block";

}

function senrolledCourses()
{
    let existingUserPage = document.getElementById('coursedetails') as HTMLDivElement;
    existingUserPage.style.display = "none";
    existingUserPage = document.getElementById('servicePage') as HTMLDivElement;
    let newUserPage = document.getElementById('usercourses') as HTMLDivElement;

    existingUserPage.style.display = "none";
    newUserPage.style.display = "block";

    let userinfos = document.getElementById('userinfos') as HTMLLabelElement;
    let check = 0;

    userinfos.innerHTML = `user Id : ${serviceId}<br> `;
    
    // for (let i = 0; i < courseJoiningArray.length; i++) 
    tempObj.courseJoiningArray.forEach(element => {
        // userinfos.innerHTML = `user Id : ${serviceId} `;
        if (element.userId == parseInt(serviceId)) 
        {
            userinfos.innerHTML += ` course Name : ${element.course} --- days required : ${element.requiredDays} <br>`;  
            check = 1;  
        }
        
        
    });

    if(check = 0){
        userinfos.innerHTML += `no course enrolled`;
    }

    
        
        
    

}

function eenrolledCourses()
{
    let existingUserPage = document.getElementById('usercourses') as HTMLDivElement;
    let newUserPage = document.getElementById('service') as HTMLDivElement;

    existingUserPage.style.display = "none";
    newUserPage.style.display = "block";
   
}






       






