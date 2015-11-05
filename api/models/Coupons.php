<?php
namespace PhalconRest\Models;
use Phalcon\Mvc\Model;
class Coupons extends Model
{
	public function getSource()
	{
		return "coupons";
	}

	public function initialize()
	{
		
	}
}