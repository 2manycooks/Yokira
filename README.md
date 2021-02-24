# Yokira

## a retro RPG with random generation elements

You are a yokira ("Monster Hunter" in Japanese), and your mission is to travel the dark corners of Feudal Japan, ridding the world of malevolent Demons, Spirits, and other mythical beasts.

Choose from 3 different classes, and design your own way to play.

Monsters, loot, and each damage roll is random, so you will not only need skill, but a bit of luck as well!

NOTE: this game utilizes a decoupled backend via Django REST framework. You will need the backend server running to properly play on your local machine: 
Otherwise, there is a fully playable version online here:

This is an ongoing passion project, as well as an opportunity for me to practice the power of React's useEffect hook; many of the game's randomization is done by fetching base stats from the database, and randomizing them based on a formula you can find in the respective EnemyArea/PlayerArea components.