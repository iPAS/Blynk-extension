Blockly.defineBlocksWithJsonArray(
[{
  "type": "blynk_setup",
  "message0": "Blynk setup %1 WiFi SSID: %2 WiFi Password: %3 Auth Token: %4 debug: %5",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "ssid",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "pass",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "auth",
      "check": "String"
    },
    {
      "type": "field_dropdown",
      "name": "debug",
      "options": [
        [
          "on",
          "print"
        ],
        [
          "off",
          "None"
        ]
      ]
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#1ABC9C",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "blynk_on_vw",
  "message0": "Blynk on Virtual pin %1 write %2 %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "pin",
      "options": [
        [ "V0", "V0" ],
        [ "V1", "V1" ],
        [ "V2", "V2" ],
        [ "V3", "V3" ],
        [ "V4", "V4" ],
        [ "V5", "V5" ],
        [ "V6", "V6" ],
        [ "V7", "V7" ],
        [ "V8", "V8" ],
        [ "V9", "V9" ],
        [ "V10", "V10" ],
        [ "V11", "V11" ],
        [ "V12", "V12" ],
        [ "V13", "V13" ],
        [ "V14", "V14" ],
        [ "V15", "V15" ],
        [ "V16", "V16" ],
        [ "V17", "V17" ],
        [ "V18", "V18" ],
        [ "V19", "V19" ],
        [ "V20", "V20" ],
        [ "V21", "V21" ],
        [ "V22", "V22" ],
        [ "V23", "V23" ],
        [ "V24", "V24" ],
        [ "V25", "V25" ],
        [ "V26", "V26" ],
        [ "V27", "V27" ],
        [ "V28", "V28" ],
        [ "V29", "V29" ],
        [ "V30", "V30" ],
        [ "V31", "V31" ],
        [ "V32", "V32" ],
        [ "V33", "V33" ],
        [ "V34", "V34" ],
        [ "V35", "V35" ],
        [ "V36", "V36" ],
        [ "V37", "V37" ],
        [ "V38", "V38" ],
        [ "V39", "V39" ],
        [ "V40", "V40" ],
        [ "V41", "V41" ],
        [ "V42", "V42" ],
        [ "V43", "V43" ],
        [ "V44", "V44" ],
        [ "V45", "V45" ],
        [ "V46", "V46" ],
        [ "V47", "V47" ],
        [ "V48", "V48" ],
        [ "V49", "V49" ],
        [ "V50", "V50" ],
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "callback"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#1ABC9C",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "blynk_on_vr",
  "message0": "Blynk on Virtual pin %1 read %2 %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "pin",
      "options": [
        [ "V0", "V0" ],
        [ "V1", "V1" ],
        [ "V2", "V2" ],
        [ "V3", "V3" ],
        [ "V4", "V4" ],
        [ "V5", "V5" ],
        [ "V6", "V6" ],
        [ "V7", "V7" ],
        [ "V8", "V8" ],
        [ "V9", "V9" ],
        [ "V10", "V10" ],
        [ "V11", "V11" ],
        [ "V12", "V12" ],
        [ "V13", "V13" ],
        [ "V14", "V14" ],
        [ "V15", "V15" ],
        [ "V16", "V16" ],
        [ "V17", "V17" ],
        [ "V18", "V18" ],
        [ "V19", "V19" ],
        [ "V20", "V20" ],
        [ "V21", "V21" ],
        [ "V22", "V22" ],
        [ "V23", "V23" ],
        [ "V24", "V24" ],
        [ "V25", "V25" ],
        [ "V26", "V26" ],
        [ "V27", "V27" ],
        [ "V28", "V28" ],
        [ "V29", "V29" ],
        [ "V30", "V30" ],
        [ "V31", "V31" ],
        [ "V32", "V32" ],
        [ "V33", "V33" ],
        [ "V34", "V34" ],
        [ "V35", "V35" ],
        [ "V36", "V36" ],
        [ "V37", "V37" ],
        [ "V38", "V38" ],
        [ "V39", "V39" ],
        [ "V40", "V40" ],
        [ "V41", "V41" ],
        [ "V42", "V42" ],
        [ "V43", "V43" ],
        [ "V44", "V44" ],
        [ "V45", "V45" ],
        [ "V46", "V46" ],
        [ "V47", "V47" ],
        [ "V48", "V48" ],
        [ "V49", "V49" ],
        [ "V50", "V50" ],
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "callback"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#1ABC9C",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "blynk_write",
  "message0": "Blynk write %1 to Virtual pin %2",
  "args0": [
    {
      "type": "input_value",
      "name": "value"
    },
    {
      "type": "field_dropdown",
      "name": "pin",
      "options": [
        [ "V0", "V0" ],
        [ "V1", "V1" ],
        [ "V2", "V2" ],
        [ "V3", "V3" ],
        [ "V4", "V4" ],
        [ "V5", "V5" ],
        [ "V6", "V6" ],
        [ "V7", "V7" ],
        [ "V8", "V8" ],
        [ "V9", "V9" ],
        [ "V10", "V10" ],
        [ "V11", "V11" ],
        [ "V12", "V12" ],
        [ "V13", "V13" ],
        [ "V14", "V14" ],
        [ "V15", "V15" ],
        [ "V16", "V16" ],
        [ "V17", "V17" ],
        [ "V18", "V18" ],
        [ "V19", "V19" ],
        [ "V20", "V20" ],
        [ "V21", "V21" ],
        [ "V22", "V22" ],
        [ "V23", "V23" ],
        [ "V24", "V24" ],
        [ "V25", "V25" ],
        [ "V26", "V26" ],
        [ "V27", "V27" ],
        [ "V28", "V28" ],
        [ "V29", "V29" ],
        [ "V30", "V30" ],
        [ "V31", "V31" ],
        [ "V32", "V32" ],
        [ "V33", "V33" ],
        [ "V34", "V34" ],
        [ "V35", "V35" ],
        [ "V36", "V36" ],
        [ "V37", "V37" ],
        [ "V38", "V38" ],
        [ "V39", "V39" ],
        [ "V40", "V40" ],
        [ "V41", "V41" ],
        [ "V42", "V42" ],
        [ "V43", "V43" ],
        [ "V44", "V44" ],
        [ "V45", "V45" ],
        [ "V46", "V46" ],
        [ "V47", "V47" ],
        [ "V48", "V48" ],
        [ "V49", "V49" ],
        [ "V50", "V50" ],
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#1ABC9C",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "blynk_get_value_number",
  "message0": "Blynk get value as number",
  "inputsInline": true,
  "output": null,
  "colour": "#1ABC9C",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "blynk_get_value_string",
  "message0": "Blynk get value as text",
  "inputsInline": true,
  "output": null,
  "colour": "#1ABC9C",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "blynk_loop",
  "message0": "Blynk run loop",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#1ABC9C",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "blynk_run",
  "message0": "Blynk run",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#1ABC9C",
  "tooltip": "",
  "helpUrl": ""
}]
);
