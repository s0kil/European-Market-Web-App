#!/usr/bin/env bash

CLIENT_JS_FILE=$(cd __sapper__/export/ && find client -maxdepth 1 -iname "client.*.js" || exit)

HEADERS="
/
 Link: </$CLIENT_JS_FILE>; rel=preload; as=script; crossorigin
"

# https://unix.stackexchange.com/a/274709
echo "$HEADERS" | awk NF >__sapper__/export/_headers

echo "Generated Server Push Headers For: $CLIENT_JS_FILE"
