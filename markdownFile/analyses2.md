## Analysis on Relationship between House price and Earning
From our assumption, income of people in a specific city should have direct relation to the house price in the city. To test our hypothesis, we performed a scatter plot as shown below.

<D3: plot-1 folder in Github>

This figure shows relationship between average house price of each city and earning of people in the city. The size of points indicate the standard deviation of house prices in the city.

This plot obviously indicates that house prices and earning of people in each city have a strong direct relationship between them. We found that where people have high income in a city, the house price in that city is also high. On the other hand, if people have low income, the average house price in the city is low as well. This is totally reasonable and also can be supported by four works.

## Analysis on different types of Crime of each city in California
After we can see the very strong relationship in the figure above, we have an assumption that maybe crime rate should be useful somehow to estimate house price in particular areas. Therefore, we show more visualizations to see the relationship if it does exist.

<Plotly: https://plot.ly/~korn515253/16.embed>

The figure above shows the crime rates of each city in a specific area in California. Each box plot means a type of crime rate. We found that murder and rape crime rates are really low in these particular cities. Moreover, property crime rates which should be directly related to our work are the most sparse comparing to other types of crime. We need to consider in deeper detail about the interesting crime rate such as this property crime, all crime, violent crime.
## Analysis on Relationship between House price and Crime rate
<D3: plot-2 folder in Github>

This figure is scatter plot showing relation between average house price in each city and their crime rate in the city. The size of points are standard deviation of house prices in the city.

From the paper  `["Crime and Residential Choice: A Neighborhood Level Analysis of the Impact of Crime on Housing Prices" Tita, George E.; Petras, Tricia L.; Greenbaum, Robert T. Journal of Quantitative Criminology, December 2006, Volume 22, Issue 4, pp. 299-317.]`, they stated that all crimes are not helpful for house price estimation. Our graph supports their statement. Even we zoom in the figure by discard the data that have average house price more than 450,000, we still cannot see any obvious relation between all crime rate and house price as shown in the figure below.

<D3: plot-6 folder in Github>

Anyway, this paper said that the most useful crime statistic is violent crime so we change from using all crime rate to use only violent crime instead.

<D3: plot-5 folder in Github>

This plot apparently shows that there is a strong relationship between average house price and violent crime in the city. Note that this plot also discard the average house price more than 450,000 as mentioned in the previous paragraph.

In addition to the previous fact in the paper, they also mentioned about property crime that its rate is quite similar to the all crime rate so that we still cannot find the relationship of it and house price. The figure below shows that this fact is true for our dataset as well.

<D3: plot-7 folder in Github>

Nonetheless, this leads to an interesting question - why there is no relation between house price and property crime? This type of crime should play an important role in order to predict house price. In the paper we mentioned so far, they explain more about this. They found that the property crime is unstable varying on high-mid-low income areas. In particular, the property crime reduces house price in high-income area, but increases the price in middle-income area. In our work, we consider overall property crime of each city, thus, we cannot see an obvious relation between the house price and property crime. However, if we combine earning and property house price together, it should our classifier to perform a better result.
