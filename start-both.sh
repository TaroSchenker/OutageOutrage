#!/bin/bash
PROJECT_PATH="$(pwd)"

osascript -e "tell app \"Terminal\" to do script \"cd '${PROJECT_PATH}/client' && npm run dev\""
osascript -e "tell app \"Terminal\" to do script \"cd '${PROJECT_PATH}/server' && npm run start\""
