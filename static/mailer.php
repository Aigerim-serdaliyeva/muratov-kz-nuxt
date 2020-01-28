<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function

require __DIR__.'/mailer/PHPMailerAutoload.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 2;                                       // Enable verbose debug output
    $mail->isSMTP();                                            // Set mailer to use SMTP
    $mail->Host       = 'smtp.mail.ru';  // Specify main and backup SMTP servers
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'vayfv@mail.ru';                     // SMTP username
    $mail->Password   = '153624sanch';                               // SMTP password
    $mail->SMTPSecure = 'ssl';                                  // Enable TLS encryption, `ssl` also accepted
    $mail->Port       = 465;
    $mail->CharSet 	= 'utf-8';                              // TCP port to connect to

    //Recipients
    $mail->setFrom('vayfv@mail.ru', 'Muratov');
    // $mail->addAddress('callcentre@muratov.kz', 'Info');
    // $mail->addCC("info@muratov.kz");
    $mail->addCC("sanch941@gmail.com");
    $_POST = json_decode(file_get_contents('php://input'), true);
    $company_name = $_POST["companyName"];
    $client_name = $_POST["clientName"];
    $client_surname = $_POST["clientSurname"];
    $client_patronymic = $_POST["clientPatronymic"];
    $client_phone = $_POST["clientPhone"];
    $client_email = $_POST["clientEmail"];

    // Content
    $mail->isHTML(true);
    $mail->Subject = "Заявка - muratov.kz";
    $mail->Body	= "<p> Наименование компании - $company_name </p> <br> <p>Имя клиента - $client_name</p> <br> <p>Фамилия клиента - $client_surname</p> <br> <p>Отчество клиента - $client_patronymic</p> <br> </p> <p>Мобильный номер клиента - $client_phone</p> <br> <p>Email клиента - $client_email</p> <br>";

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
