<?php
namespace PhalconRest\Models;
use Phalcon\Mvc\Model;
class Revenues extends Model
{
	public function getSource()
	{
		return "revenues";
	}

	public function initialize()
	{
		
	}
}