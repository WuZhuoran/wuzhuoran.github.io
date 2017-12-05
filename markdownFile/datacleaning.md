# Data Cleaning

## The major issue in our raw data is each data set contains a large number of missing values. Meanwhile, we can see there are many examples with suspicious values which might be impossible.

## We conducted a series of evaluations to identify the problems and create specific methods to handle the issues.

## Generally, we applied three different data cleaning strategies:

## 1) If an example or an attribute contains too many missing values, we simply delete it.

## 2) For examples or attributes containing only a few missing or noisy values, we apply data imputation to replace the values while not changing important statistical features.

## 3) For other cases where examples are not marked as outliers after testing, we simply leave the values unchanged
