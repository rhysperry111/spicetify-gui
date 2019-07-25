// I am really really sorry for the long and descriptive variable names
var iniFile `
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

function downloadINI() {
  var filename = "color.ini";
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(iniFile));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
