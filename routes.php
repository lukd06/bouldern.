<?php

require_once __DIR__ . '/router.php';

get('/', 'views/index.php');

get('/api/getLoad/$id', 'api/getLoad.php');

any('/404', 'views/404.php');
