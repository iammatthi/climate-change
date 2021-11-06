import gspread
from oauth2client.service_account import ServiceAccountCredentials

def main():
    # import .csv data to Google spreadsheet 'Swiss_collected_spreadsheet'
    scope = ["https://spreadsheets.google.com/feeds", 'https://www.googleapis.com/auth/spreadsheets',
             "https://www.googleapis.com/auth/drive.file", "https://www.googleapis.com/auth/drive"]
    path_to_csv = 'C:\Swiss Selected\swiss_selected.csv'
    credentials = ServiceAccountCredentials.from_json_keyfile_name('credentials.json', scope)
    client = gspread.authorize(credentials)
    spreadsheet = client.open('Swiss_collected_spreadsheet')

    with open(path_to_csv, 'r') as file_obj:
        content = file_obj.read()
        client.import_csv(spreadsheet.id, data=content)


# Main
if __name__ == '__main__':
    main()