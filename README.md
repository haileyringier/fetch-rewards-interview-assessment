# Fetch Rewards Coding Exercise
> Software Engineering - Front End Role

## General info
The deliverables for this exercise were to fetch data from https://fetch-hiring.s3.amazonaws.com/hiring.json and display to the user. 

 * Display this list of items to the user based on the following requirements:
    * Display all the items grouped by "listId"
    * Sort the results first by "listId" then by "name" when displaying.
    * Filter out any items where "name" is blank or null.

Once I fetched the data I created a helper function that filters out any objects where the name proporty is either an empty string or it the name property was null. 

After I filtered the data, I then created a helper function that sorts the data by the name property. The instruction to sort the results by listid and then by name posed some questions. The name property is a string that follows the pattern of the word "Item" followed by a number. For example, "name": "Item 234", sorting by a string will alphabetically sort the data which is not how a user would expect the data to appear in a list. I decided to follow the instructions for the challenge and sort by name instead of following a chronological order, 

I then took the sorted data and created another helper function that groups the data by the listId property which reflected in all the objects with the listId of 1 being then subsequently sorted by the name attribute. 

There are five buttons that when clicked to filter the data to show data with the corresponding "listId". 

I used React as my frontend framework and incorporated Material-UI for styling. Initially, I attempted to fetch the data in React but due to Cors my request was blocked. I proceeded by creating a proxy using Node and Express. I also used a few helper functions to sort and filter the data before sending it to my front end. 


## Intro Video
[Walkthrough of Coding Exercise]()

## Setup
1. 
1.  
  $ 

## Contact
[Hailey Ringier](https://www.linkedin.com/in/hailey-ringier/) 




