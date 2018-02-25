export const mockText = "I was asked to sign a third party contract a week out from stay. If it wasn't an 8 person group that took a lot of wrangling I would have cancelled the booking straight away. Bathrooms - there are no stand alone bathrooms. Please consider this - you have to clear out the main bedroom to use that bathroom."

export const mockExpected = {
  "body": "{\"text\":\"I was asked to sign a third party contract a week out from stay. If it wasn't an 8 person group that took a lot of wrangling I would have cancelled the booking straight away. Bathrooms - there are no stand alone bathrooms. Please consider this - you have to clear out the main bedroom to use that bathroom.\"}", "headers": {"Content-Type": "application/json"}, "method": "POST"
}

export const mockResponse = {
  "sentences_tone": [
    {
      "sentence_id": 0,
      "text": "I was asked to sign a third party contract a week out from stay.",
      "tones": []
    },
    {
      "sentence_id": 1,
      "text": "If it wasn't an 8 person group that took a lot of wrangling I would have cancelled the booking straight away.",
      "tones": [
        {
          "score": 0.695927,
          "tone_id": "sadness",
          "tone_name": "Sadness"
        }
      ]
    },
    {
      "sentence_id": 2,
      "text": "Bathrooms - there are no stand alone bathrooms.",
      "tones": []
    },
    {
      "sentence_id": 3,
      "text": "Please consider this - you have to clear out the main bedroom to use that bathroom.",
      "tones": [
        {
          "score": 0.711887,
          "tone_id": "analytical",
          "tone_name": "Analytical"
        },
        {
          "score": 0.898327,
          "tone_id": "confident",
          "tone_name": "Confident"
        }
      ]
    }
  ]
}

export const mockResponse2 = {
  "sentences_tone": [
    {
      "sentence_id": 0,
      "text": "In the muddy peaceful center of this town.",
      "tones": []
    },
    {
      "sentence_id": 1,
      "text": "Tell me off in the hotel lobby right in front of all the bellboys, and the over friendly concierge",
      "tones": [
        {
          "score": 0.638987,
          "tone_id": "confident",
          "tone_name": "Confident"
        }
      ]
    },
    {
      "sentence_id": 2,
      "text": "A shady lane, Everybody wants one.",
      "tones": []
    }
  ]
}

export const mockCleaned = {
  documentTone: [
    {
      score: 0.883842,
      tone_id: 'analytical',
      tone_name: 'Analytical'
    },
    {
      score: 0.60858,
      tone_id: 'tentative',
      tone_name: 'Tentative'
    },
    {
      score: 0.519797,
      tone_id: 'joy',
      tone_name: 'Joy'
    }
  ],
  sentences: [
    {
      sentence_id: 0,
      text: 'I hope that we can reach an amicable understanding and a solution to this problem.',
      tones: [
        {
          score: 0.897416,
          tone_id: 'analytical',
          tone_name: 'Analytical'
        },
        {
          score: 0.647986,
          tone_id: 'tentative',
          tone_name: 'Tentative'
        },
        {
          score: 0.44646,
          tone_id: 'sadness',
          tone_name: 'Sadness'
        }
      ]
    },
    {
      sentence_id: 1,
      text: 'Our clients have done business together previously, and my client is interested in maintaining a profitable business- partner relationship with Mr. Compresi, assuming that your client can fulfill Mr. Farley’s order at the price promised in his letter.',
      tones: [
        {
          score: 0.580387,
          tone_id: 'joy',
          tone_name: 'Joy'
        },
        {
          score: 0.550576,
          tone_id: 'analytical',
          tone_name: 'Analytical'
        }
      ]
    }
  ],
  sentencesTone: {
    "primary": [
      {"score": 0.897416, "tone_id": "analytical", "tone_name": "Analytical"}, 
      {"score": 0.580387, "tone_id": "joy", "tone_name": "Joy"}
      ], 
    "secondary": [
      {"score": 0.647986, "tone_id": "tentative", "tone_name": "Tentative"}, 
      {"score": 0.550576, "tone_id": "analytical", "tone_name": "Analytical"}
    ]
  }
}

