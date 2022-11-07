function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6PzmsWWPYE1":
        Script1();
        break;
      case "5rXFyQIQzRH":
        Script2();
        break;
      case "6IJ5iAxARe9":
        Script3();
        break;
      case "6MXjVsvMKAJ":
        Script4();
        break;
      case "5dZqhPudDXx":
        Script5();
        break;
      case "5hzigIPpqZA":
        Script6();
        break;
      case "6f7UwZ9lyOv":
        Script7();
        break;
      case "5y2ueHN7OYD":
        Script8();
        break;
      case "5sdcKt8XIN2":
        Script9();
        break;
      case "6Q8e51pmehF":
        Script10();
        break;
      case "5fo5ngowDjA":
        Script11();
        break;
      case "6IT6sNgCZvI":
        Script12();
        break;
  }
}

function Script1()
{
  localStorage.setItem("a1",GetPlayer().GetVar("content_analasys"));
localStorage.setItem("a2",GetPlayer().GetVar("storyboarding"));
localStorage.setItem("a3",GetPlayer().GetVar("prototyping"));
localStorage.setItem("a4",GetPlayer().GetVar("script_writting_Effort"));
localStorage.setItem("a5",GetPlayer().GetVar("feedback_ID"));
localStorage.setItem("a6",GetPlayer().GetVar("TOTAL_ID"));
localStorage.setItem("a7",GetPlayer().GetVar("TAT_ID"));
localStorage.setItem("b1",GetPlayer().GetVar("visual_proposal"));
localStorage.setItem("b2",GetPlayer().GetVar("UI_Support"));
localStorage.setItem("b3",GetPlayer().GetVar("UI_feedback"));
localStorage.setItem("b4",GetPlayer().GetVar("TOTAL_UI"));
localStorage.setItem("c1",GetPlayer().GetVar("content_integration"));
localStorage.setItem("c2",GetPlayer().GetVar("feedback_implementation_DEV"));
localStorage.setItem("c3",GetPlayer().GetVar("audio_integration"));
localStorage.setItem("c4",GetPlayer().GetVar("custom_player"));
localStorage.setItem("c5",GetPlayer().GetVar("all_hours_DEV"));
localStorage.setItem("c6",GetPlayer().GetVar("TAT_dev"));
window.open('ballpark.html');
}

function Script2()
{
  localStorage.setItem("client",GetPlayer().GetVar("client_name"));
localStorage.setItem("dur",GetPlayer().GetVar("duration"));
localStorage.setItem("lvl",GetPlayer().GetVar("level"));
localStorage.setItem("s_c",GetPlayer().GetVar("source_content"));
localStorage.setItem("c_t",GetPlayer().GetVar("content_type"));
localStorage.setItem("units",GetPlayer().GetVar("unit"));
localStorage.setItem("d1",GetPlayer().GetVar("TOTAL_UI"));
localStorage.setItem("d2",GetPlayer().GetVar("UI_rate"));
localStorage.setItem("d3",GetPlayer().GetVar("UI_costs"));
localStorage.setItem("e1",GetPlayer().GetVar("TOTAL_ID"));
localStorage.setItem("e2",GetPlayer().GetVar("ID_rate"));
localStorage.setItem("e3",GetPlayer().GetVar("ID_costs"));
localStorage.setItem("f1",GetPlayer().GetVar("DEV_without_audio_int"));
localStorage.setItem("f2",GetPlayer().GetVar("DEV_rate"));
localStorage.setItem("f3",GetPlayer().GetVar("DEV_costs"));
localStorage.setItem("g1",GetPlayer().GetVar("testing"));
localStorage.setItem("g2",GetPlayer().GetVar("testing_rate"));
localStorage.setItem("g3",GetPlayer().GetVar("testing_costs"));
localStorage.setItem("h1",GetPlayer().GetVar("PM_rate"));
localStorage.setItem("h2",GetPlayer().GetVar("UI_ID_DEV_TEST"));
localStorage.setItem("h3",GetPlayer().GetVar("PM_costs"));
localStorage.setItem("i3",GetPlayer().GetVar("SUBTOTAL1"));
localStorage.setItem("j23",GetPlayer().GetVar("VO"));
localStorage.setItem("k1",GetPlayer().GetVar("audio_int_for_client"));
localStorage.setItem("k2",GetPlayer().GetVar("DEV_rate"));
localStorage.setItem("k3",GetPlayer().GetVar("audio_int_cost"));
localStorage.setItem("l3",GetPlayer().GetVar("SUBTOTAL2"));
localStorage.setItem("m3",GetPlayer().GetVar("TOTAL_COST"));
window.open('client_ballpark.html');
}

function Script3()
{
  var player = GetPlayer(); 
var targetNumberCI = player.GetVar("content_integration"); 
targetNumberCI = Math.round(targetNumberCI); 
player.SetVar("content_integration", targetNumberCI); 
}

function Script4()
{
  var player = GetPlayer(); 
var targetNumberFIDEV = player.GetVar("feedback_implementation_DEV"); 
targetNumberFIDEV = Math.round(targetNumberFIDEV); 
player.SetVar("feedback_implementation_DEV", targetNumberFIDEV); 
}

function Script5()
{
  var player = GetPlayer(); 
var targetNumberUIF = player.GetVar("UI_feedback"); 
targetNumberUIF = Math.round(targetNumberUIF); 
player.SetVar("UI_feedback", targetNumberUIF); 
}

function Script6()
{
  var player = GetPlayer(); 
var targetNumberVP = player.GetVar("visual_proposal"); 
targetNumberVP = Math.round(targetNumberVP); 
player.SetVar("visual_proposal", targetNumberVP); 
}

function Script7()
{
  var player = GetPlayer(); 
var targetNumberUIS = player.GetVar("UI_Support"); 
targetNumberUIS = Math.round(targetNumberUIS); 
player.SetVar("UI_Support", targetNumberUIS); 
}

function Script8()
{
  var player = GetPlayer(); 
var targetNumberSWE = player.GetVar("script_writting_Effort"); 
targetNumberSWE = Math.round(targetNumberSWE); 
player.SetVar("script_writting_Effort", targetNumberSWE); 
}

function Script9()
{
  var player = GetPlayer(); 
var targetNumberFID = player.GetVar("feedback_ID"); 
targetNumberFID = Math.round(targetNumberFID); 
player.SetVar("feedback_ID", targetNumberFID); 
}

function Script10()
{
  var player = GetPlayer(); 
var targetNumberPT = player.GetVar("prototyping"); 
targetNumberPT = Math.round(targetNumberPT); 
player.SetVar("prototyping", targetNumberPT); 
}

function Script11()
{
  var player = GetPlayer(); 
var targetNumberCB = player.GetVar("storyboarding"); 
targetNumberCB = Math.round(targetNumberCB); 
player.SetVar("storyboarding", targetNumberCB); 
}

function Script12()
{
  var player = GetPlayer(); 
var targetNumberCA = player.GetVar("content_analasys"); 
targetNumberCA = Math.round(targetNumberCA); 
player.SetVar("content_analasys", targetNumberCA); 
}

