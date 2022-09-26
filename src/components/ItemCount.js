import * as React from 'react'
import AddIcon from '@mui/icons-material/Add'
import { IconButton } from '@mui/material'
import RemoveIcon from '@mui/icons-material/Remove'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const ItemCount = ({stock, initial, onAdd}) => {
    const [counter, setCounter] = React.useState(initial)

    const handlePlusCounter = () => {
        setCounter(counter + 1)
    }

    const handleSubCounter = () => {
        setCounter(counter - 1)
    }

    return (
        <>
            <Box component="span" sx={{ p: 2, bgcolor: '#EDEEFF' }}>
                <IconButton onClick={handlePlusCounter} disabled={counter >= stock ? true : false}>
                    <AddIcon sx={{color: 'black', px: 1}}/>
                </IconButton>
                <Box component="span" sx={{ p: 3 }}>
                {counter}
                </Box>
                <IconButton onClick={handleSubCounter} disabled={counter > 0 ? false : true}>
                    <RemoveIcon sx={{color: 'black', px: 1}}/>
                </IconButton>
                <Button variant="contained" onClick={e => counter!==0 && onAdd(counter)}>Add to Cart</Button>
            </Box>  
        </>
    )
}

export default ItemCount