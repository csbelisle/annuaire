(function() {
    var extlinks, i, nodeMap, source;
    nodeMap = document.createAttribute("target");
    nodeMap.value = "_blank";
    extlinks = document.getElementsByTagName("a");
    i = 0;
    while(i < extlinks.length){
        source = extlinks[i].getAttributeNode("href").value;
        if (source.substring(0, 4) === "http") extlinks[i].setAttribute("target", "_blank");
        i++;
    }
}).call(this);

//# sourceMappingURL=index.db37b6d3.js.map
