import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import LocalMallIcon from '@mui/icons-material/LocalMall'

const CartWidget = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Tooltip title="IoT enabled devices">
                <Button variant="contained" startIcon={<LocalMallIcon />} color="success">
                    Numbers
                </Button>
            </Tooltip>
        </Box>
    )
}

export default CartWidget