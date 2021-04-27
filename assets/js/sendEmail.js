// function sendMail(contactForm) {
//     emailjs.send("service_89bs386","template_w73g6e9", {
//         project_request: "I want a website that...",
//         from_email: "mail2mick@gmail.com",
//         from_name: "Michael Newham"
//     })

//     .then(
//         function(response) {
//             console.log("SUCCESS");
//         },
//         function(error) {
//             console.log("FAILED", err)
//         });
// }


function sendMail(contactForm) {
    emailjs.send("service_89bs386","template_w73g6e9", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}