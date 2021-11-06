# Script to download automatically the relevant kaggle datasets for the hackathon II project, Climate Change:

# Libraries:
# requires the pip install kaggle if not present on the local machine.

# requires an account token from a kaggle user stored in “C:\Users\<username>\.kaggle\” as a .json
from kaggle.api.kaggle_api_extended import KaggleApi
import zipfile
import os


if __name__ == '__main__':

    # Kaggle API authentication:
    api: KaggleApi = KaggleApi()
    api.authenticate()

    # Datasets to download:
    temperature: str = "berkeleyearth/climate-change-earth-surface-temperature-data"
    co2: str = "ucsandiego/carbon-dioxide"

    # Download the archives:
    api.dataset_download_files(temperature)
    api.dataset_download_files(co2)

    # Unzip the CSV files:
    with zipfile.ZipFile("carbon-dioxide.zip", 'r') as zip_ref:
        zip_ref.extractall()
    os.rename('archive.csv', 'co2_dataset.csv')

    with zipfile.ZipFile("climate-change-earth-surface-temperature-data.zip", 'r') as zip_ref:
        zip_ref.extractall()

    # Remove the datasets we are not going to use:
    os.unlink('GlobalLandTemperaturesByCity.csv')
    os.unlink('GlobalLandTemperaturesByMajorCity.csv')
    os.unlink('GlobalLandTemperaturesByState.csv')
    os.unlink('carbon-dioxide.zip')
    os.unlink('climate-change-earth-surface-temperature-data.zip')
