export const schema = {
    "models": {
        "Form": {
            "name": "Form",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "formQuestions": {
                    "name": "formQuestions",
                    "isArray": true,
                    "type": {
                        "model": "FormQuestion"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "form"
                    }
                },
                "UserID": {
                    "name": "UserID",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "finished": {
                    "name": "finished",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Forms",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "FormQuestion": {
            "name": "FormQuestion",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "response": {
                    "name": "response",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "question": {
                    "name": "question",
                    "isArray": false,
                    "type": {
                        "model": "Question"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "formQuestionQuestionId"
                    }
                },
                "form": {
                    "name": "form",
                    "isArray": false,
                    "type": {
                        "model": "Form"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "formQuestionFormId"
                    }
                }
            },
            "syncable": true,
            "pluralName": "FormQuestions",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "Question": {
            "name": "Question",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "question": {
                    "name": "question",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "stack": {
                    "name": "stack",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "usedForms": {
                    "name": "usedForms",
                    "isArray": true,
                    "type": {
                        "model": "FormQuestion"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "question"
                    }
                },
                "category": {
                    "name": "category",
                    "isArray": false,
                    "type": {
                        "model": "Category"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "questionCategoryId"
                    }
                },
                "subSection": {
                    "name": "subSection",
                    "isArray": false,
                    "type": {
                        "model": "SubSection"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "questionSubSectionId"
                    }
                },
                "items": {
                    "name": "items",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            },
            "syncable": true,
            "pluralName": "Questions",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "Category": {
            "name": "Category",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "questions": {
                    "name": "questions",
                    "isArray": true,
                    "type": {
                        "model": "Question"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "category"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Categories",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "SubSection": {
            "name": "SubSection",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "section": {
                    "name": "section",
                    "isArray": false,
                    "type": {
                        "model": "Section"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "subSectionSectionId"
                    }
                },
                "questions": {
                    "name": "questions",
                    "isArray": true,
                    "type": {
                        "model": "Question"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "subSection"
                    }
                }
            },
            "syncable": true,
            "pluralName": "SubSections",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "Section": {
            "name": "Section",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "subSections": {
                    "name": "subSections",
                    "isArray": true,
                    "type": {
                        "model": "SubSection"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "section"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Sections",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        }
    },
    "enums": {},
    "nonModels": {
        "DemographicInfo": {
            "name": "DemographicInfo",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "bornInUSA": {
                    "name": "bornInUSA",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "yearsInFl": {
                    "name": "yearsInFl",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "latinx": {
                    "name": "latinx",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "race": {
                    "name": "race",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "education": {
                    "name": "education",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "maritalstatus": {
                    "name": "maritalstatus",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "livingWithPartner": {
                    "name": "livingWithPartner",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "biologicalChildren": {
                    "name": "biologicalChildren",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "stepChildren": {
                    "name": "stepChildren",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "underageChildren": {
                    "name": "underageChildren",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "gender": {
                    "name": "gender",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "pregnant": {
                    "name": "pregnant",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "USERINFO": {
            "name": "USERINFO",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "phone": {
                    "name": "phone",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "email": {
                    "name": "email",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "Employment": {
            "name": "Employment",
            "fields": {
                "k1_work": {
                    "name": "k1_work",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "k1_willing_adress": {
                    "name": "k1_willing_adress",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "k1_employer_st": {
                    "name": "k1_employer_st",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "k1_employer_city": {
                    "name": "k1_employer_city",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "k1_employer_zip": {
                    "name": "k1_employer_zip",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "k1_employment": {
                    "name": "k1_employment",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "userid": {
                    "name": "userid",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "HealthBehaviors": {
            "name": "HealthBehaviors",
            "fields": {
                "c1_regular_doctor": {
                    "name": "c1_regular_doctor",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "c1_visits_2yr": {
                    "name": "c1_visits_2yr",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "c3_num_medications": {
                    "name": "c3_num_medications",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "c3_vitamins": {
                    "name": "c3_vitamins",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "c4_med_time": {
                    "name": "c4_med_time",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "c4_med_day": {
                    "name": "c4_med_day",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "c4_med_forget": {
                    "name": "c4_med_forget",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "c4_med_stop": {
                    "name": "c4_med_stop",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "userid": {
                    "name": "userid",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "OralHealth": {
            "name": "OralHealth",
            "fields": {
                "d1_brush_teeth": {
                    "name": "d1_brush_teeth",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "d1_use_floss": {
                    "name": "d1_use_floss",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "d1_use_mouthwash": {
                    "name": "d1_use_mouthwash",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "d2_teethbrush_per_day": {
                    "name": "d2_teethbrush_per_day",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "d2_use_cleaning_agent": {
                    "name": "d2_use_cleaning_agent",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "d3_floss_per_day": {
                    "name": "d3_floss_per_day",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "d4_mouthwash_per_day": {
                    "name": "d4_mouthwash_per_day",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "userid": {
                    "name": "userid",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                }
            }
        }
    },
    "version": "286a2bdd50603c23bf59890980a7a2d6"
};