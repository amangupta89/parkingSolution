# To run Code

Run the main program
"node index.js"


Problem:
-----------------------

Design a working parking lot application where we can enter below commands on the terminal. 
Application should be able to support following two strategies for parking:

1) Nearest available slot
2) Odd numbered vehicles to be parked in odd numbered slots and even numbered vehicles to be parked in even numbered slots

Input on terminal: 
------------------------
create_parking_lot 6
park KA-01-HH-1234 White
park KA-01-HH-9999 White
park KA-01-BB-0001 Black
park KA-01-HH-7777 Red
park KA-01-HH-2701 Blue
park KA-01-HH-3141 Black
leave 4
status

Output:
------------------------
Created a parking lot with 6 slots
Allocated slot number: 1
Allocated slot number: 2
Allocated slot number: 3
Allocated slot number: 4
Allocated slot number: 5
Allocated slot number: 6
Slot number 4 is free
Slot No. Registration No Colour
1 KA-01-HH-1234 White
2 KA-01-HH-9999 White
3 KA-01-BB-0001 Black
5 KA-01-HH-2701 Blue
6 KA-01-HH-3141 Black