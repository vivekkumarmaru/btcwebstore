<?php
namespace PhalconRest\Models;
use Phalcon\Mvc\Model;
class Contents extends Model
{
	public function getSource()
	{
		return "contents";
	}

	public function initialize()
	{
		
	}
}