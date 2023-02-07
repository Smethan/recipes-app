FROM mongo

COPY recipe.json /recipe.json
CMD mongoimport --host mongodb --db recipes --collection recipes --type json --file /recipe.json --jsonArray