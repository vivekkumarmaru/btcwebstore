<?php
namespace PhalconRest\Models;
use Phalcon\Mvc\Model;
class Settings extends Model
{
	public function getSource()
	{
		return "settings";
	}

	public function initialize()
	{
		
	}
}