const fs = require('fs')
const ParkingLot = require('./index').default
const parkingLot = new ParkingLot()
var commands = []


describe('Validate File Readings', () => {
    it('should read the file sample.txt and construct and array of command', (done) => {
        fs.readFile('./assets/sample.txt', 'utf-8', (err, data) => {
            commands = data.split('\n')
            expect(commands).toBeTruthy()
            done()
        });

    })

    it('should parse commands in proper order', () => {
        expect(commands[0]).toEqual("create_parking_lot 6")
        expect(commands[commands.length - 1]).toEqual("slot_number_for_registration_number MH-04-AY-1111")
    })

});



describe('CRUD of parking lot database', () => {
    it('should create a parking lot of size 6', () => {
        var size_parking_lot = commands[0].split(" ")[1]
        expect(parkingLot.create_parking_lot(size_parking_lot)).toEqual(6)
    });

    it('should allocate parking space from 1 to 6', () => {
        for (var i = 1; i < 7; i++) {
            var registration_number = commands[i].split(" ")[1]
            var color = commands[i].split(" ")[2]
            expect(parkingLot.park(registration_number, color)).toEqual(i)
        }
    })

    it('should clear space 4 ', () => {
        var space = commands[7].split(" ")[1]
        expect(parkingLot.leave(space)).toEqual(4)
    });

    it('should assert number of cars in parking lot to 5', () => {
        expect(parkingLot.status("status").length).toEqual(6)
    });

    it('should park a vehicle at 4rth position', () => {
        var registration_number = commands[9].split(" ")[1]
        var color = commands[9].split(" ")[2]
        expect(parkingLot.park(registration_number, color)).toEqual(4)
    })

    it('should not be able to park a vehicle', () => {
        var registration_number = commands[10].split(" ")[1]
        var color = commands[10].split(" ")[2]
        expect(parkingLot.park(registration_number, color)).toEqual(undefined)
    })

});

describe('Searching feature of parking lot as per govt norms', () => {
    it('should list registration number of cars with white color', () => {
        var color = commands[11].split(" ")[1]
        expect(parkingLot.registration_numbers_for_cars_with_colour(color)).toEqual("KA-01-HH-1234, KA-01-HH-9999, KA-01-P-333")
    });

    it('should list slot number of cars with white color ', () => {
        var color = commands[12].split(" ")[1]
        expect(parkingLot.slot_numbers_for_cars_with_colour(color)).toEqual("1, 2, 4")
    });

    it('should list slot number for registration number', () => {
        expect(parkingLot.slot_number_for_registration_number(commands[13].split(" ")[1])).toEqual(6)
        expect(parkingLot.slot_number_for_registration_number(commands[14].split(" ")[1])).toEqual(undefined)
    });

});