const sendMail = (params) => {
    let tempParams={
        from_name:"danylom2007.m@gmail.com",
        to_name:"danylom2007.m@gmail.com",
        message: `Ім'я: ${document.getElementById("name")}, Телефон: ${document.getElementById("phone")}
        Адреса: ${document.getElementById("adress")}`
    }

    emailjs.send('service_bywqfyg', 'template_14dkxfq', tempParams)
    .then(function(res){
        console.log("status:" + res.status);
    })
}