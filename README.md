# nutripoint

- Part 1 : QUESTIONS.md
- Part 2 & 3 : /practice

#How to use
First, you can start the node-server using yarn start or npm start
It will run on port 3000
Then, you can start the react app using yarn start or npm start
It will prompt you to choose another port, type Y and the web app will run on port 3000


#Comments :
Although the frontend only accepts one file at a time, the backend was created with the possibility of printing multiple files
For printing, we used the library unix-print, we could also have used pdfToPrinter which would be better suited for windows use case.
We also could have determined the platform using process.platform and use one of the modules according to the value of this variable.
Finally, we could have done this without a library, by creating 3 files :
print.js
getDefaultPrinter.js
getPrinters.js



