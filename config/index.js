const PORT = 4000
const CONTENT_META = { 'Content-Type': 'text/plain' }
const MODES = {
    "create_parking_lot": "Creates a parking lot",
    "park": "Parks the vehicle",
    "leave": "Frees slot",
    "status": "Current status of parking lot",
    "registration_numbers_for_cars_with_colour": "Get cars with colors",
    "slot_numbers_for_cars_with_colour": "Slot number of the cars with colors",
    "slot_number_for_registration_number": "Where is the car with rid parked"

}


module.exports = {
    PORT,
    CONTENT_META,
    MODES
}