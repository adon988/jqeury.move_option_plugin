jqeury.move_option_plugin
=========================

jQuery Move Option Plugin Demo

How to used: 

Prepare JS:
1. jquery.min.js 
2. 
2. jquery.move.option.plugin.js 

Prepare DOM:
	<div class="group_box">

		<select id="sgroup_1" name="sgroup_1" size="7" multiple="multiple" >
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
			<option value="4">4</option>
			<option value="5">5</option>
		</select>

		<button class="on_arrow"> <- </button>

		<button class="off_arrow"> -> </button>

		<select id="sgroup_2" name="sgroup_2" size="7" multiple="multiple" >
			<option value="a">a</option>
			<option value="b">b</option>
			<option value="c">c</option>
			<option value="d">d</option>
			<option value="e">e</option>
		</select>

	</div>

Init function

$(function(){
	$(".group_box").selected_controller({
		selected   :"#sgroup_1",
		unselected : "#sgroup_2",
		off_arrow  : ".off_arrow",
		on_arrow   : ".on_arrow"
	})
})



//end

