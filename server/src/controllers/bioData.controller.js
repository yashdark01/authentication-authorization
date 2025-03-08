import BioData from "../models/bioData.model.js";

export const create = async (req, res) => {
    // Validate request
    if (!req.body) {
        return res.status(400).send({
            message: "BioData content can not be empty"
        });
    }

    // Create a BioData
    const bioData = new BioData({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dateOfBirth: req.body.dateOfBirth,
        gender: req.body.gender,
        address: {
            street: req.body.address.street,
            city: req.body.address.city,
            state: req.body.address.state,
            zipCode: req.body.address.zipCode,
            country: req.body.address.country
        },
        phoneNumber: req.body.phoneNumber,
        email: req.body.email
    });

    try {
        const data = await BioData.save();
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the BioData."
        });
    }
};

export const findAll = async (req, res) => {
    try {
        const bioData = await BioData.find();
        res.send(bioData);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving bioData."
        });
    }
};

export const findOne = async (req, res) => {
    try {
        const bioData = await BioData.findById(req.params.bioDataId);
        if (!bioData) {
            return res.status(404).send({
                message: "BioData not found with id " + req.params.bioDataId
            });
        }
        res.send(bioData);
    } catch (err) {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "BioData not found with id " + req.params.bioDataId
            });
        }
        return res.status(500).send({
            message: "Error retrieving bioData with id " + req.params.bioDataId
        });
    }
};

export const update = async (req, res) => {
    // Validate Request
    if (!req.body) {
        return res.status(400).send({
            message: "BioData content can not be empty"
        });
    }

    try {
        const bioData = await BioData.findByIdAndUpdate(req.params.bioDataId, {
            name: req.body.name,
            age: req.body.age,
            address: req.body.address
        }, { new: true });

        if (!bioData) {
            return res.status(404).send({
                message: "BioData not found with id " + req.params.bioDataId
            });
        }
        res.send(bioData);
    } catch (err) {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "BioData not found with id " + req.params.bioDataId
            });
        }
        return res.status(500).send({
            message: "Error updating bioData with id " + req.params.bioDataId
        });
    }
};

export const deleteBioData = async (req, res) => {
    try {
        const bioData = await BioData.findByIdAndRemove(req.params.bioDataId);
        if (!bioData) {
            return res.status(404).send({
                message: "BioData not found with id " + req.params.bioDataId
            });
        }
        res.send({ message: "BioData deleted successfully!" });
    } catch (err) {
        if (err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "BioData not found with id " + req.params.bioDataId
            });
        }
        return res.status(500).send({
            message: "Could not delete bioData with id " + req.params.bioDataId
        });
    }
};
