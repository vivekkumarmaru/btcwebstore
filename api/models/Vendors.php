<?php
namespace PhalconRest\Models;
use Phalcon\Mvc\Model;
class Vendors extends Model
{
	public function getSource()
	{
		return "vendors";
	}

	public function initialize()
	{
		
	}
}