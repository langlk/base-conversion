# _Base Conversion_

#### _Epicodus Practice in JavaScript, August 18, 2017_

#### By Kelsey Langlois and Luciano Oliveira

## Description

_Site that performs Binary to Decimal (and reverse) conversion. Other conversions still in progress._

## Setup/Installation Requirements

* Clone this repository
* Open index.html in web browser

## Specifications

#### Decimal to Binary

* Binary convert returns an empty string when given an empty input.
  * Example Input: ""
  * Example Output: ""
* Binary convert should return 0 when the input is 0.
  * Example Input: 0
  * Example Output: 0
* Binary convert should return 1 when the input is 1.
  * Example Input: 1
  * Example Output: 1
* Binary convert should return _1 + (input / (2^n)) % 2 + ... + input % 2_ for inputs greater than 1.
  * Example Input: 2
  * Example Output: 10
  * Example Input: 4
  * Example Output: 100
  * Example Input: 5
  * Example Output: 101
  * Example Input: 357
  * Example Output: 101100101

#### Binary to Decimal

* Decimal convert should return an empty string when given an empty input.
  * Example Input: ""
  * Example Output: ""
* Decimal convert should return 0 when the input is 0.
  * Example Input: 0
  * Example Output: 0
* Decimal convert should return 1 when input is 1.
  * Example Input: 1
  * Example Output: 1
* Decimal convert should return result of _prior value * 2 + next bit_, where prior value starts at 0, and next bit starts at leftmost bit, for numbers greater than 1.
  * Example Input: 10
  * Example Output: 2
  * Example Input: 101
  * Example Output: 5
  * Example Input: 101100101
  * Example Output: 357
* Decimal convert should return "Error" when input is not a binary string.
  * Example Input: 12
  * Example Output: "Error"
  
## Support and contact details

Please contact Kelsey Langlois with questions, comments, or issues.

## Technologies Used

* JavaScript
* HTML
* CSS

### License

*This software is licensed under the MIT license.*

Copyright (c) 2017 **_Kelsey Langlois and Luciano Oliveira_**
