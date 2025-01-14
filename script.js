// JavaScript code to load and play web games, and toggle fullscreen mode

let isFullscreen = false; // Variable to keep track of fullscreen state

// Function to load a game into the game container
function loadGame(gameUrl) {
  const gameContainer = document.getElementById('game-container');
  gameContainer.innerHTML = `<embed src="${gameUrl}" width="100%" height="100%" frameborder="0"></embed>`;
}
function loadCustomGame() {
  loadGame(document.getElementById('url-input').value)
}
// Function to toggle fullscreen mode
function toggleFullscreen() {
  const gameContainer = document.getElementById('game-container');
  const fullscreenBtn = document.getElementById('fullscreen-btn');

  if (!isFullscreen) {
    if (gameContainer.requestFullscreen) {
      gameContainer.requestFullscreen();
    } else if (gameContainer.mozRequestFullScreen) {
      gameContainer.mozRequestFullScreen();
    } else if (gameContainer.webkitRequestFullscreen) {
      gameContainer.webkitRequestFullscreen();
    } else if (gameContainer.msRequestFullscreen) {
      gameContainer.msRequestFullscreen();
    }
  } 
}
<script>
  window.intercomSettings = {
    api_base: "https://api-iam.intercom.io",
    app_id: "p1rll1g3",
    user_id: user.id, // IMPORTANT: Replace "user.id" with the variable you use to capture the user's ID
    name: user.name, // IMPORTANT: Replace "user.name" with the variable you use to capture the user's name
    email: user.email, // IMPORTANT: Replace "user.email" with the variable you use to capture the user's email address
    created_at: user.createdAt, // IMPORTANT: Replace "user.createdAt" with the variable you use to capture the user's sign-up date
  };
</script>


<script>
  // We pre-filled your app ID in the widget URL: 'https://widget.intercom.io/widget/p1rll1g3'
  (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/p1rll1g3';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
</script>
