const Services = require("../Models/ServicesModel");
const User = require("../Models/UserModel");

module.exports.getAllServices = async (req, res) =>{
  try {
    const { limit, page } = req.query;
    const result = await Services.find({}).sort({ createdAt: -1 })
    .limit(limit * 1)
    .skip((page - 1) * limit)
    .exec();
    const count = await Services.countDocuments({});

    res.status(200).json({
      message: "Services fetched Successfully",
      data: result,
      status: true,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  } catch (err) {
    res.status(200).json({
      message: err.message,
      status: false,
    });
  }
}

module.exports.getService = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Services.find({ id_user: id, status: 'activo' });
    res.status(200).json({
      message: "Services fetched Successful",
      data: result,
      status: true,
    });
  } catch (err) {
    res.status(200).json({
      message: err.message,
      status: false,
    });
  }
};

module.exports.getServiceById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Services.findById(id);
    res.status(200).json({
      message: "Services fetched Successful",
      data: result,
      status: true,
    });
  } catch (err) {
    res.status(200).json({
      message: err.message,
      status: false,
    });
  }
};

module.exports.updatedServices = async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = req.body;
    console.log(updateData)
    console.log("Hello")
    const result = await Services.findByIdAndUpdate(id, updateData);
    console.log(result)
    if(result && updateData.status === 'Activo'){
      console.log("hello1")
      const data = await User.findByIdAndUpdate(result?.id_user, {professionalStatus: 'Activo'})
      console.log(data)
      res.status(200).json({
        message: "Service updated Successful",
        data: data,
        status: true,
      });
    }
    if(result && updateData.status !== 'Activo'){
      const resultData = await Services.find({id_user: result?.id_user, professionalStatus: 'Activo'});
      console.log(resultData)
      if(resultData.length === 1){
        const data = await User.findByIdAndUpdate(result?.id_user, {professionalStatus: 'Terminado'})
        console.log(data)
        res.status(200).json({
          message: "Service updated Successful",
          data: data,
          status: true,
        });
      }
      
    }
  } catch (err) {
    res.status(200).json({
      message: err.message,
      status: false,
    });
  }
};

module.exports.addServices = async (req, res) => {
  try {
    const data = req.body;
    const result = await Services.create(data);
    if (result) {
      res.status(200).json({
        status: true,
        result: result,
        message: "Successfully Added the service",
      });
    } else {
      res.status(200).json({
        status: false,
        message: "failed the service",
      });
    }
  } catch (error) {
    res.status(200).json({
      status: false,
      message: error.message,
    });
  }
};

module.exports.getServicesByUserId = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Services.find({id_user: id});
    if (result) {
      res.status(200).json({
        status: true,
        result: result,
        message: "Fetched All the services",
      });
    } else {
      res.status(200).json({
        status: false,
        message: "Failed to fetched All the services",
      });
    }
  } catch (error) {
    res.status(200).json({
      status: false,
      message: error.message,
    });
  }
};


module.exports.getServicesByUserIdAndStatus = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Services.find({id_user: id, status: 'Activo'});
    if (result) {
      res.status(200).json({
        status: true,
        result: result,
        message: "Fetched All the services",
      });
    } else {
      res.status(200).json({
        status: false,
        message: "Failed to fetched All the services",
      });
    }
  } catch (error) {
    res.status(200).json({
      status: false,
      message: error.message,
    });
  }
};

module.exports.deleteService = async (req, res) =>{
  try {
    const id = req.params.id;
    const result = await Services.findByIdAndDelete(id);
    if (result) {
      res.status(200).json({
        status: true,
        result: result,
        message: "Service Deleted Successfully",
      });
    } else {
      res.status(200).json({
        status: false,
        message: "Failed to delete the service",
      });
    }
  } catch (error) {
    res.status(200).json({
      status: false,
      message: error.message,
    });
  }
}