<?php
namespace PhalconRest\Models;
use Phalcon\Mvc\Model;
class Tags extends Model
{
	public function getSource()
	{
		return "tags";
	}

	public function initialize()
	{
		
	}
}