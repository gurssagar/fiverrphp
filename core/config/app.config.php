<?php
defined('ROOT_DIR') or die(header('HTTP/1.1 403 Forbidden'));

/*
 * @author Balaji
 * @name: Rainbow PHP Framework
 * @copyright 2024 ProThemes.Biz
 *
 */
 
// --- Application Settings ---

//Define Application Name
define('APP_NAME','AtoZ SEO Tools');
define('HTML_APP_NAME','AtoZ <b>SEO</b> Tools<sup>v3</sup>');

//Define Version Number of Application
define('VER_NO','3.8');

//Define Native App Name
define('N_APP','atozseo');

//Define Native Sign
define('NATIVE_SIGN','');

//Define Native Application Sign
define('NATIVE_APP_SIGN','');

//Set Default Controller
define('CON_MAIN','main');

//Set Default Error Controller
define('CON_ERR','error');

//MySQLi Error Reporting
mysqli_report(MYSQLI_REPORT_ALL ^ MYSQLI_REPORT_STRICT);