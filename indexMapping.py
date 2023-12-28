indexMapping = {
    "properties":{
        "JobTitle":{
            "type":"text"
        },
        "Company":{
            "type":"text"
        },
        "Description":{
            "type":"text"
        },
        "Date":{
            "type":"date"
        },
        "location":{
            "type":"text"
        },
        "Qualifications":{
            "type":"text"
        },
        "Responsibilities":{
            "type":"text"
        },
        "DescriptionVector":{
            "type":"dense_vector",
            "dims": 768,
            "index":True,
            "similarity": "l2_norm"
        }

    }
}