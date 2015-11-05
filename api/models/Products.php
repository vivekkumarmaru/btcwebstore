<?php
namespace PhalconRest\Models;
use Phalcon\Mvc\Model;
class Products extends Model
{
	public function getSource()
	{
		return "products";
	}

	public function initialize()
	{
		
	}
}