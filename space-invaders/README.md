<h2>Introduction</h2>
This is a half baked app which aspire space-invadors game

<h2>Functionality</h2>
click on the windows and enter will launch the ball

<h2>Points of interests</h2>
<ul>
<li>looking via DevChromTools performance and using setInterval i saw that timer callback is inoked much more compare to requestAnimationFrame so using it is not good because it is invoked at a fast rate that the user can not see. (check also https://www.youtube.com/watch?v=cCOL7MC4Pl0 at 14:56 - 18:00)
</li>
<li>one might wonder why should we use requestAnimationFrame because this is react so why not use virtual DOM. but react is not using requestAnimationFrame and requestAnimationFrame gather all painting together so it looks better in this game . it also invokd in a rate that can be seen by the user</li>
</ul>

<h2>Todo</h2>
<ul>
<li>finish the game</li>
</ul>
