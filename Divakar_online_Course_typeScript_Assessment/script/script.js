var autoIncrementIdNumber = 1000;
var autoIncrementTicketNumber = 100;
var CurrentUserId;
var CurrentUserName;
var serviceId;
var tempObj;
var userdetails = /** @class */ (function () {
    function userdetails(UserName, UserAge, UserPhoneNumber) {
        this.courseJoiningArray = new Array();
        autoIncrementIdNumber++;
        this.userId = autoIncrementIdNumber;
        this.userName = UserName;
        this.userAge = UserAge;
        this.userPhoneNumber = UserPhoneNumber;
    }
    return userdetails;
}());
var Course;
(function (Course) {
    Course[Course["Csharp"] = 1] = "Csharp";
    Course[Course["HTML"] = 2] = "HTML";
    Course[Course["CSS"] = 3] = "CSS";
    Course[Course["JavaScript"] = 4] = "JavaScript";
    Course[Course["TypeScript"] = 5] = "TypeScript";
})(Course || (Course = {}));
var courseJoining = /** @class */ (function () {
    function courseJoining(UserId, Course, RequiredDays) {
        autoIncrementTicketNumber++;
        this.userId = UserId;
        this.requiredDays = RequiredDays;
        this.course = Course;
    }
    return courseJoining;
}());
// let courseJoiningArray: Array<courseJoining> = new Array<courseJoining>();
var userDetailsArray = new Array();
function sregisteration() {
    var existingUserPage = document.getElementById('service');
    var newUserPage = document.getElementById('RegisterationProcess');
    existingUserPage.style.display = "none";
    newUserPage.style.display = "block";
}
function eregisteration() {
    var existingUserPage = document.getElementById('RegisterationProcess');
    var newUserPage = document.getElementById('service');
    existingUserPage.style.display = "none";
    newUserPage.style.display = "block";
}
function registeration() {
    var userName = document.getElementById("uname").value;
    var userAge = document.getElementById("age").value;
    var userPhoneNumber = document.getElementById("phonenumber").value;
    userDetailsArray.push(new userdetails(userName, +userAge, +userPhoneNumber));
    eregisteration();
}
function slogin() {
    var existingUserPage = document.getElementById('service');
    var newUserPage = document.getElementById('loginpage');
    var availableUser = document.getElementById('availableUser');
    existingUserPage.style.display = "none";
    newUserPage.style.display = "block";
    availableUser.innerHTML = "<h2>Available User</h2>";
    userDetailsArray.forEach(function (element) {
        availableUser.innerHTML += "User Name : ".concat(element.userName, " | User Id : ").concat(element.userId, "<br>");
    });
    // (let i = 0; i < userDetailsArray.length+1; i++) 
}
function elogin() {
    var existingUserPage = document.getElementById('loginpage');
    var newUserPage = document.getElementById('service');
    existingUserPage.style.display = "none";
    newUserPage.style.display = "block";
}
function login() {
    serviceId = document.getElementById("serviceId").value;
    var IdChecker = false;
    for (var i = 0; i < userDetailsArray.length; i++) {
        if (userDetailsArray[i].userId == parseInt(serviceId)) {
            tempObj = userDetailsArray[i];
            CurrentUserId = userDetailsArray[i].userId;
            CurrentUserName = userDetailsArray[i].userName;
            sservivePage();
            return;
        }
        else {
            IdChecker = true;
        }
    }
    if (IdChecker) {
        alert("Enter Valid User Id");
    }
}
function sservivePage() {
    var existingUserPage = document.getElementById('loginpage');
    var newUserPage = document.getElementById('servicePage');
    existingUserPage.style.display = "none";
    newUserPage.style.display = "block";
}
function savilableCourses() {
    var existingUserPage = document.getElementById('servicePage');
    var newUserPage = document.getElementById('coursedetails');
    existingUserPage.style.display = "none";
    newUserPage.style.display = "block";
}
function avilableCourses() {
    var choice = document.getElementById("course");
    var days = document.getElementById("daysrequired").value;
    if (days == "") {
        alert("please specify the number days to complete the course");
    }
    else {
        var userObject = new courseJoining(CurrentUserId, choice.value, +parseInt(days));
        tempObj.courseJoiningArray.push(userObject);
        console.log(userObject.course);
        console.log(userObject.requiredDays);
        senrolledCourses();
    }
}
function eavilableCourses() {
    var existingUserPage = document.getElementById('coursedetails');
    var newUserPage = document.getElementById('service');
    existingUserPage.style.display = "none";
    newUserPage.style.display = "block";
}
function senrolledCourses() {
    var existingUserPage = document.getElementById('coursedetails');
    existingUserPage.style.display = "none";
    existingUserPage = document.getElementById('servicePage');
    var newUserPage = document.getElementById('usercourses');
    existingUserPage.style.display = "none";
    newUserPage.style.display = "block";
    var userinfos = document.getElementById('userinfos');
    var check = 0;
    userinfos.innerHTML = "user Id : ".concat(serviceId, "<br> ");
    // for (let i = 0; i < courseJoiningArray.length; i++) 
    tempObj.courseJoiningArray.forEach(function (element) {
        // userinfos.innerHTML = `user Id : ${serviceId} `;
        if (element.userId == parseInt(serviceId)) {
            userinfos.innerHTML += " course Name : ".concat(element.course, " --- days required : ").concat(element.requiredDays, " <br>");
            check = 1;
        }
    });
    if (check = 0) {
        userinfos.innerHTML += "no course enrolled";
    }
}
function eenrolledCourses() {
    var existingUserPage = document.getElementById('usercourses');
    var newUserPage = document.getElementById('service');
    existingUserPage.style.display = "none";
    newUserPage.style.display = "block";
}
