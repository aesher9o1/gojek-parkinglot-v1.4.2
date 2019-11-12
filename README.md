# Gojek ParkingLot v1.4.2
> Backend Internship Task for [Gojek](https://www.gojek.io/)


**Since not much information was given as to what to be printed wrong errors it is assumed that the user will always enter the right input**

![](https://i.imgur.com/h3vJ2jD.png)

## Installation
```console
foo@bar:~$ ./setup.sh
```
## Run in interactive mode
```console
foo@bar:~$ ./parking_lot.sh
```
## Run in automated mode
```console
foo@bar:~$ ./parking_lot.sh ./path_to_file/file.txt
```

## Usage example

| Command        | Description          | Usage  |
| ------------- |:-------------:| -----:|
| **create_parking_lot <size>**      | Creates parking lot of a particular size| create_parking_lot 6 |
| **park <rid> <color>**      | Parks a car of particular registration ID and color      |   park KA-01-HH-1234 White |
| **leave <index>**      | Clears the spot      |   leave 4 |
| **status**      | Prints the database     |   status |
| **registration_numbers_for_cars_with_colour <color>**      | Return the registration numbers of cars with particular color      |   registration_numbers_for_cars_with_colour White |
| **slot_numbers_for_cars_with_colour <color>**      | Show slot numbers of cars with particular color     |   slot_numbers_for_cars_with_colour White |
| **slot_number_for_registration_number <rid>**      | Shows parking spot of the car with particular rid      |   slot_number_for_registration_number KA-01-HH-3141 |
| **exit**      | Exits the terminal     |   exit |




aesher9o1 – [https://github.com/aesher9o1](https://github.com/aesher9o1)


