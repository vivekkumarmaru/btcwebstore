<?php
namespace PhalconRest\Models;
use Phalcon\Mvc\Model;
class Roles extends Model
{
	public function getSource()
	{
		return "roles";
	}

	public function initialize()
	{
		
	}
}