export const mockCleaned2 = {
  sentences: [
    {
      sentence_id: 0,
      text: 'My client feels that it would be mutually beneficial for both parties to come to an agreement for the price of each 4’ x 6’ double paned glass window.',
      tones: [
        {
          score: 0.353962,
          tone_id: 'joy',
          tone_name: 'Joy'
        },
        {
          score: 0.294703,
          tone_id: 'sadness',
          tone_name: 'Sadness'
        }
      ]
    },
    {
      sentence_id: 1,
      text: 'My client has stayed in business a long time by offering reasonable prices and developing customer loyalty.',
      tones: [
        {
          score: 0.571513,
          tone_id: 'joy',
          tone_name: 'Joy'
        },
        {
          score: 0.482451,
          tone_id: 'analytical',
          tone_name: 'Analytical'
        }
      ]
    },
    {
      sentence_id: 2,
      text: 'He would like to maintain a business-relationship with Mr. Farley.',
      tones: [
        {
          score: 0.497569,
          tone_id: 'tentative',
          tone_name: 'Tentative'
        },
        {
          score: 0.227267,
          tone_id: 'joy',
          tone_name: 'Joy'
        }
      ]
    },
    {
      sentence_id: 3,
      text: 'Please review this email and let me know whether your client is also willing to negotiate a fair price for each window.',
      tones: [
        {
          score: 0.579367,
          tone_id: 'analytical',
          tone_name: 'Analytical'
        },
        {
          score: 0.359409,
          tone_id: 'joy',
          tone_name: 'Joy'
        }
      ]
    }
  ],
  documentTone: [
    {
      score: 0.619992,
      tone_id: 'joy',
      tone_name: 'Joy'
    },
    {
      score: 0.448741,
      tone_id: 'tentative',
      tone_name: 'Tentative'
    },
    {
      score: 0.440216,
      tone_id: 'analytical',
      tone_name: 'Analytical'
    }
  ],
  "sentencesTone": {
    "primary": [
      {"score": 0.897416, "tone_id": "analytical", "tone_name": "Analytical"}, 
      {"score": 0.580387, "tone_id": "joy", "tone_name": "Joy"}], 
    "secondary": [
      {"score": 0.647986, "tone_id": "tentative", "tone_name": "Tentative"}, 
      {"score": 0.550576, "tone_id": "analytical", "tone_name": "Analytical"}
    ]
  }
}

