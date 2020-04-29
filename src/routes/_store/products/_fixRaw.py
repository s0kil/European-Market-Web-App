#!/usr/bin/env python3

import json

with open("_raw.json") as file:
    json_data = []

    file_content = file.readlines()

    for line in file_content:
        json_data.append(json.loads(line))

    print(f"Total Of {len(json_data)} Products")

    with open("_products.json", "w", encoding="utf-8") as productsJson:
        json.dump(json_data, productsJson, ensure_ascii=False, indent=0)
