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
    "nonModels": {},
    "version": "4c2a0bc245bcef9977e32c2dd80cf89c"
};