import mongoose from 'mongoose';
import 'dotenv/config';

// connect to MongoDB
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// confirm everything is connected
db.once("open", (err) => {
    if(err){
        res.status(500).json({ error: '500:Connection to the server failed.' });
    } else  {
        console.log('Successfully connected to MongoDB Exercises collection using Mongoose.');
    }
});

// defines collection's schema
const exerciseSchema = mongoose.Schema({
	name: { type: String, required: true },
	reps: { type: Number, required: true },
	weight: { type: Number, required: true },
    unit: { type: String, required: true },
    date: {type: Date, required: true }
});

const Exercise = mongoose.model("Exercise", exerciseSchema);


// CREATE model

const createExercise = async (name, reps, weight, unit, date) => {
    const exercise = new Exercise({ 
        name: name,
        reps: reps,
        weight: weight,
        unit: unit,
        date: date
    });
    return exercise.save();
}


// RETRIEVE models

const findExercises = async (filter) => {
    const query = Exercise.find(filter);
    return query.exec();
}

const findById = async (_id) => {
    const query = Exercise.findById(_id);
    return query.exec();
}

// DELETE model based on ID

const deleteById = async (_id) => {
    const result = await Exercise.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model

const replaceExercise = async (_id, name, reps, weight, unit, date) => {
    const result = await Exercise.replaceOne({_id: _id }, {
        name: name, 
        reps: reps,
        weight: weight,
        unit: unit,
        date: date
    });
    return result.modifiedCount;
}



// export our variables for the controller file
export { createExercise, findExercises, findById, replaceExercise, deleteById }