#!/bin/sh
UUID=${UUID:-'1550db84-c6bd-4991-9b4f-3bceeeb0f3b5'}
sed -i "s#UUID#$UUID#g" ./config-vmess.json
