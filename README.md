# React Google Book Search
This application intigrates using React with the GoogleBook API in order to search for books,
return the data about the book and possibly save the book for later using Mongodb as our database.

# Getting Started
If you're using the cloned version of this application start by opening your ternimal and type 'npm install' followed by 'npm start' to start the application.

Once you open the application you'll notice there are two pages. 
We use Routes in React to load each page when needed via our nav bar at the top of the page.

Start by searching for a book in the search bar and clicking the search book button.
If any results are returned a list of books will appear with some data about each one.
You now how the option to save the book for later, sending it to our second page (Saved) or view the book,
which takes you to the Google Play store where you can purchase the book.