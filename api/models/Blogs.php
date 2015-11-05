<?php
namespace PhalconRest\Models;
use Phalcon\Mvc\Model;
class Blogs extends Model
{
	public function getSource()
	{
		return "blogs";
	}

	public function initialize()
	{
		
	}
}