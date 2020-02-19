#!/usr/bin/env bash
# Run As `./SRI_Hash_Generator.sh https://path/to-asset`

hash=$(curl -s "$1" | openssl dgst -sha384 -binary | openssl base64 -A)
printf "Hash Is:\nsha384-%s" "$hash"
