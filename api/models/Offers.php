<?php
namespace PhalconRest\Models;
use Phalcon\Mvc\Model;
class Offers extends Model
{
	public function getSource()
	{
		return "offers";
	}

	public function initialize()
	{
		
	}
}