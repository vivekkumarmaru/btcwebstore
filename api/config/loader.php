<?php

$loader = new \Phalcon\Loader();


$loader->registerNamespaces(array(
	'PhalconRest\Controllers' => APP_PATH . $config->application->controllersDir,
	'PhalconRest\Models' => APP_PATH . $config->application->modelsDir,
	'PhalconRest\Exceptions' => APP_PATH . $config->application->exceptionsDir,
	'PhalconRest\Responses' => APP_PATH . $config->application->responsesDir
))->register();
