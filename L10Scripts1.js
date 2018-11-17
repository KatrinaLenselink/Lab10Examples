var t = new Date ();
var d= t.getSeconds() + "." + t.getMilliseconds();

function stopTime ()
{
  var myAlert = alert("You have been on this page for: " + d + " seconds"  );
  console.log(myAlert);
}
