Binary Search in The Dictionary

Overview

This repository contains a JavaScript implementation designed to tackle the task of performing a binary search on "The Dictionary" (Den Danske Ordbog). The Dictionary, as of January 2024, comprises over 666,081 inflected forms of Danish words, including homographs and various spellings that convey identical meanings. The provided solution focuses on efficiently searching for a specific inflected form within the dictionary to retrieve associated data, such as the base form of the word, part of speech, and a unique identifier.

Task Description

The primary objective was to develop a program capable of:

Loading a data file containing Danish words and their associated data.
Transforming this data into objects and storing them in an array.
Implementing a binary search algorithm to search within this array.
Comparing the performance of the binary search algorithm against JavaScript's built-in .find method.
Ensuring the code adheres to principles of clean code and individual work.
The data file, not included in this repository due to its size (approximately 25 MB), contains entries separated by tabs, with each entry detailing:

The inflected form of a word.
The base form of the word.
A homograph number (if applicable).
The part of speech.
A unique identifier.
Implementation

Data Loading and Transformation
The script initiates by fetching the data file, followed by processing the text to create an object for each line in the file. These objects are then stored in a global array, ready for searching.

Binary Search
A binary search function was implemented, utilizing a comparison function to determine the relative position of the search term to the dictionary entries. This method allows for efficient searching within the large dataset.

Performance Measurement
The performance of the binary search function is measured and compared to the .find method provided by JavaScript. This comparison aims to highlight the efficiency gains achieved through the binary search algorithm.

Usage

To use this project:

Download the DDO full-form data file from the DSL Open License page, ensuring compliance with the terms.
Extract and place the data file within a data directory in your project folder.
Ensure the script points to the correct location of the data file.
Run the script to perform searches and measure performance.

