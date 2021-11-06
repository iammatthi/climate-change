"""
Data Scraper for Climate Change:
"""
# Libraries:
from __future__ import print_function
import time
import datetime
from urllib.request import urlopen
from pathlib import Path
import glob
import pandas as pd

# Globals:
# Number of attempts to download data
MAX_ATTEMPTS: int = 10
# Data hosting service:
SERVICE: str = "https://mesonet.agron.iastate.edu/cgi-bin/request/asos.py?"


# Functions:
def download_data(uri: str):
    """Fetch the data from the IEM
    The IEM download service has some protections in place to keep the number
    of inbound requests in check.  This function implements an exponential
    backoff to keep individual downloads from giving errors.
    Args:
      uri (string): URL to fetch
    Returns:
      string data
    """
    attempt: int = 0
    while attempt < MAX_ATTEMPTS:
        try:
            data: str = urlopen(uri, timeout=300).read().decode("utf-8")
            if data is not None and not data.startswith("ERROR"):
                return data
        except Exception as exp:
            print("download_data(%s) failed with %s" % (uri, exp))
            time.sleep(5)
        attempt += 1

    print("Exhausted attempts to download, returning empty data")
    return ""


def main():
    """Main method"""
    # timestamps in UTC to request data for
    start_date: datetime = datetime.datetime(2020, 1, 1)
    end_date: datetime = datetime.datetime.today()

    # provide the fields to download, in our case the temperature in celsius, the relative humidity, and the visibility.
    service: str = SERVICE + "data=tmpc&data=relh&data=vsby&tz=Etc/UTC&format=comma&latlon=yes&"

    # add start and end dates:
    service += start_date.strftime("year1=%Y&month1=%m&day1=%d&")
    service += end_date.strftime("year2=%Y&month2=%m&day2=%d&")

    # Swiss weather station ID's:
    stations = ['LSMA', 'LSZR', 'LSZB', 'LSZC', 'LSMD', 'LSME', 'LSGG', 'LSZG', 'LSGC', 'LSZL', 'LSZA', 'LSMM', 'LSMP',
                'LSZS', 'LSGS', 'LSMS', 'LSMC', 'LSMV', 'LSMK', 'LSZH']

    # download data and save the data, minus the debugging information, for each stations:
    for station in stations:
        uri: str = "%s&station=%s" % (service, station)
        print("Downloading: %s" % (station,))
        data = download_data(uri)
        out_file = "%s.txt" % station
        out = open(out_file, "w")
        # Don't save Debug information:
        out.write(data[243:])
        out.close()

    # setup the merge of the text files:
    extension = 'txt'
    all_filenames = [i for i in glob.glob('*.{}'.format(extension))]
    # combine all files in the list
    combined_csv = pd.concat([pd.read_csv(f) for f in all_filenames])
    # export to csv
    combined_csv.to_csv("swiss_selected.csv", index=False)

    # clean up
    for p in Path(".").glob("LS*.txt"):
        p.unlink()


# Main
if __name__ == '__main__':
    main()
