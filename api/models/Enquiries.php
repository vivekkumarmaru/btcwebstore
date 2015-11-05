<?php
namespace PhalconRest\Models;
use Phalcon\Mvc\Model;
class Enquiries extends Model
{
	public function getSource()
	{
		return "enquiries";
	}

	public function initialize()
	{
		
	}
}