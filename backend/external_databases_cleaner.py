# Script to clean the external databases and store the needed tables in an Oracle SQL database:
# Libraries:
import pandas as pd


if __name__ == '__main__':
    # co2 data prep:
    df_c: pd.DataFrame = pd.read_csv('co2_dataset.csv')
    df_c = df_c.drop(columns=['Month', 'Decimal Date', 'Carbon Dioxide Fit (ppm)', 'Seasonally Adjusted CO2 Fit (ppm)'])
    print(df_c.isna().sum())
    # most of the null values are at the end of the dataset or in 1958, where we have sufficient data,
    # we decided to drop them:
    df_c = df_c.dropna()
    df_c.to_csv('co2_selected.csv')

    # global temperatures data prep:
    df_t: pd.DataFrame = pd.read_csv('GlobalTemperatures.csv')
    df_t = df_t.drop(columns=['LandMaxTemperature', 'LandMaxTemperatureUncertainty', 'LandMinTemperature',
                              'LandMinTemperatureUncertainty', 'LandAndOceanAverageTemperature',
                              'LandAndOceanAverageTemperatureUncertainty'])
    # in this case we are keeping the nan values and letting tableau deal with the issue.
    df_t.to_csv('global_temperatures_selected.csv')
    
    # global temperatures by country data prep:
    df_tc: pd.DataFrame = pd.read_csv('GlobalTemperatures.csv')
    df_tc.rename(columns={'dt': 'date'}, inplace=True)
    # in this case we are keeping the nan values and letting tableau deal with the issue.
    df_tc.to_csv('global_temperatures_by_country_selected.csv')
