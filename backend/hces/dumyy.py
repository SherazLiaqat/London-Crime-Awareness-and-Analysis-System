import pandas as pd
import requests

# Replace with your OpenCage Data API key
API_KEY = "c34761e795b247a8b91b04a2374918b9"  

# Define a function for reverse geocoding using OpenCage Data API
def reverse_geocode(lat, lng):
    base_url = "https://api.opencagedata.com/geocode/v1/json"
    params = {
        "q": f"{lat},{lng}",
        "key": API_KEY,
    }

    response = requests.get(base_url, params=params)
    data = response.json()

    if data["status"]["code"] == 200:
        results = data["results"]
        if results:
            components = results[0]["components"]
            postal_code = components.get("postcode")
            return postal_code

    return None

# Load your CSV file into a DataFrame
file_path = "C:/Users/shera/OneDrive\Desktop/crimeestimationsystem/London2010-23dataset.csv"  # Replace with your file path
df = pd.read_csv(file_path)

# Iterate through the rows and perform reverse geocoding
postal_codes = []
for index, row in df.iterrows():
    lat = row["Latitude"]
    lng = row["Longitude"]
    postal_code = reverse_geocode(lat, lng)
    postal_codes.append(postal_code)

# Add the postal codes to your DataFrame
df["Postal Code"] = postal_codes

# Print the first few rows of the DataFrame to verify the results
print(df.head())

# Save the updated DataFrame to a new CSV file
output_file = "output_data.csv"  # Replace with your desired output file path
df.to_csv(output_file, index=False)
