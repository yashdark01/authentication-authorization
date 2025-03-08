import Admin from "../models/admin.model.js";
import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Create a new admin
export const createAdmin = async (req, res) => {
    try {
        const { email, password, username } = req.body;
       
        // Check if admin already exists
        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            return res.status(400).json({ message: "Admin already exists" });
        }
        console.log("Admin Data:", req.body);

        // Hash password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        const newAdmin = await Admin.create({
            username,
            email,
            password: hashedPassword
        });

        res.status(201).json(newAdmin);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Admin login
export const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const admin = await Admin.findOne({ email });
        if (!admin) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Compare hashed password
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Generate JWT token
        const token = jwt.sign({ _id: admin._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

        res.status(200).json({ admin, token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all admins
export const getAdmins = async (req, res) => {
    try {
        const admins = await Admin.find();
        res.status(200).json(admins);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get admin by ID
export const getAdminById = async (req, res) => {
    try {
        const admin = await Admin.findById(req.params.id);
        if (!admin) {
            return res.status(404).json({ message: "Admin not found" });
        }
        res.status(200).json(admin);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update admin details
export const updateAdmin = async (req, res) => {
    try {
        const updatedAdmin = await Admin.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedAdmin) {
            return res.status(404).json({ message: "Admin not found" });
        }
        res.status(200).json(updatedAdmin);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all users
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a user
export const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};