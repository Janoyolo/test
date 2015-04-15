<?php

spl_autoload_register(function($className) {
    $folderList = array('pilote/');
    
    $fileExtArr = array('.php', '.class.php');

    // on devrait être en mesure de recréer tous les chemin fils des dossiers sans les fichiers.
    foreach ($folderList as $folderPath) {
        foreach ($fileExtArr as $fileExt) {
            $filePath = $folderPath . str_replace("\\", "/", $className) . $fileExt;
            if (file_exists($filePath)) {
                require_once($filePath);
                return;
            }
        }
    }
    throw new \Exception("Impossible de charger $className.");
});


