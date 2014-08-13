jqeury.move_option_plugin
=========================

jQuery Move Option Plugin Demo

How to used: 

Prepare JS:<br>
1. JQuery.min.js <br>
2. JQuery.move.option.plugin.js 

Prepare DOM:

<pre style='color:#000000;background:#ffffff;'><html><body style='color:#000000; background:#ffffff; '><pre>
<span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>div</span><span style='color:#274796; '> </span><span style='color:#074726; '>class</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"group_box"</span><span style='color:#a65700; '>></span>

    <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>select</span><span style='color:#274796; '> </span><span style='color:#074726; '>id</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"sgroup_1"</span><span style='color:#274796; '> </span><span style='color:#074726; '>name</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"sgroup_1"</span><span style='color:#274796; '> </span><span style='color:#074726; '>size</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"7"</span><span style='color:#274796; '> </span><span style='color:#074726; '>multiple</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"multiple"</span><span style='color:#274796; '> </span><span style='color:#a65700; '>></span>
        <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>option</span><span style='color:#274796; '> </span><span style='color:#074726; '>value</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"1"</span><span style='color:#a65700; '>></span><span style='color:#008c00; '>1</span><span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>option</span><span style='color:#a65700; '>></span>
        <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>option</span><span style='color:#274796; '> </span><span style='color:#074726; '>value</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"2"</span><span style='color:#a65700; '>></span><span style='color:#008c00; '>2</span><span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>option</span><span style='color:#a65700; '>></span>
        <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>option</span><span style='color:#274796; '> </span><span style='color:#074726; '>value</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"3"</span><span style='color:#a65700; '>></span><span style='color:#008c00; '>3</span><span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>option</span><span style='color:#a65700; '>></span>
        <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>option</span><span style='color:#274796; '> </span><span style='color:#074726; '>value</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"4"</span><span style='color:#a65700; '>></span><span style='color:#008c00; '>4</span><span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>option</span><span style='color:#a65700; '>></span>
        <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>option</span><span style='color:#274796; '> </span><span style='color:#074726; '>value</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"5"</span><span style='color:#a65700; '>></span><span style='color:#008c00; '>5</span><span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>option</span><span style='color:#a65700; '>></span>
    <span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>select</span><span style='color:#a65700; '>></span>

    <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>button</span><span style='color:#274796; '> </span><span style='color:#074726; '>class</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"on_arrow"</span><span style='color:#a65700; '>></span> <span style='color:#a65700; '>&lt;</span><span style='color:#5f5035; '>-</span><span style='color:#274796; '> &lt;/button</span><span style='color:#a65700; '>></span>

    <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>button</span><span style='color:#274796; '> </span><span style='color:#074726; '>class</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"off_arrow"</span><span style='color:#a65700; '>></span> -> <span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>button</span><span style='color:#a65700; '>></span>

    <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>select</span><span style='color:#274796; '> </span><span style='color:#074726; '>id</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"sgroup_2"</span><span style='color:#274796; '> </span><span style='color:#074726; '>name</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"sgroup_2"</span><span style='color:#274796; '> </span><span style='color:#074726; '>size</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"7"</span><span style='color:#274796; '> </span><span style='color:#074726; '>multiple</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"multiple"</span><span style='color:#274796; '> </span><span style='color:#a65700; '>></span>
        <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>option</span><span style='color:#274796; '> </span><span style='color:#074726; '>value</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"a"</span><span style='color:#a65700; '>></span>a<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>option</span><span style='color:#a65700; '>></span>
        <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>option</span><span style='color:#274796; '> </span><span style='color:#074726; '>value</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"b"</span><span style='color:#a65700; '>></span>b<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>option</span><span style='color:#a65700; '>></span>
        <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>option</span><span style='color:#274796; '> </span><span style='color:#074726; '>value</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"c"</span><span style='color:#a65700; '>></span>c<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>option</span><span style='color:#a65700; '>></span>
        <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>option</span><span style='color:#274796; '> </span><span style='color:#074726; '>value</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"d"</span><span style='color:#a65700; '>></span>d<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>option</span><span style='color:#a65700; '>></span>
        <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>option</span><span style='color:#274796; '> </span><span style='color:#074726; '>value</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"e"</span><span style='color:#a65700; '>></span>e<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>option</span><span style='color:#a65700; '>></span>
    <span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>select</span><span style='color:#a65700; '>></span>

<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>div</span><span style='color:#a65700; '>></span>
</pre>

Init function


$(function(){<br>
	$(".group_box").selected_controller({<br>
		selected   :"#sgroup_1",<br>
		unselected : "#sgroup_2",<br>
		off_arrow  : ".off_arrow",<br>
		on_arrow   : ".on_arrow"<br>
	})<br>
})<br>



//end

