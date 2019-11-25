import React from 'react';
import {getStory } from "./get-story"

export const dialog = (id) => <h1>{getStory(id)}</h1>;
