function submitData() {
    let name = document.getElementById("input-name").value;
    let email = document.getElementById("input-email").value;
    let number = document.getElementById("input-number").value;
    let subject = document.getElementById("input-subject").value;
    let message = document.getElementById("input-message").value;


    if (name=== "") {
        return alert("Please enter your name");
    }else if (email===""){
        return alert("Please enter your email");
    }else if (number=== "") {
        return alert("Please enter your number");
    } else if (subject=== "") {
        return alert("Please choose your subject"); 
    } else if (message=== "") {
        return alert ("Please enter your message");
    }

    // if (name=== "" || email=== "" || number=== "" || subject== "" || message=== "") {
    // return alert ("Form must be filled");   
    // }   

    let emailReceiver = "bransyahtan@gmail.com";

    let a = document.createElement("a");
    a.href = `mailto:${emailReceiver}?subject=${subject}
        &body=Halo, nama saya ${name}, ${message}. Tolong hubungi saya di ${number}anda dapat mengirim email ke ${email}`;
    a.click();

    let messager = {
        name : name,
        email : email,
        phone_number : number,
        subject : subject,
        message : message,
    };
    console.log(messager);
}
