<?php
namespace PhalconRest\Models;
use Phalcon\Mvc\Model;
class Newsletters extends Model
{
	public function getSource()
	{
		return "newsletters";
	}

	public function initialize()
	{
		
	}
}