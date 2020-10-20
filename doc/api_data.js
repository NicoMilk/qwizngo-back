define({ "api": [
  {
    "type": "post",
    "url": "/auth/login",
    "title": "Login",
    "name": "Login",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User email address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password with 6 char min..</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>JWT token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n  \"access_token\": \"xxxxxxxxxxxxxxxxxxxxx\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"Incorrect credentials\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/app.controller.ts",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/profile",
    "title": "Get authentified user",
    "name": "getAuth",
    "group": "Auth",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Bearer token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User info.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n  \"id\" : \"5f845e9c3637511f9875b63f\",\n  \"name\": \"John\",\n  \"email\": \"john@john.com\",\n  \"favorites\" : [\"5f7f00e8c828e01d223fd058\", \"5f7f4c46eb4a5b3d2eaa1e34\"],\n  \"score\" : 30,\n  \"role\": \"user\"\n},",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"Incorrect credentials\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/app.controller.ts",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/category",
    "title": "Create new category",
    "name": "CreateCategory",
    "group": "Category",
    "description": "<p>Creating a new category</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the new category</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the created category</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Database error while creating new entry.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/category/category.controller.ts",
    "groupTitle": "Category"
  },
  {
    "type": "delete",
    "url": "/category/:id",
    "title": "Delete category",
    "name": "DeleteCategory",
    "group": "Category",
    "description": "<p>Deleting an existing category</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the category</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n   {\n      \"message\": \"Category successfully deleted\",\n   },",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>Category not found</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/category/category.controller.ts",
    "groupTitle": "Category"
  },
  {
    "type": "get",
    "url": "/category",
    "title": "Get all categories",
    "name": "GetCategories",
    "group": "Category",
    "description": "<p>Showing all the categories</p>",
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": " HTTP/1.1 200 OK\n[\n    {\n       \"id\": \"5f7efd7fc828e01d223fd055\",\n       \"name\" : \"Laravel\"\n    },\n    {\n       \"id\": \"5f7efd87c828e01d223fd056\",\n       \"name\" : \"PHP\"\n    },\n    ...\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InternalServerError",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/category/category.controller.ts",
    "groupTitle": "Category"
  },
  {
    "type": "patch",
    "url": "/category/:id",
    "title": "Update category",
    "name": "UpdateCategory",
    "group": "Category",
    "description": "<p>Updating an existing category</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the category</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the new category</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n   {\n      \"id\": \"5f7efd7fc828e01d223fd055\",\n      \"name\" : \"Laravel\"\n   },",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>Category not found</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/category/category.controller.ts",
    "groupTitle": "Category"
  },
  {
    "type": "delete",
    "url": "/donequiz/:id",
    "title": "Delete one quiz done",
    "name": "DeleteDoneQuiz",
    "group": "DoneQuiz",
    "description": "<p>Delete a quiz already done.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the quiz done.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"DoneQuiz successfully deleted\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>Quiz not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/donequiz/donequiz.controller.ts",
    "groupTitle": "DoneQuiz"
  },
  {
    "type": "get",
    "url": "/donequiz",
    "title": "Show all done quiz",
    "name": "GetAllDoneQuiz",
    "group": "DoneQuiz",
    "description": "<p>Showing all the quiz already done.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"id\": \"5f843ce9de4ad118bcbf8135\",\n    \"quizz_id\": \"5f7f3dac7a1445090cc23e75\",\n    \"user_id\" : \"5f7d8f5aef1ca604b56f8ca5\",\n    \"score\" : 60,\n    \"success_rate\": 50,\n  },\n  ...\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InternalServorError.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/donequiz/donequiz.controller.ts",
    "groupTitle": "DoneQuiz"
  },
  {
    "type": "get",
    "url": "/donequiz/user/:id",
    "title": "Show user done quiz",
    "name": "GetUserDoneQuiz",
    "group": "DoneQuiz",
    "description": "<p>Showing all the quiz already done by a given user.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"id\": \"5f843ce9de4ad118bcbf8135\",\n    \"quizz_id\": {\n       \"id\": \"5f7f3dac7a1445090cc23e75\",\n       \"avg_rating\": 4.666666666666667,\n       \"is_published\": true,\n       \"name\": \"Nico Facile 2\",\n       \"category\": \"5f7efda4c828e01d223fd057\",\n       \"difficulty\": \"Facile\",\n       \"bonus_time\": 10,\n       \"bonus_xp\": 100,\n       \"createdAt\": \"2020-10-08T16:26:20.517Z\",\n       \"updatedAt\": \"2020-10-19T08:08:32.179Z\"\n     },\n    \"user_id\" : \"5f7d8f5aef1ca604b56f8ca5\",\n    \"score\" : 60,\n    \"success_rate\": 50,\n  },\n  ...\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InternalServorError.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/donequiz/donequiz.controller.ts",
    "groupTitle": "DoneQuiz"
  },
  {
    "type": "post",
    "url": "/donequiz",
    "title": "Saving quiz result",
    "name": "SaveQuiz",
    "group": "DoneQuiz",
    "description": "<p>Saving the result of a quiz done by one user.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "quizz_id",
            "description": "<p>ID of the quiz.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "score",
            "description": "<p>Total xps won in the quiz.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "success_rate",
            "description": "<p>Percentage of good answers.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the finished quiz.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "quizz_id",
            "description": "<p>ID of the quiz.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "score",
            "description": "<p>Total xps won by the user in the quiz.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "success_rate",
            "description": "<p>Percentage of good answers.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n  \"id\": \"5f843ce9de4ad118bcbf8135\",\n  \"quizz_id\": \"5f7f3dac7a1445090cc23e75\",\n  \"user_id\" : \"5f7d8f5aef1ca604b56f8ca5\",\n  \"score\" : 60,\n  \"success_rate\": 50,\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InternalServorError",
            "description": "<p>Database error while creating new entry.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/donequiz/donequiz.controller.ts",
    "groupTitle": "DoneQuiz"
  },
  {
    "type": "patch",
    "url": "/donequiz/:id",
    "title": "Update one quiz done",
    "name": "UpdateDoneQuiz",
    "group": "DoneQuiz",
    "description": "<p>Update a quiz already done.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the quiz done.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "score",
            "description": "<p>New total of xps won.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "success_rate",
            "description": "<p>New percentage of good answers.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"DoneQuiz successfully updated\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>Quiz not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/donequiz/donequiz.controller.ts",
    "groupTitle": "DoneQuiz"
  },
  {
    "type": "post",
    "url": "/question/one",
    "title": "Create new question",
    "name": "CreateNewQuestion",
    "group": "Question",
    "description": "<p>Adding one question to a specific quiz.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "quizz_id",
            "description": "<p>ID of the quiz.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "xps",
            "description": "<p>Number of points to win.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "question",
            "description": "<p>Title of the question.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "answers",
            "description": "<p>List of answer objects with an 'answer' string property for the content and a 'is_correct' boolean property that indicates the right answer.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the created question.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n  \"id\": \"5f864813a6658f0cf8c6fc5b\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InternalServorError",
            "description": "<p>Database error while creating new entry.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/question/question.controller.ts",
    "groupTitle": "Question"
  },
  {
    "type": "post",
    "url": "/question",
    "title": "Create new questions",
    "name": "CreateNewQuestions",
    "group": "Question",
    "description": "<p>Adding multiple questions to one quiz at once</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "questions",
            "description": "<p>Array of question objects with properties quizz_id, xps, question, answers.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>ID of the created question.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"3 question(s) added\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InternalServorError",
            "description": "<p>Database error while creating new entry.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/question/question.controller.ts",
    "groupTitle": "Question"
  },
  {
    "type": "delete",
    "url": "/question/:id",
    "title": "Delete questions",
    "name": "DeleteQuestion",
    "group": "Question",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Delete all the questions from a given quiz</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the quiz.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Questions successfully deleted\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InternalServerError.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/question/question.controller.ts",
    "groupTitle": "Question"
  },
  {
    "type": "get",
    "url": "/question/:id",
    "title": "Get quiz questions",
    "name": "GetOneQuizQuestions",
    "group": "Question",
    "description": "<p>Get all the questions from a given quiz without the correct answers.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the quiz.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n [\n    {\n       \"id\": \"5f864813a6658f0cf8c6fc5b\",\n       \"quizz_id\": \"5f7f4c46eb4a5b3d2eaa1e34\",\n       \"xps\": 10,\n       \"question\": \"Naxst JS est une techno pas encore inventée?\",\n       \"is_multi\": true,\n       \"answers\":  [\n          {\n            \"answer\": \"Oui\",\n          }, \n          {\n            \"answer\": \"Non\",\n          }, \n          {\n            \"answer\": \"Osef\",\n          }\n        ],\n     },\n   ...\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InternalServorError",
            "description": "<p>.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/question/question.controller.ts",
    "groupTitle": "Question"
  },
  {
    "type": "get",
    "url": "/question/:id/admin",
    "title": "Get quiz question(admin)",
    "name": "GetOneQuizQuestionsAdmin",
    "group": "Question",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Get all the questions from a given quiz with the correct answers.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the quiz.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n [\n    {\n       \"id\": \"5f864813a6658f0cf8c6fc5b\",\n       \"quizz_id\": \"5f7f4c46eb4a5b3d2eaa1e34\",\n       \"xps\": 10,\n       \"question\": \"Naxst JS est une techno pas encore inventée?\",\n       \"answers\":  [\n          {\n            \"answer\": \"Oui\",\n            \"is_correct\": true\n          },\n          {\n            \"answer\": \"Non\",\n            \"is_correct\": false\n          },\n          {\n            \"answer\": \"Osef\",\n            \"is_correct\": true\n          }\n        ],\n     },\n   ...\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InternalServorError",
            "description": "<p>.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/question/question.controller.ts",
    "groupTitle": "Question"
  },
  {
    "type": "patch",
    "url": "/question/:id",
    "title": "Update questions",
    "name": "UpdateQuestion",
    "group": "Question",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Update multiple questions from one quiz at once.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the quiz.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "question",
            "description": "<p>Array of question objects with properties id, quizz_id, xps, question, answers.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"6 question(s) updated !\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFoundError.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Question not found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/question/question.controller.ts",
    "groupTitle": "Question"
  },
  {
    "type": "post",
    "url": "/question/:id/result",
    "title": "Check results",
    "name": "VerifyResults",
    "group": "Question",
    "description": "<p>Check one user answers after they took the quiz.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the quiz.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array[]",
            "optional": false,
            "field": "answers",
            "description": "<p>Array containing one array per question with the index of the user's answer.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "timeout",
            "description": "<p>True if the user answered the quiz within the bonus time limit.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID of the user who took the quiz.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "results",
            "description": "<p>Array containing a result object for each answer with properties index, is_good_answer, good_answers, user_answers, xps.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "score",
            "description": "<p>Total xps won in the quiz .</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "success_rate",
            "description": "<p>Percentage of good answers.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"result\": \n    [\n      {\n        \"index\": 0,\n        \"is_good_answer\": true,\n        \"good_answers\": [0,2],\n        \"user_answers\": [0,2],\n        \"xps\": 10,\n      },\n      ...\n    ],\n  \"score\" : 150,\n  \"success_rate\" : 66,\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InternalServorError.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/question/question.controller.ts",
    "groupTitle": "Question"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Create new user",
    "name": "CreateNewUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User unique name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User unique email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password with 6 char min..</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "favorites",
            "description": "<p>User favorite quiz.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "score",
            "defaultValue": "0",
            "description": "<p>User total XPs.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "\"admin\"",
              "\"user\""
            ],
            "optional": true,
            "field": "role",
            "defaultValue": "user",
            "description": "<p>User status.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "favorites",
            "description": "<p>Favorites of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "score",
            "description": "<p>Score of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "role",
            "description": "<p>Status of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n  \"id\" : \"5f845e9c3637511f9875b63f\"\n  \"name\": \"John\",\n  \"email\": \"john@john.com\",\n  \"favorites\" : [],\n  \"score\" : 0,\n  \"role\": \"user\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAcceptableException.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 406 Not Acceptable\n{\n  \"error\": \"Email must be unique\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/users/users.controller.ts",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/users/admin/:id",
    "title": "Delete user",
    "name": "DeleteUser",
    "group": "User",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>UserNotFound</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/users/users.controller.ts",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/admin",
    "title": "Get all registered users",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "name": "GetAllUser",
    "group": "User",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n  \"id\" : \"5f845e9c3637511f9875b63f\",\n  \"name\": \"John\",\n  \"email\": \"john@john.com\",\n  \"favorites\" : [],\n  \"score\" : 30,\n  \"role\": \"user\"\n},\n{\n  \"id\" : \"5f845e9c3637511f9875b75f\",\n  \"name\": \"Jane\",\n  \"email\": \"jane@jane.com\",\n  \"favorites\" : [],\n  \"score\" : 60,\n  \"role\": \"admin\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"unauthorized\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/users/users.controller.ts",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/admin/:id",
    "title": "Get one user info",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "name": "GetOneUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n  \"id\" : \"5f845e9c3637511f9875b63f\",\n  \"name\": \"John\",\n  \"email\": \"john@john.com\",\n  \"favorites\" : [],\n  \"score\" : 30,\n  \"role\": \"user\"\n},",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"User not found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/users/users.controller.ts",
    "groupTitle": "User"
  },
  {
    "type": "patch",
    "url": "/users/:id",
    "title": "Update user",
    "name": "UpdateUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>User unique email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": "<p>User password with 6 char min..</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "favorites",
            "description": "<p>User favorite quiz.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "score",
            "defaultValue": "0",
            "description": "<p>User total XPs.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  message : \"User successfully updated !\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAcceptableException.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/users/users.controller.ts",
    "groupTitle": "User"
  },
  {
    "type": "patch",
    "url": "/users/admin/:id",
    "title": "Update user (admin)",
    "name": "UpdateUserAdm",
    "group": "User",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>User unique email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": "<p>User password with 6 char min..</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "favorites",
            "description": "<p>User favorite quiz.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "score",
            "defaultValue": "0",
            "description": "<p>User total XPs.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "\"admin\"",
              "\"user\""
            ],
            "optional": true,
            "field": "role",
            "defaultValue": "user",
            "description": "<p>User status.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAcceptableException.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/users/users.controller.ts",
    "groupTitle": "User"
  }
] });
