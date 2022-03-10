/*
  Notepad Routines - 2022-02-21

  ++ 

*/
if ( theExtensions.includes('notepad') ) {
  function markfield(a) {
    var video_url = document.getElementById('video-url').value;  
    var already_marked = document.getElementById('marked').value

    if ( video_url.length ) {
      console.log(video_url);
      if ( a == 1) {
        if ( already_marked.length > 1 ) {
          document.getElementById('marked').value = already_marked + '\n' + video_url;
        } else {
          document.getElementById('marked').value =  video_url;
        }
      } else {
        document.getElementById('marked').value = code_final;
      }
      marked_to_store();
    }
  }
  //
  function marked_to_store() {
    putSingleBigStore('marked',       document.getElementById('marked').value );
    putSingleBigStore('marked-notes', document.getElementById('marked-notes').value );
  }
  //
  function store_to_marked() {
    document.getElementById('marked').value       = getSingleBigStore('marked');
    document.getElementById('marked-notes').value = getSingleBigStore('marked-notes');
  }
  //
  function commit_marked() {
    marked_to_store();
    document.getElementById('commit_marker').textContent = '|*|';
    setTimeout( function() {
      document.getElementById('commit_marker').innerHTML = '|&nbsp;|';
    } , 5000);
  }
  //
  function clear_marked() {
    putSingleBigStore('marked',       '' );
    putSingleBigStore('marked-notes', '' );
    document.getElementById('marked').value       = '';
    document.getElementById('marked-notes').value = '';  
  }
}
/*** HTML ***
<div ><button onclick="commit_marked()">Commit Marked and Notes</button> <span id=commit_marker>|&nbsp;|</span><br />
<textarea id=marked class=textbox cols=50 rows=8 ></textarea>
<textarea id=marked-notes class=textbox style="background-color:white;" cols=60 rows=8 ></textarea><br />
<button onclick="clear_marked()">CLEAR Marked and Notes</button>
</div>

    // This needs to go before just the video/podcast ends & the page reloads.
    commit_marked();

<script id=da_playa_pro-bottom >
  store_to_marked();
</script>
*/