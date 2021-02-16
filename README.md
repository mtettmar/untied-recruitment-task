# untied-recruitment-task

Thank you for taking the time to do our technical challenge.  There are two parts to this challenge:

* [A coding task](#coding-task)
* [A few questions](#technical-questions)

Please create a zip file containing:

1. a single markdown file with the answers to the technical questions
2. one folder containing your solution to the coding task

Please upload the zip file to a shared dropbox or Google Drive folder and send us the link.

## Coding Task

We'd like you to create a React or React Native project (Whichever is most suitable for the position you are applying for - we will probably have already discussed this) which shows a user how much tax they will have to pay.

You will need to use the [taxCalculation](https://documenter.getpostman.com/view/7541671/SzzrZETB#855a0137-04c8-40ad-b83b-f1c929a38feb) endpoint of the [untied platform API](https://documenter.getpostman.com/view/7541671/SzzrZETB).

### Requirements

* Create a login screen which asks for the user’s email address and password “letmein”. Make sure that when the user is not logged in they cannot see any other screens. After logging in take them to a new ‘Tax Calculator’ screen.

* Show the user’s email address at the top of the Tax Calculator screen.

* On the Tax Calculator screen create a simple tax calculator using the /taxCalculation endpoint of our public API. Use the following details to connect:
    - Use host: platform-sandbox.untied.io
    - You will need to use the [/auth](https://documenter.getpostman.com/view/7541671/SzzrZETB#5565df22-2742-4d31-8f94-a7f92167f4b5) endpoint to get a token using a client_id and client_secret supplied by us. Use "admin" scope.

* Allow the user to select the tax year from a selection of at least two years (e.g. 2019-2020 and 2020-2021) 

* Allow the user to enter their postcode and then enter one or more of the following:
	- Self employment income for the year
	- Annual dividend income
	- Annual employment income (salary)

* Post the data to the /taxCalculation endpoint to get a tax calculation back and present it to the user

* Show the breakdown of tax, and the different national insurance types
  - Note that total_tax_due returned by /taxCalculation does not include class 1 NICs as these are usually paid by the employer, so to show the user their total tax be sure to add class 1 NIC to it.

* Add a Tabbed component and a second screen. Make this an About screen. Show their email address at the top and a version number. Add a link to help.untied.io 

### Notes

* Please aim to spend 2-3 hours completing this task
* We'd like to see state management tools being used
* Style the components however you see fit. SASS or PostCSS are fine, but we'd prefer CSS in JS
* We love tests, linted code and great looking UIs
* The API contains other methods, feel free to use this creatively if you have the time
* Remember to check your project runs before submitting

# Technical Questions

* How long did you spend on the coding test? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.
* What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
* How would you track down a performance issue in production? Have you ever had to do this?
* How would you improve the taxCalculation API that you just used?
* In the /src folder of this repository you will find a file called taxCalc.js that contains a take home pay calculator for a given salary and tax year. What might be the advantages/disadvantages of using this calculation compared to the API?
* If you have time think about how you might be able to solve the calcGrossFromTakehome function.  

#### Thanks for your time!

If you have any questions or something isn't clear please ask. We look forward to hearing from you.
