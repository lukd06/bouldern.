<?php

header('Content-Type: application/json; charset=utf-8');

$location = [
    "id" => "undefined",
    "name" => "undefined",
    "url" => "undefined",
];
switch ($id) {
    case 'han':
        $location = [
            "id" => "han",
            "name" => "Hannovergasse",
            "url" => "https://shop.boulderbar.net:8080/modules/bbext/CustomerCapacity.php?gym=han#no-back-button",
        ];
        break;
    case "hbf":
        $location = [
            "id" => "hbf",
            "name" => "Hauptbahnhof",
            "url" => "https://shop.boulderbar.net:8080/modules/bbext/CustomerCapacity.php?gym=hbf#no-back-button",
        ];
        break;
    case "wb":
        $location = [
            "id" => "wb",
            "name" => "Wienerberg",
            "url" => "https://shop.boulderbar.net:8080/modules/bbext/CustomerCapacity.php?gym=wb#no-back-button",
        ];
        break;
    case "see":
        $location = [
            "id" => "see",
            "name" => "Seestadt",
            "url" => "https://shop.boulderbar.net:8080/modules/bbext/CustomerCapacity.php?gym=see#no-back-button",
        ];
        break;
    case "lnz":
        $location = [
            "id" => "lnz",
            "name" => "Linz",
            "url" => "https://shopsbg.boulderbar.net:8081/modules/bbext/CustomerCapacity.php?gym=LNZ#no-back-button",
        ];
        break;
    default:
        exit();
};

echo json_encode(getLoad($location));

function getLoad($location)
{
    $return = ["code" => 1,"load" => "undefined"];
    $url = $location["url"];
    $html = file_get_contents($url);
    if ($html === false) {
        $return['code'] = 1;
        return $return;
    }
    $dom = new DOMDocument();
    $dom->loadHTML($html);

    $xpath = new DOMXPath($dom);
    $expression = "/html/body/div[1]/div/center/h2";
    $numberNode = $xpath->query($expression)->item(0);

    if ($numberNode) {
        $number = $numberNode->textContent;
        $number = str_replace("%", "", $number);
        $return["code"] = 0;
        $return["id"] = $location["id"];
        $return["name"] = $location["name"];
        $return["load"] = (int)$number;
        return $return;
    } else {
        $return["code"] = 1;
        return $return;
    }
}
