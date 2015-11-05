<?php
namespace PhalconRest\Models;
use Phalcon\Mvc\Model;
class Events extends Model
{
	public function getSource()
	{
		return "events";
	}

	public function initialize()
	{
		
	}
}