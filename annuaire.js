const nodeMap = document.createAttribute("target");
nodeMap.value = "_blank";
const extlinks = document.getElementsByTagName("a");

for (let i = 0; i < extlinks.length; i++) {
  let source = extlinks[i].getAttributeNode("href").value;
  if (source.substring(0, 4) == "http") {
    extlinks[i].setAttribute("target", "_blank");
  }
}
