const REGISTRATION = require('../models/Registration.js');


// Create a new Registration :)
exports.register = async (req, res) => {
  try {
    const data = req.body; 
    //Inside data {FirstName , lastName , section, enrollment no., number , email,domain , islaptop }; :) 
    const Details= await REGISTRATION.create(data);
    res.status(201).json({
      success: true,
      message: 'successfully Registerd',
      Details,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error: Unable to Register',
      error: error.message,
    });
  }
};


//Fetching all registration detail  :)
exports.getRegistrationDetail = async (req, res) => {
  try {
    const registrationDetail=await REGISTRATION.find();
    res.status(200).json({
      success: true,
      message: 'Subjects fetched successfully',
      registrationDetail
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error: Unable to fetch Details',
      error: error.message,
    });
  }
};














