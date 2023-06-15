<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    
    $data = "Имя: " . $name . "\n" .
            "Email: " . $email . "\n" .
            "Телефон: " . $phone . "\n" .
            "-------------------------\n";

    $filePath = "данные.txt";

    file_put_contents($filePath, $data, FILE_APPEND);

    // Отправка уведомления на указанный адрес электронной почты
    $to = "test8maill@gmail.com";
    $subject = "Новое сообщение с сайта";
    $message = $data;
    $headers = "From: ваш_адрес_электронной_почты";
    mail($to, $subject, $message, $headers);

    header("Location: /index.html");
    exit();
}
?>
