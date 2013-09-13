var Commander = {
	hasClass: function(node, className)
	{
		if(node.className == '')
		{
			return false;
		}
		else if(node.className == className)
		{
			return true;
		}
		else if((new RegExp(className)).test(node.className))
		{
			var token = node.className.split(/\s/);
			for(var i = 0; i < token.length; i++)
			{
				if(token[i] == className)
				{
					return true;
				}
			}
		}
		return false;
	},

	initialize: function(root)
	{
	    var elems = root.getElementsByTagName('div')
		for (var i = 0; i < elems.length; i++)
		{
			if(Commander.hasClass(elems[i], "command"))
			{
				elems[i].addEventListener('click', function(){ Commander.execute(this); }, false);
			}
		}
	},

	execute: function(sender)
	{
		var command = sender.getAttribute("data-command");
		eval("Commander." + command + "(sender);");
	}
}