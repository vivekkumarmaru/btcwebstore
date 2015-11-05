<?php
namespace PhalconRest\Models;
use Phalcon\Mvc\Model;
class OrderStatus extends Model
{
	public function getSource()
	{
		return "order_status";
	}

	public function initialize()
	{
		
	}
}