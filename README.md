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
[imgur link:](https://imgur.com/a/ctFUZMb)

2) When the inlcuded leds are enabled, 
the matrix seem to count up with index
count. 
But only for certain pins.
The pins seem to affect 
informat pin # = 5x5 led locations(row,col); location 2 (row, col)
pin 6 = (3,2);(3,4)
pin 8 = doesn't affect 5x5 leds
pin 9 = (2,4);(4,2);(5,2)
[imgur link:](https://imgur.com/a/ctFUZMb)

3) With the knowlege obtained I augmented
the screensaver program from assinment 3
I maped the pins 0,8,12
as sleep, awake , power
respectfully
[imgur link:](https://imgur.com/a/sOcWa0Z) 


## soil sensor section

###
 digital in

1) Since I used a blue led which has a higher voltage maxmium, 
I didn't use a resisitor.
When the sensor hits the water it completes the ciruit though the water mostly.
Digital read is problematic I had to change it to analog read
I was only able to get it to work if 
I shorted the sensor or shorted the plates on the senor.
Also when it had a power surge from after the reset button was pressed. 
Attempted fresh batteries. 
No aval.
Also tried to spike the water with salt.
Don't worry this is my sensor not the school's
and it came in a pack of 2.
So it had a value of 561
Which would likely be below the actvation threshold of digital in.
[imgur link:](https://imgur.com/a/tsXBwQ7)

 maunual calibration

2) I had set the minium to the max number value  of 1023.
during testing I had the basic.showNumber function 
to show the value of setMin
I had the button a to setMin rather than the loop method
Which generally gave a number between 2 and 5
I did not measure setMax which is mapped to button b,
but I do know that the value should be close to 
1002 from prevous experiments.
[imgur link:](https://imgur.com/a/sn8WK4Z)


