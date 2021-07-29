<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phoneno = $_POST['phoneno'];
    $message = $_POST['message'];

    $email_from = 'meriwebsite@portfolio.com';
    $email_subject = 'New Message';
    $email_body = "User Name: $name.\n",
                    "User Email: $email.\n",
                        "User Phone Number: $phoneno.\n",
                            "User Message: $message.\n";

    $to = "singhbrahmbind@gmail.com";
    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $email \r\n";
    mail($to,$email_subject,$email_body,$headers);
    header("Location: index.html")
?>