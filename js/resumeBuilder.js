var bio = {
    "name": "Chunming Li",
    "role": "Web Developer",
    "contacts": {
        "mobile": "17090408713",
        "email": "17090408713@163.com",
        "github": "limingbaiaixiezuo",
        "twitter": "lichunming2",
        "location": "Huludao City,Liaoning Province"

    },
    "welcomeMessage": "As soon as you start to pursue a dream, your life wakes up and everything has meaning.",
    "skills": ["Electrical automation", "Writting", "Programming"],
    "biopic": "images/me.jpeg"
}


var work = {
    "jobs": [{
            "employer": "Guangxin Shipbuilding & Heavy Industry CO.LTD",
            "title": "technician",
            "location": "Zhongshan,Guangdong",
            "dates": "20100701-20121001",
            "description": "My first job",
            "url": "http://www.gshi.cn"
        },
        {
            "employer": "Suizhong port",
            "title": "technician",
            "location": "Suizhong county,Liaoning province",
            "dates": "20150101-20170610",
            "description": "My latest job",
            "url": "http://www.ykport.com.cn"
        }
    ]
}
var projects = {
    "projects": [{
            "title": "Animal card and Peach Juice",
            "dates": "20170920-20170925",
            "description": "Udacity front-end-web assignment",
            "images": ["images/p1.png", "images/p2.png"]
        }

    ]
}

var education = {
    "schools": [{
            "name": "BoHai Shipbuilding Vocational College",
            "location": "Huludao,Lioaning",
            "degree": "Junior college",
            "majors": ["Shipbuilding Engineering"],
            "dates": "2007-2010",
            "url": "http://www.bhcy.cn"
        },
        {
            "name": "Shenyang Institute of Engineering",
            "location": "Shenyang,Liaoning",
            "degree": "Bachelor",
            "majors": ["Power system and its Automation"],
            "dates": "2008-2011",
            "url": "http://www.sie.edu.cn"
        }
    ],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2017-",
        "url": "http://cn.udacity.com/course/front-end-web-developer-nanodegree--nd001-cn-basic"

    }]
}

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    // $("#topContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    // $("#topContacts").append(formattedEmail);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    // $("#topContacts").append(formattedTwitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    // $("#topContacts").append(formattedGithub);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts,#footerContacts").append(formattedMobile,formattedEmail,formattedTwitter,formattedGithub,formattedLocation);
    var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBiopic);
    var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedwelcomeMsg);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(cv, index, array) {
            var formattedSkill = HTMLskills.replace("%data%", cv);
            $("#skills").append(formattedSkill);
        });
    }
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    // $("#footerContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    // $("#footerContacts").append(formattedEmail);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    // $("#footerContacts").append(formattedTwitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    // $("#footerContacts").append(formattedGithub);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    // $("#footerContacts").append(formattedLocation);
}
bio.display();

work.display = function() {
    work.jobs.forEach(function(cv, index, array) {
        $("#workExperience").append(HTMLworkStart);
        var formattedUrl = HTMLworkEmployer.replace("#", cv.url);
        var formattedEmployer = formattedUrl.replace("%data%", cv.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", cv.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", cv.dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDates = HTMLworkDescription.replace("%data%", cv.description);
        $(".work-entry:last").append(formattedEmployerTitle,formattedDates);


    });
}
work.display();

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});

projects.display = function() {
    projects.projects.forEach(function(cv, index, array) {
        $("#projects").append(HTMLprojectStart);
        var formattedTiltle = HTMLprojectTitle.replace("%data%", cv.title);
        $(".project-entry:last").append(formattedTiltle);
        var formattedDate = HTMLprojectDates.replace("%data%", cv.dates);
        $(".project-entry:last").append(formattedDate);
        var formattedDescription = HTMLprojectDescription.replace("%data%", cv.description);
        $(".project-entry:last").append(formattedDescription);
        if (cv.images.length > 0) {
            cv.images.forEach(function(ncv, index, array) {
                var formattedImage = HTMLprojectImage.replace("%data%", ncv);
                $(".project-entry:last").append(formattedImage);
            });
        }
    });
}
projects.display();

education.display = function() {
    education.schools.forEach(function(cv, index, array) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", cv.name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", cv.degree);
        var formattedNameDegree = formattedName + formattedDegree;
        $(".education-entry:last").append(formattedNameDegree);
        var formattedDates = HTMLschoolDates.replace("%data%", cv.dates);
        $(".education-entry:last").append(formattedDates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", cv.location);
        $(".education-entry:last").append(formattedLocation);

        cv.majors.forEach(function(currentValue, index, array) {
        var formattedMajor = HTMLschoolMajor.replace("%data%", currentValue);
        $(".education-entry:last").append(formattedMajor);
      });//遍历专业字符串数组

        var formattedUrl = HTMLschoolUrl.replace("#", cv.url);
        var formattedUrl = formattedUrl.replace("%data%", cv.url);
        $(".education-entry:last").append(formattedUrl);
    });
    education.onlineCourses.forEach(function(cv, index, array) {
        $("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLonlineClassesStart);
        var formattedTitleUrl = HTMLonlineTitle.replace("#", cv.url);
        var formattedTitle = formattedTitleUrl.replace("%data%", cv.title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", cv.school);
        var formattedTitleSchool = formattedTitle + formattedSchool;
        $(".onlineClasses-entry").append(formattedTitleSchool);
        var formattedDate = HTMLonlineDates.replace("%data%", cv.dates);
        $(".onlineClasses-entry").append(formattedDate);
        var formattedUrlUrl = HTMLonlineURL.replace("#", cv.url);
        var formattedUrl = formattedUrlUrl.replace("%data%", cv.url);
        $(".onlineClasses-entry").append(formattedUrl);
    });
}
education.display();

$("#mapDiv").append(googleMap);
