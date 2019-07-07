# foodease-new
FoodEase is a project that started out from QueenHacks of 2019! Initially, we decided to do an IoT project consisting of cameras detecting
food in refrigerators. These pictures would then identify the ingredients in the fridge, and compile a list of 
ingredients. From there, it would pull potential ingredients.

Previously, we used GCP API and Edamame API. However, for now (as of July 7, 2019), I am working on base functionality, and using tests.
I am also currently using MongoDB Atlas to track the collections easier, and also Postman for mock requests.

Note: 

If you want to pull from this repo, a few things:
1. In config of the API folder, you will need to fill in your MongoDB URI, which you can get from MongoDB Atlas.
2. Yeah, set up your mongoDB Atlas.

July 7 2019 First Commit:
API Routes for the grocery list is setup. Users can now get, post and update ingredients to their ingredient list. 
Next step: Make a mock list of a recipes ingredients, which will return the missing ingredients and the number of missing ingredients. Basically, compare two arrays, and find which ones are different.

One thing I am considering right now is that the compare will be in O(n^2). However, this is likely okay, since usually ingredient lists are not insanely long.

July 7 2019 Second Commit:
I was right! I couldn't find a compare other than O(n^2) because I'm not too familiar with JavaScript data structures. 
It would be a lot better if I could use a Hash Table, which I know how to implement in Python. I'll have to read into it
and refactor another time.
