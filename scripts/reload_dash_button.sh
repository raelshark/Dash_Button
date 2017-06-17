#!/bin/bash

echo unloading Dash Button script
sudo launchctl unload /Library/LaunchDaemons/com.notthegolfer.dash-button.plist

echo loading Dash Button script
sudo launchctl load -w /Library/LaunchDaemons/com.notthegolfer.dash-button.plist
