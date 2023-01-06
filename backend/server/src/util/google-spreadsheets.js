const { google } = require('googleapis')

const credentials = JSON.parse(process.env.GOOGLE_PRIVATE_KEY)

// console.log(credentials.client_email, credentials.private_key)
const client = new google.auth.JWT(
  credentials.client_email,
  null,
  credentials.private_key,
  ['https://www.googleapis.com/auth/spreadsheets'],
)

// POST route for posting data to Google Sheets
const addToSpreadsheet = async (sheetData, sheetId, sheetName) => {
  // console.log(credentials)
  try {
    // Set up a new client for interacting with the Google Sheets API

    // Authenticate and initialize the Sheets API
    await client.authorize()
    const sheets = google.sheets({ version: 'v4', auth: client })

    // Append the data to the sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: sheetName, // Update this to the name of your sheet
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      resource: {
        values: [Object.values(sheetData)],
      },
    })

    // Send a success response
    return {
      status: 200,
      message: 'Data successfully posted to Google Sheets.',
      response: response.data,
    }
  } catch (error) {
    console.error(error)

    return {
      status: 200,
      message: 'An error occurred while posting the data.',
      error: error,
    }
  }
}

module.exports = { addToSpreadsheet }
