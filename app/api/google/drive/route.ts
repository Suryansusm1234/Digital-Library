import { NextResponse } from 'next/server';
import { google } from 'googleapis';

// Map of department-section combinations to folder IDs
const folderIdMap: Record<string, Record<string, string>> = {
  'computer-science': {
    'notes': '1ewBoGKJt6UjyOQbsHp6nyTFLISx6cEDS',
    'question-papers': '1cHU-bGcHnVrUG3OJVlW9uiRhPd4636EQ',
    'study-materials': '1VNz29psVOPQWjjJ68SexO55yVRZ2JRxW'
  },
  'mathematics': {
    'notes': '1SJTcFUerAU0M5G-OPiYcRQs_X84mHR4E',
    'question-papers': '1rNV1aP08Pm_gDhciH6GNoz9EmuwgVUf4',
    'study-materials': '1zwu0qNesW6JBZynir6ND7XBKsIzh4yS_'
  },
  'physics': {
    'notes': '1Plkwv1Lvs-lM66H_k2BcWoCAeHUmfUTY',
    'question-papers': '1LT176eIeIL51ViB8mTYUPROmG2ytR7Xe',
    'study-materials': '1Fjo9lmPEQz8EZYSJfGtCj2TqM_hgaaEg'
  },
  'chemistry': {
    'notes': '1MX22IwQKwW19MEepV4GSEyf3J0c20DvD',
    'question-papers': '1QcA0PCEXouQ2hnLpTqgulNJPGltC8hlp',
    'study-materials': '1qd-t0jak6sZ5RwgCybmWacm2xtVyMrgk'
  },
  'botany': {
    'notes': '1Dfwsv-VJT6f6D0jHUEREjNAE1Nl_UvmC',
    'question-papers': '1H5cuRW0FaKGkYK16ehRkrOu0tF44xww-',
    'study-materials': '1qOgpLkAmTJgZxWHEeZwNIypEuXxE85Pn'
  },
  'zoology': {
    'notes': '1Zyu4PDiDp286v881VijBMuJ6h6jrd1ZH',
    'question-papers': '1VnpQQj77oxQYrAeMxeg0i4CVrN3hiDhb',
    'study-materials': '1pUf3i2dCxe3VfB1C6cQ7YZkJflYpPE4v'
  },
};

export async function GET(request: Request) {
  try {
    // Get department and section from query parameters
    const { searchParams } = new URL(request.url);
    const department = searchParams.get('department');
    const section = searchParams.get('section');

    if (!department || !section) {
      return NextResponse.json({ error: 'Department and section are required' }, { status: 400 });
    }

    // Get folder ID from the map
    const folderId = folderIdMap[department]?.[section];


    // Initialize Google Drive API
    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(process.env.GOOGLE_CREDENTIALS || '{}'),
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    });

    const authClient = await auth.getClient();
    const drive = google.drive({ version: 'v3', auth: authClient });

    // Fetch files from the specified folder
    const response = await drive.files.list({
      q:  `'${folderId}' in parents and trashed = false`,
      fields: 'files(id, name, webViewLink, mimeType)',
    });

    // Process files to remove extensions
    const processedFiles = response.data.files.map(file => {
      let name = file.name;
      if (name) {
        name = name.replace(/\.[^/.]+$/, "");
      }
      return {
        ...file,
        displayName: name || file.name
      };
    });

    return NextResponse.json({ files: processedFiles });
  } catch (error) {
    console.error('Error fetching files from Google Drive:', error);
    return NextResponse.json(
      { error: 'Failed to fetch files from Google Drive', details: error.message },
      { status: 500 }
    );
  }
}