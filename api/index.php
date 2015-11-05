<?php

use Phalcon\DI\FactoryDefault as DefaultDI,
	Phalcon\Mvc\Micro\Collection,
	Phalcon\Config\Adapter\Ini as IniConfig,
	Phalcon\Loader;

define('APP_PATH', realpath('.') . '/');

$config = new IniConfig(APP_PATH . 'config/config.ini');


	/**
	 * Auto-loader configuration
	 */
	require APP_PATH . 'config/loader.php';

	/**
	 * Load application services
	 */
	require APP_PATH . 'config/services.php';


