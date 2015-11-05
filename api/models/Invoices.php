<?php
namespace PhalconRest\Models;
use Phalcon\Mvc\Model;
class Invoices extends Model
{
	public function getSource()
	{
		return "invoices";
	}

	public function initialize()
	{
		
	}
}