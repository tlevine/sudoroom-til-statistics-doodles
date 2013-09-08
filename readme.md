---
title: Today I learned about statistics through doodles
---
Here are some videos from the
[time I doodled about statistics]()
in [Sudoroom]().

## What is a statistic?
A statistic is a number that describes a lot of other numbers;
by reducing many numbers into one number, we make it easier to
fit all of these numbers in our brain.

## Geometric computations
In this session, I geometrically computed four statistics
about the relationships between different variables.

1. Covariance
2. Variance
3. Correlation
4. Least-squares regression coefficients

Each computation is for the simplest version of the statistic,
that is the univariate or bivariate version, and the population
statistic rather than the sample statistic.

## Why we care about these statistics
The videos show the computations of these statistics, but they
don't really explain why we use these statistics. So I'll explain
that here.

### Linear relationships
A lot of relationships can be seen as linear relationships.
One such relationship is that between a person's height and weight;
taller people are heavier, and shorter people are lighter.

A relationship that isn't very linear might be 
[public transit ridership and time]().
As time progresses, weekly public transit ridership stays the same.
However, it does change a lot within the week, with high ridership
on the weekdays, low ridership on Saturdays and lower ridership on Sundays.

These four statistics are ways of describing the strength of a
relationship, and they only make sense to use with linear relationships.

### Covariance
Covariance is a basic measure of how strong the relationship.
Is just a number that is zero if there is no relationship, really
big if the two variables tend to move in the same direction,
and really negative if the two variables tend to move in opposite
directions.

For example, the covariance between weight and height is a very positive
number, like maybe 9001, because taller people are heavier.

The covariance between number of times a person has eaten popcorn and her
shoe size is probably around zero, because I doubt that these are very
strongly related.

And the covariance between cholesterol level and lifespan is probably
a very negative number, like maybe -1337, because people with more
cholesterol tend to live less long.

We tend not to use the covariance very directly in practice because
it's hard to compare covariances directly to each other. The reasons
are explained in the video.

### Variance
Variance is a measure of how spread out one variable is. It is a
positive number that gets big when the variables are more spread out.

Let's say that two people are cutting wood to build a house. They cut
10 pieces of wood each, and each piece of wood is supposed to be exactly
10 feet long.

One person is very careful when he measures the wood, so his pieces come
out perfectly. They're not exactly 10 feet long because that's impossible,
but they're not off by more than a hair. The variance of the lengths of
his pieces of wood is very close to zero, like maybe 3.

The other person is drunk and stoned and thus not very careful, so the
lengths of his pieces are all over the place. They're still around 10
feet long on average, but some of them are 8 feet long, and others are
11 feet long. The variance of the lengths of this person's pieces is
very high; maybe it's 200.

We talk about variances a lot when we are estimating the average of a
variable. When we estimate an average, we want to know how precise our
estimate is, and the variance tells us that.

### Correlation
Think of the correlation as a standardized version of the covariance.
The correlation is a number between -1 and 1. Like for the covariance,
positive correlations mean that the variables move together, and negative
correlations mean that the variables move oppositely.

Like the covariance, the correlation tells us how strongly two variables
are related. The practical difference is that we can compare different
covariances to each other.

We can compute the correlation between two variables based on the covariance
between the two variables and the respective variances of the two variables.

### Least-squares regression
Maybe you want to be able to predict someone's height based on her weight.
Regression is one way of doing this.

To predict height from weight, we can use a simple regression that would
tell us two statistics (numbers). In order to calculate these numbers, we
first need to measure the heights and weights of a bunch of people.

Once we calculate these two numbers, we have a formula for predicting height;
you give the formula a weight, and it will give you back a predicted height.
