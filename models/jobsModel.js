import mongoose from "mongoose";


const jobSchema = new mongoose.Schema({

    company:{

        type: String,
        required:[true,'Company name is required'],
    },

    position:{

        type:String,required:[true,'Position is required'],
        minlength: 100
    },
    status:{

        type:String,
        enum: ['pending','reject','interview'],
        default:'pending'
    },
    workType:{
        type: String,
        enum:['full-time','part-time','internship','contracted'],
        default:'full-time'
    },
    workLocation:{
        type:String,
        default:'Mumbai',
        required:[true , ['Location is required']]
    },

    createdBy:{

        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
})