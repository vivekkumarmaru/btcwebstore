<?php
namespace PhalconRest\Models;
use Phalcon\Mvc\Model;
class Categories extends Model
{
	public function getSource()
	{
		return "categories";
	}

	public function initialize()
	{
		
	}
}