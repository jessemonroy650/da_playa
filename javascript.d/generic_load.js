/* http://www.java2s.com/Tutorials/Javascript/Javascript_Reference/Document/Is_the_HTML_document_ready.htm
    loading     The browser is loading the document.
    interactive The document has been parsed, but the browser is still loading linked resources.
    complete    The document has been parsed and all of the resources have been loaded.
*/
document.onreadystatechange = function() { 
  if (document.readyState == "loading") {
    console.log("loading " + document.readyState);
  }
  if (document.readyState == "interactive") {
    console.log("interactive " + document.readyState);
  }
  if (document.readyState == "complete") {
    console.log("complete " + document.readyState);
  }
}
