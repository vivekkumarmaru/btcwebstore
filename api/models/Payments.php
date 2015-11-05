<?php
namespace PhalconRest\Models;
use Phalcon\Mvc\Model;
class Payments extends Model
{
	public function getSource()
	{
		return "payments";
	}

	public function initialize()
	{
		
	}
}