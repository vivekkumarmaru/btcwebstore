<?php
namespace PhalconRest\Models;
use Phalcon\Mvc\Model;
class Locations extends Model
{
	public function getSource()
	{
		return "locations";
	}

	public function initialize()
	{
		
	}
}