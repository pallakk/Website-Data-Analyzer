// Import dependencies
const express = require('express');
const { LanguageServiceClient } = require('@google-cloud/language');

// Create an instance of the Natural Language client, passing in the key file
const languageClient = new LanguageServiceClient({
  keyFilename: 'path/to/your/service-account-file.json' // replace with your JSON key filename
});

// Initialize Express app
const app = express();
app.use(express.json());

// Endpoint to analyze text
app.post('/analyze', async (req, res) => {
  try {
    const text = req.body.text;
    if (!text) {
      return res.status(400).json({ error: 'Text is required' });
    }

    // Use Google Natural Language API to analyze entities in the text
    const [result] = await languageClient.analyzeEntities({
      document: {
        content: text,
        type: 'PLAIN_TEXT',
      },
      encodingType: 'UTF8',
    });

    res.json(result); // Send back the analysis result to the client
  } catch (error) {
    console.error('Error analyzing text:', error);
    res.status(500).json({ error: 'Failed to analyze text' });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});