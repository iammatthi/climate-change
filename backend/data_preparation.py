# File to convert the time series on swiss temperature to a supervised learning problem:
# Libraries:
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

if __name__ == '__main__':

    # import the scraped dataset:
    df: pd.DataFrame = pd.read_csv('swiss_selected.csv', low_memory=False)
    # convert the dates to pandas datetime:
    df['dates'] = pd.to_datetime(df.valid)
    # deal with custom missing values:
    df['tmpc'] = df['tmpc'].replace('M', np.NaN)
    # convert temperature from object to float:
    df["tmpc"] = df["tmpc"].astype(float)
    # drop the unnecessary features for the regression problem:
    df = df.drop(
        columns=['station', 'valid', 'lon','lat', 'relh', 'vsby'])
    # group by year and use medians for the temperature to manage sensor noise:
    df = df.groupby(df['dates'].dt.year)['tmpc'].agg(['median'])
    print(len(df))
    df.to_csv("supervised.csv")
    
    
