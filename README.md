##LEDS section

###
1) In the original the 5x5 leds are disabled. 
The for loop counts up and 
basied on the count value which is named index.
The brightness changes for the count value.
1023 is max brightness. 
When the if statment hits its maxium, 
the next if statement starts.
The previous led is counting down in 
it's else branch.
It seems to be no issue that the first branch is  
negative when the third led is on.
imgur link:

2) When the inlcuded leds are enabled, 
the matrix seem to count up with index
count. 
But only for certain pins.
The pins seem to affect 
informat pin # = 5x5 led locations(row,col); location 2 (row, col)
pin 6 = (3,2);(3,4)
pin 8 = doesn't affect 5x5 leds
pin 9 = (2,4);(4,2);(5,2)
imgur link:

3)With the knowlege obtained I augmented
the screensaver program from assinment 3
I maped the pins 0,8,12
as sleep, awake , power
respectfully
imgur link: 





