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

export const mockText = "I was asked to sign a third party contract a week out from stay. If it wasn't an 8 person group that took a lot of wrangling I would have cancelled the booking straight away. Bathrooms - there are no stand alone bathrooms. Please consider this - you have to clear out the main bedroom to use that bathroom."

export const mockExpected = {
  "body": "{\"text\":\"I was asked to sign a third party contract a week out from stay. If it wasn't an 8 person group that took a lot of wrangling I would have cancelled the booking straight away. Bathrooms - there are no stand alone bathrooms. Please consider this - you have to clear out the main bedroom to use that bathroom.\"}", "headers": {"Content-Type": "application/json"}, "method": "POST"
}