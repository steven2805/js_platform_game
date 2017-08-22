# js_platform_game

Download the master from the repo on Github

- In the top level of the file in the terminal type 'npm install'
- Next type 'npm run bundle'
- cmd + t to open a new terminal window
- In this new window type 'npm start'
- In the browser go to localhost:3000

- The aim in each level is to get the key then get to the door.
- The character has three lives per level.
- The character dies if he falls through the gaps in the floor or falls more than 200 pixals.
- Coin bags increase score (though this is not persisted yet)
- Currently the collision logic needs some bugs fixed. 
- Levels an be created, deleted or edited simply by altering the levelsPack in levels.js. 
            x = stone
            b = bricks
            g = grass
            c = coin bag
            P = player start
            K = key
            D = door   
