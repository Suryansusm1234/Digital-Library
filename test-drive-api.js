const { google } = require('googleapis');
require('dotenv').config({ path: '.env.local' });

async function listFiles() {
  console.log('Starting Google Drive API test...');
  
  try {
    // Log the credentials path to verify it's loaded correctly
    console.log('Using credentials path:', process.env.GOOGLE_APPLICATION_CREDENTIALS);
    
    const auth = new google.auth.GoogleAuth({
      keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS, 
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    });

    console.log('Authenticating with Google...');
    const authClient = await auth.getClient();
    const drive = google.drive({ version: 'v3', auth: authClient });

    console.log('Fetching files from folder ID: 1ewBoGKJt6UjyOQbsHp6nyTFLISx6cEDS');
    const response = await drive.files.list({
      q: "'1ewBoGKJt6UjyOQbsHp6nyTFLISx6cEDS' in parents and trashed = false",
      fields: 'files(id, name, webViewLink, mimeType)',
    });

    console.log(`Found ${response.data.files.length} files:`);
    response.data.files.forEach(file => {
      console.log(`- ${file.name} (${file.mimeType})`);
      console.log(`  ID: ${file.id}`);
      console.log(`  Link: ${file.webViewLink}`);
      console.log('---');
    });
  } catch (error) {
    console.error('Error fetching files:');
    console.error(error.message);
    
    // More detailed error information
    if (error.response) {
      console.error('Error response:', error.response.data);
    }
  }
}

listFiles(); 