export const mockUncleaned = {
  document_tone: {
    tone_categories: [
      {
        tones: [
          {
            score: 0.036792,
            tone_id: 'anger',
            tone_name: 'Anger'
          },
          {
            score: 0.009407,
            tone_id: 'disgust',
            tone_name: 'Disgust'
          },
          {
            score: 0.021511,
            tone_id: 'fear',
            tone_name: 'Fear'
          },
          {
            score: 0.519797,
            tone_id: 'joy',
            tone_name: 'Joy'
          },
          {
            score: 0.236706,
            tone_id: 'sadness',
            tone_name: 'Sadness'
          }
        ],
        category_id: 'emotion_tone',
        category_name: 'Emotion Tone'
      },
      {
        tones: [
          {
            score: 0.883842,
            tone_id: 'analytical',
            tone_name: 'Analytical'
          },
          {
            score: 0,
            tone_id: 'confident',
            tone_name: 'Confident'
          },
          {
            score: 0.60858,
            tone_id: 'tentative',
            tone_name: 'Tentative'
          }
        ],
        category_id: 'language_tone',
        category_name: 'Language Tone'
      },
      {
        tones: [
          {
            score: 0.538638,
            tone_id: 'openness_big5',
            tone_name: 'Openness'
          },
          {
            score: 0.607415,
            tone_id: 'conscientiousness_big5',
            tone_name: 'Conscientiousness'
          },
          {
            score: 0.742128,
            tone_id: 'extraversion_big5',
            tone_name: 'Extraversion'
          },
          {
            score: 0.408756,
            tone_id: 'agreeableness_big5',
            tone_name: 'Agreeableness'
          },
          {
            score: 0.669397,
            tone_id: 'emotional_range_big5',
            tone_name: 'Emotional Range'
          }
        ],
        category_id: 'social_tone',
        category_name: 'Social Tone'
      }
    ]
  },
  sentences_tone: [
    {
      sentence_id: 0,
      text: 'I hope that we can reach an amicable understanding and a solution to this problem.',
      input_from: 0,
      input_to: 82,
      tone_categories: [
        {
          tones: [
            {
              score: 0.0308,
              tone_id: 'anger',
              tone_name: 'Anger'
            },
            {
              score: 0.016122,
              tone_id: 'disgust',
              tone_name: 'Disgust'
            },
            {
              score: 0.107343,
              tone_id: 'fear',
              tone_name: 'Fear'
            },
            {
              score: 0.099391,
              tone_id: 'joy',
              tone_name: 'Joy'
            },
            {
              score: 0.44646,
              tone_id: 'sadness',
              tone_name: 'Sadness'
            }
          ],
          category_id: 'emotion_tone',
          category_name: 'Emotion Tone'
        },
        {
          tones: [
            {
              score: 0.897416,
              tone_id: 'analytical',
              tone_name: 'Analytical'
            },
            {
              score: 0,
              tone_id: 'confident',
              tone_name: 'Confident'
            },
            {
              score: 0.647986,
              tone_id: 'tentative',
              tone_name: 'Tentative'
            }
          ],
          category_id: 'language_tone',
          category_name: 'Language Tone'
        },
        {
          tones: [
            {
              score: 0.523542,
              tone_id: 'openness_big5',
              tone_name: 'Openness'
            },
            {
              score: 0.725246,
              tone_id: 'conscientiousness_big5',
              tone_name: 'Conscientiousness'
            },
            {
              score: 0.15085,
              tone_id: 'extraversion_big5',
              tone_name: 'Extraversion'
            },
            {
              score: 0.824779,
              tone_id: 'agreeableness_big5',
              tone_name: 'Agreeableness'
            },
            {
              score: 0.442224,
              tone_id: 'emotional_range_big5',
              tone_name: 'Emotional Range'
            }
          ],
          category_id: 'social_tone',
          category_name: 'Social Tone'
        }
      ]
    },
    {
      sentence_id: 1,
      text: 'Our clients have done business together previously, and my client is interested in maintaining a profitable business- partner relationship with Mr. Compresi, assuming that your client can fulfill Mr. Farley’s order at the price promised in his letter.',
      input_from: 83,
      input_to: 334,
      tone_categories: [
        {
          tones: [
            {
              score: 0.05153,
              tone_id: 'anger',
              tone_name: 'Anger'
            },
            {
              score: 0.012946,
              tone_id: 'disgust',
              tone_name: 'Disgust'
            },
            {
              score: 0.01819,
              tone_id: 'fear',
              tone_name: 'Fear'
            },
            {
              score: 0.580387,
              tone_id: 'joy',
              tone_name: 'Joy'
            },
            {
              score: 0.155833,
              tone_id: 'sadness',
              tone_name: 'Sadness'
            }
          ],
          category_id: 'emotion_tone',
          category_name: 'Emotion Tone'
        },
        {
          tones: [
            {
              score: 0.550576,
              tone_id: 'analytical',
              tone_name: 'Analytical'
            },
            {
              score: 0,
              tone_id: 'confident',
              tone_name: 'Confident'
            },
            {
              score: 0,
              tone_id: 'tentative',
              tone_name: 'Tentative'
            }
          ],
          category_id: 'language_tone',
          category_name: 'Language Tone'
        },
        {
          tones: [
            {
              score: 0.570278,
              tone_id: 'openness_big5',
              tone_name: 'Openness'
            },
            {
              score: 0.747083,
              tone_id: 'conscientiousness_big5',
              tone_name: 'Conscientiousness'
            },
            {
              score: 0.88372,
              tone_id: 'extraversion_big5',
              tone_name: 'Extraversion'
            },
            {
              score: 0.252507,
              tone_id: 'agreeableness_big5',
              tone_name: 'Agreeableness'
            },
            {
              score: 0.770672,
              tone_id: 'emotional_range_big5',
              tone_name: 'Emotional Range'
            }
          ],
          category_id: 'social_tone',
          category_name: 'Social Tone'
        }
      ]
    }
  ]
}

export const mockMergedTonesArray = [
  {"score": 0.0308, "tone_id": "anger", "tone_name": "Anger"}, 
  {"score": 0.016122, "tone_id": "disgust", "tone_name": "Disgust"}, 
  {"score": 0.107343, "tone_id": "fear", "tone_name": "Fear"}, 
  {"score": 0.099391, "tone_id": "joy", "tone_name": "Joy"}, 
  {"score": 0.44646, "tone_id": "sadness", "tone_name": "Sadness"}, 
  {"score": 0.897416, "tone_id": "analytical", "tone_name": "Analytical"}, 
  {"score": 0, "tone_id": "confident", "tone_name": "Confident"}, 
  {"score": 0.647986, "tone_id": "tentative", "tone_name": "Tentative"}
]

