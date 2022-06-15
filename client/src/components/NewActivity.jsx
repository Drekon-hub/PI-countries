import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {postActivities, getCountries} from '../actions/index';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';