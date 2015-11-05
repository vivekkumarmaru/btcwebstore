<?php
namespace PhalconRest\Models;
use Phalcon\Mvc\Model;
class Users extends Model
{
	public function getSource()
	{
		return "users";
	}

	public function initialize()
	{
		
	}
}