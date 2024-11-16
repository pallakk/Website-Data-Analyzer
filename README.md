# Website-Data-Analyzer
A Chrome extension that identifies websites tracking sensitive health-related data using natural language processing (NLP) and Google Cloud APIs. This tool empowers users with transparency about the data collected by websites and raises privacy awareness.

Features
Detects the presence of sensitive health-related terms on websites using content analysis.
Notifies users when websites might be tracking health-related data.
Utilizes Google Cloud APIs for advanced data processing.
Simple and lightweight design, ensuring seamless integration into your browser.
Installation
Clone the repository:
bash
Copy code
git clone https://github.com/yourusername/health-data-tracker.git
cd health-data-tracker
Open Chrome and navigate to chrome://extensions/.
Enable Developer Mode (toggle in the top right corner).
Click Load unpacked and select the project directory.
The extension will appear in your toolbar.
Usage
Install the extension.
Visit any website.
If sensitive health-related terms are detected, a notification will appear, warning you about potential tracking.
Files
content.js: Scans the website for sensitive terms related to health data​(content).
manifest.json: Contains metadata and permissions for the Chrome extension​(manifest).
healthdatachecker-2ea889a08f83.json: Configuration file for accessing Google Cloud APIs​(healthdatachecker-2ea88…).

Technology Stack
JavaScript: Core functionality for content analysis.
Google Cloud APIs: Used for advanced data processing and NLP.
Chrome Extension Manifest V3: Framework for the extension.

Future Improvements
Enhance NLP to provide contextual insights about detected terms.
Add a detailed privacy policy summarization feature.
Implement a dashboard for users to view and manage flagged websites.

Contributing
Contributions are welcome! Please fork the repository and submit a pull request.


Author
Developed by Pallak Dhabalia. For inquiries, feel free to contact me via GitHub.









