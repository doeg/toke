module.exports = {
  "NN": null,
  "Det": null,
  "Adj": null,
  "Adv": null,
  "P": null,
  "V": null,
  "N": null,

  "NP": [
    ["NN"],
    ["Det", "N"],
    ["Det", "Adj", "N"],
  ],

  "AP": [
    ["Adj"]
  ],

  "PP": [
    ["P"],
    ["P", "NP"]
  ],

  "VP": [
    // ["V"],
    ["V", "NP"],
  ],

  "S": [
    ["NP", "VP"]
  ]
}
