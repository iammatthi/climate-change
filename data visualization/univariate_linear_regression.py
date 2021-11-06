# Libraries:
import pandas as pd
import matplotlib.pyplot as plt
from sklearn import linear_model
from typing import List


if __name__ == '__main__':
    df: pd.DataFrame = pd.read_csv('supervised.csv')

    # data for the regression:
    X: pd.Series = df.values[:, 0]
    # target:
    y: pd.Series = df.values[:, 1]

    samples: int = len(X)

    # Data visualization:
    plt.scatter(X, y, color='red', marker='+')
    plt.grid()
    plt.title('Scatter-plot of median temperatures')
    plt.show()

    # train the model:
    lin_reg = linear_model.LinearRegression()
    lin_reg.fit(X.reshape(-1, 1), y)

    Theta_0 = lin_reg.intercept_
    Theta_1 = lin_reg.coef_[0]

    # show results:
    print(f'Theta_0 = {Theta_0}')
    print(f'Theta_1 = {Theta_1}')
    # we get the same values displayed in tableau.

    # predict the next 10 years:
    future_10: List[int] = list(range(2022, 2033))

    predictions: List = []
    for year in future_10:
        predictions.append((year, Theta_0 + Theta_1 * year))

    print(predictions)