<?php
namespace PhalconRest\Models;
use Phalcon\Mvc\Model;
class Carts extends Model
{
	public function getSource()
	{
		return "carts";
	}

	public function initialize()
	{
		
	}
}