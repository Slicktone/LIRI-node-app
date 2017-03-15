# LIRI-node-app




### Goal:

### Overview
        *  A user on the terminal that needs to pass in 
        information and recieve weather information based off of query.

        *  If an admin queries information this will return all users and
        their search information.


## File Structure:
CLI.js
User.js
Admin.js
Weather Package(npm)
package.JSON
log.txt(storing what the user passed(like a database))
Inquirer Package

--------
CLI.js
--------
CLI will be ran and passed arguments (process.arv or Inquirer) which will
be either admin or user.

CLI will take args and run different tasks depending on which arguments
were called. (collecting different inputs at its core)
<generally keep this basic>

FOR Inquirer
Are you a user or admin?
    [IF ADMIN IS SELECTED]
        -RUN INFORMATION IN LOG.TXT FILE
[IF USER IS SELECTED]





---------
User.js
---------
When ran, this takes grabs the weather and displays it to the User and will also
add this to the log.txt database.

Take in user input (name, location, date)
GET weather results (query)
Store results in log.txt file
Print results to screen




---------
Admin.js
---------

When admin is ran this will get the data passed in from whatever the User.js searched. (from log.txt)

--------
log.txt
--------

This file will write to the new User.js search.


