const AvailableTimes = require("../Models/AvailableTimeModel");

module.exports.addAvailableTime = async (req, res) => {
  try {
    const data = req.body;

    const isExist = await AvailableTimes.findOne({
      id_user: data.id_user,
      year: data?.year,
      month: data?.month,
    });
    if (isExist) {
      const result = await AvailableTimes.findOneAndUpdate(isExist?._id, data);
      console.log(result);
      if (result) {
        res.status(200).json({
          status: true,
          message: "Data Added Successfully",
          data: result,
        });
      } else {
        res.status(200).json({
          status: false,
          message: "Couldn't add the data",
        });
      }
    } else {
      const result = await AvailableTimes.create(data);
      console.log(result);
      if (result) {
        res.status(200).json({
          status: true,
          message: "Data Added Successfully",
          data: result,
        });
      } else {
        res.status(200).json({
          status: false,
          message: "Couldn't add the data",
        });
      }
    }
  } catch (error) {
    res.status(200).json({
      status: false,
      message: error.message,
    });
  }
};

module.exports.getAvailableTimesByUserId = async (req, res) => {
  try {
    const id = req.params.id;
    const { year } = req.query;
    console.log(id);
    const result = await AvailableTimes.find({ id_user: id, year: year })
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    if (result) {
      result.sort((a,b)=> monthNames.indexOf(a.month) - monthNames.indexOf(b.month))
      res.status(200).json({
        status: true,
        message: "Data fetched Successfully",
        data: result,
      });
    } else {
      res.status(200).json({
        status: false,
        message: "Couldn't add the data",
      });
    }
  } catch (error) {
    res.status(200).json({
      status: false,
      message: error.message,
    });
  }
};

module.exports.deleteAvailableTime = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    console.log(data, id)
    const result = await AvailableTimes.findById(id);
    console.log(result)
    if (result) {
      const {selectedSessions} = result;
      const newSessions = selectedSessions?.filter(s => s.dayName !== data.dayName);
      if(newSessions.length === 0){
        const updatedResult = await AvailableTimes.findByIdAndDelete(result?._id)
        if(updatedResult){
          res.status(200).json({
            status: true,
            message: "Data deleted Successfully",
            data: updatedResult,
          });
        }else{
          res.status(200).json({
            status: false,
            message: "Couldn't delete the data",
          });
        }
      }else{
        const updatedResult = await AvailableTimes.findByIdAndUpdate(result?._id, {selectedSessions: newSessions})
        if(updatedResult){
          res.status(200).json({
            status: true,
            message: "Data deleted Successfully",
            data: updatedResult,
          });
        }else{
          res.status(200).json({
            status: false,
            message: "Couldn't delete the data",
          });
        }
      }
     
    } else {
      res.status(200).json({
        status: false,
        message: "Couldn't delete the data",
      });
    }
  } catch (error) {
    res.status(200).json({
      status: false,
      message: error.message,
    });
  }
};


module.exports.updateAvailableTime = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    console.log(data, id)
    const result = await AvailableTimes.findById(id);
    // console.log(result)
    if (result) {
      const {selectedSessions} = result;
      const newSessions = selectedSessions?.filter(s => s.dayName !== data.oldData.dayName);
      newSessions.push({dayName: data.oldData.dayName, daySlots: data.newSlots})
      console.log(newSessions)
      const updatedResult = await AvailableTimes.findByIdAndUpdate(result?._id, {selectedSessions: newSessions})
      if(updatedResult){
        res.status(200).json({
          status: true,
          message: "Data updated Successfully",
          data: updatedResult,
        });
      }else{
        res.status(200).json({
          status: false,
          message: "Couldn't updated the data",
        });
      }
    } else {
      res.status(200).json({
        status: false,
        message: "Couldn't update the data",
      });
    }
  } catch (error) {
    res.status(200).json({
      status: false,
      message: error.message,
    });
  }
};


module.exports.getAvailableTimeByDate = async (req, res) => {
  try {
    const id = req.params.id;
    const { year, month } = req.query;
    console.log(id);
    const result = await AvailableTimes.find({ id_user: id, year: year, month: month })
    if (result) {
      res.status(200).json({
        status: true,
        message: "Data fetched Successfully",
        data: result,
      });
    } else {
      res.status(200).json({
        status: false,
        message: "Couldn't add the data",
      });
    }
  } catch (error) {
    res.status(200).json({
      status: false,
      message: error.message,
    });
  }
};