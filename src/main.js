import './style.css'

import { updateDateTime, toggleShow } from './scripts/utilityFunctions.js'
import { portfolioTextRead } from './scripts/portfolioTextRead.js'

// Update clock value every second
setInterval(updateDateTime, 1000);

portfolioTextRead();





