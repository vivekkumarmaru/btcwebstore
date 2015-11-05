<?php
namespace PhalconRest\Models;
use Phalcon\Mvc\Model;
class CurrentUsers extends Model
{
	public function getSource()
	{
		return "current_users";
	}

	public function initialize()
	{
		
	}
}