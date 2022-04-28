function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Aj2jxYWRHW":
        Script1();
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

