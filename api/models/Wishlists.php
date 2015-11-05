<?php
namespace PhalconRest\Models;
use Phalcon\Mvc\Model;
class Wishlists extends Model
{
	public function getSource()
	{
		return "wishlists";
	}

	public function initialize()
	{
		
	}
}