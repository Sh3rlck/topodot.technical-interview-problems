import React, { createContext, useContext, useState } from 'react';
import type { AuthContextType, User } from '../types/auth.types';
import { MOCK_USERS } from '../data/mockUsers';


/*
* Create AuthContext that:
*   - Safely stores user data in session storage
*   - Provides login and logout functions, current user and whether the user is authenticated or not
*
* Implement said context for the entire application to use.
*
* */