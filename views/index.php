<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>bouldern.</title>
    <link rel="stylesheet" href="/css/bootstrap.min.css">
    <script src="https://code.jscharting.com/latest/jscharting.js"></script> 
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link rel="manifest" href="manifest.json">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="default">
    <script>
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function () {
        navigator.serviceWorker.register('/serviceworker.js').then(function (registration) {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function (err) {
            console.log('ServiceWorker registration failed: ', err);
        });
        });
    }
    </script>
</head>
<body>
    <section id="charts"></section>
    <script src="js/theme.js"></script>
    <script src="js/main.js"></script>
    <script src="js/bootstrap.min.js"></script>
</body>
</html>