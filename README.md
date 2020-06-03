Infromation

http://13.58.145.99:3009/ to get the basic information about the API(Hosted on Amazon web server.)

The project is about the superhero API which gives informations about the superhero  in the comics universe. The API hold the superhero data and deisplaysthe data in JSON format.

Use policy
This is free to use and intented for educational purpose only. Anyone can use it and make changes to it once it is sent to the public workspace in the gitlab.

How it works?

The API has been hosted by node.js and can be used in any browser.Since it doesnot have any frontend content so better use it in tools like postman that works
with things like POST, GET ,PUT,DELETE.

Use of following things for the project:
Node.js(Server)
Typescript
Express framework
POSTGRESQL (Database)
VSCODE(IDE)
DBeaver(Databse handler)
Postman


Getting Started!

To run the project, user need to do the following:

Install all the modules required using command( npm i )
Run the commands (npm run dev) to start the server.
Once the server Started( You can check console to check for any logs about starting server)
Now using the Postman the API can be accessed using the URL.

Now use the url for following purposes:
http://13.58.145.99:3009/ to get the basic information about the API


Final Information

Since the API is all ready to be consumed by other application, Further it can be expanded to make it better. Some of the things that can be implemented 
in the future are:
1.Better  use of dynamic images
2.Implement it into a good looking frontend for better experience.
3.More admin features can be implemented later like handling users and their behaviour..


--If you need Database you can see database/connection.ts in the files to check it.
--if you go to user/registration you will need :
        firstname
        lastname
        email
        dateOfBirth
        password

--for login @user\login
        email
        password


--you now can go to user/superhero/allheroes(doesnot need login)
--user/superhero/5  OR user/superhero/wolverine (need login)
-- also you want make an front end for user/superhero/wolverine/image

for admin

--admin/login (It doesnot have session or jwt for admin)(default email is admin@gmail.com password is 'password')

--admin/delete (shows all the data)

--admin/delete/5(give id to delete datas).
