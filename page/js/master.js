// I am really really sorry for the long and descriptive variable names
var mainFG, secondaryFG,
  mainBG, sidebarPlayerBG,
  coverOverlayShadow, indicatorFGButtonBG,
  pressingFG, sliderBG,
  sidebarIndicatorHoverButtonBG, scrollbarFGSelectedRowBG,
  pressingButtonFG, pressingButtonBG,
  selectedButton, miscBG,
  miscHoverBG, preserve1;

// I am just using a color.ini from a theme I like
var iniFil `
[Base]
; Shadow Style
main_fg                               = ${mainFG}
secondary_fg                          = ${secondaryFG}
main_bg                               = ${mainBG}
sidebar_and_player_bg                 = ${sidebarPlayerBG}
cover_overlay_and_shadow              = ${coverOverlayShadow}
indicator_fg_and_button_bg            = ${indicatorFGButtonBG}
pressing_fg                           = ${pressingFG}
slider_bg                             = ${sliderBG}
sidebar_indicator_and_hover_button_bg = ${sidebarIndicatorHoverButtonBG}
scrollbar_fg_and_selected_row_bg      = ${scrollbarFGSelectedRowBG}
pressing_button_fg                    = ${pressingButtonFG}
pressing_button_bg                    = ${pressingButtonBG}
selected_button                       = ${selectedButton}
miscellaneous_bg                      = ${miscBG}
Miscellaneous_hover_bg                = ${miscHoverBG}
preserve_1                            = ${preserve1}
`

function updateVals() {
  mainFG = document.getElementById("mainFG").value.substring(1);
  secondaryFG = document.getElementById("secondaryFG").value.substring(1);
  mainBG = document.getElementById("mainBG").value.substring(1);
  sidebarPlayerBG = document.getElementById("sidebarPlayerBG").value.substring(1);
  coverOverlayShadow = document.getElementById("coverOverlayShadow").value.substring(1);
  indicatorFGButtonBG = document.getElementById("indicatorFGButtonBG").value.substring(1);
  pressingFG = document.getElementById("pressingFG").value.substring(1);
  sliderBG = document.getElementById("sliderBG").value.substring(1);
  sidebarIndicatorHoverButtonBG = document.getElementById("sidebarIndicatorHoverButtonBG").value.substring(1);
  scrollbarFGSelectedRowBG = document.getElementById("scrollbarFGSelectedRowBG").value.substring(1);
  pressingButtonFG = document.getElementById("pressingButtonFG").value.substring(1);
  pressingButtonBG = document.getElementById("pressingButtonBG").value.substring(1);
  selectedButton = document.getElementById("selectedButton").value.substring(1);
  miscBG = document.getElementById("miscBG").value.substring(1);
  miscHoverBG = document.getElementById("miscHoverBG").value.substring(1);
  preserve1 = document.getElementById("preserve1").value.substring(1);
}
updateVals();

function downloadINI() {
  updateVals();
  var filename = "color.ini";
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(iniFile));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
