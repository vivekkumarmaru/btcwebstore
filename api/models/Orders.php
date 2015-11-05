<?php
namespace PhalconRest\Models;
use Phalcon\Mvc\Model;
class Orders extends Model
{
	public function getSource()
	{
		return "orders";
	}

	public function initialize()
	{
		
	}
}